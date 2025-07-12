import { useSelector, useDispatch } from "react-redux";
import productData from "../../assets/productData";
import { IoClose } from "react-icons/io5";
import { removeFromCart } from "../../actions/cartAction";
import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const all_product = productData;

  const handleRemove = (id) => dispatch(removeFromCart(id));

  const getTotalAmount = () => {
    return all_product.reduce((total, prod) => {
      const qty = cartItems[prod.id] || 0;
      return total + prod.new_price * qty;
    }, 0);
  };

  const isCartEmpty = Object.values(cartItems).every((qty) => qty === 0);

  if (isCartEmpty) {
    return (
      <div className="mt-28 min-h-[40vh] flex flex-col justify-center items-center text-center space-y-5">
        <h2 className="text-3xl font-semibold text-gray-700">Your cart is empty 🛒</h2>
        <p className="text-gray-500 text-lg">Looks like you haven’t added anything yet.</p>
            <Link to="/product">
              <button className=" flex items-center justify-center gap-2 bg-primary hover:bg-opacity-95 text-white px-6 py-2 rounded-full font-semibold transition">
                Shop Now
                <FaArrowRight />
              </button>
            </Link>
      </div>
    );
  }

  return (
    <div className="mt-24 md:px-20 px-3">
      {/* ───── Desktop layout ───── */}
      <div className="lg:block hidden">
        <div className="grid grid-cols-custom gap-[75px] items-center font-medium text-[18px] py-5">
          <p>Product</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr className="h-[2px] w-full" />
        {all_product.map((e) =>
          cartItems[e.id] > 0 ? (
            <div key={e.id}>
              <div className="grid grid-cols-custom gap-[75px] items-center font-medium text-[18px] py-5">
                <img src={e.image} alt={e.name} className=" w-28 h-" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="border w-8">{cartItems[e.id]}</button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <IoClose
                  onClick={() => handleRemove(e.id)}
                  className="bg-slate-50 w-6 h-6 hover:bg-slate-100 cursor-pointer p-1 rounded-full"
                />
              </div>
              <hr className="h-[2px] w-full" />
            </div>
          ) : null
        )}
      </div>

      {/* ───── Mobile layout ───── */}
      <div className="lg:hidden">
        {all_product.map((e) =>
          cartItems[e.id] > 0 ? (
            <div key={e.id}>
              <div className="flex flex-col justify-center gap-5 py-2">
                <div className="flex flex-row justify-between items-center">
                  <p className="text-[18px] font-medium">Product</p>
                  <img src={e.image} alt={e.name} className="w-28" />
                </div>
                <hr className="h-[2px] w-full" />
                <div className="flex flex-row justify-between items-center">
                  <p className="text-[18px] font-medium pr-[50%]">Title</p>
                  <p>{e.name}</p>
                </div>
                <hr className="h-[2px] w-full" />
                <div className="flex flex-row justify-between items-center">
                  <p className="text-[18px] font-medium">Price</p>
                  <p>${e.new_price}</p>
                </div>
                <hr className="h-[2px] w-full" />
                <div className="flex flex-row justify-between items-center">
                  <p className="text-[18px] font-medium">Quantity</p>
                  <button className="border w-8">{cartItems[e.id]}</button>
                </div>
                <hr className="h-[2px] w-full" />
                <div className="flex flex-row justify-between items-center">
                  <p className="text-[18px] font-medium">Total</p>
                  <p>${e.new_price * cartItems[e.id]}</p>
                </div>
                <hr className="h-[2px] w-full" />
                <div className="flex flex-row justify-between items-center mb-20">
                  <p className="text-[18px] font-medium">Remove</p>
                  <IoClose
                    onClick={() => handleRemove(e.id)}
                    className="bg-slate-50 w-6 h-6 hover:bg-slate-100 cursor-pointer p-1 rounded-full"
                  />
                </div>
              </div>
            </div>
          ) : null
        )}
      </div>

      {/* ───── Totals box ───── */}
      <div className="md:flex items-center justify-between mt-20 space-y-8 gap-24">
        <div className="flex-1 flex flex-col">
          <p className="font-semibold my-5">Cart Totals</p>

          <div className="flex justify-between my-3">
            <p>Subtotals</p>
            <p>${getTotalAmount()}</p>
          </div>
          <hr className="h-[2px] w-full" />

          <div className="flex justify-between my-4">
            <p>Shipping Fee</p>
            <p>Free</p>
          </div>
          <hr className="h-[2px] w-full" />

          <div className="flex justify-between my-4 font-semibold">
            <p>Totals</p>
            <p>${getTotalAmount()}</p>
          </div>

          <button className=" bg-primary cursor-pointer text-white px-5 py-2 rounded-md">
            Proceed to checkout
          </button>
        </div>

        <div className="flex-1 space-y-3">
          <p>If you have a promo code enter it here</p>
          <input
            type="text"
            className="w-full md:w-auto px-3 py-2 bg-slate-200 border-none outline-none mt-5"
          />
          <button className=" bg-primary text-white px-5 py-2">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
