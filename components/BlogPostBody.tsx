import { BlogBodyBlock } from '@/lib/blogPosts'

export default function BlogPostBody({ blocks }: { blocks: BlogBodyBlock[] }) {
  return (
    <div className="flex flex-col gap-5">
      {blocks.map((block, i) => {
        if (block.type === 'heading') {
          return (
            <h2 key={i} className="font-display text-2xl font-bold mt-4" style={{ color: '#0d2b15' }}>
              {block.text}
            </h2>
          )
        }
        if (block.type === 'list') {
          return (
            <ul key={i} className="flex flex-col gap-2 pl-1">
              {block.items.map((item, j) => (
                <li key={j} className="text-gray-600 text-base leading-relaxed flex gap-2.5">
                  <span style={{ color: '#2ea84a' }}>✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )
        }
        return (
          <p key={i} className="text-gray-600 text-base leading-relaxed">
            {block.text}
          </p>
        )
      })}
    </div>
  )
}
