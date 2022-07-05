import React, { useEffect, useState } from "react";
import { Container, Col, Row, Form, FloatingLabel, Alert } from "react-bootstrap";
import Logo from "../assets/Logo.png";
import NavGuest from "../components/NavGuest";
import { Link, useNavigate } from "react-router-dom";



const LoginPage = () => {
    document.title = "Login | DumbMerch";

    const initialValue = {
        email: "",
        password: "",
    };

    const [formValue, setFormValue] = useState(initialValue);
    const [formErr, setFormErr] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const AdminAccount = {
        name: "Alamanda",
        email: "al@mail.com",
        password: "121202",
    }
    const UserAccount = {
        name: "Hilal",
        email: "hilal@mail.com",
        password: "hil1212",
    }

    const navigate = useNavigate()

    const [err, setErr] = useState("");

    const Login = items => {
        console.log(items);

        if (items.email === AdminAccount.email && items.password === AdminAccount.password) {
            console.log("Loggedin by admin");
            setFormValue({
                name: items.name,
                email: items.email
                
            },
            navigate("/dashboard")
            )
        } else if(items.email === UserAccount.email && items.password === UserAccount.password) {
            console.log("Loggedin by user");
            setFormValue({
                name: items.name,
                email: items.email
            },
            navigate("/home"))
        }else {
            console.log("Tidak ada yang sesuai!");
            setErr("No data match!")
        }
    };

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
        Login(formValue);
    };

    useEffect(() => {
        if (Object.keys(formErr).length === 0 && isSubmit) {
        }
    });

    const validate = value => {
        const err = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
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
                <Container>
                    <Row className="pt-5 d-flex">
                        {/* Message Error */}
                        {err !== "" ? (
                            <Alert
                                key="danger"
                                variant="danger"
                                className="p-3"
                            >
                                {err} Please{" "}
                                <Link to="/register"> Register </Link>
                            </Alert>
                        ) : (
                            ""
                        )}

                        {/* Form Page */}
                        <Col className="py-3 text-white d-flex">
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

                        {/* Form Login */}
                        <Col className="d-flex justify-content-center align-items-center py-5">
                            <Form
                                className="bg-form rounded Form p-4"
                                onSubmit={submitHandler}
                            >
                                <h3 className="fw-bold mb-3 text-white">
                                    Login
                                </h3>
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
                                    value="Login"
                                />
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default LoginPage;
