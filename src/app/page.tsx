
import Link from "next/link";
export default function Home() {
  return (
    // Bọc tất cả các <div> trong một <div> chính
    <div>
      <Link href={"/admin/list_product"}>Hiển thị sản phẩm</Link>
      <div>
        <a href="/admin/list_product"><input type="button" value="Hiển thị sản phẩm" /></a>
      </div>
      <div>
        <a href="/admin/edit_product"><input type="button" value="Sửa sản phẩm" /></a>
      </div>
      <div>
        <Link href={"/admin/add_product"}>Thêm sản phẩm</Link>
      </div>
    </div>
  );
}
