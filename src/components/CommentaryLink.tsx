export function CommentaryLink({ url }: { url: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Read Commentary"
      className="inline-flex items-center gap-1.5 text-sm text-stone-500 hover:text-stone-800 transition-colors"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 shrink-0" aria-hidden="true">
        <path fillRule="evenodd" d="M10 2c-1.716 0-3.408.106-5.07.31C3.806 2.45 3 3.414 3 4.517V17.25a.75.75 0 001.075.676c2.813-1.018 5.892-1.018 8.705 0a.75.75 0 001.075-.676V4.517c0-1.103-.806-2.068-1.93-2.207A41.403 41.403 0 0010 2zM5.5 6a.75.75 0 000 1.5h9a.75.75 0 000-1.5h-9zm0 2.5a.75.75 0 000 1.5h9a.75.75 0 000-1.5h-9zm0 2.5a.75.75 0 000 1.5h9a.75.75 0 000-1.5h-9zm0 2.5a.75.75 0 000 1.5h9a.75.75 0 000-1.5h-9z" clipRule="evenodd" />
      </svg>
      Commentary
    </a>
  )
}
