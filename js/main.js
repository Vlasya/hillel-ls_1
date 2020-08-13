
let R = +(prompt('Введите значение радиуса основания цилиндра'));
console.log(R);
let H = +(prompt('Введите значение высоты цилиндра'));

// объема цилиндра
let V = Math.round(Math.PI*(R*R)*H);
// Площадь основания
let S = Math.round(2*Math.PI*R*H);


document.write(
'<p>**************</p>',
'<p><span>Обьем цилиндра с площадью основы </span>'+S+ '<span>, радиусом </span>'+R+'<span> и высотой </span>'+H+'<span> равен:</span></p>',
'<p>--------------------</p>',
'<p><span>V = </span>'+V+'<span>.</span></p>',
'<p>-------------------</p>',
'<p>end.</p>');