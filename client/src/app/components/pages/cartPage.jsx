
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementQ, incrementQ, removeFromCart } from "../../store/cart";
import image from "../../assets/thor.jpg";

export default function Cart() {
    const { cartItems } = useSelector(state => state.cart);
    const dispatch = useDispatch();

    return (
        <div className="container py-5 bg-light">
            <div className="col-md-12">
                <div className="card">
                    <div className="card-body">
                        <table className="table align-middle mb-0 bg-white">
                            <thead className="bg-light">
                                <tr>
                                    <th>Name</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Subtotal</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map(item => (
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
                                            <i
                                                onClick={() => dispatch(decrementQ(item))}
                                                style={{ cursor: "pointer" }}
                                                className="bi bi-dash-circle"></i>
                                            <span className="mx-2">
                                                    {item.quantity}
                                                </span>
                                            <i
                                                onClick={() => dispatch(incrementQ(item))}
                                                style={{ cursor: "pointer" }}
                                                className="bi bi-plus-circle"></i>
                                        </td>
                                        <td>
                                            ${item.price}
                                        </td>
                                        <td>
                                            ${item.price * item.quantity}
                                        </td>
                                        <td>
                                            <i
                                                onClick={() => dispatch(removeFromCart(item))}
                                                style={{ cursor: "pointer" }}
                                                className="bi bi-cart-x text-danger"></i>
                                        </td>
                                    </tr>
                                ))
                            }
                            <tr>
                                <th colSpan={3} className="text-center">
                                    Total
                                </th>
                                <td colSpan={3} className="text-right">
                                        <span className="badge bg-danger rounded-pill">
                                            ${
                                            // eslint-disable-next-line no-return-assign
                                            cartItems.reduce((acc, item) => acc += item.price * item.quantity, 0)
                                        }
                                        </span>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
