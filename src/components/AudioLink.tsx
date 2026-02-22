interface AudioLinkProps {
  url: string
  label: string
}

export function AudioLink({ url, label }: AudioLinkProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Listen to ${label}`}
      className="inline-flex items-center gap-1.5 text-sm text-amber-700 hover:text-amber-900 transition-colors"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-4 h-4 shrink-0"
        aria-hidden
      >
        <path d="M6.3 2.84A1.5 1.5 0 0 0 4 4.11v11.78a1.5 1.5 0 0 0 2.3 1.27l9.344-5.891a1.5 1.5 0 0 0 0-2.538L6.3 2.84Z" />
      </svg>
      Listen
    </a>
  )
}
