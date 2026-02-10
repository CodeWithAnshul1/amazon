import { useState, useEffect } from "react";

export default function Menubar() {
  const [open, setOpen] = useState(false);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [open]);

  return (
    <>
      {/* Menu Button */}
      <button
        onClick={() => setOpen(true)}
        className="text-2xl text-white"
      >
        ☰
      </button>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-black/40"
        />
      )}

      {/* Sidebar */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`fixed top-0 left-0 z-50 w-[65%] text-black h-screen bg-white shadow
        transform transition-transform duration-300 overflow-y-auto
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Header */}
        <div className="relative bg-[#232F3E] text-white h-[110px] p-4 flex justify-end items-center">
          Your Account
          <i className="fa-solid fa-user ml-2"></i>

          {/* Close Button */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-4 left-4 text-2xl"
          >
            ✕
          </button>
        </div>

        {/* Scrollable Menu Content */}
        <div className="  bg-slate-100 pb-35 ">

          <div className="text-lg font-bold flex justify-between p-3 bg-white">
            <div>Amazon Home</div>
            <i className="fa-regular fa-house text-xl"></i>
          </div>

          {/* Section 1 */}
          <div className="mt-1 bg-white p-3">
            <ul className="flex flex-col gap-5">
              <li className="text-lg font-bold">Trending</li>
              <li>Best Seller</li>
              <li>New Releases</li>
              <li>Movers and Shakers</li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="mt-1 bg-white p-3">
            <ul className="flex flex-col gap-5">
              <li className="text-lg font-bold">Programs & Features</li>
              <li>Apparel</li>
              <li>Shoes & Accessories</li>
              <li>Electronics</li>
              <li>Sports & Outdoors</li>
              <li>See All Categories</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="mt-1 bg-white p-3">
            <ul className="flex flex-col gap-5">
              <li className="text-lg font-bold">Top Categories for You</li>
              <li>Apparel</li>
              <li>Shoes & Accessories</li>
              <li>Electronics</li>
              <li>Sports & Outdoors</li>
              <li>See All Categories</li>
            </ul>
          </div>

        </div>
      </div>
    </>
  );
}
