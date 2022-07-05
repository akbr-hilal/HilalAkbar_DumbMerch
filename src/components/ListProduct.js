import React from 'react'
import BtnList from './BtnList'

function ListProduct({item}) {
  return (
    <>
        <tr>
            <td className="text-center">{item.id}</td>
            <td>{item.title}</td>
            <td>{item.category}</td>
            <td>{item.price}</td>
            <td>{item.qty}</td>
            <td className='text-center'><BtnList /></td>
        </tr>
    </>
  )
}

export default ListProduct