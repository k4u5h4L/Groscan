import Header from "~/components/Header/Header";
import HomeMain from "~/components/Home/HomeMain";
import Navbar from "~/components/Navbar/Navbar";
import Sidebar from "~/components/Sidebar/Sidebar";

export default function Home() {
    return (
        <>
            <Header headerName="Groscan" />
            <HomeMain />
            <Navbar />
            <Sidebar />
        </>
    );
}
