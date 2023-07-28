import { screen, render, fireEvent } from "@testing-library/react"
import { CounterApp } from "../src/CounterApp";

describe('Pruebas en <CounterApp />>', () => { 

    test('debe de hacer match con el snapshot', () => {

        
        const {container} = render( <CounterApp value={10}/> );
        expect(container).toMatchSnapshot();

    
      

    });




    test('Debe de mostrar el valor inicial de 100', () => {

        
        const value = 100;
        render( <CounterApp value={value}/> );
        expect(screen.getByText(100)).toBeTruthy();

    
      

    });


    test('debe de incrementar con el boton +1', () => {

            render( <CounterApp value= {10}/>);
            fireEvent.click( screen.getByText('+1') );
            expect(screen.getByText('11')).toBeTruthy();

     })
     

     test('debe de decrementar con el boton -1', () => {

        render( <CounterApp value= {10}/>);
        fireEvent.click( screen.getByText('-1') );
        screen.debug();
        expect(screen.getByText('9')).toBeTruthy();

 })


 test('debe de funcionar el boton de reset', () => {

    render( <CounterApp value= {355}/>);
    fireEvent.click( screen.getByText('+1') );
    fireEvent.click( screen.getByText('+1') );
    fireEvent.click( screen.getByText('+1') );
    fireEvent.click(screen.getByRole('button', {name: 'btn-reset'}));
    // fireEvent.click( screen.getByText('Reset'));

    // expect(screen.getByText(355)).toBeTruthy();

   
})


});