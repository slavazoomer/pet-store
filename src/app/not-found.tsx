import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Not Found',
};

const NotFound = () => {
  return (
    <section className='bg-white'>
      <div className='layout flex min-h-screen flex-col items-center justify-center text-center text-black'>
        <h1 className='mt-8 text-4xl md:text-6xl'>Page Not Found</h1>
        <a href='/'>Back to home</a>
      </div>
    </section>
  );
};

export default NotFound;
