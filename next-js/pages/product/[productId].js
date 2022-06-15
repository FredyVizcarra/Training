import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

const ProductItem = () => {
    const [product, setProduct] = useState();
    const { query: { id } } = useRouter();

    useEffect(() => {
        if (id) {
            window
                .fetch(`/api/avo/${id}`)
                .then((res) => res.json())
                .then((data) => setProduct(data))
        }
    }, [id])

    return (
        <section>
            <h1>Página producto: {product?.name} </h1>
        </section>
    )
}

export default ProductItem;