'use client'
import AppTable from "@/components/app.table";
import useSWR from "swr";

const blogs = () => {
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
  if (isLoading) {
    return <div>Loading...</div>
  }
    return (
        <div>
            <AppTable
                blogs={data?.sort((a: any, b: any) => b.id - a.id) ?? []}
                
            />
        </div>
    )

}
export default blogs;