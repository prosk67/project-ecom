//@ts-nocheck

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import ProductCard from "./ProductCard";

const Featured = () => {
  const products = [
    {
      id: "32653157-7a3e-4d1d-acf3-01421b156f25",
      name: "Philips SHP9500 HiFi",
      
      images:
      
        [
          {
            url: "https://gearsforears.com/cdn/shop/products/61JcYeMnkzL._AC_SL1335_5000x.jpg?v=1604584816",

          }
        ]
      ,
      
      price: 2000,
      category:{
                  name: "Headphones",
                },
      
    },
    {
      id: "097e71b0-066e-4660-b867-4975c38dfb02",
      name: "Audeze LCD-2 Classic Planar ",
      
      images:
      
        [
          {
            url: "https://gearsforears.com/cdn/shop/products/3_32543172-30bb-4c41-b8ff-869a5fc47055_5000x.jpg?v=1619511883",

          }
        ]
      ,
      
      price: 2100,
      category:{
        name: "Headphones",
      },
    },
    {
      id: "b574f030-4041-419f-9d02-a31fc9483fe4",
      name: "Audio Phonic TRITON-55",
      
      images:
      
        [
          {
            url: "https://gearsforears.com/cdn/shop/files/1_8c746ad1-7de9-4294-84f8-16710fcfff10_5000x.png?v=1728285325",

          }
        ]
      ,
      
      price: 5000,
      category:{
        name: "Speakers",
      },
    },
    {
      id: "9dceabe6-df1f-4e83-98d4-2bb6aa83cfbb",
      name: "Wooden Headphone Stand",
      
      images:
      
        [
          {
            url: "https://gearsforears.com/cdn/shop/products/84a68474-c2d4-4a02-bee2-3515507bf072_5000x.jpg?v=1599365089",

          }
        ]
      ,
      
      price: 1500,
      category:{
        name: "Accessories",
      },
    },
    {
      id: "ba1030d0-e404-48df-80c0-1d6d71530f9d",
      name: "Etymotic Deluxe Zipper Case",
      
      images:
      
        [
          {
            url: "https://gearsforears.com/cdn/shop/products/case_5000x.jpg?v=1668796389",

          }
        ]
      ,
      
      price: 800,
      category:{
        name: "Accessories",
      },
    },
    {
      id: "33197732-a008-4ceb-bac5-7598d7aa10fc",
      name: "Audio Phonic Full Range ",
      
      images:
      
        [
          {
            url: "https://gearsforears.com/cdn/shop/files/1_4bd7fe3a-7a6f-488c-a868-24b0508e4b13_5000x.png?v=1728378052",

          }
        ]
      ,
      
      price: 4670,
      category:{
        name: "Speakers",
      },
    },
    {
      id: "bd1d80e3-592f-4737-9676-f3d7b375ba81",
      name: "Dekoni Earpads",
      
      images:
      
        [
          {
            url: "https://gearsforears.com/cdn/shop/products/porta-pro-1b-scaled_5000x.jpg?v=1681381156",

          }
        ]
      ,
      
      price: 400,
      category:{
        name: "Accessories",
      },
    },
    // More products...
  ];

  return (
    // 50% on small screens and 33% on larger screens.
    <div className="mt-10 w-full flex flex-col items-center">
      <h1 className="w-[70vw] text-5xl font-semibold text-left">Featured</h1>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-[70vw] py-8"
      >
        <CarouselContent>
          {products.map((product) => (
            <CarouselItem
              key={product?.id}
              className="md:basis-1/2 lg:basis-1/4"
            >
              <div className="p-1">
                <ProductCard product ={product}/>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Featured;

// {
//   products.map((product) => (
//     <div key={product.id} className="group relative">
//       <img
//         alt={product.imageAlt}
//         src={product.imageSrc}
//         className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
//       />
//       <div className="mt-4 flex justify-between">
//         <div>
//           <h3 className="text-sm text-gray-700">
//             <a href={product.href}>
//               <span aria-hidden="true" className="absolute inset-0" />
//               {product.name}
//             </a>
//           </h3>
//           <p className="mt-1 text-sm text-gray-500">{product.color}</p>
//         </div>
//         <p className="text-sm font-medium text-gray-900">{product.price}</p>
//       </div>
//     </div>
//   ));
// }
