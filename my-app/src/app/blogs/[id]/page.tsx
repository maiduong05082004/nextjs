'use client'
import { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
const ViewDetailBlog=({params}:{params:{id:string}})=>{
    useEffect(()=>{
        
    })

    return (
        <Card>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="../blogs">Go Back Blogs</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default ViewDetailBlog;