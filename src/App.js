import React from "react";
import HeaderRow from "./components/HeaderRow";
import TrRow from "./components/TrRow";

function App() {

    const [ids, setIds] = React.useState([10,15,72,84,93]);

    const allowDrop = (ev) => {
        console.log(`allowDrop ${ev.target.id}`);
        ev.preventDefault();
    }

    const drag = (ev, draggedFromId) => {
        console.log(`drag ${ev.target.id}, draggedFromId = ${draggedFromId}`);
        ev.dataTransfer.setData("draggedFromId", draggedFromId);
    }

    const drop = (ev, droppedToId) => {
        ev.preventDefault();
        let draggedFromId = parseInt(ev.dataTransfer.getData("draggedFromId"));
        console.log(`drop: draggedFromId = ${draggedFromId}, drop droppedToId = ${droppedToId}`);

        setIds(ids => {
            let curIds = [...ids];
            let draggedFromIdIndex = curIds.findIndex( id => id === draggedFromId );
            let droppedToIdIndex = curIds.findIndex( id => id === droppedToId );

            let withoutDragged,lowSlice, highSlice, updatedIds;

            if (draggedFromIdIndex === droppedToIdIndex) {
                updatedIds = curIds;
            }
            else if (draggedFromIdIndex < droppedToIdIndex) {
                lowSlice = curIds.slice(0,droppedToIdIndex + 1);
                withoutDragged = lowSlice.filter((id, index) => {
                    return id !== draggedFromId;
                });
                highSlice = curIds.slice(droppedToIdIndex+1);
                updatedIds = [...withoutDragged, draggedFromId, ...highSlice];
            }
            else if (draggedFromIdIndex > droppedToIdIndex) {
                lowSlice = curIds.slice(0,droppedToIdIndex );
                highSlice = curIds.slice(droppedToIdIndex);
                withoutDragged = highSlice.filter((id, index) => {
                    return id !== draggedFromId;
                });
                updatedIds = [...lowSlice, draggedFromId, ...withoutDragged];
            }
            return updatedIds;
        });
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
