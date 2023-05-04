let isLeap = (year) => {
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    console.log("Високосный год");
  } else {
    console.log("Не високосный год");
  }
};
isLeap(1996);
