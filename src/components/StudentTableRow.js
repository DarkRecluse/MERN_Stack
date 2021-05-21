import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import axios from 'axios'

export default class StudentTableRow extends Component {

    deleteStudent = () => {
        axios.delete('http://localhost:4000/students/delete-student/' + this.props.obj._id)
            .then((res) => {
                console.log('Student successfully deleted!');
            }).catch((error) => {
                console.log(error)
            }) 
    }
    render() {
        return (
            <tr>
                <td>{this.props.obj.name}</td>
                <td>{this.props.obj.regisno}</td>
                <td>{this.props.obj.schoolof}</td>
                <td>{this.props.obj.major}</td>
                <td>{this.props.obj.advisor}</td>
                <td>{this.props.obj.address}</td>
                <td>{this.props.obj.phonenumber}</td>
                <td>{this.props.obj.email}</td>
                <td>{this.props.obj.requestfor}</td>
                <td>
                    <Link className="edit-link btn btn-primary"   to={"/edit-student/" + this.props.obj._id}>
                        Edit
                    </Link>
                    <Button onClick={this.deleteStudent} variant="danger">Delete</Button>
                </td>
            </tr>
        )
    }
}
