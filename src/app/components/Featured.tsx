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
      id: 1,
      name: "Basic Tee",
      
      images:
      
        [
          {
            url: "https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg",

          }
        ]
      ,
      
      price: "$35",
      description: "Black",
    },
    {
      id: 2,
      name: "Basic Tee",
      
      images:
      
        [
          {
            url: "https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg",

          }
        ]
      ,
      
      price: "$35",
      description: "Black",
    },
    {
      id: 3,
      name: "Basic Tee",
      
      images:
      
        [
          {
            url: "https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg",

          }
        ]
      ,
      
      price: "$35",
      description: "Black",
    },
    {
      id: 4,
      name: "Basic Tee",
      
      images:
      
        [
          {
            url: "https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg",

          }
        ]
      ,
      
      price: "$35",
      description: "Black",
    },
    {
      id: 5,
      name: "Basic Tee",
      
      images:
      
        [
          {
            url: "https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg",

          }
        ]
      ,
      
      price: "$35",
      description: "Black",
    },,
    {
      id: 6,
      name: "Basic Tee",
      
      images:
      
        [
          {
            url: "https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg",

          }
        ]
      ,
      
      price: "$35",
      description: "Black",
    },
    {
      id: 7,
      name: "Basic Tee",
      
      images:
      
        [
          {
            url: "https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg",

          }
        ]
      ,
      
      price: "$35",
      description: "Black",
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
