'use client';
import { MdKeyboardArrowUp } from 'react-icons/md';

export const ScrollToTopBtn = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className='bg-customOrange border-customWhite mb-20 ml-auto flex h-20 w-20 items-center justify-center rounded-full border'
    >
      <MdKeyboardArrowUp className='text-customWhite' size={30} />
    </button>
  );
};
