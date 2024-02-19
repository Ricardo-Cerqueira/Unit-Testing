export class ArrayInt {
    //fields
    public values: number[];

    //constructor 
    //2 b) Construtor público que permita inicializar o array encapsulado com alguns valores. (**)
    constructor(...values: number[]) {
        this.values = values;
    }
    // functions

    //c) Adicione um novo elemento (valor) ao array encapsulado. (*)
    addValue(value: number): void {
        this.values.push(value);
    }

    // d) Retire o primeiro elemento do array encapsulado com um determinado valor. (*
    removeValue(value: number): void {
        const index = this.values.indexOf(value);
        if (index !== -1) {
            this.values.splice(index, 1);  // index | nr elementos a remover
        }
    }
    // e) Retorne o valor de um determinado elemento indicado pela sua posição. (*)
    getValueAtIndex(index: number): number {
        if (index < 0 || index >= this.values.length) {
            throw new Error("Index out of bounds");
        }
        return this.values[index];
    }
    // f) Retorne o número de elementos no array. (*)
    numberArrayElements(): number {
        return this.values.length;
    }
}