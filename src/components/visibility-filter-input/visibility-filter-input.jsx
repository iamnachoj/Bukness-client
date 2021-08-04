import React from 'react';
import {connect} from 'react-redux';

import {Form} from 'react-bootstrap';

import { setFilter } from '../../actions/actions';

//function component Visibility Filter Input
function VisibilityFilterInput(props){
 return (
   <Form.Control onChange={e => props.setFilter(e.target.value)} value={props.VisibilityFilter} placeholder='filter movies'/>
 )
   //it has no state and doesn’t need lifecycle Hooks
}

export default connect(null, {setFilter})(VisibilityFilterInput)