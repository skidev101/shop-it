"use client";

import { useState } from "react";
import client from "@/lib/api/client";

interface CreateOrderParams {
  items: any[];
  shippingDetails: any;
  totalAmount: number;
  callbackUrl: string;
  cancelUrl: string;
}

export const useOrders = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const initializePayment = async (params: CreateOrderParams, mockStatus?: "success" | "error") => {
    setLoading(true);
    setError(null);

    // MOCK MODE for testing success/failed states
    if (mockStatus) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          setLoading(false);
          if (mockStatus === "success") {
            // Simulate Paystack URL redirect
            window.location.href = params.callbackUrl;
            resolve({ authorization_url: params.callbackUrl });
          } else {
            const errorMsg = "MOCK ERROR: Failed to create order.";
            setError(errorMsg);
            reject(new Error(errorMsg));
          }
        }, 1500);
      });
    }

    try {
      const response = await client.post("/orders/initialize-payment", params);
      
      if (response.data?.authorization_url) {
        setLoading(false);
        window.location.href = response.data.authorization_url;
        return response.data;
      } else {
        throw new Error("Failed to get payment authorization URL");
      }
    } catch (err: any) {
      const message = err.response?.data?.message || err.message || "Something went wrong";
      setError(message);
      setLoading(false);
      throw err;
    }
  };

  return {
    initializePayment,
    loading,
    error,
  };
};
