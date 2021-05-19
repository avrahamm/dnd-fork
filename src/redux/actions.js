import * as actionTypes from "./constants/action-types"

export function dndRow(draggedFromRowId,droppedToRowId) {
    return {
        type: actionTypes.DND_ROW,
        payload: {draggedFromRowId,droppedToRowId}
    };
}