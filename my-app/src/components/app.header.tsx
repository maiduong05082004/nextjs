'use client'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link';
function AppHeader() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link href={"/"} className='nav-link'>Trang chủ</Link>
            <Link href={"/admin/list_product"} className='nav-link'>Hiển thị sản phẩm</Link>
            <Link href={"/blogs"} className='nav-link'>Blogs</Link>
            {/*             
            <Nav.Link href="/">Trang chủ</Nav.Link>
            <Nav.Link href="/admin/list_product">Hiển thị sản phẩm</Nav.Link>
            <Nav.Link href="/admin/add_product">Sửa sản phẩm</Nav.Link>
             */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppHeader;