'use client'
import Link from "next/link";
import { useRouter } from 'next/navigation';


const add_product = () => {
    const router = useRouter();
    const handleBtn = () => {
        alert("Thêm sản phẩm thành công");
        router.push("/");
    }
    return (
        <div>
            <a onClick={() => handleBtn()}>Thêm sản phẩm</a><br />
            <Link href={"/"}>Quay về trang chủ</Link>
        </div>
    )
}
export default add_product;