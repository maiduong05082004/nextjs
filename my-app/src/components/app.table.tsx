'use client'
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import CreateModal from './create.modal';
import { useState } from 'react';
import UpdateModal from './update.model';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { Bounce } from 'react-toastify';
import { mutate } from 'swr';
interface Iprops {
    blogs: Iblog[]
}
const handleDeleteBlog=($id:number)=>{
    if(confirm("Bạn có muốn xóa blog này không")){
      fetch(`http://localhost:8000/blogs/${$id}`, {
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        method: "DELETE"
        
      }).then(res => res.json())
        .then(res => {
          if (res) {
            toast.success('🦄 Xóa blog thành công!', {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              transition: Bounce,
              }); 
            mutate("http://localhost:8000/blogs");
          }
        });
    }
  }
const AppTable = (props: Iprops) => {
    const { blogs } = props;
    const [blog,setBlog] = useState<Iblog|null>(null);
    const [showModalCreate,setShowModalCreate]=useState<boolean>(false);
    const [showModalUpdate,setShowModalUpdate]=useState<boolean>(false);
    return (
        <>
        <div className='mb-3' style={{display:"flex",justifyContent:"space-between"}}>
            <h1>Table Blogs</h1>
            <Button variant='secondary' onClick={()=>setShowModalCreate(true)}>Add New</Button>
        </div>
        <Table responsive="sm">
            <thead>
                <tr>
                    <th>No</th>
                    <th>Title</th>
                    <th>Author</th>
                    {/* <th>Content</th> */}
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {blogs.map(item => {
                    return (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.author}</td>
                            {/* <td>{blog.content}</td> */}
                            <td className='col-md-3'>
                                <Link href={`/blogs/${item.id}`} className='btn btn-primary'>View</Link>
                                <Button variant="primary" className='mx-3' onClick={()=>{setBlog(item) ; setShowModalUpdate(true);}}>Edit</Button>
                                <Button variant="danger" onClick={()=>handleDeleteBlog(item.id)}>Delete</Button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
        <CreateModal
        showModalCreate={showModalCreate}
        setShowModalCreate={setShowModalCreate}
        />
        <UpdateModal
        showModalUpdate={showModalUpdate}
        setShowModalUpdate={setShowModalUpdate}
        blog={blog}
        setBlog={setBlog}
        />
        </>
    );
}

export default AppTable;