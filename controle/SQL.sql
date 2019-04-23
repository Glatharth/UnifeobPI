CREATE TABLE `users` (
  `id_users` INT NOT NULL AUTO_INCREMENT,
  `nome` varchar(35) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(50) NOT NULL,
  `nivel` int(1) NOT NULL,
  PRIMARY KEY (id_users)
);

INSERT INTO `users` (`id_users`, `nome`, `password`, `email`, `nivel`) VALUES (NULL, 'admin', MD5('admin'), 'admin@admin.com', '2');
INSERT INTO `users` (`id_users`, `nome`, `password`, `email`, `nivel`) VALUES (NULL, 'root', MD5('root'), 'root@root.com', '2');