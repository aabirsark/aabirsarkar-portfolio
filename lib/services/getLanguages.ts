export const getHelloTranslation = (languageCode: String) => {
  switch (languageCode) {
    case "en":
      return "Hello";
    case "es":
      return "Hola";
    case "fr":
      return "Bonjour";
    case "de":
      return "Hallo";
    case "it":
      return "Ciao";
    case "ja":
      return "こんにちは";
    case "ko":
      return "안녕하세요";
    case "pt":
      return "Olá";
    case "hi":
      return "नमस्कार";
    case "bn":
      return "নমস্কার";
    default:
      return "Hello";
  }
};

export const LANGUAGES = [
  "en", // English
  "es", // Spanish
  "fr", // French
  "de", // German
  "it", // Italian
  "bn", // Bengali
  "ja", // Japanese
  "ko", // Korean
  "pt", // Portuguese
  "hi", // Hindi
];
