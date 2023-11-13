import GroceryDetailMain from "~/components/GroceryDetail/GroceryDetailMain";
import Header from "~/components/Header/Header";
import Navbar from "~/components/Navbar/Navbar";

export default function GroceryDetail() {
    return (
        <>
            <Header headerName="Detail" showMenu={false} />
            <GroceryDetailMain />
            <Navbar />
        </>
    );
}
