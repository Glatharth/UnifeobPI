CREATE TABLE `users` (
  `id_users` INT NOT NULL AUTO_INCREMENT,
  `nome` varchar(35) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(50) NOT NULL,
  `nivel` int(1) NOT NULL,
  PRIMARY KEY (id_users)
);

CREATE TABLE `comodos` (
  `id_comodos` INT NOT NULL AUTO_INCREMENT,
  `nome` varchar(40) NOT NULL,
  `permissao` int(1) NOT NULL,
  `estado` int(1) DEFAULT '1',
  PRIMARY KEY (id_comodos, permissao)
);

CREATE TABLE `equipamentos` (
  `id_equipamentos` INT NOT NULL AUTO_INCREMENT,
  `nome` varchar(40) NOT NULL,
  `id_comodos` integer NOT NULL,
  `permissao` integer NOT NULL,
  `estado` int(1) DEFAULT '0',
  PRIMARY KEY (id_equipamentos),
  FOREIGN KEY (id_comodos, permissao) references comodos (id_comodos, permissao)
);

INSERT INTO `users` (`id_users`, `nome`, `password`, `email`, `nivel`) VALUES (NULL, 'admin', MD5('123mudar'), 'admin@admin.com', '2');
INSERT INTO `users` (`id_users`, `nome`, `password`, `email`, `nivel`) VALUES (NULL, 'root', MD5('root'), 'root@root.com', '2');

INSERT INTO comodos (nome, permissao) VALUES ("Quarto", 1);
INSERT INTO comodos (nome, permissao) VALUES ("Cozinha", 1);
INSERT INTO comodos (nome, permissao) VALUES ("Banheiro", 1);

insert into equipamentos (nome, permissao, id_comodos) values ("Luz", 1, 1);
insert into equipamentos (nome, permissao, id_comodos) values ("Luz2", 1, 1);
insert into equipamentos (nome, permissao, id_comodos) values ("Luz3", 1, 1);
insert into equipamentos (nome, permissao, id_comodos) values ("Luz4", 1, 1);

insert into equipamentos (nome, permissao, id_comodos) values ("Luz1", 1, 2);
insert into equipamentos (nome, permissao, id_comodos) values ("Luz2", 1, 2);
insert into equipamentos (nome, permissao, id_comodos) values ("Luz3", 1, 2);
insert into equipamentos (nome, permissao, id_comodos) values ("Luz4", 1, 2);
insert into equipamentos (nome, permissao, id_comodos) values ("Luz5", 1, 2);

insert into equipamentos (nome, permissao, id_comodos) values ("Luz", 1, 3);
insert into equipamentos (nome, permissao, id_comodos) values ("Luz2", 1, 3);
