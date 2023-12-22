export function insideLink(element) {
  while (element) {
    if (element.tagName === "A") {
      return true; // Return the anchor element if found
    }
    element = element.parentElement;
  }
  return false; // Return null if no anchor element is found
}
