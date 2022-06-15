import React, { useEffect, useState } from "react";
import { Card, Image } from 'semantic-ui-react'




const Home = () => {
    const [productList, setProductList] = useState([]);




    useEffect(() => {
        window.fetch('/api/avo').then(response => response.json()).then(({ data, length }) => { setProductList(data) })
    }, [])
    return (
        <div className="content">
            {productList.map((product) => (
                <Card className="content_card">
                    <Image src={product.image} wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>{product.name}</Card.Header>
                        <Card.Meta>
                            <span className='date'>{product.price}</span>
                        </Card.Meta>

                    </Card.Content>

                </Card>
            ))}




        </div>
    )
}

export default Home;