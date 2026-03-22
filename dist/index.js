import * as fs from 'node:fs'; // node: prefix ашиглах нь илүү найдвартай
import { RecentMistakesFirstSorter } from './organizer.js'; // .js өргөтгөл заавал бичнэ
// Командын мөрийн аргументуудыг авах
const args = process.argv.slice(2);
const fileArg = args[0];
// --order аргументыг авах
const orderIndex = args.indexOf('--order');
const orderArg = orderIndex !== -1 ? args[orderIndex + 1] : undefined;
// Тусламж харуулах эсвэл файл заагаагүй бол зогсоох
if (args.includes('--help') || fileArg === undefined) {
    console.log('Ашиглах заавар: node dist/index.js <cards-file> --order recent-mistakes-first');
    process.exit(0);
}
try {
    // Файл унших
    const rawData = fs.readFileSync(fileArg, 'utf-8');
    let cards = JSON.parse(rawData);
    // Хэрэв recent-mistakes-first сонгосон бол эрэмбэлэх
    if (orderArg === 'recent-mistakes-first') {
        const sorter = new RecentMistakesFirstSorter();
        cards = sorter.organize(cards);
    }
    console.log('Ачаалласан картууд:', cards);
}
catch (error) {
    console.error('Файл уншихад алдаа гарлаа:', error instanceof Error ? error.message : error);
    process.exit(1);
}
//# sourceMappingURL=index.js.map