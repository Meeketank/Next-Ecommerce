import Link from 'next/link';
import React from 'react';

const CartButtons = ({ total }: { total: number }) => {
  return (
    <>
      <div
        style={{
          textAlign: "right",
          marginTop: 30,
          paddingRight: 20,
        }}
      >
        <p style={{ fontSize: 20, fontWeight: "bold" }}>Total: ₹{total}</p>
      </div>

      <div style={{ display: "inline" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          <Link href="/placeorder">
            <button
              style={{
                backgroundColor: "#a37e2c",
                color: "beige",
                margin: 10,
                padding: 10,
                borderRadius: 10,
              }}
            >
              Place Order
            </button>
          </Link>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          <Link href="/">
            <u>Shop more</u>...
          </Link>
        </div>
      </div>
    </>
  );
};

export default CartButtons;
