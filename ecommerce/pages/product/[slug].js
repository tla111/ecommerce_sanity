import React from 'react';
import { client, urlFor } from '../../lib/client';

const ProductDetails = ({ products, product }) => {

    const { image, name, details, price } = product;

    return (
        <div>
            <div className="product-detail-container">
                <div className="">
                    <div className="image-container">
                        <img src={urlFor(image && image[index])} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export const getStaticPaths = async () => {
    const query = `*[_type == "product"] {
        slug {
            current
        }
    }`
}

export const getStaticProps = async ({ params: { slug } }) => {
    const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
    const productsQuery = '*[_type == "product"]';

    const product = await client.fetch(query);
    const products = await client.fetch([productsQuery]);

    console.log(product);

    return {
        props: { products, product }
    }
}

export default ProductDetails