import React from "react";
import NavUser from "../components/NavUser";
import { Container, Row, Col } from "react-bootstrap";

function UserDetailPage() {
    return (
        <div>
            <NavUser />
            <Container className="mt-5">
                <Row>
                    <Col>
                        <img src="" alt="" />
                    </Col>
                    <Col>
                        <div className={"header-product text-orange"}>
                            <h3 className={"fw-bold m-0"}> Mouse </h3>
                            <p>
                                <small>
                                    Stock :{" "}
                                    <span className={"fw-bold"}>500</span>
                                </small>{" "}
                            </p>
                        </div>
                        <div className="description-product">
                            <ul>
                                <li> Wireless Mouse</li>
                                <li> 2.5GHz Wirelss Conectivity</li>
                                <li> Wireless Distance up to 10 M</li>
                                <li> PnP For Windows, MAc, and Linux</li>
                                <li> Up to 12 Months Battery Life</li>
                            </ul>
                            <p className={"my-5 desc"}>
                                Mouse Wireless Alytech AL - Y5D, hadir dengan
                                desain 3 tombol mouse yang ringan dan mudah
                                dibawa. Mouse ini menggunakan frekuensi radio
                                2.4GHz (bekerja hingga jarak 10m) dan fitur
                                sensor canggih optik pelacakan dengan penerima
                                USB yang kecil. Mouse ini didukung oleh 1x
                                baterai AA (hingga 12 bulan hidup baterai).
                                mendukung sistem operasi Windows 7,8, 10 keatas,
                                Mac OS X 10.8 atau yang lebih baru dan sistem
                                operasi Chrome OS.
                            </p>
                        </div>
                        <div className={"d-flex justify-content-center"}>
                            <button className={"btn btn-orange col-5"}>
                                Buy Now
                            </button>
                            <button
                                className={
                                    "btn btn-outline-orange text-orange ms-3 col-5"
                                }
                            >
                                Add Wishlist
                            </button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default UserDetailPage;
