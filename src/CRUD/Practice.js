 import { CenterFocusStrong } from '@mui/icons-material'
import { height } from '@mui/system'
import React from 'react'
 import { Card, Button } from 'react-bootstrap'

 
 export default function Practice() {
   return (
    <Card style={{ width: '18rem',justifyContent:'center', alignItems:"center"}}>
    <Card.Img variant="top" src="logo192.png" style={{width:"200px", height:"200px", justifyContent:'center'}} />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
      </Card.Text>
      <Button  variant="primary"> Go somewhere </Button>
    </Card.Body>
  </Card>
   )
 }
 