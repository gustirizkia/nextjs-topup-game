import Image from "next/image";
import BannerImg from "../asset/home/banner_image.png";
import Game1 from "../asset/home/game1.jpg";
import Game3 from "../asset/home/game3.jpg";
import Game4 from "../asset/home/game4.jpg";
import Game5 from "../asset/home/game5.jpg";
import Game6 from "../asset/home/game6.jpg";
import Game7 from "../asset/home/game7.jpg";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <header
        style={{
          // backgroundImage: `url(${ImgHeader.src})`,
          // backgroundSize: "cover",
          minHeight: 600,
        }}
        className="justify-center items-center flex flex-col px-3 md:px-32"
      >
        <div className="grid grid-flow-row grid-cols-12 gap-6">
          <div className="md:col-span-6 col-span-12 md:hidden">
            <Image src={BannerImg} alt="Topup Game" />
          </div>
          <div className="md:col-span-6 col-span-12  flex flex-col justify-center text-center md:text-left">
            <h1 className="md:text-4xl text-3xl md:font-semibold  ">
              Fast Topup
            </h1>
            <p className=" mt-4 md:text-2xl">
              Kami menyediakan jutaan cara untuk <br /> membantu players menjadi
              pemenang sejati
            </p>

            <div className="mt-5 flex items-center justify-center md:justify-start">
              <div className="btn btn-primary px-10  rounded-full">
                Lihat Game
              </div>
              <div className="btn btn-outline btn-primary px-10  ml-6 rounded-full">
                Login
              </div>
            </div>
          </div>
          <div className="md:col-span-6 col-span-12 hidden md:block">
            <Image src={BannerImg} alt="Topup Game" />
          </div>
        </div>
      </header>

      <div className="md:px-32 px-3 mt-10 pb-20">
        <h1 className="font-bold text-3xl mb-5">
          Our Featured <br /> Games This Year
        </h1>
        <div className=" flex flex-wrap">
          <Link
            href="/detail"
            className="md:h-[400px] h-72 md:w-48 w-[50%] relative px-4"
          >
            <div className="relative h-[70%] md:h-[60%] w-full">
              <Image
                src={Game1}
                alt="Game"
                className="rounded-lg"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <h1 className="font-semibold mt-2 md:text-lg">Mobile Legend</h1>
            <p className="text-xs text-gray-600">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </Link>
          <Link
            href="/detail"
            className="md:h-[400px] h-72 md:w-48 w-[50%] relative px-4"
          >
            <div className="relative h-[70%] md:h-[60%] w-full">
              <Image
                src={Game3}
                alt="Game"
                className="rounded-lg"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <h1 className="font-semibold mt-2 md:text-lg">Valorant</h1>
            <p className="text-xs text-gray-600">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </Link>
          <Link
            href="/detail"
            className="md:h-[400px] h-72 md:w-48 w-[50%] relative px-4"
          >
            <div className="relative h-[70%] md:h-[60%] w-full">
              <Image
                src={Game5}
                alt="Game"
                className="rounded-lg"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <h1 className="font-semibold mt-2 md:text-lg">Free Fire</h1>
            <p className="text-xs text-gray-600">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </Link>
          <Link
            href="/detail"
            className="md:h-[400px] h-72 md:w-48 w-[50%] relative px-4"
          >
            <div className="relative h-[70%] md:h-[60%] w-full">
              <Image
                src={Game7}
                alt="Game"
                className="rounded-lg"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <h1 className="font-semibold mt-2 md:text-lg">COC</h1>
            <p className="text-xs text-gray-600">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </Link>
          <Link
            href="/detail"
            className="md:h-[400px] h-72 md:w-48 w-[50%] relative px-4"
          >
            <div className="relative h-[70%] md:h-[60%] w-full">
              <Image
                src={Game6}
                alt="Game"
                className="rounded-lg"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <h1 className="font-semibold mt-2 md:text-lg">HOK</h1>
            <p className="text-xs text-gray-600">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </Link>
          <Link
            href="/detail"
            className="md:h-[400px] h-72 md:w-48 w-[50%] relative px-4"
          >
            <div className="relative h-[70%] md:h-[60%] w-full">
              <Image
                src={Game4}
                alt="Game"
                className="rounded-lg"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <h1 className="font-semibold mt-2 md:text-lg">PUBG</h1>
            <p className="text-xs text-gray-600">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </Link>
        </div>
      </div>
    </main>
  );
}
