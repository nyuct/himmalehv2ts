import React from "react";

const Products = [
  {
    id: 1,
    name: "Kumaoui & I",
    mainImg: "kumaoui-front.jpg",
    reavle: "kumaoui-reavle.jpg",
  },
  {
    id: 2,
    name: "Bandarful",
    mainImg: "bandarful-pro-front.webp",
    reavle: "bandarful-pro-reavle.webp",
  },
  {
    id: 3,
    name: "Kumaoui & I Pro",
    mainImg: "himmaleh.jpg",
    reavle: "himmaleh.jpg",
  },
];
const ProductImages = () => {
  return (
    <section className="row ProductImages-containter">
      {Products.map(product => {
        const { id, name, mainImg, reavle } = product;
        return (
          <div
            key={id}
            className="col-lg-4 col-md-6 col-sm-12 ProductImages-item px-3"
          >
            <img
              src={`${process.env.NEXT_PUBLIC_IMG_SRC}${mainImg}`}
              alt={name}
              className="ImageReavles"
            />
            <img
              src={`${process.env.NEXT_PUBLIC_IMG_SRC}${reavle}`}
              alt={name}
              className="ImageReavles-reavle px-3"
            />
          </div>
        );
      })}
    </section>
  );
};

export default ProductImages;
