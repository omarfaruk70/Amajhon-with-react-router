// import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";

const Products = () => {
    const {products} = useLoaderData();
    // console.log(products);
  

    return (
        <div>
            <h2 className="text-2xl text-center text-blue-800 font-bold">This is all products component</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {
                products?.map(product => <Product key={product.id} product={product}></Product>)
            }
           </div>

        </div>
    );
};

export default Products;