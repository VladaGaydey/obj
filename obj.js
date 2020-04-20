const  http  =  require ( "http" ) ;
const  url  =  require ( 'url' ) ;

http . createServer ( function ( req , res ) {
     
    var  x  =  url . parse ( req . url ,  true ) ;  // парсим ссылку
    var  message  =  x . запрос . сообщение ;     // ставим выборку на сообщение
    
    if  ( x . pathname  ==  '/ echo'  &&  message ! = null ) { res . конец ( сообщение  + «Lorem ipsum» ) ; }
    else  { res . конец ( «Ошибка 404 страница не найдена» ) ; } ;
     
} ) . слушать ( 80 ) ;