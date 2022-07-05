import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function ProductCard({ item }) {
    return (
        <div>
            <div className="col mb-4">
                <Card style={{ width: "16rem" }} className="bg-white shadow">
                    <Card.Img src={item.img} />
                    <Card.Body>
                        <Card.Title>
                            <Link
                                to="/detailproduct"
                                className="fw-bold text-decoration-none text-orange-shop"
                            >
                                {" "}
                                {item.title}
                            </Link>
                        </Card.Title>
                        <Card.Text>
                            IDR. {item.price}
                            <p>Ready: {item.qty}</p>
                        </Card.Text>
                        <button className="btn btn-success">Buy Now</button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

export default ProductCard;
