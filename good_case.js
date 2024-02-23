export function random_int(max, min) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function get_message(index) {
  const messages = [
    "C is the origin of C++",
    "C++ is the best language",
    "Java is the great OOP language",
    "JavaScript is super cool",
    "Python is the most reasonable language",
    "Ruby is the spirit of Japanese",
  ];
  return messages[index];
}

export function say_random_message() {
  const index = random_int(5, 0);
  return get_message(index);
}

console.log(say_random_message());
