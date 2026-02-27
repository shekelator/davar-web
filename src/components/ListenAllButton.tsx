import { getListenAllUrl, type Reading } from '../data/schedule'

interface ListenAllButtonProps {
  readings: {
    torah: Reading
    tanakh?: Reading
    nt: Reading
  }
}

export function ListenAllButton({ readings }: ListenAllButtonProps) {
  const url = getListenAllUrl(readings)

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-50 text-amber-800 hover:bg-amber-100 hover:text-amber-900 border border-amber-200 rounded-lg text-xs font-medium transition-colors"
      aria-label="Listen to all readings for today"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-3.5 h-3.5"
        aria-hidden
      >
        <path d="M6.3 2.84A1.5 1.5 0 0 0 4 4.11v11.78a1.5 1.5 0 0 0 2.3 1.27l9.344-5.891a1.5 1.5 0 0 0 0-2.538L6.3 2.84Z" />
      </svg>
      Listen to all
    </a>
  )
}
