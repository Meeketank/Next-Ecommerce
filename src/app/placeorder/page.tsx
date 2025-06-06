"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/app/context/CartContext"; 
import {toast, Bounce} from 'react-toastify';

type Address = {
  name: string;
  phone: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  zip: string;
};

export default function PlaceOrderPage() {
  const [address, setAddress] = useState<Address>({
    name: "",
    phone: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    zip: "",
  });

  const [savedAddress, setSavedAddress] = useState<Address | null>(null);
  const [useSavedAddress, setUseSavedAddress] = useState(false);
  const [saveAddressChecked, setSaveAddressChecked] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const { setCart } = useCart();


  useEffect(() => {
    const saved = localStorage.getItem("savedAddress");
    if (saved) setSavedAddress(JSON.parse(saved));
  }, []);

  useEffect(() => {
    if (useSavedAddress && savedAddress) setAddress(savedAddress);
    else
      setAddress({
        name: "",
        phone: "",
        addressLine1: "",
        addressLine2: "",
        city: "",
        state: "",
        zip: "",
      });
  }, [useSavedAddress, savedAddress]);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!address.name.trim()) newErrors.name = "Name required";
    if (!address.phone.trim()) newErrors.phone = "Phone required";
    else if (!/^\d{10}$/.test(address.phone.trim()))
      newErrors.phone = "Phone must be 10 digits";
    if (!address.addressLine1.trim()) newErrors.addressLine1 = "Address required";
    if (!address.city.trim()) newErrors.city = "City required";
    if (!address.state.trim()) newErrors.state = "State required";
    if (!address.zip.trim()) newErrors.zip = "Zip required";
    else if (!/^\d{5,6}$/.test(address.zip.trim()))
      newErrors.zip = "Invalid zip";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      toast.success("Order Successfully placed, Thank you for shopping", {
        className: 'custom-toast-success',
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
        transition: Bounce,
      });
      if (saveAddressChecked)
        localStorage.setItem("savedAddress", JSON.stringify(address));
    }
    setCart([]);
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", minHeight: "100vh" }}>

      {/* Main Content */}
      <main
        style={{
          maxWidth: 1200,
          margin: "40px auto",
          padding: "0 20px",
        }}
      >
        <h2 style={{ marginBottom: 20, color: "#006039" }}>Place Your Order</h2>

        {savedAddress && (
          <label
            style={{
              marginBottom: 20,
              display: "inline-flex",
              alignItems: "center",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            <input
              type="checkbox"
              checked={useSavedAddress}
              onChange={() => setUseSavedAddress(!useSavedAddress)}
              style={{ marginRight: 10, width: 18, height: 18 }}
            />
            Use saved address
          </label>
        )}

        <form
          onSubmit={handleSubmit}
          noValidate
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 20,
            alignItems: "center",
            border: "1px solid #ddd",
            padding: 20,
            borderRadius: 8,
            backgroundColor: "#f9f9f9",
          }}
        >
          {[
            { label: "Name*", name: "name", type: "text" },
            { label: "Phone*", name: "phone", type: "tel" },
            { label: "Address Line 1*", name: "addressLine1", type: "text" },
            { label: "Address Line 2", name: "addressLine2", type: "text" },
            { label: "City*", name: "city", type: "text" },
            { label: "State*", name: "state", type: "text" },
            { label: "Zip*", name: "zip", type: "text" },
          ].map(({ label, name, type }) => (
            <div
              key={name}
              style={{ display: "flex", flexDirection: "column", flex: "1 1 180px" }}
            >
              <label
                htmlFor={name}
                style={{ marginBottom: 5, fontWeight: "600", color: "#333" }}
              >
                {label}
              </label>
              <input
                id={name}
                type={type}
                disabled={useSavedAddress}
                value={address[name as keyof Address] || ""}
                onChange={(e) =>
                  setAddress({ ...address, [name]: e.target.value })
                }
                style={{
                  padding: "8px 10px",
                  borderRadius: 5,
                  border: errors[name] ? "1.5px solid red" : "1px solid #ccc",
                  outline: "none",
                  fontSize: 14,
                }}
              />
              {errors[name] && (
                <small style={{ color: "red", marginTop: 4 }}>{errors[name]}</small>
              )}
            </div>
          ))}

          {!useSavedAddress && (
            <div
              style={{
                flexBasis: "100%",
                display: "flex",
                alignItems: "center",
                marginTop: 10,
                gap: 10,
              }}
            >
              <input
                type="checkbox"
                id="saveAddress"
                checked={saveAddressChecked}
                onChange={() => setSaveAddressChecked(!saveAddressChecked)}
                style={{ width: 18, height: 18 }}
              />
              <label
                htmlFor="saveAddress"
                style={{ fontWeight: "600", cursor: "pointer" }}
              >
                Save this address
              </label>
            </div>
          )}

          <button
            type="submit"
            style={{
              padding: "10px 24px",
              backgroundColor: "#006039",
              color: "white",
              border: "none",
              borderRadius: 6,
              cursor: "pointer",
              fontWeight: "600",
              fontSize: 16,
              marginTop: useSavedAddress ? 25 : 20,
              flexBasis: "100%",
              maxWidth: 180,
              alignSelf: "flex-start",
            }}
          >
            Place Order
          </button>
        </form>

        {submitted && (
            <>
          <p
            style={{
              marginTop: 20,
              color: "green",
              fontWeight: "600",
              fontSize: 16,
            }}>
            Thank you! Your order has been placed.
          </p>
          <br/>
          <Link href = "/"><b>Shop more...</b></Link>
          </>
        )}
      </main>
    </div>
  );
}
