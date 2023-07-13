import { TYPES } from "../actions/CrudActions";

export const crudInitialState = {
    db: null
}

export default function crudReducer(state, action) {
    switch (action.type) {
        case TYPES.CREATE_DATA: {
            return {
                ...state,
                db: [...state.db, action.payload]
            }
        }
        case TYPES.READ_ALL_DATA: {
            return {
                ...state,
                db: action.payload.map((data) => data),
            }
        }
        case TYPES.UPDATE_DATA: {
            return {
                ...state,
                db: [state.db.map((el) => el.id === action.payload.id ? action.payload : el)]
            }
        }
        case TYPES.DELETE_DATA: {
            return {
                ...state,
                db: [state.db.map((el) => el != action.payload)]
            }
        }

        default:
            return state;
    }
}