// This is sanity magic. It takes an object and changes the type by removing LocalizedStrings and changing them to strings.
// For arrays it does this recursively
export default function localizeSanityResultBody(value, languages) {
  // languages is an array of wanted languages in order from most to least, i.e. locale and then fallback
  if (Array.isArray(value)) {
    return value.map(v => localizeSanityResultBody(v, languages));
  } else if (typeof value == "object") {
    if (/^locale[A-Z]/.test(value._type)) {
      const language = languages.find(lang => value[lang]);
      return value[language];
    }

    return Object.keys(value).reduce((result, key) => {
      result[key] = localizeSanityResultBody(value[key], languages);
      return result;
    }, {});
  }
  return value;
}

/*
Unused, attempt at creating a type that changes the type of some of the keys of an object.
export type LocaleSpecificSanityObject<SanityObject> = {
  [p in keyof SanityObject]: SanityObject[p] extends LocalizedString
    ? string
    : SanityObject[p]
};

export type LocalizedSanityResult<SanityObject> = SanityResult<
  LocaleSpecificSanityObject<SanityObject>
>;
*/
