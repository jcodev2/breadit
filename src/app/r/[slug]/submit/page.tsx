import { Editor } from '@/components/Editor'
import { db } from '@/libs/db'
import { notFound } from 'next/navigation'

interface PageProps {
  params: {
    slug: string
  }
}

export default async function Page({ params }: PageProps) {
  const subreddit = await db.subreddit.findFirst({
    where: {
      name: params.slug
    }
  })

  if (!subreddit) return notFound()

  return (
    <div className='flex flex-col items-start gap-6'>
      <div className='border-b border-gray-200 pb-5'>
        <div className='-ml-2 -mt-2 flex flex-wrap items-baseline'>
          <h3 className='ml-2 mt-2 text-lg font-semibold leading-6 text-gray-900'>
            Create a post
          </h3>
          <p className='ml-2 mt-1 truncate text-sm text-gray-500'>
            r/{subreddit.name}
          </p>
        </div>
      </div>

      {/* form */}
      <Editor subredditId={subreddit.id} />
    </div>
  )
}
