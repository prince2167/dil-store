"use client";

import { useProducts } from "@/context/product-context";
import { usePriceDetails } from "@/hooks/usePriceDetails";
import classNames from "classnames";
import { useRouter } from "next/navigation";
import AddressForm from "./AddressForm";
import { isBrowser } from "@/utils";

declare global {
  interface Window {
    Razorpay: any;
  }
}
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

const Checkout = () => {
  const {
    cart,
    setCart,
    myOrder,

    setMyOrder,
    addresses,
    selectedAddress,
    setSelectedAddess,
  } = useProducts();
  const { subTotal, shippingCost, tax, totalPrice } = usePriceDetails(cart);
  const router = useRouter();

  const temp = [...cart];
  const handlePaymentSuccess = (payment: any) => {
    const totalAmount = temp.reduce(
      (acc, curr) => acc + curr.price * curr.quantity,
      0
    );
    setMyOrder({
      ...myOrder,
      products: temp,
      totalAmount,
      transactionId: payment.razorpay_payment_id,
      purchaseDate: new Date().toDateString(),
    });

    setCart([]);
    router.push("/myorder");
    if (isBrowser()) window.scrollTo({ top: 0 });
  };

  const handlePaymentError = () => {
    alert("Payment Error:");
  };

  const handleCheckout = async () => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    const options = {
      key: "rzp_test_MOGxFrLtzC31Cw",
      amount: totalPrice * 100,
      currency: "INR",
      name: "DIl store",
      description: "Thank you for your test purchase",
      image: "",
      handler: handlePaymentSuccess,
      theme: {
        color: "#0e5db3",
      },
    };
    const razorpayInstance = new window.Razorpay(options);
    razorpayInstance.on("payment.failed", handlePaymentError);
    razorpayInstance.open();
  };

  return (
    <div className="bg-white p-6">
      <div className=" mx-auto grid max-w-7xl grid-cols-1 gap-x-16 lg:grid-cols-2 lg:px-8 lg:pt-16">
        {cart.length > 0 && (
          <section className="bg-rose-600 py-12 text-gray-100 md:px-10 lg:col-start-2 lg:row-start-1 lg:mx-auto lg:w-full lg:max-w-lg  lg:pb-24 ">
            <div className="mx-auto max-w-2xl px-4 lg:max-w-none lg:px-0">
              <dl>
                <dt className="text-lg font-semibold">Amount due</dt>
                <dd className="mt-1 text-3xl font-bold tracking-tight text-white">
                  ₹ {totalPrice.toFixed(2)}
                </dd>
              </dl>

              <ul
                role="list"
                className="divide-y divide-white divide-opacity-10 text-sm font-medium"
              >
                {cart.map((product) => (
                  <li
                    key={product.id}
                    className="flex items-start space-x-4 py-6"
                  >
                    <img
                      src={product.thumbnail}
                      alt={product.productName}
                      className="h-24 w-24 flex-none rounded-md object-cover object-center"
                    />
                    <div className="flex-auto space-y-1">
                      <h3 className="text-white text-md">
                        {product.productName}
                      </h3>
                      <p className="text-md font-bold">{product.brand}</p>
                      <p> Quantity : {product.quantity}</p>
                    </div>
                    <p className="flex-none text-base font-medium text-white">
                      ₹ {product.price.toFixed(2)}
                    </p>
                  </li>
                ))}
              </ul>

              <dl className="space-y-6 border-t  border-opacity-10 pt-6 text-sm font-medium">
                <div className="flex items-center justify-between">
                  <dt>Subtotal</dt>
                  <dd>₹ {subTotal.toFixed(2)}</dd>
                </div>

                <div className="flex items-center justify-between">
                  <dt>Shipping</dt>
                  <dd>₹ {shippingCost.toFixed(2)}</dd>
                </div>

                <div className="flex items-center justify-between">
                  <dt>Taxes</dt>
                  <dd>₹ {tax.toFixed(2)}</dd>
                </div>

                <div className="flex items-center justify-between border-t  border-opacity-10 pt-6 text-white">
                  <dt className="text-lg font-semibold">Total</dt>
                  <dd className="text-base">₹ {totalPrice.toFixed(2)}</dd>
                </div>
                {selectedAddress && (
                  <button
                    className="bg-white w-full text-red-500 text-xl py-2 rounded-md"
                    onClick={handleCheckout}
                  >
                    Place order
                  </button>
                )}
              </dl>
            </div>
          </section>
        )}
        <section className="mx-auto max-w-7xl">
          <div className=" flex flex-col gap-8 lg:mt-0 mt-8 mb-8">
            {addresses.map((address) => (
              <div
                key={address.email}
                className={classNames(
                  selectedAddress === address && "ring-2 ring-red-500",
                  " bg-gray-200 p-4 max-w-xl  rounded-md cursor-pointer"
                )}
                onClick={() => setSelectedAddess(address)}
              >
                <h2 className="text-lg font-medium">
                  {" "}
                  Email : {address.email}
                </h2>
                <p className="text-md mt-2 ">
                  Address : {address.address}, {address.city} , {address.state},{" "}
                  {address.postalCode}
                </p>
              </div>
            ))}
          </div>
          <AddressForm />
        </section>
      </div>
    </div>
  );
};

export default Checkout;
