
const loadScript = async (url: any) => {
    return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = url;
        script.async = true;

        script.onload = () => {
            resolve(true);
        };

        script.onerror = () => {
            resolve(false);
        };

        document.body.appendChild(script);
    });
};





const handleCheckout = async (selectedAddress: any, totalPrice: number) => {
    const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");


    const razorpayOption = {
        key: "rzp_test_MOGxFrLtzC31Cw",
        amount: totalPrice * 100,
        currency: "INR",
        name: "Dil Store",
        description:
            "Unlock the power of style and elevate your wardrobe with clothify",
        image:
            "https://scontent.fdel7-1.fna.fbcdn.net/v/t39.30808-6/311603128_210093544709043_8572712917983816564_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=qqhOEDibzXMAX9zIJZ8&_nc_ht=scontent.fdel7-1.fna&oh=00_AfDIz-GUgIkXFFKYv_B7Yv4kGMS1eHExhTOCmnGaH1XJDw&oe=6481BD9F",
        prefill: {
            name: selectedAddress.name,
            contact: selectedAddress.phoneNumber,
            address: selectedAddress.address,
        },
        notes: {
            address: selectedAddress.address,
        },
        theme: {
            color: "#121932",
            background: "#FFFFFF",
            display_name: "Dils-Store",
        },
        modal: {
            escape: false,
            backdrop_close: true,
            handle_back: true,
        },
    };
    const razorpayInstance = new window.Razorpay(razorpayOption);
    razorpayInstance.open();
};

export { handleCheckout };

// const handleCheckout = async (selectedAddress: any, totalPrice: number) => {
//     if (!cartItem.length) {
//         alert("please select address");
//         return;
//     }

//     // call function for total amount
//     const totalAmount = totalPrice

//     //Razor-Pay Integrate//
//     const options = {
//         key: "rzp_test_MOGxFrLtzC31Cw",
//         amount: totalAmount * 82 * 100 + 410,
//         currency: "INR",
//         name: "DIl Food",
//         description: "Thank you for your test purchase",
//         image: "",
//         handler: handlePaymentSuccess,
//         theme: {
//             color: "#0e5db3",
//         },
//     };

//     //Razor-Pay Failed Payment Handled//
//     const razorpayInstance = new window.Razorpay(options);
//     razorpayInstance.on("payment.failed", handlePaymentError);
//     razorpayInstance.open();
// };