import React from 'react';
import { UncontrolledCollapse, CardBody, Card, Button, ListGroupItem } from 'reactstrap';

const first_style = {
  width: "40px",
  background: "black",
  height: "40px",
  display: "block",
  float: "left",
  textAlign: "center",
  borderRadius: "50%",
  padding: "7px",
  marginRight: "10px",
  color:"white"
}


const TodoItem = ({todo, delet, mark}) => (
<ListGroupItem style={{background:"fff"}}>
    <div className="row"  >
      <div className="col-md-7">
        <div className="first_chrac" style={first_style}>
            {todo.title.charAt(0).toUpperCase()}
        </div>
     
      <span color="primary" className="d-flex" id={`toggler${todo.id}`} style={{ marginBottom: '1rem' }}>
      {todo.isComplete ? <p><strike>{todo.title}</strike></p>: <p>{todo.title}</p> }
      </span>
      <UncontrolledCollapse toggler={`#toggler${todo.id}`}>
        <Card>
          <CardBody>
          {todo.description}
          </CardBody>
        </Card>
      </UncontrolledCollapse>
      </div>    
      <div className="col-md-5">
      <div className="ml-auto">
      <Button color="success" onClick={() => mark(todo.duration)} style={{marginRight:'20px', width: '40px', height: '40px'}}> {todo.duration}</Button>
        <Button color="primary" onClick={() => mark(todo.id)} style={{width: '100px'}} className="mr-auto">Add Done</Button>
        <Button color="danger" onClick={() => delet(todo.id)}  style= {{marginRight:'10px',width: '100px'}}className="mr-auto">Delete </Button>
      </div>
      </div>
    </div>
    </ListGroupItem>   
);

export default TodoItem;