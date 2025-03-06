import BillingForm from "@/Components/Billing_components/BillingForm";
// import OrderSummary from "@/Components/Billing_components/OrderSummary";

export default function CheckoutPage() {
  return (
    <div className="w-[90%] md:w-3/4 bg-white container mx-auto p-6 grid grid-cols-1 md:grid-1 gap-2 pt-[140px]">
      <BillingForm />
      {/* <OrderSummary /> */}
    </div>
  );
}
