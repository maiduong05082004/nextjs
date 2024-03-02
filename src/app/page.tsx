export default function Home() {
  return (
    // Bọc tất cả các <div> trong một <div> chính
    <div>
      <div>
        <a href="/admin/list_product"><input type="button" value="Hiển thị sản phẩm" /></a>
      </div>
      <div>
        <a href="/admin/edit_product"><input type="button" value="Sửa sản phẩm" /></a>
      </div>
      <div>
        <a href="/admin/add_product"><input type="button" value="Thêm sản phẩm" /></a>
      </div>
    </div>
  );
}
