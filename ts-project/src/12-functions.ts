(()=>{

  type Sizes = 'S' | 'M' | 'L' | 'XL';

  function createProductToJson(
    title:string,
    createAt: Date,
    stock:number,
    size:Sizes
  ){
    return {
      title,
      createAt,
      stock,
      size
    }
  }


  //Si queremos que un argumento sea opcional de enviar, podemos usar el modificador ? junto al nombre del argumento:

function createProductJson(
    title: string,
    createdAt: Date,
    stock?: number,
    size?: Sizes
){
    /*Código de la función*/
}
})();
