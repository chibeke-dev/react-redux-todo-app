import React from 'react'
import {addTodo } from '../../store/actions/TodoAction';
import { Button, ButtonGroup} from 'reactstrap';
import {connect } from 'react-redux';
import Modals from '../modal/Modal';
import TodoLists from './Todos';
import Toolbar from '../modal/Toolbar';


const Add = (props) =>{
    let {addTodo} = props;
    return (
         <>
       <div className="col-lg-40 m-auto">
             <Toolbar style={{marginBottom:'20px', width: '100%'}}/>
             </div>
      <div className ="row">
      <div className="col-md-7 m-auto"> 
      <Modals style={{ marginTop:'5px', marginLeft:'56px' }}/> 
       <TodoLists/>
      </div>
      </div>
      </>
 
    )
}

export default connect(null, {addTodo})(Add);