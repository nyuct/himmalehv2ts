import { gsap } from "gsap";

class ImageItem {
  constructor(el) {
    this.DOM = { el };
    this.rect = this.DOM.el.getBoundingClientRect();
  }

  isActive() {
    return this.DOM.el.style.opacity !== "0" || gsap.isTweening(this.DOM.el);
  }

  updateRect() {
    this.rect = this.DOM.el.getBoundingClientRect();
  }
}

export default class ImageTrail {
  constructor({ content }) {
    if (!content) {
      console.error("ImageTrail: Content container is required.");
      return;
    }
    this.DOM = { content };
    this.images = [...content.querySelectorAll(".content__img")].map(img => new ImageItem(img));
    this.imgPosition = 0;
    this.zIndexVal = 1;
    this.threshold = 100;
    this.mousePos = { x: 0, y: 0 };
    this.lastMousePos = { x: 0, y: 0 };
    this.cacheMousePos = { x: 0, y: 0 };

    this.render = this.render.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);

    this.init();
  }

  init() {
    window.addEventListener("mousemove", this.onMouseMove);
    this.render();
  }

  onMouseMove(ev) {
    this.mousePos = { x: ev.clientX, y: ev.clientY };
  }

  getMouseDistance() {
    const dx = this.mousePos.x - this.lastMousePos.x;
    const dy = this.mousePos.y - this.lastMousePos.y;
    return Math.hypot(dx, dy);
  }

  showNextImage() {
    const img = this.images[this.imgPosition];
    gsap.killTweensOf(img.DOM.el);

    gsap
      .timeline()
      .set(img.DOM.el, {
        opacity: 0,
        scale: 1,
        height: img.rect.height,
        zIndex: this.zIndexVal,
        x: this.cacheMousePos.x - img.rect.width / 2,
        y: this.cacheMousePos.y - img.rect.height / 2,
      })
      .to(img.DOM.el, {
        duration: 0.9,
        ease: "expo.out",
        opacity: 1,
        x: this.mousePos.x - img.rect.width / 2,
        y: this.mousePos.y - img.rect.height / 2,
      })
      .to(
        img.DOM.el,
        {
          duration: 1,
          ease: "power1.out",
          opacity: 0,
          height: 0,
        },
        0.4
      )
      .to(
        img.DOM.el,
        {
          duration: 1,
          ease: "quint.out",
          scale: 0.2,
        },
        0.4
      );

    this.zIndexVal++;
    this.imgPosition = (this.imgPosition + 1) % this.images.length;
    this.lastMousePos = { ...this.mousePos };
  }

  render() {
    const distance = this.getMouseDistance();

    this.cacheMousePos.x += (this.mousePos.x - this.cacheMousePos.x) * 0.1;
    this.cacheMousePos.y += (this.mousePos.y - this.cacheMousePos.y) * 0.1;

    if (distance > this.threshold) {
      this.showNextImage();
    }

    requestAnimationFrame(this.render);
  }

  destroy() {
    window.removeEventListener("mousemove", this.onMouseMove);
  }
}
