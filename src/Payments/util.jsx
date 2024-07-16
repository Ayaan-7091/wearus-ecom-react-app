import { load } from "@cashfreepayments/cashfree-js";

function CheckoutUtil() {
    let cashfree;
    var initializeSDK = async function () {          
        cashfree = await load({
            mode: "sandbox"
        });
    }
    initializeSDK();

    const doPayment = async () => {
        let checkoutOptions = {
            paymentSessionId: "session_BtFxi-xf3Hvu2U4Qu6xwba8ZMu3bQTBN6SG_X1r9MajN520SIwWdYiWB6vBLMUv8HzOcTItRvfOAm5XJ0MD-Vvp77ivwLq8Esl18v0HfTFxK",
            redirectTarget: "_self",
        };
        cashfree.checkout(checkoutOptions);
    };

    return (
        <div class="row">
            <p>Click below to open the checkout page in current tab</p>
            <button type="submit" class="btn btn-primary" id="renderBtn" onClick={doPayment}>
                Pay Now
            </button>
        </div>
    );
}
export default CheckoutUtil;