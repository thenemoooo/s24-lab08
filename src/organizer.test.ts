import { RecentMistakesFirstSorter } from './organizer.js'
// Хэрэв алдаа гарсаар байвал импортыг ингэж сольж үзнэ:
// import * as Organizer from './organizer.js'
// const sorter = new Organizer.RecentMistakesFirstSorter()

describe('RecentMistakesFirstSorter', () => {
  const sorter = new RecentMistakesFirstSorter()

  test('буруу хариулсан картуудыг эхэнд эрэмбэлэх ёстой', () => {
    const mockCards: any[] = [
      { question: 'Q1', answer: 'A1', lastAttemptCorrect: true },
      { question: 'Q2', answer: 'A2', lastAttemptCorrect: false }
    ]
    const organized = sorter.organize(mockCards)
    expect(organized[0]?.lastAttemptCorrect).toBe(false)
  })
})
