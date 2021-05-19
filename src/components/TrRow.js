import React from "react";
import {useDispatch} from "react-redux";

import * as actions from "../redux/actions";

function TrRow({id}) {

  const dispatch = useDispatch();

  const allowDrop = (ev) => {
    console.log(`allowDrop ${ev.target.id}`);
    ev.preventDefault();
  }

  const drag = (ev, draggedFromId) => {
    console.log(`drag ${ev.target.id}, draggedFromId = ${draggedFromId}`);
    ev.dataTransfer.setData("draggedFromId", draggedFromId);
  }

  const drop = (ev, droppedToRowId) => {
    ev.preventDefault();
    let draggedFromRowId = parseInt(ev.dataTransfer.getData("draggedFromId"));
    console.log(`drop: draggedFromId = ${draggedFromRowId}, drop droppedToId = ${droppedToRowId}`);
    dispatch(actions.dndRow(draggedFromRowId,droppedToRowId))
  }

  return (
      <div id={`div-${id}`} className="table-responsive-sm"
           onDrop={(ev) => drop(ev,parseInt(id))}
           onDragOver={allowDrop}
      >
        <table className="table"
               id={`drag-${id}`}
               draggable="true"
               onDragStart={(ev) =>drag(ev,parseInt(id))}
        >
          <tbody>
          <tr>
            <th scope="row">{id}</th>
            <td>First name {id}</td>
            <td>Last name {id}</td>
            <td>email{id}@a.com</td>
          </tr>
          </tbody>
        </table>
      </div>
  );
}
export default TrRow;
