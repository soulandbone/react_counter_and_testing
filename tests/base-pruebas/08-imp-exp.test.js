import { getHeroeById, getHeroesByOwner } from '../../src/base-pruebas/08-imp-exp';

describe('pruebas en 08-imp-exp', () => {

    test('getHeroeById debe de retornar un héroe por ID', () => { 

        const id = 1;
        const hero = getHeroeById(id);
        
        expect(hero).toEqual({id:1, name:'Batman', owner: 'DC'})
     })

     test('getHeroeById debe de retornar undefined si no existe', () => {

        const id =7;
        const hero = getHeroeById(id);
        
            expect(hero).toBeFalsy();

     })


     test('getHeroeByOwner debe de regresar heroes de DC', () => { 

        const ownerName = 'DC';
        const filteredByDC = getHeroesByOwner(ownerName);
        console.log(filteredByDC.length);
        expect(filteredByDC.length).toBe(3);
        expect(filteredByDC).toEqual([
            {
                id: 1,
                name: 'Batman',
                owner: 'DC'
            },
            {
                id: 3,
                name: 'Superman',
                owner: 'DC'
            },
            {
                id: 4,
                name: 'Flash',
                owner: 'DC'
            },
          
        ]);



      })


      test('getHeroeByOwner debe retornar un arreglo de largo 2 cuando se filtra por Marvel', () => { 

        const ownerName = 'Marvel';
        const filteredByMarvel = getHeroesByOwner(ownerName);
        console.log(filteredByMarvel.length);
        expect(filteredByMarvel.length).toEqual(2);



      })

})