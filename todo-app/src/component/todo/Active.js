import React from 'react'
import {filterTodo } from '../../store/actions/TodoAction';
import { Button, ButtonGroup} from 'reactstrap';
import {connect } from 'react-redux';
import TodoLists from './Todos';
import Toolbar from '../modal/Toolbar';



const Active = (props) =>{
    let {filterTodo} = props;
    return (
         <>
       <div className="col-lg-40 m-auto">
             <Toolbar style={{marginBottom:'20px', width: '100%'}}/>
             </div>
      <div className ="row">
      <div className="col-md-7 m-auto"> 
      <ButtonGroup style={{marginLeft:'56px', marginTop:'20px'}}>
       <Button color="danger" onClick={() => filterTodo('ACTIVE')} >Active</Button></ButtonGroup>
       <TodoLists/>
      </div>
      </div>
      </>
 
    )
}

export default connect(null, {filterTodo})(Active);