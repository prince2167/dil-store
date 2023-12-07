/* eslint-disable @next/next/no-img-element */
import AddressForm from "@/components/AddressForm";

const products = [
  {
    id: 1,
    name: "High Wall Tote",
    href: "#",
    price: "₹ 210.00",
    color: "White and black",
    size: "15L",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/checkout-page-07-product-01.jpg",
    imageAlt:
      "Front of zip tote bag with white canvas, white handles, and black drawstring top.",
  },
  // More products...
];

export default function Example() {
  return (
    <div className="bg-white">
      <div
        className="fixed left-0 top-0 hidden h-full w-1/2 bg-white lg:block"
        aria-hidden="true"
      />
      <div
        className="fixed right-0 top-0 hidden h-full w-1/2 bg-rose-600 lg:block"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-x-16 lg:grid-cols-2 lg:px-8 lg:pt-16">
        <section
          aria-labelledby="summary-heading"
          className="bg-rose-600 py-12 text-gray-100 md:px-10 lg:col-start-2 lg:row-start-1 lg:mx-auto lg:w-full lg:max-w-lg lg:bg-transparent lg:px-0 lg:pb-24 lg:pt-0"
        >
          <div className="mx-auto max-w-2xl px-4 lg:max-w-none lg:px-0">
            <dl>
              <dt className="text-sm font-medium">Amount due</dt>
              <dd className="mt-1 text-3xl font-bold tracking-tight text-white">
                ₹ 232.00
              </dd>
            </dl>

            <ul
              role="list"
              className="divide-y divide-white divide-opacity-10 text-sm font-medium"
            >
              {products.map((product) => (
                <li
                  key={product.id}
                  className="flex items-start space-x-4 py-6"
                >
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-20 w-20 flex-none rounded-md object-cover object-center"
                  />
                  <div className="flex-auto space-y-1">
                    <h3 className="text-white text-md">{product.name}</h3>
                    <p>{product.color}</p>
                    <p>{product.size}</p>
                  </div>
                  <p className="flex-none text-base font-medium text-white">
                    {product.price}
                  </p>
                </li>
              ))}
            </ul>

            <dl className="space-y-6 border-t  border-opacity-10 pt-6 text-sm font-medium">
              <div className="flex items-center justify-between">
                <dt>Subtotal</dt>
                <dd>₹ 570.00</dd>
              </div>

              <div className="flex items-center justify-between">
                <dt>Shipping</dt>
                <dd>₹ 25.00</dd>
              </div>

              <div className="flex items-center justify-between">
                <dt>Taxes</dt>
                <dd>₹ 47.60</dd>
              </div>

              <div className="flex items-center justify-between border-t  border-opacity-10 pt-6 text-white">
                <dt className="text-base">Total</dt>
                <dd className="text-base">₹ 642.60</dd>
              </div>
            </dl>
          </div>
        </section>

        <AddressForm />
      </div>
    </div>
  );
}
