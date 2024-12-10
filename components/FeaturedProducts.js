import React from 'react'
import { client } from "@/sanity/lib/client";
import { Products_QUERY } from "@/sanity/lib/queries";

const options = { next: { revalidate: 60 } };

async function FeaturedProducts() {

  const products = await client.fetch(Products_QUERY, {}, options);

  return (
    <div>
        <div className="font-sans bg-gray-50 px-4 py-8">
      <div className="mx-auto lg:max-w-6xl md:max-w-4xl">
        <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-12">Top Products</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {
            products.map((product, index)=>{
              return(
                <div key={index} className="bg-white p-3 cursor-pointer shadow-sm rounded-md hover:scale-[1.03] transition-all">
                  <div className="w-full h-[130px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                    <img src="https://readymadeui.com/images/watch1.webp" alt="product1"
                      className="h-full w-5/6 mx-auto block object-contain" />
                  </div>
                  <div className="text-center mt-4">
                    <h3 className="text-sm font-bold text-gray-800">{product.title}</h3>
                    <h4 className="text-base text-blue-600 font-bold mt-2">{product.slug.current}</h4>
                  </div>
                </div>
              )
            })
          }

          

        </div>
      </div>
    </div>

    </div>
  )
}

export default FeaturedProducts