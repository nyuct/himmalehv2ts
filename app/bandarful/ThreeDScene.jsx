"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";

export default function KumaonNandi() {
  const mountRef = useRef(null);

  useEffect(() => {
    let renderer, scene, camera, controls, object;

    const initScene = () => {
      scene = new THREE.Scene();

      const desktopCamera = new THREE.PerspectiveCamera(
        85,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      const mobileCamera = new THREE.PerspectiveCamera(
        85,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera = window.innerWidth >= 768 ? desktopCamera : mobileCamera;
      camera.position.set(0, 0.02, 0.56);
      camera.scale.set(1, 1.1, 1.7);

      renderer = new THREE.WebGLRenderer({
        alpha: true,
        logarithmicDepthBuffer: true,
      });
      renderer.shadowMap.enabled = true;
      renderer.setSize(window.innerWidth, window.innerHeight);
      mountRef.current.appendChild(renderer.domElement);

      controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.25;
      controls.screenSpacePanning = false;
      controls.enabled = false;
      controls.enableZoom = false;

      // addLights();
      loadHDRI();
      loadModel();

      animate();
      addEventListeners();
    };

    const addLights = () => {
      const directionalLight = new THREE.DirectionalLight(0xffffff, 2.8);
      directionalLight.position.set(-5, 5, 5);
      directionalLight.castShadow = true;
      scene.add(directionalLight);

      const ambientLight = new THREE.AmbientLight(0xffffff, 1.25);
      scene.add(ambientLight);
    };

    const loadHDRI = () => {
      const rgbLoader = new RGBELoader();
      rgbLoader.load(
        "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/2k/epping_forest_01_2k.hdr",
        (texture) => {
          texture.mapping = THREE.EquirectangularReflectionMapping;
          scene.background = texture;
          scene.environment = texture;
        }
      );
    };

    const loadModel = () => {
      const loader = new GLTFLoader();
      loader.load("/3d/bandarful.glb", (gltf) => {
        object = gltf.scene;
        object.scale.set(0.5, 0.5, 0.5);
        scene.add(object);
        object.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.castShadow = true;
          }
        });
      });
    };

    const animate = () => {
      const renderLoop = () => {
        if (object) {
          object.rotation.y += 0.005;
          object.position.y = -0.26;
        }
        controls.update();
        renderer.render(scene, camera);
        requestAnimationFrame(renderLoop);
      };
      renderLoop();
    };

    const addEventListeners = () => {
      const onResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };

      const onMouseMove = (e) => {
        if (window.innerWidth >= 1026) {
          const centerX = window.innerWidth * 0.9;
          const centerY = window.innerHeight * 1.2;
          scene.rotation.x = (((e.clientY - centerY) / centerY) * centerY) / 2000;
          scene.rotation.z = (((e.clientX - centerX) / centerX) * centerX) / centerX;
        }
      };

      const onDeviceOrientation = (event) => {
        if (window.innerWidth <= 1024) {
          const { beta, gamma } = event;
          scene.rotation.x = THREE.MathUtils.degToRad(beta * 1.2);
          scene.rotation.y = THREE.MathUtils.degToRad(gamma * 1.2);
        }
      };

      window.addEventListener("resize", onResize);
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("deviceorientation", onDeviceOrientation, true);

      return () => {
        window.removeEventListener("resize", onResize);
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("deviceorientation", onDeviceOrientation);
      };
    };

    initScene();

    // Cleanup on unmount
    return () => {
      if (renderer) {
        renderer.dispose();
        mountRef.current?.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      id="container3D"
      style={{ width: "100%", height: "100vh" }}
    ></div>
  );
}
