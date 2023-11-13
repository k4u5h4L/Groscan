/// <reference types="@capacitor/local-notifications" />

import type { CapacitorConfig } from "@capacitor/cli";
// import { internalIpV6Sync } from "internal-ip";

// const internalIp = internalIpV6Sync();

// console.log(`Current server on local IP ${internalIp}`);

const config: CapacitorConfig = {
    appId: "me.kaush.groscan",
    appName: "Groscan",
    webDir: "out",
    bundledWebRuntime: false,
    server: {
        androidScheme: "https",
        //     url: `http://192.168.1.3:3000`,
        // cleartext: true,
    },
    plugins: {
        LocalNotifications: {
            smallIcon: "ic_stat_notifications_active",
            iconColor: "#0d6efd",
            sound: "groscan_notification",
        },
    },
};

export default config;
