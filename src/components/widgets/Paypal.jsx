import { useEffect } from 'react';

const PaypalButton = () => {
  useEffect(() => {
    const loadPaypalScript = () => {
      // 检查 PayPal SDK 是否已经存在
      if (!document.querySelector('#paypal-sdk')) {
        const script = document.createElement('script');
        script.id = 'paypal-sdk';
        //script.src = `https://www.paypal.com/sdk/js?client-id=AW8w-HMsHWRuOsB5I3uJSnc2ttC3b_W9yn5XHbOzXaa8_GnoEa0CP31yS0C-eU7g-7Es0l8Bp_OanXwZ`; //sandbox
        //script.src = `https://www.paypal.com/sdk/js?client-id=AZ34Ql31hxHWuvwOMq6QjJeRXSbe6yoOTwYF82acV6CcZPzj76-C-5MPMZNEwZZ-Yt-id1WlzASDIBnW`; //live
        script.src = `https://www.paypal.com/sdk/js?client-id=AZ34Ql31hxHWuvwOMq6QjJeRXSbe6yoOTwYF82acV6CcZPzj76-C-5MPMZNEwZZ-Yt-id1WlzASDIBnW&currency=USD&intent=capture&disable-funding=card&components=buttons`;

        
        script.async = true;
        script.onload = () => {
          window.paypal.Buttons({
            createOrder: function (data, actions) {
              return actions.order.create({
                purchase_units: [{
                  amount: {
                    value: '100.00', // 替换为你的支付金额
                  },
                }],
              });
            },
            onApprove: function (data, actions) {
              return actions.order.capture().then(function (details) {
                alert('Transaction completed by ' + details.payer.name.given_name);
              });
            }
          }).render('#paypal-button-container');
        };
        script.onerror = () => {
          console.error("Failed to load PayPal SDK");
        };
        document.body.appendChild(script);
      }
    };

    loadPaypalScript();
  }, []);

  return (<div className="paypal-container"><div id="paypal-button-container"></div></div>);
};

export default PaypalButton;

