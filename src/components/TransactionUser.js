import React from "react";

function TransactionUser({item}) {
    return (
        <div className="d-flex p-3 shadow rounded mb-4">
            <div>
                <img
                    src={item.img}
                    alt={item.title}
                    className="card-img-top"
                    style={{ width: "8rem" }}
                />
            </div>
            <div className="ms-3">
                <h3 className="fw-bold text-orange my-0">{item.title}</h3>
                <small className="text-orange">ID Transaction: {item.idTransaction}</small>
                <p className="mb-0 mt-2">Tanggal: {item.date} </p>
                <p>Price: Rp. {item.price} </p>
                <p className="fw-bold mt-5 mb-0">Sub Total: Rp. {item.subTotal} </p>
            </div>
        </div>
    );
}

export default TransactionUser;
