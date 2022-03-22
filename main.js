import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const cliente = new Cliente("Cliente X", 123124214, "081");
const diretor = new Diretor("Diretor Y", 10000, 12939893);
const gerente = new Gerente("Gerente Z", 5000, 52339893);

gerente.cadastrarSenha("1234");
diretor.cadastrarSenha("123456789");

const clienteEstaLogado = SistemaAutenticacao.login(cliente, "081");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "1234");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456789");

console.log(clienteEstaLogado, gerenteEstaLogado, diretorEstaLogado);