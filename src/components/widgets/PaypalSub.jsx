import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const PayPalSubscriptionButton = () => {
  return (
    <PayPalScriptProvider
      options={{
        "client-id": "AbJs6uz_oSSW55ZOVT9lnuBW-Fh66kEOljGXccIiE2wUuKekZAjBd4RgyZM6mCxsHuctKOvQwxP9yVVq",  // 替换为你的 PayPal 客户端ID
        vault: true,
        intent: "subscription"
      }}
    >
      <PayPalButtons
        createSubscription={(data, actions) => {
          return actions.subscription.create({
            'plan_id': 'P-5HX00477RR628964XM3QTP6I' // 替换为你的 PayPal 订阅计划 ID
          });
        }}
        onApprove={(data, actions) => {
          alert('Subscription created successfully! Subscription ID: ' + data.subscriptionID);
        }}
        style={{
          layout: 'vertical', // 按钮的样式布局，横向或纵向
          color: 'blue',      // 按钮的颜色
          shape: 'pill',       // 按钮的形状
          label: 'subscribe'
        }}
      />
    </PayPalScriptProvider>
  );
};

export default PayPalSubscriptionButton;
