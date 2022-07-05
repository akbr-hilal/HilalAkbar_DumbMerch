import React from "react";
import NavAdmin from "../components/NavAdmin";
import { Container, Table } from "react-bootstrap";
import {category} from "../data/Data"
import ListCategory from "../components/ListCategory";

function AdminListCategoryPage() {
    return (
        <div>
            <NavAdmin />
            <Container className="mt-3">
                <h2 className="fw-bold text-center text-orange mb-2">
                    Your Category List
                </h2>
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
                            <th className="text-center">Name Category</th>
                            <th className="text-center" width="232px">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {category.map((item) => (
                            <ListCategory item={item} key={item.id} />
                        ))}
                    </tbody>
                </Table>
            </Container>
        </div>
    );
}

export default AdminListCategoryPage;
