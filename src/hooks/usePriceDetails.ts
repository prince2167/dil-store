export const usePriceDetails = (data: any) => {

    const subTotal = data?.reduce(
        (acc: any, curr: any) => acc + curr.price * curr.quantity,
        0
    );
    const shippingCost = 60;
    const tax = Math.floor((subTotal * 10) / 100);
    const totalPrice = subTotal + shippingCost + tax;

    return { subTotal, shippingCost, tax, totalPrice }
}