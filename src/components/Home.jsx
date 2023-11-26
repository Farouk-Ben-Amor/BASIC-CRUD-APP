
import React , { Fragment } from 'react'
import { Button,Table } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import Employees from './Employee'
import { Link , useNavigate } from 'react-router-dom'

function Home() {

  let history = useNavigate()

  const handleEdit = (id,name,age ) => {
    localStorage.setItem('Name',name)
    localStorage.setItem('Id',id)
    localStorage.setItem('Age',age)
  }

  const handleDelete = (id) => {
    var index = Employees.map(function(e){
      return e.id
    }).indexOf(id);
    Employees.splice(index,1)
    // const updatedEmp = Employees.filter((employee)=> employee.id !== id )
    history('/')
  }

  return (
    <Fragment>
         <div style={{margin:"10rem"}} >
          <h1 style={{textAlign : "center" , padding : "20px" }} >BASIC CRUD APP</h1>
            <Table striped bordered hover size="sm" >
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                  {
                    Employees && Employees.length > 0 ? ( 
                    Employees.map((item)=> {
                      return (
                        <tr key={item.id}>
                          <td > {item.Name} </td>
                          <td> {item.Age} </td>
                          <td>
                            <Link to={`/edit`} >
                             <Button onClick={()=> handleEdit(item.id,item.Name,item.Age)} >EDIT</Button> 
                             &nbsp;
                             </Link>
                             <Button onClick={()=> handleDelete( item.id )} >DELETE</Button> 
                          </td>
                        </tr>
                      )
                    } )
                    ) : ( 
                    "No data abailable"
                    )
                  }

                </tbody>
            </Table>
            <br/>
            <Link to="/create" className='d-grid gap-2' >

            <Button size="lg" >CREATE</Button>
            </Link>
         </div>
    </Fragment>
  )
}

export default Home