import { getReadAllUrl, type Reading } from '../data/schedule'

interface ReadAllButtonProps {
  readings: {
    torah: Reading
    tanakh?: Reading
    nt: Reading
  }
}

export function ReadAllButton({ readings }: ReadAllButtonProps) {
  const url = getReadAllUrl(readings)

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-50 text-emerald-800 hover:bg-emerald-100 hover:text-emerald-900 border border-emerald-200 rounded-lg text-xs font-medium transition-colors"
      aria-label="Read all readings for today (TLV)"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-3.5 h-3.5"
        aria-hidden
      >
        <path d="M10 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
        <path fillRule="evenodd" d="M.664 10.59a1.651 1.651 0 0 1 0-1.186A10.004 10.004 0 0 1 10 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0 1 10 17c-4.257 0-7.893-2.66-9.336-6.41ZM14 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" clipRule="evenodd" />
      </svg>
      Read all
    </a>
  )
}
