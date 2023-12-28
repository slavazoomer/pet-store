import Image from 'next/image';

export const HeroSection = () => {
  return (
    <section className='max-w-screen-desktop flex w-full items-center justify-between gap-7 pb-28 pt-52'>
      <Image
        src='/images/hero-main.jpg'
        alt='Hero Section Img'
        width={550}
        height={422}
      />
      <div className='font-Stapel flex flex-col font-normal uppercase'>
        <h1 className='text-customOrange mb-4 text-[64px]'>Турбуйтеся</h1>
        <p className='text-customBlack mb-4 text-[32px]'>
          про вашого улюбленця
        </p>
        <div className='mb-20 flex items-center justify-between gap-5'>
          <Image
            src='/images/hero-secondary.png'
            alt='Hero Section Img'
            width={295}
            height={51}
          />
          <p className='text-customOrange text-[40px]'>з нами</p>
        </div>
        <button className='font-Stapel bg-customOrange ml-auto flex h-12 w-full max-w-[250px] items-center justify-center rounded-3xl text-base'>
          Каталог
        </button>
      </div>
    </section>
  );
};
