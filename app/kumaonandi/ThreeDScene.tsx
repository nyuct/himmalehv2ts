"use client";
import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
import { useEffect, useRef } from "react";

export default function KumaonNandi() {
  const mountRef = useRef<HTMLDivElement>(null);
  const initialized = useRef<boolean>(false);
  const isClient = typeof window !== "undefined"; // Check for client-side only

  useEffect(() => {
    if (!isClient || initialized.current) return; // Prevent SSR execution and double mount
    initialized.current = true;

    // Scene setup
    const scene = new THREE.Scene();
    const desktopCamera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
    const mobileCamera = new THREE.PerspectiveCamera(50, 0.5, 1, 1000);
    const camera = window.innerWidth >= 768 ? desktopCamera : mobileCamera;

    const renderer = new THREE.WebGLRenderer({ alpha: true, logarithmicDepthBuffer: true });
    renderer.shadowMap.enabled = true;
    renderer.setSize(window.innerWidth, window.innerHeight);
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    // Cache busting for 304 Not Modified
    const cacheBust = () => {
      const now = Date.now();
      const urlParams = new URLSearchParams(window.location.search);
      urlParams.set("cacheBust", now.toString());
      window.history.replaceState({}, '', `${window.location.pathname}?${urlParams}`);
    };
    cacheBust();

    // Camera setup
    camera.position.z = 400;
    camera.position.y = 0;
    camera.position.x = 0;

    // Load HDRI background
    const rgbLoader = new RGBELoader();
    rgbLoader.load(
      'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/2k/forest_grove_2k.hdr',
      (texture: THREE.Texture) => {
      texture.mapping = THREE.EquirectangularReflectionMapping;
      // scene.background = texture;
      scene.environment = texture;
      }
    );

    // Load 3D Model asynchronously
    let object: THREE.Scene | undefined;
    async function loadModel() {
      const loader = new GLTFLoader();
      const gltf = await loader.loadAsync("/3d/3d-bottle.glb?cacheBust=" + Date.now());
      object = gltf.scene as unknown as THREE.Scene;
      if (object) {
        object.scale.set(50, 50, 50);
        scene.add(object);
        object.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.castShadow = true;
          }
        });
      }
    }
    loadModel().catch(console.error);

    // Controls setup
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.screenSpacePanning = false;
    controls.enableZoom = false;

    // Animation loop
    function animate() {
      requestAnimationFrame(animate);
      if (object) {
        object.rotation.y += 0.005;
        object.position.y = -160;
      }
      controls.update();
      renderer.render(scene, camera);
    }
    animate();

    // Mouse movement effect for desktop
    const mouseMoveHandler = (e: MouseEvent) => {
      if (window.innerWidth >= 1026) {
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        scene.rotation.x = THREE.MathUtils.clamp(((e.clientY - centerY) / centerY) * 0.1, -0.1, 0.1);
        scene.rotation.y = THREE.MathUtils.clamp(((e.clientX - centerX) / centerX) * 0.1, -0.1, 0.1);
      }
    };

    // Device orientation effect for mobile
    const orientationHandler = (event: DeviceOrientationEvent) => {
      if (window.innerWidth <= 1024) {
        const { beta, gamma } = event;
        if (beta !== null) {
          scene.rotation.x = THREE.MathUtils.clamp(THREE.MathUtils.degToRad(beta * 0.8), -0.2, 0.2);
        }
        if (gamma !== null) {
          scene.rotation.y = THREE.MathUtils.clamp(THREE.MathUtils.degToRad(gamma * 0.8), -0.2, 0.2);
        }
      }
    };

    // Event listeners for mouse and device orientation
    window.addEventListener("mousemove", mouseMoveHandler);
    window.addEventListener("deviceorientation", orientationHandler, true);

    // Handle resize events
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", mouseMoveHandler);
      window.removeEventListener("deviceorientation", orientationHandler);
      
      controls.dispose();  // Cleanup controls
      renderer.dispose();  // Cleanup renderer
      scene.children.forEach((child) => {
        if (child instanceof THREE.Mesh) {
          child.geometry.dispose();
          child.material.dispose();
        }
      });
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, [isClient]); // Depend on client-side check

  return (
    <div ref={mountRef} id="container3D" />
  );
}

