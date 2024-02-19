import { dogWeight } from "../../lab03/functions";

describe('dogWeight', () => {
    test('if the weight is less or equal to 10kg and the food 100g returns 0 se for mais retorna 1 se for abaixo retorna -1', () => {

        //arrange
        const weight: number = 10;
        const weight2: number = 9;
        const food: number = 100;
        const food2: number = 95;
        const food3: number = 200;



        const expectedResult: number = 0;
        const expectedResult2: number = 1;
        const expectedResult3: number = -1;


        //act
        let result = dogWeight(weight, food);
        let result2 = dogWeight(weight2, food2);
        let result3 = dogWeight(weight2, food3);

        //assert

        expect(result).toBe(expectedResult);
        expect(result2).toBe(expectedResult3);
        expect(result3).toBe(expectedResult2);

    })
})
describe('canicultura', () => {
    test('se o peso for mais de 10kg e menor ou igual 25kg e a alimentacao 250g retorna 0 se for mais retorna 1 se for abaixo retorna -1', () => {

        //arrange
        const peso1: number = 25;
        const peso2: number = 12;
        const racao: number = 250;
        const racao2: number = 200;
        const racao3: number = 300;



        const resultadoEsperado: number = 0;
        const resultadoEsperado2: number = 1;
        const resultadoEsperado3: number = -1;


        //act
        let result = dogWeight(peso1, racao);
        let result2 = dogWeight(peso2, racao2);
        let result3 = dogWeight(peso2, racao3);

        //assert

        expect(result).toBe(resultadoEsperado);
        expect(result2).toBe(resultadoEsperado3);
        expect(result3).toBe(resultadoEsperado2);

    })
})

describe('canicultura', () => {
    test('se o peso for maior 25kg e menor ou igual 45kg e a alimentacao 300g retorna 0 se for mais retorna 1 se for abaixo retorna -1', () => {

        //arrange
        const peso1: number = 26;
        const peso2: number = 45;
        const racao: number = 300;
        const racao2: number = 400;
        const racao3: number = 200;



        const resultadoEsperado: number = 0;
        const resultadoEsperado2: number = 1;
        const resultadoEsperado3: number = -1;


        //act
        let result = dogWeight(peso1, racao);
        let result2 = dogWeight(peso2, racao2);
        let result3 = dogWeight(peso2, racao3);

        //assert

        expect(result).toBe(resultadoEsperado);
        expect(result2).toBe(resultadoEsperado2);
        expect(result3).toBe(resultadoEsperado3);

    })
})

describe('canicultura', () => {
    test('se o peso for maior 45 e a alimentacao 500g retorna 0 se for mais retorna 1 se for abaixo retorna -1', () => {

        //arrange
        const peso1: number = 55;
        const racao: number = 500;
        const racao2: number = 600;
        const racao3: number = 200;



        const resultadoEsperado: number = 0;
        const resultadoEsperado2: number = 1;
        const resultadoEsperado3: number = -1;


        //act
        let result = dogWeight(peso1, racao);
        let result2 = dogWeight(peso1, racao2);
        let result3 = dogWeight(peso1, racao3);

        //assert

        expect(result).toBe(resultadoEsperado);
        expect(result2).toBe(resultadoEsperado2);
        expect(result3).toBe(resultadoEsperado3);

    })
})