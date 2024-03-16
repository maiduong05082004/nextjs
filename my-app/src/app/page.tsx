'use client'
import style1 from '@/styles/app.module.css';
import style2 from '@/styles/list_product.module.css';
import Link from "next/link";
import useSWR from 'swr';
import AppTable from  "@/components/app.table";

export default function Home() {
  const fetcher = (url:string) => fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    "http://localhost:8000/blogs",
    fetcher, {
      //revalidateIfStale nếu false SWR sẽ không tự động làm cho có lại dữ liệu nếu nó đã cũ
      revalidateIfStale: false,
      //revalidateOnFocus nếu false thì SWR sẽ không tự động làm cho nó lại dữ liệu khi cửa sổ window hay tab trình duyệt được focus lại
      revalidateOnFocus: false,
      //revalidateOnReconnect nếu false thì sẽ không tự động làm cho có lại dữ liệu khi kết nối mạng được khôi phục
      revalidateOnReconnect: false
    }
  );
  if (!data) {
    return <div>Loading...</div>
  }
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
      <AppTable
      blogs={data?.sort(function(a:any,b:any){
        return b.id-a.id
      })}
      />
    </div>
  );
}
