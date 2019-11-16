CREATE TABLE Categorias(
    id SERIAL PRIMARY KEY,
    nome VARCHAR(40) NOT NULL
);

CREATE TABLE Fornecedores(
    CNPJ VARCHAR(40) PRIMARY KEY,
    nome_fantasia VARCHAR(40),
    nome_produto VARCHAR(40),
    endereco VARCHAR(100)
);

CREATE TABLE Produtos(
    id SERIAL PRIMARY KEY,
    nome VARCHAR(40),
    id_cat SERIAL,
    preco FLOAT,
    CNPJ_forn VARCHAR(40),
    FOREIGN KEY (id_cat) REFERENCES  Categorias(id),
    FOREIGN KEY (CNPJ_forn) REFERENCES  Fornecedores(CNPJ)
);

CREATE TABLE Estoque(
    id_produto SERIAL PRIMARY KEY,
    nome_produto VARCHAR(40),
    quantidade INTEGER,
    FOREIGN KEY (id_produto) REFERENCES Produtos(id)
);

CREATE TABLE Cartoes(
    id SERIAL PRIMARY KEY,
    data_validade DATE,
    n_cartao VARCHAR(40),
    status_cartao VARCHAR(40)
);

CREATE TABLE Clientes(
    CPF VARCHAR(40) PRIMARY KEY,
    nome VARCHAR(255),
    endereco VARCHAR(100),
    id_cartao SERIAL,
    FOREIGN KEY(id_cartao) REFERENCES Cartoes(id)
);

CREATE TABLE Fechamentos(
    id SERIAL PRIMARY KEY,
    data_fechamento DATE,
    dinheiro FLOAT
);

CREATE TABLE Pessoa(
    CPF VARCHAR(40) PRIMARY KEY,
    nome VARCHAR(255),
    endereco VARCHAR(100)
);

CREATE TABLE Cargos(
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255),
    salario FLOAT
);

CREATE TABLE Funcionarios(
    CPF VARCHAR(40) PRIMARY KEY,
    id_cargo SERIAL,
    setor VARCHAR(100),
    FOREIGN KEY (CPF) REFERENCES Pessoa(CPF),
    FOREIGN KEY (id_cargo) REFERENCES Cargos(id)
);

INSERT INTO Categorias(nome) VALUES
('Biscoitos'),
('Limpeza'),
('Bebidas'),
('Higiene'),
('Frios');

INSERT INTO Fornecedores VALUES
('27.589.152/0001-28', 'Misterios S.A', 'biscoitos scooby', 'rua misteriosa. Bairro: S.A'),
('33.362.073/0001-82', 'Limpadores do além', 'agua sanitaria ungida', 'rua dos anjos. Bairro: dos caídos'),
('28.398.267/0001-06', 'Alcool para um mundo melhor', 'cerveja mata devagar', 'rua ninguem ta com pressa. Bairro: de morrer'),
('26.636.620/0001-05', 'Fada dos dentes feels', 'creme dental sensacional', 'rua dos dentes de ouro. Bairro: dos dentes limpos'),
('55.636.620/0001-05', 'Pizza gelada > all', 'pizza gelada, mas boa', 'rua dos sem dinheiro. Bairro: pizza gelada porque eh o jeito');

INSERT INTO Produtos(nome, preco, CNPJ_forn) VALUES
('biscoitos scooby',5.80,         '27.589.152/0001-28'),
('agua sanitaria ungida',3.20,    '33.362.073/0001-82'),
('cerveja mata devagar',4.50,     '28.398.267/0001-06'),
('creme dental sensacional',2.50, '26.636.620/0001-05'),
('pizza gelada, mas boa',15.99,   '55.636.620/0001-05');

INSERT INTO Estoque(nome_produto, quantidade) VALUES
('biscoitos scooby',200),
('agua sanitaria ungida',300),
('cerveja mata devagar',400),
('creme dental sensacional',250),
('pizza gelada, mas boa',150);

