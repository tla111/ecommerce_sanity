import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { client, urlFor } from '../../lib/client';

const ProductDetails = ({ products, product }) => {

    const { image, name, details, price } = product;
    const [index, setIndex] = useState(0);

    return (
        <div>
            <div className="product-detail-container">
                <div className="">
                    <div className="image-container">
                        <img src={urlFor(image && image[index])} />
                    </div>
                    {/* <div className="small-images-container">
                        {image?.map((item, index) => (
                            <img src={urlFor(item)}
                                className=""
                                onMouseEnter=""
                            />
                        ))}
                    </div> */}
                    <div className="product-details-desc">
                        <h1>{name}</h1>
                        <div className="reviews">
                            <div>
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiOutlineStar />
                            </div>
                            <p>
                                (20)
                            </p>
                        </div>
                        <h4>Details:</h4>
                        <p>{details}</p>
                        <p className="price">${price}</p>
                        <div className="quantity">
                            <h3>Quantity</h3>
                            <p className="quantity-desc">
                                <span
                                    className="minus"
                                    onClick=""
                                >
                                    <AiOutlineMinus />
                                </span>
                                <span
                                    className="num"
                                    onClick=""
                                >
                                    0
                                </span>
                                <span
                                    className="plus"
                                    onClick=""
                                >
                                    <AiOutlinePlus />
                                </span>
                            </p>
                        </div>
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

    const products = await client.fetch(query);

    const paths = products.map((product) => ({
        params: {
            slug: product.slug.current
        }
    }));

    return {
        paths,
        fallback: 'blocking'
    }
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