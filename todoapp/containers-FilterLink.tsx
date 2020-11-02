import { setVisibilityFilter } from './actions-index'
import Link from './components-Link'
import {Dispatch} from 'react'
import { VisibilityFilterDispatch } from './types'

const { connect } = require('react-redux');

const mapStateToLinkProps = (
    state : any,
    ownProps : {filter: string}
) => {
    return {
        active:
            ownProps.filter ===
            state.visibilityFilter
    };
};

const  mapDispatchToLinkProps = (
    dispatch: Dispatch<VisibilityFilterDispatch>,
    ownProps : {filter: string}
) => {
    return {
        onClick: () => {
            dispatch(
                setVisibilityFilter(ownProps.filter)
            );
        }
    };
}

const FilterLink = connect(
    mapStateToLinkProps,
    mapDispatchToLinkProps
)(Link);

export default FilterLink