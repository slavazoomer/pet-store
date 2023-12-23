import Link from "next/link";
import { BsPersonFill } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { IoHeart } from "react-icons/io5";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { TbGridDots } from "react-icons/tb";




export const Header  = () => {

  return <header className="flex w-full h-20 justify-between items-center sticky top-0">

      <Link href="/">
        Logo
      </Link>
      <div className="md:flex gap-24">
        <button className="flex gap-2 items-center"> 
          <TbGridDots/>
          <span>Каталог</span>
        </button>

        <div>
          <search className="border-b">
            <form method="get" action="/search">
              <input type="search" name="search-text" placeholder="Пошук товарів" className="border-0" />
              <button>
                <IoSearch />
              </button>
            </form>
          </search>
        </div>
      </div>


    <div className=" md:max-w-36">
      <div className="flex gap-8 h-20 "  >
        <div className="flex gap-2 items-center">
          <span>00</span>
          <PiShoppingCartSimpleFill />
        </div>
        <div className="flex gap-2 items-center md:order-last">
          <span>Бажання</span>
          <IoHeart />
        </div>
        <div className="flex gap-2 items-center">
          <span>Вхід</span>
          <BsPersonFill />
        </div>
      </div>
    </div>

    
    </header>
}