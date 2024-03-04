'use client'
import Link from "next/link";
import { Button } from 'react-bootstrap';
import '@/styles/app.module.css';
const list_product = () =>{
    return (
    <div>
        <div>Hiển thị sản phẩm</div>
        <Button variant="primary">Thêm sản phẩm</Button>
        <Link className={'red'} href={"/"}>Quay về trang chủ</Link>
    </div>
    );
}
export default list_product;