const inquirer = require('inquirer')
const chalk = require('chalk')

const fs = require('fs')

function operation(){
    inquirer.prompt({
        {
            type:'list',
            neme:'action',
            menssagem:'Escolha uma das opcoes do menu',
            choices:[
                'Cria conta',
                'Consulatar Saldo',
                'Depositar',
                'Sacar',
                'Sair',
            ]
        }
    }).then((answer)=>{
        const action = answer['action']
            if(action = answer['action'])

            if(action ==='Criar conta'){
                console.log('Criando conta...')
            }else if (action === 'Consulatar Saldo')
            console.log('Depositar'){
                console.log('Depositando...')
            }else if (action === 'Sacar'){
                console.log('Retirando saldo...')
            }else if (action === 'sair'){
                console.log('Saindo do Sistema')
            }else{
                console.log('opisao invalida!')
            }
      
)
}