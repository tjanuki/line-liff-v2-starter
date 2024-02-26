import './index.css';
import liff from '@line/liff'

document.addEventListener("DOMContentLoaded", function() {
  liff
    .init({ liffId: process.env.LIFF_ID })
    .then(() => {
        const context = liff.getContext();

        alert('LIFF_ID:' + process.env.LIFF_ID);
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
