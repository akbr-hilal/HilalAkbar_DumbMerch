import React from 'react'
import {Container} from 'react-bootstrap'
import NavAdmin from '../components/NavAdmin'


function AdminPage() {
  return (
    <div>
        <NavAdmin />
        <Container className="pt-4">
            <h2 className='fw-bold text-orange text-center'>Dashbord</h2>
        </Container>
    </div>
  )
}

export default AdminPage