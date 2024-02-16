let number = +prompt(
  "Istalgan soningizni kiriting va uni toq yoki juft ekanligini tekshirib beramiz."
);

while (isNaN(number)) {
  number = +prompt("Bu son emas, iltimos son kiriting!");
}

while (number == 0) {
  number = +prompt("Bu son emas, iltimos son kiriting!");
}

if (number % 2 == 1) {
  alert("Bu son toq");
} else {
  alert("Bu son juft");
}

let qiymat = +prompt("Iltimos, qiymatni kiriting.");

while (isNaN(qiymat)) {
  qiymat = +prompt("Qiymat son ko'rinishida bo'lishi kerak!");
}

while (qiymat == 0) {
  qiymat = +prompt("0 dan boshqa son kiriting");
}
let daraja = +prompt("Endi darajaga oshirish uchun son kiriting.");
while (isNaN(daraja)) {
  daraja = +prompt("Daraja son ko'rinishida bo'lishi kerak!");
}

if (qiymat > 0) {
  alert("Natija " + qiymat ** daraja);
} else {
  alert("Nimadur xato ketti, son kiriting");
}

function factorialize(num) {
  if (num === 0 || num === 1) return 1;
  for (let i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
}
let fac = +prompt("Son kiriting va biz uni faktorialini ko'rsatamiz.");
alert("Javob: " + factorialize(fac));
