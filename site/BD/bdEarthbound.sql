create database earthbound;
use earthbound;

create table votos (
	idVoto int primary key auto_increment,
    voto varchar(45)
);

insert into votos (voto) values 
('sim'),
('não');

create table usuario (
	idUsuario int primary key auto_increment,
    email varchar(45),
    nome varchar(45),
    senha varchar(45),
    fkVotos int,
    foreign key (fkVotos) references votos(idVoto)
);

create table aviso (
	idAviso int primary key auto_increment,
    fkAviso int unique,
	titulo varchar(100),
    descricao varchar(300),
    foreign key (fkAviso) references usuario(idUsuario)
);

select * from usuario;

select * from usuario join aviso on fkAviso = idUsuario;

select count(fkVotos) from usuario join votos on fkVotos = idUsuario where fkVotos = 1 or fkVotos = 2;