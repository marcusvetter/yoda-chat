/**
 1. Take the first two words of a sentence, and just add them to the end. For example: 'You will find what you are looking for' turns into 'Find what you are looking for, you will.'
 2. Adding a 'hmmmm...' at the end of an altered question. For example, 'Do you know what I am talking about?' turns into 'Know what I am talking about, do you? Hmmm...?'
 3. Adding a 'yes' to an altered statement. For example: 'You are here for my help' turns into 'Here for my help, you are... yes...'
 */
function convertFromYodaText(text) {
    // Step 3: Remove yes...
    var text = text.replace('yes...', '');

    // Step 2: Remove Hmmm...?
    text = text.replace('Hmmm...?', '');

    // Trim
    text = text.trim();

    var words = text.split("\ ");
    if (words.length < 3) {
        return text;
    }

    // Last char
    var lastChar = text.slice(-1);
    var endsWithQuestionMark = lastChar === '?';
    var endsWithPoint = lastChar === '.';
    var endsWithExclamationMark = lastChar === '!';

    // Step 1: Rearrange first and second word
    var firstWord = words[0] === 'I' ? words[0] : words[0].toLowerCase();
    var lastWord = words[words.length - 1];
    var secondLastWord = words[words.length - 2];
    words = [secondLastWord, lastWord, firstWord].concat(words.splice(1, words.length - 3));

    var result = words.join(" ");

    // Remove comma
    var endsWithComma = result.charAt(result.length - 1) === ',';
    if (endsWithComma) {
        result = result.slice(0, -1);
    }

    // Rearrange question mark, exclamation mark or point
    if (endsWithQuestionMark || endsWithPoint || endsWithExclamationMark) {
        result = result.replace(/\?/g, '').replace(/!/g, '').replace(/\./g, '');
        result += lastChar;
    }

    // First letter uppercase
    result = result.charAt(0).toUpperCase() + result.slice(1);

    return result;
}

module.exports = convertFromYodaText;