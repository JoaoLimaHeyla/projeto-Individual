create database earthbound;
use earthbound;

create table votos (
	idVoto int primary key auto_increment,
    simENao varchar(45)
);

create table usuario (
	idUsuario int primary key auto_increment,
    email varchar(45),
    nome varchar(45),
    senha varchar(45),
    fkVotos int,
    foreign key (fkVotos) references votos(idVotos)
);

create table aviso (
	idAviso int,
    idUsuario int,
	titulo varchar(100),
    descricao varchar(300),
    primary key (idAviso),
    foreign key (idUsuario) references usuario(idUsuario)
);
