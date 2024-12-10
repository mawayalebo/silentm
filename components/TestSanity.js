import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { Products_QUERY } from "@/sanity/lib/queries";

const options = { next: { revalidate: 60 } };

export default async function TestSanity() {
  const products = await client.fetch(Products_QUERY, {}, options);
    console.log(products);
  return (
    <div>
      <h1>Corporate Gifts</h1>
      <ul>
        {products?.map((product, index) => (
          <li key={index}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            {/* {product.tags && <p>Tags: {product.tags.join(', ')}</p>} */}
            {/* {product.images &&
              product.images.map((image, index) => (
                <img
                  key={index}
                  src={urlFor(image).width(400).url()}
                  alt={product.title}
                  style={{ width: '200px' }}
                />
              ))} */}
          </li>
        ))}
      </ul>
    </div>
  );
}
