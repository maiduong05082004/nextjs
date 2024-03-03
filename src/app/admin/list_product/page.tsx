'use client'
import Link from "next/link";
import { Button } from 'react-bootstrap';
import style1 from '@/styles/app.module.css';
import style2 from '@/styles/list_product.module.css';
const list_product = () =>{
    return (
    <div>
        <div>Hiển thị sản phẩm</div>
        <Button variant="primary">Thêm sản phẩm</Button>
        <Link className={style1['red']} href={"/"}>Quay về trang chủ</Link>
    </div>
    );
}
export default list_product;