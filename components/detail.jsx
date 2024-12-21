import React from "react";
import { Button, Rating } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function ProductDetail({ data, randomRating, onAddToCart }) {
  return (
    <article className="w-full md:w-5/12 *:my-5 text-center px-5 md:text-start border">
      <h2 className="font-bold text-2xl md:text-5xl my-2">${data.price}</h2>
      <h2 className="font-bold text-lg md:text-2xl"> {data.name}!</h2>
      <h3>{data.desc}</h3>
      <Rating
        name={`rating-${data.id}`}
        value={randomRating}
        readOnly
        className="w-full flex justify-start"
      />


      <button
        onClick={onAddToCart}
        className="m-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        <ShoppingCartIcon />
        Add to Basket
      </button>
    </article>
  );
}
