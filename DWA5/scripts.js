class CriticalError extends Error {
  constructor(message) {
    super(message);
    this.name = "CriticalError";
  }
}

const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

const handleCalculateResult = (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  if (!dividend || !divider) {
    result.innerText =
      "Division not performed. Both values are required in inputs. Try again";
  } else {
    try {
      if (divider < 0) {
        throw new Error(
          "Division not performed. Invalid number provided. Try again"
        );
      }

      if (isNaN(dividend) || isNaN(divider)) {
        throw new CriticalError(
          "Something critical went wrong. Please reload the page"
        );
      }

      const answer = Math.floor(dividend / divider);
      result.innerText = answer;
    } catch (error) {
      if (error instanceof CriticalError) {
        document.body.innerText = error.message;
      } else {
        result.innerText = error.message;
      }
      console.error(error);
    }
  }
};

form.addEventListener("submit", handleCalculateResult);
