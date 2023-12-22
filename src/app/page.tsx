import Logo from '~/svg/Logo.svg';

export default function HomePage() {
  return (
    <section className='h-full bg-white'>
      <div className='layout relative flex h-full flex-col items-center justify-center py-12 text-center'>
        <Logo className='w-16' />
        <h1 className='mt-4'>Next.js + Tailwind CSS + TypeScript Starter</h1>
        <p className='font-Stapel mt-2 text-sm text-gray-800'>
          A starter for Next.js, Tailwind CSS, and TypeScript with Absolute
          Import, Seo, Link component, pre-configured with Husky{' '}
        </p>
      </div>
    </section>
  );
}
