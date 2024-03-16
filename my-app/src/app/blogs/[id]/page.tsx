const ViewDetailBlog=({params}:{params:{id:string}})=>{
    console.log("check param:",params.id);
    return (
        <div>
            blog detail {params.id}
        </div>
    )
}
export default ViewDetailBlog;