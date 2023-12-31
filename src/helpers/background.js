// @ts-nocheck

addEventListener("expiryCheckEvent", async (resolve, reject, args) => {
    try {
        CapacitorNotifications.schedule([
            {
                id: 50,
                title: "Enterprise Background Runner",
                body: "A test message from the Enterprise Background Runner",
            },
        ]);

        resolve();
    } catch (err) {
        console.error(err);
        reject(err);
    }
});
