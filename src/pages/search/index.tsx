import Navbar from "~/components/Navbar/Navbar";
import SearchHeader from "~/components/Search/SearchHeader/SearchHeader";
import SearchMain from "~/components/Search/SearchMain";

export default function Search() {
    return (
        <>
            <SearchHeader />
            <SearchMain />
            <Navbar />
        </>
    );
}
