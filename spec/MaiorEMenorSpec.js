describe("Maior e Menor", function(){
    //primeiro teste
    it("deve funcionar para números em ordem não sequencial", function(){
        let algoritmo = new MaiorEMenor();
        algoritmo.encontra([5, 15, 7, 9]);

        //expectativas
        expect(algoritmo.pegaMaior()).toEqual(15);
        expect(algoritmo.pegaMenor()).toEqual(5);
    });

    //segundo teste
    it("deve funcionar para números em ordem decrescente", function(){
        let algoritmo = new MaiorEMenor();
        algoritmo.encontra([9, 8, 7, 6]);

        //expectativas
        expect(algoritmo.pegaMaior()).toEqual(9);
        expect(algoritmo.pegaMenor()).toEqual(6);
    });

     //terceiro teste
     it("deve funcionar para números em ordem crescente", function(){
        let algoritmo = new MaiorEMenor();
        algoritmo.encontra([6, 20, 70, 200]);

        //expectativas
        expect(algoritmo.pegaMaior()).toEqual(200);
        expect(algoritmo.pegaMenor()).toEqual(6);
    });


});