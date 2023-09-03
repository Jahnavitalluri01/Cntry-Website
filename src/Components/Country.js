import React from "react";
import { Card } from "react-bootstrap";
const Country=({id,name,img,capital})=>{
    return(
        <div>
          <Card style={{width:"12rem",margin:"auto",height:"15rem"}}>
            <Card.Img variant="top" src={img} style={{height:"50%"}}>
            </Card.Img>
            <Card.Body>
                <Card.Title>
                    {name}
                </Card.Title>
                <Card.Text>Capital: <i>{capital}</i></Card.Text>
            </Card.Body>
          </Card>
          </div>
    )
}
export default Country;