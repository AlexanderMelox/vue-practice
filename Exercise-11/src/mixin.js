export const mixin = {
  computed: {
    reverseTextComputed() {
      return this.text
        .split("")
        .reverse()
        .join("");
    },
    lengthOfWordComputed() {
      return `${this.text} (${this.text.length})`;
    }
  }
};
