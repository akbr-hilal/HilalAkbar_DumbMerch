import React from "react";
import NavAdmin from "../components/NavAdmin";
import { Container, Table } from "react-bootstrap";
import {product} from "../data/Data"
import ListProduct from "../components/ListProduct";

function AdminListProductPage() {
    return (
        <div>
            <NavAdmin />
            <Container className="mt-3">
                <h2 className="fw-bold text-center text-orange mb-2">
                    Your Product List
                </h2>
                <div className="text-end mb-4">
                    <button className="btn btn-success">Add Product</button>
                </div>
                <Table
                    striped
                    bordered
                    size="lg"
                    className="align-middle rounded"
                    responsive="sm"
                >
                    <thead className="bg-product">
                        <tr className="fw-bold">
                            <th className="text-center" width="60px">No ID</th>
                            <th className="text-center">Name Product</th>
                            <th className="text-center">Category</th>
                            <th className="text-center" width="180px">Price</th>
                            <th className="text-center" width="100px">Qty</th>
                            <th className="text-center" width="232px">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {product.map((item) => (
                            <ListProduct item={item} key={item.id} />
                        ))}
                    </tbody>
                </Table>
            </Container>
        </div>
    );
}

export default AdminListProductPage;
