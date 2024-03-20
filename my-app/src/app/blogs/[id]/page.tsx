'use client'
import Card from 'react-bootstrap/Card';
import useSWR,{Fetcher} from 'swr';
const ViewDetailBlog=({params}:{params:{id:string}})=>{
    const fetcher: Fetcher<Iblog,string>=(url:string)=>fetch(url).then((res)=>res.json());
    const {data,error,isLoading}=useSWR(
        `http://localhost:8000/blogs/${params.id}`,
        fetcher,{
            revalidateIfStale:false,
            revalidateOnFocus:false,
            revalidateOnReconnect:false
        }
    );
    if(isLoading){
        return <div>Loading...</div>
    }
    return (
        <Card className='mb-5'>
      <Card.Body>
        <Card.Title>Title: {data?.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Author: {data?.author}</Card.Subtitle>
        <Card.Text>
          Content: {data?.content}
        </Card.Text>
        <Card.Link href="../blogs">Go Back Blogs</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default ViewDetailBlog;