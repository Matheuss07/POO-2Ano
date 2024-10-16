
class Aluno{

    // O construtor cria objeto
    constructor(nome, matricula, dataDeNascimento){
        //nos parênteses definimos as entradas
        this.nome = nome;
        this.matricula = matricula;
        this.dataDeNascimento = dataDeNascimento;
       
}
    }


    class Professor{
        constructor(nome, siape, formacao){
            //nos parênteses definimos as entradas
            this.nome = nome;
            this.siape = siape;
            this.formacao = formacao;
        }

    }

class Disciplina{

    constructor(nome, ano, professor ){
        //nos parênteses definimos as entradas
        this.nome = nome;
        this.ano = ano;
        this.professor = professor;
        this.alunos = [];
        
}

    adicionarAluno(){
        if(aluno instanceof Aluno){
this.alunos.push(aluno);
}       else{
            console.error('classe aluno please')
}


}      
        exibirDisciplina(){
            console.log(`Nome da Disciplina: ${this.nome}; ano da Disciplina ${this.ano}; 
            Professor da Disciplina: ${this.professor} e por fim Alunos ${this.alunos}`)
}
                    }