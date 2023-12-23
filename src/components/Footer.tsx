import Image from 'next/image';
import { AiOutlineInstagram } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';
import { FiFacebook } from 'react-icons/fi';
import { IconType } from 'react-icons/lib';
import { PiTelegramLogo } from 'react-icons/pi';

import { ScrollToTopBtn } from '@/components/Buttons';

const FooterIcon = ({ icon, text }: { icon: IconType; text: string }) => {
  return (
    <p className='flex items-center gap-2'>
      <span className='bg-customWhite rounded-full p-[4px]'>
        {icon({ className: 'text-customOrange' })}
      </span>
      {text}
    </p>
  );
};

export const Footer = () => {
  return (
    <footer className="text-customWhite flex w-full flex-col items-center bg-[url('/images/bg-footer.png')] bg-cover">
      <div className='border-customWhite flex w-full justify-center border-b px-4'>
        <div className='max-w-screen-desktop flex w-full flex-col'>
          <ScrollToTopBtn />
          <div className='flex w-full items-center justify-center pb-11'>
            <div className='mr-32 flex flex-col items-center'>
              <p className='text-customWhite text-5xl'>LOGO</p>
              <Image
                src='/images/logo-footer.png'
                alt='Footer Logo'
                width={102}
                height={115}
              />
            </div>
            <div className='flex gap-14'>
              <div>
                <h4 className='font-Stapel mb-2 text-base'>Контакти</h4>
                <div className='flex flex-col gap-2'>
                  <div className='flex flex-col gap-1'>
                    <FooterIcon icon={BsTelephone} text='+380 93 555 55 55' />
                    <p className='ml-auto font-medium underline'>
                      Зателефонувати вам?
                    </p>
                  </div>
                  <FooterIcon icon={PiTelegramLogo} text='Telegram' />
                  <FooterIcon icon={AiOutlineInstagram} text='Instagram' />
                  <FooterIcon icon={FiFacebook} text='Facebook' />
                </div>
              </div>
              <div>
                <h4 className='font-Stapel mb-2 text-base'>Каталог</h4>
                <div className='flex flex-col gap-2'>
                  <p>Котам</p>
                  <p>Собакам</p>
                  <p>Птахам</p>
                  <p>Рибам</p>
                </div>
              </div>
              <div>
                <h4 className='font-Stapel mb-2 text-base'>Клієнтам</h4>
                <div className='flex flex-col gap-2'>
                  <p>Доставка і оплата</p>
                  <p>Обмін і повернення</p>
                  <p>Публічна оферта</p>
                  <p>Політика конфіденційності</p>
                </div>
              </div>
              <div>
                <h4 className='font-Stapel mb-4 text-base'>Способи оплати:</h4>
                <div className='flex gap-4'>
                  <span className='bg-customWhite h-10 w-16 rounded-md' />
                  <span className='bg-customWhite h-10 w-16 rounded-md' />
                  <span className='bg-customWhite h-10 w-16 rounded-md' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='text-customBlack flex w-full flex-col items-center gap-1 px-4 py-5'>
        <p>© {new Date().getFullYear()}</p>
        <p>Інтернет-зоомагазин</p>
        <p>Всі права захищені. </p>
      </div>
    </footer>
  );
};
