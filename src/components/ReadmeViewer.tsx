// src/components/ReadmeViewer.tsx
import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'

interface Props {
  slug: string
}

export function ReadmeViewer({ slug }: Props) {
  const [content, setContent] = useState<string>('')

  useEffect(() => {
    fetch(`/docs/${slug}.md`)
      .then((res) => res.ok ? res.text() : 'README non disponible.')
      .then(setContent)
      .catch(() => setContent('README non disponible.'))
  }, [slug])

  return (
    <div className="prose prose-invert max-w-none text-gray-300">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  )
}
