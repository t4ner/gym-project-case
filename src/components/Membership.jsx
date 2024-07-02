import React from "react";

function Membership() {
  return (
    <section className="flex-col lg:flex lg:flex-row">
      <div className="bg-[#d70926] h-[450px] basis-1/2">
        <div className="flex flex-col h-full items-center justify-center text-white space-y-5 text-center">
          <h4 className="text-3xl lg:text-4xl font-semibold">
            Put your Fitness First today
          </h4>
          <p className="font-semibold text-lg">
            2 Months Half Price + No Joining Fee{" "}
          </p>
          <button className="border px-4 py-3 bg-white text-black font-semibold">
            Join Now
          </button>
        </div>
      </div>
      <div className="bg-[#ededec] basis-1/2 h-[450px] text-center">
        <div className="flex flex-col h-full items-center justify-center space-y-5">
          <h4 className="text-3xl lg:text-4xl font-semibold">
            Put your Fitness First today
          </h4>
          <p className="font-semibold text-gray-400 text-lg">
            2 Months Half Price + No Joining Fee{" "}
          </p>
          <button className="border px-4 py-4 bg-black text-white font-semibold">
            Corporate Memberships
          </button>
        </div>
      </div>
    </section>
  );
}

export default Membership;
