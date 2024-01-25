function likes(names) {
  // TODO
  let message = "";
  if (names.length == 1) {
    message = `${names[0]} likes this`;
  } else if (names.length == 2) {
    message = `${names[0]} and ${names[1]} like this`;
  } else if (names.length == 3) {
    message = `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else if (names.length > 3) {
    message = `${names[0]}, ${names[1]} and ${
      names.length - 2
    } others like this`;
  } else {
    message = "no one likes this";
  }

  console.log(message);
  return message;
}

console.log(likes(["rizal", "Pradana", "nawang", "boys"]));
