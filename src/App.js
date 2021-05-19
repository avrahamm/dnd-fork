import React from "react";
import {useSelector, useDispatch } from "react-redux";

import HeaderRow from "./components/HeaderRow";
import TrRow from "./components/TrRow";
import * as actions from "./redux/actions";

function App() {
    const ids = useSelector( state => state.rows.ids);
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
        <div className="App">

            <HeaderRow id="header"/>

            {
                ids.map( (id, key) => <TrRow key={key}
                     id={id}
                     allowDrop={allowDrop}
                     drag={drag}
                     drop={drop}
                /> )
            }

        </div>
    );
}

export default App;
