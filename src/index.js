module.exports = function humanize(num) {
    var ones = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    var tens = [
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    if ((num >= 100) & (num < 1000)) {
        return (
            ones[Math.floor(num / 100)] +
            " hundred" +
            (num % 100 ? " " + humanize(num % 100) : "")
        );
    }
    if ((num >= 20) & (num < 100)) {
        return (
            tens[Math.floor(num / 10) - 2] +
            (num % 10 ? " " + humanize(num % 10) : "")
        );
    }
    if ((num >= 0) & (num < 20)) {
        return ones[num];
    }
};
