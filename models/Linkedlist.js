class LinkedList{
    #head;
    #tail;
    #qtd;

    constructor(){
        this.#head = null;
        this.#tail = null;
        this.#qtd = 0;
    }

    addFirst(novoDado){
        const novoNo = new No(novoDado);
        // continuar
    }

    addLast(novoDado){
        const novoNo = new No(novoDado);
        if(this.#head===null)// vazia
            this.#head = novoNo;
        else{
           novoNo.anterior = this.#tail;
           this.#tail.proximo = novoNo;

        }
        this.#tail = novoNo;
        this.#qtd++;
        return true;
    }

    removeFirst(){
        const dadoRemovido = this.#head.dado;
        this.#head = this.#head.proximo;
        if(this.#head!==null)
            this.#head.anterior = null;
        else
            this.#tail = null;
        this.#qtd--;
        return dadoRemovido;
    }

    removeLast(){
        const dadoRemovido = this.#tail.dado;
         // continuar
    }
    
    getLast(){
      return this.#tail.dado;
    }
     getFirst(){
        return this.#head.dado;
     }
    isEmpty(){
        return this.#head === null;
    }

    get length(){
        return this.#qtd;
    }

    //-------------------------------------
//Quando um objeto tem um iterator, ele pode ser iterado com construções como [ for(const item of minhaLista)*/

[Symbol.iterator]() {         
    let noAtual = this.#head;
          return {
            next: function() {
              if (noAtual!==null) {
                let valor = noAtual.dado;
                noAtual = noAtual.proximo;
                return { value: valor, done: false };
              } else {
                return { done: true };
              }
            }
          };
        }
  //—----------------
    toString() {
          let result = "";
          let noAtual = this.#head;
          while (noAtual !== null) {
              result += noAtual;
              noAtual = noAtual.proximo;
          }
          return result;
      }
   //----------------   
    }