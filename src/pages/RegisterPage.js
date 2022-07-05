import React, { useState, useEffect } from "react";
import { Container, Form, Col, Row, FloatingLabel } from "react-bootstrap";
import Logo from "../assets/Logo.png";
import NavGuest from "../components/NavGuest";

const RegisterPage = () => {
    document.title = "Register | DumbMerch";

    const initialValue = {
        fullname: "",
        email: "",
        password: "",
    };

    const [formValue, setFormValue] = useState(initialValue);
    const [formErr, setFormErr] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormValue({
            ...formValue,
            [name]: value,
        });
    };

    const submitHandler = e => {
        e.preventDefault();
        setFormErr(validate(formValue));
        setIsSubmit(true);
        console.log(formValue);
    };

    useEffect(() => {
        if (Object.keys(formErr).length === 0 && isSubmit) {
        }
    });

    const validate = value => {
        const err = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!value.fullname) {
            err.fullname = "Fullname is Required!";
        }
        if (!value.email) {
            err.email = "Email is Required!";
        } else if (!regex.test(value.email)) {
            err.email = "This is not a valid email format!";
        }
        if (!value.password) {
            err.password = "Password is Required!";
        } else if (value.password.length < 4) {
            err.password = "Password must be more than 4 chracter";
        }
        return err;
    };

    return (
        <>
            <NavGuest />
            <div className="bg-dark formguestpage">
                <Container bg="dark" variant="dark">
                    <Row className="pt-5 d-flex">
                        {/* Message Error */}

                        {/* Register Page */}
                        <Col className="py-3 text-white">
                            <div>
                                <div className="d-flex justify-content-center justify-content-lg-start">
                                    <img
                                        src={Logo}
                                        alt="Logo DumbMerch"
                                        height={160}
                                        className="mb-4"
                                    />
                                </div>
                                <div className="text-center text-lg-start">
                                    <h1 className="fw-bold">
                                        Easy, Fast, and Reliable
                                    </h1>
                                    <p className="">
                                        Go shopping for mechandise, just go to
                                        DumbMerch shooping, the biggest
                                        merchandise in <b>Indonesia</b>
                                    </p>
                                </div>
                            </div>
                        </Col>

                        {/* Form Register */}
                        <Col className="d-flex justify-content-center align-items-center py-5">
                            <Form
                                className="bg-form rounded Form p-4"
                                onSubmit={submitHandler}
                            >
                                <h3 className="fw-bold mb-3 text-white">
                                    Register
                                </h3>
                                <div className="mb-3">
                                    <FloatingLabel label="Full Name">
                                        <Form.Control
                                            type="text"
                                            placeholder="Your Full Name"
                                            name="fullname"
                                            id="fullname"
                                            value={formValue.fullname}
                                            onChange={handleChange}
                                        />
                                    </FloatingLabel>
                                    <p className="text-danger">
                                        {formErr.fullname}
                                    </p>
                                </div>
                                <div className="mb-3">
                                    <FloatingLabel label="Email">
                                        <Form.Control
                                            type="email"
                                            placeholder="name@example.com"
                                            name="email"
                                            id="email"
                                            value={formValue.email}
                                            onChange={handleChange}
                                        />
                                    </FloatingLabel>
                                    <p className="text-danger">
                                        {formErr.email}
                                    </p>
                                </div>
                                <div className="mb-5">
                                    <FloatingLabel label="Password">
                                        <Form.Control
                                            type="password"
                                            placeholder="Password"
                                            name="password"
                                            id="password"
                                            value={formValue.password}
                                            onChange={handleChange}
                                        />
                                    </FloatingLabel>
                                    <p className="text-danger">
                                        {formErr.password}
                                    </p>
                                </div>
                                <input
                                    type="submit"
                                    className="btn col-12 btn-orange-submit"
                                    value="Register"
                                />
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default RegisterPage;
