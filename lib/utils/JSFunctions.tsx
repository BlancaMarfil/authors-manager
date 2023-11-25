const crypto = require("crypto");

function generateHexValues(name: string) {
  // Use a hash function (e.g., SHA-256) to generate a fixed-size hash
  const hash = crypto.createHash("sha256").update(name).digest("hex");

  // Extract parts of the hash and convert them to hexadecimal
  const hexValue1 = hash.substring(0, 6);
  const hexValue2 = hash.substring(6, 12);

  return [hexValue1, hexValue2];
}

export const generateBackground = (name: string) => {
  const [newColor1, newColor2] = generateHexValues(name);
  const angle = 45;

  const gradient =
    "linear-gradient(" + angle + "deg, #" + newColor1 + ", #" + newColor2 + ")";

  return gradient;
};
