import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import {connect} from 'react-redux';
import {addTodo} from '../../store/actions/TodoAction'
class Modals extends React.Component {
    state = {
        modal: false,
        title:'',
        description:'',
        duration: 0
      };

  toggle = ()=> {
    this.setState({modal: !this.state.modal });
  }
  changeHandler = e => {
      this.setState({[e.target.name]:e.target.value})
  }
  submitHandle = e => {
        e.preventDefault()
        this.setState({modal: !this.state.modal });
        let id = parseInt(Date.now())
        const todo = {
            title:this.state.title,
            description:this.state.description,
            duration:this.state.duration,
            isComplete:false,
            id:id
        }
        this.props.addTodo(todo)
        this.setState({
          modal:!this.state.modal,
          title:'',
        description:'',
        duration: 0
        })
        
  }

  render() {

    let {title, description, duration}  = this.state
    return (
      <div>
        <Button style={{marginLeft:'56px', marginTop:'20px'}} color="danger" onClick={this.toggle}>Add</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Create new Todo</ModalHeader>
          <ModalBody>
          <Form onSubmit={this.submitHandle}>
            <FormGroup>
            <Label for="title">Title</Label>
            <Input type="text" onChange={this.changeHandler} required value={title} name="title" id="title" placeholder="Todo Title" />
            </FormGroup>
            <FormGroup>
            <Label for="description">Todo Description</Label>
            <Input type="textarea" required onChange={this.changeHandler} value={description} name="description" id="description" placeholder="Todo description" />
            </FormGroup>
            <FormGroup>
							<Label for="duration">Duration in Days</Label>
							<Input type="number" 
								className="form-control" 
								placeholder="Duration" 
								value={duration} name="duration" id="duration"
								onChange={this.changeHandler}/>
						</FormGroup>
            <Button color="primary">Submit</Button>
        </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}


export default connect(null, {addTodo}) (Modals);