function indexOfIgnoreCase(str1, str2) {
  let strOne = str2.toLowerCase();
  let strTwo = str1.toLowerCase();
  return strTwo.indexOf(strOne);
}

console.log(indexOfIgnoreCase("bit", "en"));
