import Link from 'next/link'
import ReactMarkdown from 'react-markdown';

export default function Card({ article }) {
    const category = article.__typename.replace('Article', '').toLowerCase();
    const { title, slug, ArticleBase, published_at } = article;
    return (
        <Link href={`${category}/${slug}`}>
            <a className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                <div className="flex-1 bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-shadow">
                    <img src={`http://localhost:1337${ArticleBase.images[0].url}`} alt={title} className='rounded-2xl w-full' />
                    <div className="w-full font-bold text-xl text-gray-800 px-6 my-5">
                        {title}
                    </div>
                    <p className="text-gray-800 text-base px-6 mb-5">
                        {ArticleBase.content.slice(0, 200) + ' ...'}
                    </p>
                </div>
                    {/* <div className='flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6'>
        <div className='flex items-center justify-center'>
          <button className='mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out'>
            Action
          </button>
        </div>
      </div> */}
            </a>
        </Link>
    )
}