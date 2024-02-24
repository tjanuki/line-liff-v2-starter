import './index.css';
import liff from '@line/liff'

document.addEventListener("DOMContentLoaded", function() {
  liff
    .init({ liffId: process.env.LIFF_ID })
    .then(() => {
        alert("Success! you can do something with LIFF API here.")
        const context = liff.getContext();
        console.log(context);
        alert(context);
        console.log("Success! you can do something with LIFF API here.")

        liff
            .sendMessages([
                {
                    type: "text",
                    text: "Hello, World!",
                },
            ])
            .then(() => {
                console.log("message sent");
            })
            .catch((err) => {
                console.log("error", err);
            });
    })
    .catch((error) => {
        console.log(error)
    })
});
