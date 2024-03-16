'use client'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { headers } from 'next/headers';
import { mutate } from 'swr';
interface Iprops {
  showModalUpdate: boolean;
  setShowModalUpdate: (value: boolean) => void;
  blog:Iblog|null;
  setBlog:(value:Iblog|null)=>void;
}
function UpdateModal($props: Iprops) {
  
  const { showModalUpdate, setShowModalUpdate,blog,setBlog } = $props;
  const [id,setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [content, setContent] = useState<string>("");
  useEffect(()=>{
  if(blog&&blog.id){
  setId(blog.id);
  setTitle(blog.title);
  setAuthor(blog.author);
  setContent(blog.content);
  }},[blog]);
  const handleCloseModal = () => {
    setTitle("");
    setAuthor("");
    setContent("");
    setBlog(null);
    setShowModalUpdate(false);
  }
  const handleSubmit = () => {
    if (!title) {
      toast.error("Not empty title");
      return;
    }
    if (!author) {
      toast.error("Not empty author");
      return;
    }
    if (!content) {
      toast.error("Not empty content");
      return;
    }
    fetch(`http://localhost:8000/blogs/${id}`, {
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      method: "PUT",
      body: JSON.stringify({ title, author, content })
    }).then(res => res.json())
      .then(res => {
        if (res) {
          toast.warning('Create new blog succed !...');
          handleCloseModal();
          mutate("http://localhost:8000/blogs");
        }
      });
    // toast.success('Create succed !...');
    // console.log("check data form", title, author, content);


    // toast.warn('Warning succed !...');
    // toast.error('Error succed !...');
    // toast.info('Info succed !...');

  }
  return (
    <>
      <Modal
        show={showModalUpdate}
        onHide={() => handleCloseModal()}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Thêm sản phẩm mới</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Author</Form.Label>
              <Form.Control type="text" placeholder="..."
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Content</Form.Label>
              <Form.Control as="textarea" rows={3}
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleCloseModal()}>
            Đóng
          </Button>
          <Button variant="primary" onClick={() => handleSubmit()}>Đã hiểu</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UpdateModal;