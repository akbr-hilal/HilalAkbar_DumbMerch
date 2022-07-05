import React from "react";
import BtnList from "./BtnList";

function ListCategory({ item }) {
    return (
        <>
            <tr>
                <td className="text-center">{item.id}</td>
                <td>{item.title}</td>
                <td className="text-center"><BtnList /></td>
            </tr>
        </>
    );
}

export default ListCategory;
