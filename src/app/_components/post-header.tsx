import CoverImage from './cover-image';
import DateFormatter from './date-formatter';
import { PostTitle } from '@/app/_components/post-title';

type Props = {
  title: string;
  coverImage: string;
  date: string;
};

export function PostHeader({ title, coverImage, date }: Props) {
  return (
    <>
      <div className="mb-8 md:mb-16 sm:mx-0 flex justify-center">
        <CoverImage title={title} src={coverImage} />
      </div>
      <div className="flex justify-center">
        <PostTitle>{title}</PostTitle>
      </div>
      <div className="flex justify-center max-w-2xl mx-auto">
        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  );
}
