export class FieldMethods {
  static setInputHeight(element: React.ChangeEvent<HTMLTextAreaElement>) {
    element.target.style.height = "16px";
    element.target.style.height = `${element.target.scrollHeight}px`;
  }

  static removeSpaces(element: React.FocusEvent<HTMLTextAreaElement>) {
    element.target.value = element.target.value.trim();
    this.setInputHeight(element);
  }
}
