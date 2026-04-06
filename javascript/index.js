function getFlagEmoji(code) {
  const codePoints = code
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

let flagElement = document.querySelector("#flag");
flagElement.innerHTML = getFlagEmoji("us");
