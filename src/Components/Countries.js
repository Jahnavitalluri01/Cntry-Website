import React, { useEffect, useState } from "react";
import { Container,Row,Col } from "react-bootstrap";
import Country from "./Country";
import axios from "axios"
import "./all.css"
const Countries=()=>{
    // const [countries,setcountries]=useState([{id:"1",name:"India",img:"https://mainfacts.com/media/images/coats_of_arms/er.png"},{id:"2",name:"India",img:"https://mainfacts.com/media/images/coats_of_arms/er.png"},{id:"3",name:"India",img:"https://mainfacts.com/media/images/coats_of_arms/er.png"},
    // {id:"3",name:"India",img:"https://mainfacts.com/media/images/coats_of_arms/er.png"},{id:"3",name:"India",img:"https://mainfacts.com/media/images/coats_of_arms/er.png"},{id:"3",name:"India",img:"https://mainfacts.com/media/images/coats_of_arms/er.png"},{id:"3",name:"India",img:"https://mainfacts.com/media/images/coats_of_arms/er.png"}])
    const [countries,setcountries]=useState([])
    const [loading,setloading]=useState(true);
    const [error,seterror]=useState()
    useEffect(()=>{
        const fetchcountry=async()=>{
            try{
             const cntrydata=await axios.get("https://restcountries.com/v3.1/all");
             console.log(cntrydata.data[0].capital[0]);
            setcountries(cntrydata.data);
            }
            catch(error){
                seterror(error);
                setloading(false);
            }
        }
        fetchcountry();
    },[])
    return(
        <div className="countrywhole">
        <Container className="countrylist">
        <Row className="mx-auto">
            {countries.map((i)=>(
                <Col className="mt-4">
                    <Country id={i.name.common} name={i.name.common} img={i.flags.png} capital={i.capital} />
                </Col>
            ))}
        </Row>
        </Container>
        </div>
    )
}
export default Countries