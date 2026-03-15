export function CommentaryLink({ url }: { url: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Read Commentary"
      className="inline-flex items-center gap-1.5 text-sm text-stone-500 hover:text-stone-800 transition-colors"
    >
      <span 
        className="text-lg font-bold leading-none shrink-0" 
        style={{ fontFamily: '"Frank Ruhl Libre", serif' }}
        aria-hidden="true"
      >
        ע
      </span>
      <span className="hidden sm:inline">Hebrew</span>
    </a>
  )
}
