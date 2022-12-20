import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/products";
import image from "../../assets/thor.jpg";
import { removeFromCart } from "../../store/cart";
import { useHistory } from "react-router";
import ProductCreateForm from "../ui/productCreateForm";

const AdminPage = () => {
    const history = useHistory();
    const productsList = useSelector(getProducts());
    const dispatch = useDispatch();
    const editProduct = (prodId) => {
        console.log(prodId);
        history.push(`products/${prodId}/edit`);
    };
    return (
        <div>
            <div>
                <h3>Products List</h3>
            </div>
            <div className='row my-4'>
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-body">
                            <table className="table align-middle mb-0 bg-white">
                                <thead className="bg-light">
                                <tr>
                                    <th>Name</th>
                                    <th>Category</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                                </thead>
                                <tbody>
                                {productsList.map(item => (
                                    <tr key={item.id}>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <img src={image}
                                                     width={45}
                                                     height={45}
                                                     className="rounded-circle"
                                                     alt={item.name} />
                                                <div className="ms-3">
                                                    <p className="fw-bold mb-1">{item.name}</p>
                                                    <p className="fw-bold mb-">{item.model}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {item.category}
                                        </td>
                                        <td>
                                            {item.quantity}
                                        </td>
                                        <td>
                                            ${item.price}
                                        </td>
                                        <td>
                                            <button className="btn btn-info" onClick={() => editProduct(item._id)}>
                                                <i className="bi bi-pencil-square"></i>
                                            </button>
                                        </td>
                                        <td>
                                            <button className="btn btn-danger" onClick={() => dispatch(removeFromCart(item))}>
                                                <i className="bi bi-x-square"></i>
                                            </button>
                                        </td>
                                    </tr>
                                ))
                                }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <ProductCreateForm/>
            </div>
        </div>
    );
};

export default AdminPage;
