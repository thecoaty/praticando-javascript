import {Cliente} from "./Cliente.js"
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";
import { Gerente } from "./Funcionario/Gerente.js"
import { Diretor } from "./Funcionario/Diretor.js"


const cliente = new Cliente("Rafael", 12212112, "123")
const diretor = new Diretor("Rodrigo", 10000, 123444);
diretor.cadastrarSenha("123456789")
const gerente = new Gerente("Ricardo", 5000, 1230000);

const estaLogado = SistemaAutenticacao.login(diretor, "123456789");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "123")
console.log(clienteEstaLogado);