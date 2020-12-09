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
      url: "https://tekun.gov.my/1",
    },
    {
      id: 2,
      name: "Skim Pembaiaan Teman Tekun",
      img: "/assets/img/SkimPembaiaanTemanTekun.png",
      url: "https://tekun.gov.my/2",
    },
    {
      id: 3,
      name: "Skim Pembaiaan Program Temannita",
      img: "/assets/img/SkimPembaiaanProgramTemannita.png",
      url: "https://tekun.gov.my/3",
    },
    {
      id: 4,
      name: "Ar-Rahnu Tekun",
      img: "/assets/img/Ar-rahnu.png",
      url: "https://tekun.gov.my/4",
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
        {/* <ionbutton onClick={GoWebTekun}>Baca</ionbutton> */}
      </div>
    );
  });

  function GoWebTekun(e) {
    e.preventDefault();
    alert("tekunwebproduk");
  }

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
