import { useState } from "react";
import { FaCaretDown } from "react-icons/fa";

function Transition({ q, a }) {
  const [val, setval] = useState(false);
  console.log(val);
  return (
    <div className={`w-[400px] md:w-[450px] font-mono  ${val ? "h-[25%]" : "h-[60px]"} select-none overflow-hidden  relative transition-all delay-50 ease-in-out`}>
      <div className="flex rounded-xl bg-green-400 items-center justify-between p-2 overflow-hidden  w-[100%] absolute">
        <p className=" p-2 font-bold">{q}</p>
        <span onClick={() => setval(!val)} className={`cursor-pointer ${val ? "rotate-0" : "rotate-90"} transition-all `}>
          <FaCaretDown />
        </span>
      </div>
      <div className="mb-6 relative top-10 left-0  py-6 w-[100%] transition-all rounded-b-3xl">
        <p className={`p-2   transition selection:text-green-700  `}>{a}</p>
      </div>
    </div>
  );
}
export default Transition;
