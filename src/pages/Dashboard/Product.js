import React from "react";
import "./Product.css";
import Masonry from "react-masonry-css";

export default function Product() {
  const breakpointColumnsObj = {
    default: 19,
    1100: 1,
    700: 2,
    500: 2,
  };

  var items = [
    {
      id: 1,
      name: "Skim Pembaiaan Tekun Niaga",
      img: "/assets/img/SkimPembaiaanTekunNiaga.png",
    },
    {
      id: 2,
      name: "Skim Pembaiaan Teman Tekun",
      img: "/assets/img/SkimPembaiaanTemanTekun.png",
    },
    {
      id: 3,
      name: "Skim Pembaiaan Program Temannita",
      img: "/assets/img/SkimPembaiaanProgramTemannita.png",
    },
    {
      id: 4,
      name: "Ar-Rahnu Tekun",
      img: "/assets/img/Ar-rahnu.png",
    },
    // {
    //   id: 5,
    //   name: "High Five",
    //   img: "/assets/img/SkimPembaiaanTekunNiaga.png",
    // },
  ];

  // Convert array to JSX items
  items = items.map(function (item) {
    return (
      <div className={`item-${item.id}`} key={item.id}>
        {item.name}
        <br />
        <img src={item.img} alt="" />
      </div>
    );
  });

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="masonry-grid"
      columnClassName="masonry-grid_column"
    >
      {items}
    </Masonry>
  );
}
