'use client'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Link from 'next/link';
import { useState } from 'react';
interface Iprops {
  showModalCreate: boolean,
  setShowModalCreate: (value: boolean) => void;
}
function CreateModal($props: Iprops) {
  const handleSubmit = () =>{
    console.log("check data form",title,author,content);
  }
  const { showModalCreate, setShowModalCreate } = $props;
  const [title, setTitle ] = useState<string>("");
  const [ author, setAuthor ] = useState<string>("");
  const [content, setContent ] = useState<string>("");
  const handleCloseModal=()=>{
    setTitle("");
    setAuthor("");
    setContent("");
    setShowModalCreate(false);
  }
  return (
    <>
      <Modal
        show={showModalCreate}
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
              value= {title}
              onChange={(e)=>setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Author</Form.Label>
              <Form.Control type="text" placeholder="..." 
              value= {author}
              onChange={(e)=>setAuthor(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Content</Form.Label>
              <Form.Control as="textarea" rows={3} 
              value= {content}
              onChange={(e)=>setContent(e.target.value)}
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

export default CreateModal;