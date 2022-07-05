import React from 'react'
import NavUser from '../components/NavUser'
import { Container } from "react-bootstrap";
import {product} from '../data/Data'
import ProductCard from '../components/ProductCard';


function UserPage() {
  return (
    <div>
        <NavUser />
        <Container className="pt-3">
             {/* Search */}
             <div className="d-flex justify-content-center mb-2">
                <input
                    type="text"
                    className="rounded p-2 col-lg-4 col-9"
                    placeholder="Search Product"
                />
                <button className="btn btn-orange ms-3">Search</button>
            </div>

            {/* Category Filter */}
            <div className="mb-4 d-flex justify-content-center">
                <div>
                    <button className="btn btn-orange">All</button>
                </div>
                <div>
                    <button className="btn btn-outline-orange ms-3">
                        Mouse
                    </button>
                </div>
                <div>
                    <button className="btn btn-outline-orange ms-3">
                        Keyboard
                    </button>
                </div>
                <div>
                    <button className="btn btn-outline-orange ms-3">Monitor</button>
                </div>
            </div>
            {/* Product Card */}
            <div className="row row-cols-md-4 row-cols-2 d-md-flex">
                {product.map((item) => (
                    <ProductCard item={item} key={item.id} />
                ))}
            </div>
        </Container>    
    </div>
  )
}

export default UserPage