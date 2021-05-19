import produce from 'immer';

import * as actionTypes from '../constants/action-types';
import * as utils from "./utils";

const initialState = {
    ids: [10,20,30,40,50],
};

const setUpdatedIds = (state,action) => {
    state.ids = utils.updateRowIdsByDND(state.ids,
        action.payload.draggedFromRowId,
        action.payload.droppedToRowId);
}

const cases = {
    [actionTypes.DND_ROW]: setUpdatedIds,
};

export default produce(utils.createReducer(cases), initialState);