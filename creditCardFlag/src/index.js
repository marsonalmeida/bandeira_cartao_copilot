function getCardBrand(cardNumber) {
    const cardRules = [
        { brand: "Visa", prefixes: [/^4/], lengths: [13, 16, 19] },
        { brand: "Mastercard", prefixes: [/^5[1-5]/, /^2(2[2-9]|[3-6][0-9]|7[0-1]|720)/], lengths: [16] },
        { brand: "Elo", prefixes: [/^4011/, /^4389/, /^4576/, /^5041/, /^5067/, /^509/], lengths: [16] },
        { brand: "Hipercard", prefixes: [/^606282/, /^3841/], lengths: [13, 19] },
        { brand: "American Express", prefixes: [/^34/, /^37/], lengths: [15] },
        { brand: "Diners Club", prefixes: [/^30[0-5]/, /^36/, /^38/], lengths: [14] },
        { brand: "Discover", prefixes: [/^6011/, /^622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5])/, /^64[4-9]/, /^65/], lengths: [16] },
        { brand: "Aura", prefixes: [/^50/], lengths: [19] },
        { brand: "Cabal", prefixes: [/^6042/, /^6043/, /^6044/], lengths: [16] },
        { brand: "JCB", prefixes: [/^35(2[8-9]|[3-8][0-9])/], lengths: [16] },
        { brand: "EnRoute", prefixes: [/^2014/, /^2149/], lengths: [15] },
    ];

    // Remove non-digit characters
    const sanitizedCardNumber = cardNumber.replace(/\D/g, "");

    for (const rule of cardRules) {
        const matchesPrefix = rule.prefixes.some(prefix => prefix.test(sanitizedCardNumber));
        const matchesLength = rule.lengths.includes(sanitizedCardNumber.length);

        if (matchesPrefix && matchesLength) {
            return rule.brand;
        }
    }

    return "Unknown";
}


// Exemplos de números de cartão para cada bandeira:

// Visa: Começa com 4, comprimento de 13, 16 ou 19 dígitos
const visaExample = "4111111111111111"; // 16 dígitos

// Mastercard: Começa com 51-55 ou 2221-2720, comprimento de 16 dígitos
const mastercardExample = "5105105105105100"; // 16 dígitos

// Elo: Começa com 4011, 4389, 4576, 5041, 5067, 509, comprimento de 16 dígitos
const eloExample = "4011788888881881"; // 16 dígitos

// Hipercard: Começa com 606282 ou 3841, comprimento de 13 ou 19 dígitos
const hipercardExample = "6062825624254001"; // 19 dígitos

// American Express: Começa com 34 ou 37, comprimento de 15 dígitos
const amexExample = "371449635398431"; // 15 dígitos

// Diners Club: Começa com 300-305, 36 ou 38, comprimento de 14 dígitos
const dinersExample = "30569309025904"; // 14 dígitos

// Discover: Começa com 6011, 622126-622925, 644-649 ou 65, comprimento de 16 dígitos
const discoverExample = "6011111111111117"; // 16 dígitos

// Aura: Começa com 50, geralmente com 19 dígitos
const auraExample = "5078601870000127981"; // 19 dígitos

// Cabal: Começa com 6042, 6043 ou 6044, comprimento de 16 dígitos
const cabalExample = "6042010500000000"; // 16 dígitos

// JCB: Começa com 3528-3589, comprimento de 16 dígitos
const jcbExample = "3528000700000000"; // 16 dígitos

// EnRoute: Começa com 2014 ou 2149, comprimento de 15 dígitos
const enrouteExample = "201400000000009"; // 15 dígitos


// Example usage:
const cardNumber = "6042010500000000"; // Replace with the card number to test
console.log(getCardBrand(cardNumber)); // Output: Visa