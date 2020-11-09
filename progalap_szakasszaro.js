// 1. Írj példát az összes általad ismert adattípusra és kommentezd fölé a nevét!
//   szám(int), logikai érték(boolean),       string        tömb                   objektum
//      22;          true,                     'szöveg',     [1, 2, 3]   let valami = {age: 24, name: Barbi}
// 2. feladat
//Változók = deklaráljuk, kezdeti értéket adhatunk neki, új értéket is kaphat
let name = 'Barbi';
console.log(name)
name = 'Viktor';
console.log(name);
//Konstansok = deklaráljuk, kötelező "kezdeti" értéket adni neki, nem kaphat új értéket
const age = 24;
console.log(age);
// age = 15;

// 3.feladat
//Érték szerinti átadás esetén az egyszerű adattípusok érték szerint adódnak át vagyis a függvényben való módosítások nem érintik az eredeti változó értékét.
//Referencia szerint átadás esetén pl tömb átadás esetén, ha azon módosítást végzünk, akkor a hívó tömb is módosul.

let num = 10;
let fruits = ['banana', 'apple', 'kiwi'];
const example = (b, array) => {
  b = 24;
  array.push('avokado');
  console.log(b);
};
example(num, fruits);
console.log(num);
console.log(fruits);

// 4.feladat

const containsElement = (element, arr) => {
    let i = 0;
    while (i < arr.length && arr[i] !== element) {
      i++;
    }
    if (i < arr.length) {
      return true;
    } else {
      return false;
    }
};
const array = [1, 2, 3, 4];
console.log(containsElement(5, array));

// 5.feladat

const firstHuman = {
    name: 'Barbi',
    age: 24,
};

const secondHuman = {
    name: 'Viktor',
    age: 26,
};


// 6.feladat 2-vel soztható poz kétjegyű számok
const selectEven = (src) => {
    let target = [];
    let k = 0;
    for (let i = 0; i < src.length; i++) {
      if (src[i] % 2 === 0 && src[i] >= 10 && src[i] < 100) {
        target[k] = src[i];
        k++;
      }
    }
    return target;
};

const array2 = [5, 6, 11, 18, 34, 108, 117];
console.log(selectEven(array2));

// 7. feladat - metszet tétele

const section = (source1, source2) => {
    const target = [];
    for (let i = 0; i < source1.length; i++) {
      for (let j = 0; j < source2.length; j++) {
        if (source1[i] === source2[j]) {
          if (!target.includes(source1[i])) {
            target.push(source1[i]);
          }
          break;
        }
      }
    }
    return target;
};
  const array3 = [1, 2, 3, 4, 5, 6];
  const array4 = [2, 3, 4, 5, 6, 2];
  console.log(section(array3, array4));

// 8.feladat -modul: +, *, hatvényozás

const plus = (a, b) => {
    return = a + b;
};

const multiplication = (c, d) => {
    return = c * d;
};
