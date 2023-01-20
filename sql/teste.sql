CREATE TABLE usuarios(
    nome VARCHAR(255),
    email VARCHAR(255),
    idade INT(10)
);

INSERT INTO usuarios(idade, email, nome) VALUES(
    22,
    'luiz@hotmail.com',
    'Luiz Carlos'
);

SELECT * FROM usuarios WHERE idade > 23;

SELECT * FROM usuarios WHERE nome = 'guilherme theodoro carlos'

DELETE FROM usuarios WHERE nome = 'guilherme theodoro carlos';

UPDATE usuarios SET nome = "Nome de teste" WHERE nome = 'Luiz Carlos';