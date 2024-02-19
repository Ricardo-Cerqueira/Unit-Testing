import { productPosition } from "../../lab03/functions";
describe('product position', () => {
    test('if the numbers are 2 3 4 5 6 and the number 119 the return should be 3', () => {

        //arrange

        const list:number []= [2,3,4,5,6];
        const num:number= 119;
        const expectedResult:number= 3;

        let result = productPosition(list,num);

        //assert

        expect(result).toBe(expectedResult);
    }
    )
}
)

describe('product position', () => {
    test('if the numbers are 2 3 4 5 6 and the hum 500000 the return should be -1', () => {

        //arrange

        const list:number []= [2,3,4,5,6];
        const num:number= 500000;
        const expectedResult:number= -1;

        let result = productPosition(list,num);

        //assert

        expect(result).toBe(expectedResult);
    }
    )
}
)