import { MdOutlineMessage } from "react-icons/md";
function Show() {
  return (
    <div className="mt-[2rem] flex flex-col items-start w-[300px]">
      <button className="p-2 rounded-3xl px-6 bg-purple-200 text-purple-900">Support</button>
      <h1 className="text-4xl mt-6 font-bold">Frequently asked questions</h1>
      <p className="mt-6 text-zinc-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, perferendis!</p>
      <div className="flex items-center mt-6 gap-[1rem]">
        <MdOutlineMessage className="text-green-800" />
        <p className="font-bold">ANY QUESTIONS</p>
      </div>
      <p className="font-bold text-sm mt-6">hello@teespace.com</p>
    </div>
  );
}
export default Show;
