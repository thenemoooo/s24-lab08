export class RecentMistakesFirstSorter {
    organize(cards) {
        const mistakes = cards.filter(card => card.lastAttemptCorrect === false);
        const others = cards.filter(card => card.lastAttemptCorrect !== false);
        return [...mistakes, ...others];
    }
}
//# sourceMappingURL=organizer.js.map