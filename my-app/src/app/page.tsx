'use client'
import style1 from '@/styles/app.module.css';
import style2 from '@/styles/list_product.module.css';
import Link from "next/link";
import { useEffect } from 'react';
import useSWR from 'swr';
export default function Home() {
  const fetcher = (url:string) => fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    "http://localhost:8000/blogs",
    fetcher, {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false
    }
  );
  if (data) {
    console.log(">>>check data:", data);
  } else {
    console.log("Dữ liệu đang được tải...");
  }

//sử dụng useEffect để lấy dữ liệu từ server
  // useEffect(()=>{
  //    const fetchData = async() =>{
  //     const res=await fetch("http://localhost:8000/blogs");
  //     const data=await  res.json();
  //     console.log(">>>check res:",data);
  //    }
  //    fetchData();
  // },[])
  return (
    // Bọc tất cả các <div> trong một <div> chính
    <div>
      <div>{data?.length}</div>
      <Link href={"/admin/list_product"}><p className={style1["red"]}>Hiển thị sản phẩm</p> </Link>
      <div>
        <a href="/admin/list_product"><input type="button" value="Hiển thị sản phẩm" /></a>
      </div>
      <div>
        <a href="/admin/edit_product"><input className={style2['red']} type="button" value="Sửa sản phẩm" /></a>
      </div>
      <div>
        <Link href={"/admin/add_product"}>Thêm sản phẩm</Link>
      </div>
    </div>
  );
}
