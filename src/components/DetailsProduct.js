import React from "react";
import { Row, Col } from "react-bootstrap";

function DetailsProduct({item}) {
    return (
        <>
            <Row>
                <Col>
                    <img src={item.img} alt="" />
                </Col>
                <Col>
                    <div>
                        <h3>{item.title}</h3>
                        <p>
                            <small>
                                Stock: <span>{item.qty}</span>
                            </small>
                        </p>
                    </div>
                    <div>
                        {item.description}
                    </div>
                </Col>
            </Row>
        </>
    );
}

export default DetailsProduct;
