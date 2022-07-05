import React from 'react'
import NavUser from '../components/NavUser'
import { Col, Container, Row } from "react-bootstrap";
import {account} from '../data/Data'
import {transaction} from "../data/Data"
import ProfileUser from '../components/ProfileUser'
import TransactionUser from "../components/TransactionUser"


function UserProfilePage() {
  return (
    <div>
        <NavUser />
        <Container className="pt-4">
            <Row>
                <Col>
                    <h2 className="text-orange fw-semibold">Profile</h2>
                    {account.filter((item) => item.role.user === true).map((item) => (
                        <ProfileUser item={item} key={item.id}/>
                    ))}
                </Col>
                <Col>
                    <h2 className="text-orange fw-semibold">Transaction</h2>
                    {transaction.map((item) => (
                        <TransactionUser item={item} key={item.id} />
                    ))}
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default UserProfilePage