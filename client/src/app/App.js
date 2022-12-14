import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Users from "./layouts/users";
import Login from "./layouts/login";
import Main from "./layouts/main";
import NavBar from "./components/ui/navBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./components/common/protectedRoute";
import LogOut from "./layouts/logOut";
import AppLoader from "./components/ui/hoc/appLoader";
import products from "./layouts/products";
import CartPage from "./components/pages/cartPage";
import Admin from "./layouts/admin";
import Footer from "./components/ui/footer";

function App() {
    return (
        <div>
            <AppLoader>
                <NavBar />
                <Switch>
                    <ProtectedRoute path="/users/:userId?"
                        component={Users}
                    />
                    <Route path="/admin/:create?" component={Admin} />
                    <Route path="/login/:type?" component={Login} />
                    <Route path="/logout" component={LogOut} />
                    <Route path="/cart" component={CartPage} />
                    <Route path="/products/:prodId?/:edit?" exact component={products} />
                    <Route path="/" exact component={Main} />
                    <Redirect to="/" />
                </Switch>
                <Footer/>
            </AppLoader>
            <ToastContainer />
        </div>
    );
}

export default App;
