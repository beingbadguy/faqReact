import Show from "./Show";
import Transition from "./components/Transition";
function App() {
  return (
    <div className="mb-[100px] p-4 flex-col md:flex-row items-center flex justify-center bg-white h-full gap-[10rem] select-none">
      <div>
        <Show />
      </div>
      <div className=" flex flex-col   ">
        <h1 className="font-bold text-center w-100 mt-10 mb-10 bg-green-100">
          FAQ
          <span>s</span>
        </h1>
        <Transition
          q="How does product customization work?"
          a="To design your own T-shirt, you can upload your design to the front of your tee and add custom elements like text. For some
of our T-shirts, reverse side printing is also available."
        />
        <Transition
          q="What products can I customize?"
          a="To design your own T-shirt, you can upload your design to the front of your tee and add custom elements like text. For some
of our T-shirts, reverse side printing is also available."
        />
        <Transition
          q="How are your T-shirts printed?"
          a="To design your own T-shirt, you can upload your design to the front of your tee and add custom elements like text. For some
of our T-shirts, reverse side printing is also available."
        />
        <Transition
          q="What is the best T-shirt material?"
          a="To design your own T-shirt, you can upload your design to the front of your tee and add custom elements like text. For some
of our T-shirts, reverse side printing is also available."
        />
      </div>
    </div>
  );
}
export default App;
