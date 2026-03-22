import type { Card, CardOrganizer } from './types.js';
export declare class RecentMistakesFirstSorter implements CardOrganizer {
    organize(cards: Card[]): Card[];
}
