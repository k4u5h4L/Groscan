import FilterMenu from "~/components/Grocery/FilterMenu/FilterMenu";
import GroceryMain from "~/components/Grocery/GroceryMain";
import Header from "~/components/Header/Header";
import Navbar from "~/components/Navbar/Navbar";

export default function Grocery() {
    return (
        <>
            <Header headerName="Groceries" showMenu={false} />
            <GroceryMain />
            <Navbar />
            <FilterMenu />
        </>
    );
}
