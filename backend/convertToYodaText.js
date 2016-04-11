/**
 1. Take the first two or three words of a sentence, and just add them to the end. For example: 'You will find what you are looking for' turns into 'Find what you are looking for, you will.'
 2. Adding a 'hmmmm...' at the end of an altered question. For example, 'Do you know what I am talking about?' turns into 'Know what I am talking about, do you? Hmmm...?'
 3. Adding a 'yes' to an altered statement. For example: 'You are here for my help' turns into 'Here for my help, you are... yes...'
 */
function convertToYodaText(text) {
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
    var secondWord = words[1];
    var result = words.splice(1).splice(1).join(" ");
    result += ', ' + firstWord + ' ' + secondWord;

    // Rearrange question mark, exclamation mark or point
    if (endsWithQuestionMark || endsWithPoint || endsWithExclamationMark) {
        result = result.replace(/\?/g, '').replace(/!/g, '').replace(/\./g, '');
        result += lastChar;
    }

    // First letter uppercase
    result = result.charAt(0).toUpperCase() + result.slice(1);

    // Step 2: Add Hmmm...?
    if (endsWithQuestionMark) {
        result += ' Hmmm...?'
    }

    // Step 3: Add yes...
    result += ' yes...';

    return result;
}

module.exports = convertToYodaText;