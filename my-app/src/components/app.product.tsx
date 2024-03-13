import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
interface Iprops {
    products: IProduct[]
}
function DarkExample(props: Iprops) {
    const { products } = props;
    console.log("check log product", products);
    return (
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantily</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {products.map(product => {
                    return (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.quantily}</td>
                            <td>
                                <Button>Edit</Button>
                                <Button>Delete</Button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    );
}

export default DarkExample;