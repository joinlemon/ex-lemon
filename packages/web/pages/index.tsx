import type { NextPage } from "next";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      <main className="mt-0">
        <section className="mt-14 mb-6 rounded-xl mx-6 gradient-section flex flex-col items-center justify-center">
          <h1 className="text-6xl font-black text-white drop-shadow-lg">
            Lorem Ipsum
          </h1>
          <h2 className="font-light text-2xl text-white drop-shadow">
            Dolor sit amet, consecetur elit
          </h2>
          <div className="flex m-2">
            <button className="px-4 py-2 m-2 bg-white text-black rounded hover:bg-white/70 hover:shadow-xl">
              Amet
            </button>
            <button className="px-4 py-2 m-2 bg-blue-900 text-white font-bold rounded hover:bg-blue-900/70 hover:shadow-xl">
              Elit nullam
            </button>
          </div>
        </section>
        <section className="h-96 w-full quiet-section flex flex-col p-16">
          <h2 className="font-black text-4xl text-black drop-shadow">
            Dolor sit amet, consecetur elit
          </h2>
          <div className="flex">
            <div className="border border-black/20 m-6 mx-2 p-6 rounded bg-white drop-shadow-lg">
              <h2 className="font-extrabold text-gray-700 text-2xl">Ornare</h2>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                euismod, nisi vel tincidunt ornare, nisl nunc egestas nisi,
              </p>
            </div>
            <div className="border border-black/20 m-6 mx-2 p-6 rounded bg-white drop-shadow-lg">
              <h2 className="font-extrabold text-gray-700 text-2xl">Ornare</h2>
              <p className="text-gray-600">
                Vel tincidunt ipsum, consectetur nisl egestas eget. Nullam
                euismod, nisi vel tincidunt ornare, nisl nunc egestas nisi.
              </p>
            </div>
            <div className="border border-black/20 m-6 mx-2 p-6 rounded bg-white drop-shadow-lg">
              <h2 className="font-extrabold text-gray-700 text-2xl">Ornare</h2>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                euismod, nisi vel tincidunt ornare, nisl nunc egestas nisi,
              </p>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
};

export default Home;
