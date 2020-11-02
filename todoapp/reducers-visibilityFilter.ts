
import {VisibilityFilterDispatch} from './types'

const visibilityFilter = (
    state = 'SHOW_ALL',
    action: VisibilityFilterDispatch
) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter;
        default:
            return state;
    }
};

export default visibilityFilter