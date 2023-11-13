import CategoryMain from "~/components/Category/CategoryMain";
import FilterMenu from "~/components/Grocery/FilterMenu/FilterMenu";
import Header from "~/components/Header/Header";
import Navbar from "~/components/Navbar/Navbar";

export default function Category() {
    return (
        <>
            <Header headerName="Category" showMenu={false} />
            <CategoryMain />
            <Navbar />
            <FilterMenu />
        </>
    );
}
