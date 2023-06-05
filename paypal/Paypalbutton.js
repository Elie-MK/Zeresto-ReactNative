// App.js
import {
    PayPalScriptProvider,
    BraintreePayPalButtons,
} from "@paypal/react-paypal-js";

export default function Paypalbutton() {
    return (
        <PayPalScriptProvider
            options={{
                "client-id": "test",
                "data-client-token": "abc123xyz==",
            }}
        >
            <BraintreePayPalButtons
                createOrder={(data, actions) => {
                    return actions.braintree.createPayment({
                        flow: "checkout",
                        amount: "10.0",
                        currency: "USD",
                        intent: "capture",
                    });
                }}
                onApprove={(data, actions) => {
                    return actions.braintree
                        .tokenizePayment(data)
                        .then((payload) => {
                            // call server-side endpoint to finish the sale
                        });
                }}
            />
        </PayPalScriptProvider>
    );
}