// Parte para mirar test npm run test test/map.spec.js

/**
 * Dado un array de números representados como string, transformarlo a un array de enteros.
 * Los elementos no números deben transformarse por -1
 * @param ["1", "2", "3", "a"] numbersAsString
 * @returns [1, 2, 3, -1]
 */
function parseNumbers(numbersAsString) {
  return numbersAsString.map(element => {
    if (isNaN(+element)) {
      return -1;
    }
    return +element;
  });
}

/**
 * Dado un array de números sumar uno a los pares y restar uno a los impares
 * @param [1, 2, 3, 4] numbers
 * @returns [0, 3, 2, 5]
 */
function sumEvenSubOdd(numbers) {
  return numbers.map(number => {
    if (number % 2 === 0) {
      return number + 1;
    } else {
      return number - 1;
    }
  })
}

/**
 * Dado un array de estudiantes devolver un array de estudiantes añadiendo un atributo 'avg' con la media de sus notas
 * @param
 * [
      {
        name: 'Juanito',
        marks: [
          { subject: 'Maths', grade: 3 },
          { subject: 'History', grade: 3 },
          { subject: 'Literature', grade: 9 },
        ]
      },
      {
        name: 'Menganito',
        marks: [
          { subject: 'Maths', grade: 10 },
          { subject: 'History', grade: 10 },
          { subject: 'Literature', grade: 1 },
        ]
      },
      {
        name: 'Futanito',
        marks: [
          { subject: 'Maths', grade: 8 },
          { subject: 'History', grade: 8 },
          { subject: 'Literature', grade: 8 },
        ]
      }
    ] students 
 * @returns 
    [
      {
          name: 'Juanito',
          marks: [
            { subject: 'Maths', grade: 3 },
            { subject: 'History', grade: 3 },
            { subject: 'Literature', grade: 9 },
          ],
          avg: 5
        },
        {
          name: 'Menganito',
          marks: [
            { subject: 'Maths', grade: 10 },
            { subject: 'History', grade: 10 },
            { subject: 'Literature', grade: 1 },
          ],
           avg: 7
        },
        {
          name: 'Futanito',
          marks: [
            { subject: 'Maths', grade: 8 },
            { subject: 'History', grade: 8 },
            { subject: 'Literature', grade: 8 },
          ],
          avg: 8
        }
    ]
 */
function buildStudentsAvg(students) {
  return students.map(student => {
    if (student.marks.length === 0) {
      student.avg = 0;
      return student;
    } else {
      let sumMarks = 0;
      for (subject of student.marks) {
        sumMarks += subject.grade;
      }
      student.avg = sumMarks / student.marks.length;
      return student;
    }
  });
}

/**
 * Agrega un campo 'total' multiplicando precio * cantidad.
 * @param {Array<{name: string, price: number, quantity: number}>} items - Lista de productos.
 * @returns {Array<{name: string, price: number, quantity: number, total: number}>} Lista con campo total agregado.
 * @example
 * // Input:
 * // [{name: "Bread", price: 2, quantity: 3}]
 * // Output:
 * // [{name: "Bread", price: 2, quantity: 3, total: 6}]
 */
function addTotalPrice(products) {
  return products.map(product => {
    product.total = product.quantity * product.price;
    return product;
  });
}


module.exports = {
  parseNumbers,
  sumEvenSubOdd,
  buildStudentsAvg,
  addTotalPrice
}