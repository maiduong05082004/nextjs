'use client'
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import CreateModal from './create.modal';
import { useState } from 'react';
import UpdateModal from './update.model';
interface Iprops {
    blogs: Iblog[]
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
                                <Button>View</Button>
                                <Button variant="primary" className='mx-3' onClick={()=>{setBlog(item) ; setShowModalUpdate(true);}}>Edit</Button>
                                <Button variant="danger" >Edit</Button>
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