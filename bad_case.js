export function say_random_message() {
  const messages = [
    "C is the origin of C++",
    "C++ is the best language",
    "Java is the great OOP language",
    "JavaScript is super cool",
    "Python is the most reasonable language",
    "Ruby is the spirit of Japanese",
  ];
  const index = Math.floor(Math.random() * messages.length);
  return messages[index];
}

console.log(say_random_message());
