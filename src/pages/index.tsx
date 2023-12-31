import Header from "~/components/Header/Header";
import HomeMain from "~/components/Home/HomeMain";
import Navbar from "~/components/Navbar/Navbar";
import Sidebar from "~/components/Sidebar/Sidebar";

import { LocalNotifications } from "@capacitor/local-notifications";

export default function Home() {
    const check = async () => {
        await LocalNotifications.schedule({
            notifications: [
                {
                    id: 5,
                    title: "Testing title",
                    body: "Testing body sdsdgukgdusadjasgdaskhdaislhdlba,s",
                    schedule: { at: new Date(Date.now() + 2 * 1000) },
                },
            ],
        });
    };

    return (
        <>
            <Header headerName="Groscan" />
            <button onClick={check}>Notification button</button>
            <HomeMain />
            <Navbar />
            <Sidebar />
        </>
    );
}
