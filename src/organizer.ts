// src/organizer.ts
import type { Card, CardOrganizer } from './types.js'

export class RecentMistakesFirstSorter implements CardOrganizer {
  organize (cards: Card[]): Card[] {
    const mistakes = cards.filter(card => card.lastAttemptCorrect === false)
    const others = cards.filter(card => card.lastAttemptCorrect !== false)
    return [...mistakes, ...others]
  }
}
