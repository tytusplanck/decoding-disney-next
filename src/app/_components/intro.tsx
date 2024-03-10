import { CMS_NAME } from '@/lib/constants';

export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-2xl md:text-5xl font-bold tracking-tighter leading-tight md:pr-8">
        Decoding Disney
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        Join{' '}
        <a className="underline" href="/about">
          me
        </a>{' '}
        as I share <strong>tips</strong>,<strong>tricks</strong>, and{' '}
        <strong>insights</strong> to help you make the most of your Disney
        vacations. Together, we'll <em className="italic">decode</em> the
        secrets of Disney World and create{' '}
        <em className="font-semibold">magical experiences</em> for everyone.
      </h4>
    </section>
  );
}
