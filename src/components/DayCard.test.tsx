import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { DayCard } from './DayCard'

describe('DayCard', () => {
  it('omits the nt section when nt reading is missing', () => {
    render(
      <DayCard
        day={{
          date: '2026-05-22',
          parashaSlug: 'shavuot',
          readings: {
            torah: {
              label: 'Deuteronomy 15:1-16:17',
              book: 'Deuteronomy',
              chapter: 15,
              audioUrl: 'https://www.biblegateway.com/audio/purevoice/niv/Deut.15,Deut.16',
            },
            tanakh: {
              label: 'Ezekiel 44:15-31',
              book: 'Ezekiel',
              chapter: 44,
              audioUrl: 'https://www.biblegateway.com/audio/purevoice/niv/Ezek.44',
            },
          },
        }}
      />,
    )

    expect(screen.getByText('Deuteronomy 15:1-16:17')).toBeInTheDocument()
    expect(screen.getByText('Ezekiel 44:15-31')).toBeInTheDocument()
    expect(screen.queryByText('ב״ח')).not.toBeInTheDocument()
  })
})
