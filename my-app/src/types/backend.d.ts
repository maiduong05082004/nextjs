interface Iblog{
    id:number,
    content:string,
    author:string,
    title:string
}
interface IProduct{
    id:number,
    name:string,
    price:number,
    quantily:number
}
interface Iprops{
    blog:Iblog|null;
}