import style1 from '@/styles/app.module.css';
import style2 from '@/styles/list_product.module.css';
import Link from "next/link";
export default function Home() {
  return (
    // Bọc tất cả các <div> trong một <div> chính
    <div>
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
