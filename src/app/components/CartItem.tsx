//@ts-nocheck
import React from "react";
import Image from "next/image";

const CartItem = ({ item, onIncrease, onDecrease, onRemove }) => {
  return (
    <div className="my-4 rounded-lg bg-white">
      <div className="border border-gray-200 rounded-lg shadow-sm p-4 flex items-center gap-4">
        {/* Product Image */}
        <img
          src={item.product.images[0].url} // Replace with the actual image URL
          alt={item.product.name}
         
          className="rounded-md object-cover h-16 w-16"
        />

        {/* Product Details */}
        <div className="flex-1">
          <h3 className="text-sm font-medium text-gray-900">{item.product.name}</h3>
          <p className="text-sm text-gray-500">BDT {parseInt(item.product.price)}</p>
        </div>

        {/* Quantity Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => onDecrease(item.id)}
            className="px-2 py-1 border border-gray-300 rounded hover:bg-gray-100"
          >
            -
          </button>
          <span className="text-sm font-medium">{item.quantity}</span>
          <button
            onClick={() => onIncrease(item.id)}
            className="px-2 py-1 border border-gray-300 rounded hover:bg-gray-100"
          >
            +
          </button>
        </div>

        {/* Remove Button */}
        <button
          onClick={() => onRemove(item.id)}
          className="text-sm text-red-500 hover:underline"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;