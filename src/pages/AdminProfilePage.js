import React from 'react'
import NavAdmin from '../components/NavAdmin'
import { Col, Container, Row } from "react-bootstrap";
import {account} from '../data/Data'
import ProfileUser from '../components/ProfileUser'

function AdminProfile() {
  return (
    <div>
        <NavAdmin />
        <Container className="pt-4">
            <Row>
                <Col>
                    <h2 className="text-orange fw-semibold">Profile</h2>
                    {account.filter((item) => item.role === "admin").map((item) => (
                        <ProfileUser item={item} key={item.id}/>
                    ))}
                </Col>
                <Col>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default AdminProfile