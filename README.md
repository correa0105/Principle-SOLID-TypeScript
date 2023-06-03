## PRINCÍPIO S.O.L.I.D 

- SRP: Princípio da Responsabilidade Única — Uma classe deve ter um, e somente um, motivo para mudar.
Esse princípio declara que uma classe deve ser especializada em um único assunto e possuir apenas uma responsabilidade dentro do software, ou seja, a classe deve ter uma única tarefa ou ação para executar.

- OCP: Princípio Aberto-Fechado — Objetos ou entidades devem estar abertos para extensão, mas fechados para modificação, ou seja, quando novos comportamentos e recursos precisam ser adicionados no software, devemos estender e não alterar o código fonte original.

- LSP: Princípio da substituição de Liskov — Uma classe derivada deve ser substituível por sua classe base. Se S é um subtipo de T, então os objetos do tipo T, em um programa, podem ser substituídos pelos objetos de tipo S sem que seja necessário alterar as propriedades deste programa.

- ISP: Princípio da Segregação da Interface — Uma classe não deve ser forçada a implementar interfaces e métodos que não irão utilizar. Esse princípio basicamente diz que é melhor criar interfaces mais específicas ao invés de termos uma única interface genérica.

- DIP: Princípio da Inversão de Dependência — Dependa de abstrações e não de implementações. Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem depender da abstração. Abstrações não devem depender de detalhes. Detalhes devem depender de abstrações.

# VANTAGENS E DESVANTAGENS SOLID

## VANTAGENS
- Código modular
- Código reutilizável (D.R.Y - Don't repeat yourself)
- Código testável
- Baixo acoplamento e alta coesão
- Código expansível
- Separação de conceitos (Separations of concerns)
- Fácil manutenção

## DESVANTANGES
- Complexidade
- Quantidade de código digitada aumenta
- Tempo de desenvolvimento aumenta

## CUIDADOS
- YAGNI (Você não vai precisar disso)
- KISS (Mantenha o software simples)
- MVP (Produto minimo viável)