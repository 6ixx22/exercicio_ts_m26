// saudacao.ts

/**
 * Função para saudar uma pessoa com seu nome.
 * @param nome - O nome da pessoa que será saudada.
 * @returns Uma saudação com a mensagem "Olá" + nome.
 */
function saudar(nome: string): string {
    return `Olá ${nome}`;
}

// Exporta a função para ser utilizada em outros arquivos
export { saudar };
