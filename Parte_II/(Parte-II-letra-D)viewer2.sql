CREATE VIEW cartoes_clientes AS
SELECT c.nome,
       c.CPF,
       c.endereco,
       cd.status_cartao
FROM clientes c
INNER JOIN cartoes cd ON c.id_cartao = cd.id
WHERE cd.status_cartao = 'Ativado'
ORDER BY c.nome ASC;