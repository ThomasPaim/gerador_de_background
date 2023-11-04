const area = document.querySelector('#area')
const input = document.getElementById('valor')

input.addEventListener('input', ()=>{
    area.style.background = input.value;
})


    function gerar(){

        let sinal = '0123456789ABCDEF';
        let hashtag = '#';

            for(let i = 0; i < 6; i++){
                hashtag += sinal[Math.floor(Math.random() * 16)];
            }
            input.value = hashtag;
            return hashtag;
            
            
        }
      
    function colocar(){
       var guardar = gerar();
       area.style.background = guardar
    }

    area.addEventListener('click', ()=>{
        colocar()
    }

   
)