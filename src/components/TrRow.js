import React from "react";

function TrRow(props) {

  return (
      <div id={`div-${props.id}`} className="table-responsive-sm"
           onDrop={(ev) => props.drop(ev,props.id)}
           onDragOver={props.allowDrop}
      >
        <table className="table"
               id={`drag-${props.id}`}
               draggable="true"
               onDragStart={(ev) =>props.drag(ev,props.id)}
        >
          <tbody>
          <tr>
            <th scope="row">{props.id}</th>
            <td>First name {props.id}</td>
            <td>Last name {props.id}</td>
            <td>email @{props.id}</td>
          </tr>
          </tbody>
        </table>
      </div>
  );
}
export default TrRow;
