export interface Card {
  question: string
  answer: string
  lastAttemptCorrect?: boolean
}

export interface CardOrganizer {
  organize: (cards: Card[]) => Card[]
}
