'use client'
import Link from "next/link";
import { Button } from 'react-bootstrap';
import '@/styles/app.module.css';
import DarkExample from "@/components/app.product";
import useSWR from "swr";

const list_product = () =>{
    const fetcher = (url:string) => fetch(url).then((res)=> res.json());
    const {data,error,isLoading} = useSWR(
        "http://localhost:8000/product",
        fetcher,{
            revalidateIfStale:false,
            revalidateOnFocus:false,
            revalidateOnReconnect:false
        }
    );
    if(!data){
        return <div>Loading...</div>
    }
    return (
    <div>
        <div>Hiển thị sản phẩm</div>
        <DarkExample
            products={data}
        />
        <Button variant="primary">Thêm sản phẩm</Button>
        <Link className={'red'} href={"/"}>Quay về trang chủ</Link>
    </div>
    );
}
export default list_product;