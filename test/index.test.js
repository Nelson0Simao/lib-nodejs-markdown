const pegarArquivo = require("../index");

test('Deve ser uma função', ()=>{
	expect(typeof pegarArquivo).toBe('function');
});
