import { studentGrade } from "../../lab03/functions";

describe('test verifies if the grade return the respective table', ()=>{
    test('The number 0 3 4 must return Mau and -1 must return Nota Invalida', ()=>{
    //Arange
        let grade1: number = 0;
        let grade2: number = 3;
        let grade3: number = 4;
        let grade4: number = -1;

    
        const expectResult1: string = 'Mau';
        const expectResult2: string = 'Mau';
        const expectResult3: string = 'Mau';
        const expectResult4: string = 'Nota inválida';
    //Act
        let result1 = studentGrade(grade1);
        let result2 = studentGrade(grade2);
        let result3 = studentGrade(grade3); 
        let result4 = studentGrade(grade4);

    //Assert
        expect(result1).toBe(expectResult1);
        expect(result2).toBe(expectResult2);
        expect(result3).toBe(expectResult3);
        expect(result4).toBe(expectResult4);
    });
}); 


describe('test verifies if the grade return the respective table', ()=>{
    test('The number 5 7 9 must return Mediocre.', ()=>{
    //Arange
        let grade1: number = 5;
        let grade2: number = 7;
        let grade3: number = 9;

    
        const expectResult1: string = 'Mediocre';
        const expectResult2: string = 'Mediocre';
        const expectResult3: string = 'Mediocre';

        //Act
        let result1 = studentGrade(grade1);
        let result2 = studentGrade(grade2);
        let result3 = studentGrade(grade3); 

    //Assert
        expect(result1).toBe(expectResult1);
        expect(result2).toBe(expectResult2);
        expect(result3).toBe(expectResult3);
    });
});


describe('test verifies if the grade return the respective table', ()=>{
    test('The number 10 12 13 must return Suficiente.', ()=>{
    //Arange
        let grade1: number = 10;
        let grade2: number = 12;
        let grade3: number = 13;

    
        const expectResult1: string = 'Suficiente';
        const expectResult2: string = 'Suficiente';
        const expectResult3: string = 'Suficiente';

        //Act
        let result1 = studentGrade(grade1);
        let result2 = studentGrade(grade2);
        let result3 = studentGrade(grade3); 

    //Assert
        expect(result1).toBe(expectResult1);
        expect(result2).toBe(expectResult2);
        expect(result3).toBe(expectResult3);
    });
});

describe('test verifies if the grade return the respective table', ()=>{
    test('The number 14 15 17 must return Bom.', ()=>{
    //Arange
        let grade1: number = 14;
        let grade2: number = 15;
        let grade3: number = 17;

    
        const expectResult1: string = 'Bom';
        const expectResult2: string = 'Bom';
        const expectResult3: string = 'Bom';

        //Act
        let result1 = studentGrade(grade1);
        let result2 = studentGrade(grade2);
        let result3 = studentGrade(grade3); 

    //Assert
        expect(result1).toBe(expectResult1);
        expect(result2).toBe(expectResult2);
        expect(result3).toBe(expectResult3);
    });
});

describe('test verifies if the grade return the respective table', ()=>{
    test('The number 18 19 20 21  must return Muito Bom and 21 must return Nota Invalida', ()=>{
    //Arange
        let grade1: number = 18;
        let grade2: number = 19;
        let grade3: number = 20;
        let grade4: number = 21;

    
        const expectResult1: string = 'Muito Bom';
        const expectResult2: string = 'Muito Bom';
        const expectResult3: string = 'Muito Bom';
        const expectResult4: string = 'Nota inválida';
    //Act
        let result1 = studentGrade(grade1);
        let result2 = studentGrade(grade2);
        let result3 = studentGrade(grade3); 
        let result4 = studentGrade(grade4);

    //Assert
        expect(result1).toBe(expectResult1);
        expect(result2).toBe(expectResult2);
        expect(result3).toBe(expectResult3);
        expect(result4).toBe(expectResult4);
    });
});