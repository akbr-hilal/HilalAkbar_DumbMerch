import { Row, Col } from "react-bootstrap"
import React from 'react'

function ProfileUser({item}) {
  return (
    <>
        <Row>
            <Col>
                <img src={item.img} alt="ProfileIMG" height={250} className="card-img-top rounded" />
            </Col>
            <Col>
                <h5 className="fw-bold text-orange">Name</h5>
                <p>{item.name}</p>

                <h5 className="fw-bold text-orange">Email</h5>
                <p>{item.email}</p>

                <h5 className="fw-bold text-orange">Phone</h5>
                <p>{item.phone}</p>

                <h5 className="fw-bold text-orange">Gender</h5>
                <p>{item.gender}</p>

                <h5 className="fw-bold text-orange">Address</h5>
                <p>{item.address}</p>

            </Col>
        </Row>
    </>
  )
}

export default ProfileUser