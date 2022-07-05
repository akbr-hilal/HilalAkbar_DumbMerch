import React from 'react'
import UserIMG from "../assets/Profile.jpg"
import AdminIMG from "../assets/Admin.jpg"
import NavAdmin from '../components/NavAdmin'

function AdminChatPage() {
  return (
    <div>
        <NavAdmin />
        <div className="d-flex container bg-chat">
                <div className="sidebarmenu pt-5 px-2 w-25">
                    <div className="row p-3 shadow me-3 rounded mb-3 bg-orange ">
                        <div className="col-auto col-lg-4 d-flex justify-content-center aligm-item-center justify-content-lg-start">
                            <img src={UserIMG} alt="" className="img" />
                        </div>
                        <div className="col px-0 text-white">
                            <h5 className="my-0 fw-bold">Hilal Akbar</h5>
                            <p className="my-0">
                                <small>Hei kak</small>
                            </p>
                        </div>
                    </div>
                    <div className="row p-3 shadow me-3 rounded mb-3">
                        <div className="col-auto col-lg-4 d-flex justify-content-center aligm-item-center justify-content-lg-start">
                            <img src={UserIMG} alt="" className="img" />
                        </div>
                        <div className="col px-0">
                            <h5 className="my-0 fw-bold">Akbar</h5>
                            <p className="my-0">
                                <small>Apakah barang ini ready?</small>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="vr"></div>
                <div className=" ms-4 w-75 chat">
                    <div className="d-flex justify-content-start align-items-end chat mb-3">
                        <img src={UserIMG} alt="" className="img" />
                        <p className="bubblechat ms-3 fw-semibold">
                            {" "}
                            Hello kak
                        </p>
                    </div>
                    <div className="d-flex justify-content-end align-items-end mb-lg-5 mb-3">
                        <p className="bubblechat me-3 fw-semibold">
                            {" "}
                            Hei juga kak
                        </p>
                        <img src={AdminIMG} alt="" className="img" />
                    </div>
                    <div className="input-group mb-3 d-flex align-item-end">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Ketikan Pesan...."
                            aria-label="Ketikan Pesan...."
                            aria-describedby="button-addon2"
                        />
                        <button
                            className="btn btn-pesan"
                            type="button"
                            id="button-addon2"
                        >
                            Kirim Pesan
                        </button>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default AdminChatPage