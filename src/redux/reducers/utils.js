const createReducer = (cases) => {
    return ((state, action) => {
        if (cases[action.type]) {
            return cases[action.type](state, action);
        }
    });
}

const updateRowIdsByDND = (ids, draggedFromRowId, droppedToRowId) => {
    let curIds = [...ids];
    let draggedFromIdIndex = curIds.findIndex( id => id === draggedFromRowId );
    let droppedToIdIndex = curIds.findIndex( id => id === droppedToRowId );

    let withoutDragged,lowSlice, highSlice, updatedIds;

    if (draggedFromIdIndex === droppedToIdIndex) {
        updatedIds = curIds;
    }
    else if (draggedFromIdIndex < droppedToIdIndex) {
        lowSlice = curIds.slice(0,droppedToIdIndex + 1);
        withoutDragged = lowSlice.filter((id, index) => {
            return id !== draggedFromRowId;
        });
        highSlice = curIds.slice(droppedToIdIndex+1);
        updatedIds = [...withoutDragged, draggedFromRowId, ...highSlice];
    }
    else if (draggedFromIdIndex > droppedToIdIndex) {
        lowSlice = curIds.slice(0,droppedToIdIndex );
        highSlice = curIds.slice(droppedToIdIndex);
        withoutDragged = highSlice.filter((id, index) => {
            return id !== draggedFromRowId;
        });
        updatedIds = [...lowSlice, draggedFromRowId, ...withoutDragged];
    }
    return updatedIds;
};

export {
    createReducer,
    updateRowIdsByDND
}
