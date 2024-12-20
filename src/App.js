import './App.css';

function App() {
  return (
    <main className="bg-black">
      <div className="parallax-section bg-cover bg-center h-screen flex flex-col items-center justify-center mb-96" style={{ backgroundImage: "url('/public/img/custom-bg.jpg')" }}>
        <img src="/public/img/logojuls.png" className="w-1/4" alt="Logo" />
        <img src="/public/img/portfoliotext.png" className="h-[546px] w-auto mt-4" alt="Portfolio Text" />
        <p className="mt-4 text-center font-future text-white text-2xl">art is the way</p>
        <p className="mt-4 text-center font-helvetica font-regular text-white/80 text-xl">JULIA RUIZ</p>
      </div>

      <div className="parallax-section bg-black grid grid-cols-12 mb-40">
        <div className="flex flex-col justify-center col-span-8">
          <p className="text-move text-white/80 font-future w-[300px] h-[100px] text-6xl top-[100px]">meet</p>
          <p className="text-move text-shine font-future w-[1100px] h-[450px] top-[150px]">the designer</p>
          <p className="text-move text-shine font-future w-[500px] h-[250px] top-[250px]">designer</p>
          <p className="text-move text-shine font-future w-[1300px] h-[450px] top-[410px]">the designer</p>
          <p className="text-move text-shine font-future w-[339px] h-[550px] top-[500px]">designer</p>
        </div>
        <div className="col-span-3 col-start-10 flex flex-col items-center justify-center">
          <img src="/public/img/jujuls.jpg" className="w-[300px] h-[300px] ml-5 mb-10 mt-32 z-10" alt="Julia Ruiz" />
          <p className="text-center font-future text-white text-2xl">julia ruiz</p>
          <p className="text-center font-future text-white/85 text-xl mt-2">fashion designer</p>
        </div>
        <div className="col-span-4 flex flex-col items-center justify-center col-start-5 mt-28">
          <p className="col-span-12 md:col-span-6 text-white font-helvetica text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis in nunc vitae posuere. Maecenas porta, libero sed efficitur hendrerit, nisi purus lacinia urna, viverra elementum purus nibh vitae dolor. Suspendisse vitae tincidunt ligula. Ut non mauris tristique, blandit odio at, porttitor
          </p>
        </div>
      </div>
    </main>
  );
}

export default App;
