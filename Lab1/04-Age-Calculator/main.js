var userAgeInYears = Number(prompt(`How old are you?`));
var userAgeInDays = userAgeInYears * 365.25;

if (userAgeInYears > 0) {
    alert(`${userAgeInYears} years is roughly ${userAgeInDays} days`);
} else {
  alert(`invalid iput. Try again.`);
}
