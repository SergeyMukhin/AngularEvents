import { FormControl } from "@angular/forms";

export function restictedWords(words: string[]): (control: FormControl) => ({ [key: string]: any }) {
    return (control: FormControl) => {
        if (!words) { return null; }

        let restrictedWords = words.map(w => control.value.includes(w) ? w : null).filter(w => w !== null);

        if (restrictedWords.length > 0) {
            return { 'restrictedWords': restrictedWords.join(', ') }
        }
        return null;
    }
};