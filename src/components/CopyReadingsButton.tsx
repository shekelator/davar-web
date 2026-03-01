import { useState } from 'react'
import { type Reading } from '../data/schedule'
import { APP_CONFIG } from '../config'

interface CopyReadingsButtonProps {
  readings: {
    torah: Reading
    tanakh?: Reading
    nt: Reading
  }
  date: string
}

export function CopyReadingsButton({ readings, date }: CopyReadingsButtonProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    // Format readings list: "Exodus 27:20-28:30, Isaiah 37-38, Acts 7"
    const parts = [
      readings.torah.label,
      readings.tanakh?.label,
      readings.nt.label
    ].filter(Boolean).join(', ')
    
    const url = `${APP_CONFIG.baseUrl}/date/${date}`
    const text = `${APP_CONFIG.copyMessageIntro}${parts}. Read or listen here: ${url}`

    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center justify-center p-2 bg-stone-50 text-stone-500 hover:bg-stone-100 hover:text-stone-700 border border-stone-200 rounded-lg transition-colors"
      aria-label="Copy readings to clipboard"
      title="Copy to clipboard"
    >
      {copied ? (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-emerald-600">
          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
          <path fillRule="evenodd" d="M13.887 3.182c.396.037.79.08 1.183.128C16.194 3.45 17 4.414 17 5.517V16.75A2.25 2.25 0 0 1 14.75 19h-9.5A2.25 2.25 0 0 1 3 16.75V5.517c0-1.103.806-2.068 1.93-2.207.393-.048.787-.09 1.183-.128A3.001 3.001 0 0 1 9 1h2c1.373 0 2.531.923 2.887 2.182ZM7.5 4A1.5 1.5 0 0 1 9 2.5h2A1.5 1.5 0 0 1 12.5 4v.5h-5V4Z" clipRule="evenodd" />
        </svg>
      )}
    </button>
  )
}
