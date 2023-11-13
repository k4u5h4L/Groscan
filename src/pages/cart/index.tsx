import CartMain from "~/components/Cart/CartMain";
import Header from "~/components/Header/Header";
import Navbar from "~/components/Navbar/Navbar";

export default function Cart() {
    return (
        <>
            <Header headerName="Cart" showMenu={false} />
            <CartMain />
            <Navbar />
        </>
    );
}
