import { DND_ROW } from '../constants/action-types';

const INITIAL_STATE = {
    ids: [10,20,30,40,50],
};

const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case DND_ROW: {
            let updatedIds = updateRowIdsByDND(state.ids,
                action.payload.draggedFromRowId,
                action.payload.droppedToRowId,
            );
            return {...state, ids: updatedIds};
        }

        default: return state;
    }

};

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

export default reducer;