import { getAllPosts } from '@/lib/api';

export default function Main() {
  const allPosts = getAllPosts();

  return (
    <main className="min-h-screen flex flex-col">
      <section className="flex flex-col items-start justify-center w-full h-screen p-4 md:p-8">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900  mb-4">
          Decoding Disney.
        </h1>
        <h2 className="text-lg md:text-xl text-gray-700">
          Join me as I share <strong>tips</strong>, <strong>tricks</strong>, and{' '}
          <strong>insights</strong> to help you make the most of your Disney
          vacations. Together, we'll <em className="italic">decode</em> the
          secrets of Disney World and create{' '}
          <em className="font-semibold">magical experiences</em> for everyone.
        </h2>
        <div className="flex justify-end items-center mt-32">
          <h3 className="text-lg md:text-xl font-bold text-gray-700  mr-4">
            Latest articles this way &#128071;
          </h3>
        </div>
      </section>

      <section className="flex flex-col items-start text-left w-full h-[40vh] p-4 md:p-8">
        <h3 className="text-lg md:text-xl font-bold mb-4 text-gray-900 ">
          Articles
        </h3>
        <ul className="flex flex-col space-y-4 w-full">
          <ul className="flex flex-col space-y-4 w-full">
            {allPosts.map((post) => (
              <li>
                <a
                  href={`/posts/${post.slug}`}
                  className="text-md md:text-lg font-semibold text-gray-600 hover:text-blue-900 transition-colors"
                >
                  {post.title}
                </a>
              </li>
            ))}
          </ul>
        </ul>
      </section>
    </main>
  );
}