INSERT INTO Cartoes(data_validade, n_cartao, status_cartao) VALUES
('16/11/2020','5364 4853 1148 5132', 'Ativado'  ),
('12/04/2020','5110 6966 0229 1644', 'Bloqueado'),
('14/01/2021','5288 5791 8743 6014', 'Ativado'  ),
('15/07/2020','5530 0217 3266 5264', 'Bloqueado'),
('22/10/2021','5132 3478 4405 0943', 'Ativado'  ),
('27/02/2020','5178 8321 1906 2439', 'Ativado'  ),
('12/03/2021','5525 1629 1042 4822', 'Ativado'  );

INSERT INTO Clientes(CPF, nome, endereco) VALUES
('554.134.333-01', 'Juscelino Kudecheque', 'Rua Brasília. Bairro: 50 anos em 5'),
('427.765.328-65', 'Darthveiderson Silva', 'Rua Death Star. Bairro: dos Siths'),
('637.217.148-14', 'Jacinto pinto aquino rego', 'Rua Hue. Bairro: BR'),
('255.471.043-02', 'Michel Jackson dos santos', 'Rua Rusbé. Bairro: Biri din'),
('643.670.366-77', 'Shuarzinega frangote junior', 'Rua Exterminador. Bairro: do Futuro '),
('284.927.146-20', 'Acauan Dwan Juan Ivan Jean Luan Alan da silva', 'Rua dos An. Bairro: An Anram'),
('767.615.486-32', 'Beiçola da bola aurora jibóia', 'Rua joia. Bairro: na jiboia');


INSERT INTO Fechamentos(data_fechamento, dinheiro) VALUES
('01/11/2019', 123000.20),
('02/11/2019', 342510.59),
('03/11/2019', 234020.80),
('04/11/2019', 430012.35),
('05/11/2019', 190239.18),
('06/11/2019', 210345.22),
('07/11/2019', 345222.50);

INSERT INTO Pessoa(CPF, nome, endereco) VALUES
('539.263.841-40', 'Funcionario 1', 'Rua Ninguem liga1. Bairro: Nobody yes door1'),
('270.302.400-22', 'Funcionario 2', 'Rua Ninguem liga2. Bairro: Nobody yes door2'),
('138.814.625-89', 'Funcionario 3', 'Rua Ninguem liga3. Bairro: Nobody yes door3'),
('787.434.265-81', 'Funcionario 4', 'Rua Ninguem liga4. Bairro: Nobody yes door4'),
('271.768.215-50', 'Funcionario 5', 'Rua Ninguem liga5. Bairro: Nobody yes door5'),
('413.179.228-16', 'Funcionario 6', 'Rua Ninguem liga6. Bairro: Nobody yes door6'),
('657.874.855-56', 'Funcionario 7', 'Rua Ninguem liga7. Bairro: Nobody yes door7'),
('069.766.614-09', 'Funcionario 8', 'Rua Ninguem liga8. Bairro: Nobody yes door8'),
('279.822.836-08', 'Funcionario 9', 'Rua Ninguem liga9. Bairro: Nobody yes door9'),
('844.636.442-59', 'Funcionario 10','Rua Ninguem liga10. Bairro: Nobody yes door10');

INSERT INTO Cargos(nome, salario) VALUES
('Administrador',                3500),
('Atendente de caixa',           1350),
('Gerente Geral',                9750),
('Fiscal de caixa e de estoque', 2450),
('Supervisor',                   4100);


INSERT INTO Funcionarios(CPF, setor, id_cargo) VALUES
('539.263.841-40', 'Administrativo', 1),
('270.302.400-22', 'Atendimento', 2),
('138.814.625-89', 'Atendimento', 2),
('787.434.265-81', 'Atendimento', 2),
('271.768.215-50', 'Administrativo', 3),
('413.179.228-16', 'Fiscalização', 4),
('657.874.855-56', 'Fiscalização', 4),
('069.766.614-09', 'Fiscalização', 4),
('279.822.836-08', 'Administrativo', 1),
('844.636.442-59', 'Administrativo', 5);