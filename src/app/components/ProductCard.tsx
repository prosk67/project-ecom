//@ts-nocheck
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@headlessui/react";
import React from "react";

const ProductCard = ({ product }) => {
  return (
    <Card>
      <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
        <img
          alt={product.id}
          src={product.images[0].url}
          className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-60"
        />
        <div className="w-full mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              
                {/* <span aria-hidden="true" className="absolute inset-0" /> */}
              <a href=""> 
                {product.name}
              </a>
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              {product.category?.name ? product.category.name : "No category"}
            </p>
          </div>
          <p className="text-sm font-medium text-gray-900">BDT {parseInt(product.price)}</p>
        </div>
        <div className="mt-4 w-full">
          <Button className="w-full bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
            Add to cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
