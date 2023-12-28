import Link from 'next/link';
import { BsPersonFill } from 'react-icons/bs';
import { IoHeart, IoSearch } from 'react-icons/io5';
import { PiShoppingCartSimpleFill } from 'react-icons/pi';
import { TbGridDots } from 'react-icons/tb';

export const Header = () => {
  return (
    <header className='max-w-screen-desktop font-Inter sticky top-0 flex h-20 w-full items-center text-sm font-medium'>
      <Link href='/' className='text-customOrange mr-16 text-3xl font-medium'>
        LOGO
      </Link>
      <div className='flex w-full items-center justify-between'>
        <button className='flex items-center gap-2'>
          <TbGridDots size={20} />
          <p>Каталог</p>
        </button>

        <search className='flex border-b md:w-[344px]'>
          <form
            method='get'
            action='/search'
            className='flex w-full justify-between'
          >
            <input
              type='search'
              name='search-text'
              placeholder='Пошук товарів'
              className='w-full border-0 focus:ring-0'
            />
            <button>
              <IoSearch />
            </button>
          </form>
        </search>

        <div className=' md:max-w-36'>
          <div className='flex h-20 gap-8 '>
            <button className='flex items-center gap-2'>
              <span>00</span>
              <PiShoppingCartSimpleFill />
            </button>
            <button className='flex items-center gap-2 md:order-last'>
              <p>Бажання</p>
              <IoHeart />
            </button>
            <button className='flex items-center gap-2'>
              <p>Вхід</p>
              <BsPersonFill />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
