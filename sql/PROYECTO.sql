CREATE TABLE IF NOT EXISTS eventos 
(
  codigo_evento 	SERIAL,
  nombre_evento 	VARCHAR(30) NOT NULL,
  denpendecia 	VARCHAR(30) NOT NULL,
  fechainicio 	DATE,
  fechafinal 	DATE,
  
  PRIMARY KEY (codigo_evento)
 );

CREATE TABLE IF NOT EXISTS conferencistas
(
  id_conferencista VARCHAR(30) NOT NULL,
  nom_conferencista VARCHAR(30) NOT NULL,
  correo VARCHAR(30),
  telefono VARCHAR(30),
  especialidad VARCHAR(30),
  sexo VARCHAR(30),
  estado VARCHAR(30) NOT NULL, --POR DEFECTO ACTIVO--

  PRIMARY KEY (id_conferencista)
);

CREATE TABLE IF NOT EXISTS espacios
(
  codigo_espacio SERIAL,
  nome_spacio	VARCHAR(30) NOT NULL,
  capacidad	VARCHAR(30) NOT NULL,

  PRIMARY KEY (codigo_espacio) 
);

CREATE TABLE IF NOT EXISTS conferencias
(
  codigo_conferencia SERIAL,
  nombre_conferencia VARCHAR(30) NOT NULL,
  cupo VARCHAR(30),
  codigo_evento INTEGER NOT NULL,
  id_conferencista VARCHAR(30),
  codigo_espacio INTEGER,
  inicio TIMESTAMP,
  final TIMESTAMP,

  PRIMARY KEY (codigo_conferencia),
  FOREIGN KEY (codigo_evento) REFERENCES eventos(codigo_evento),
  FOREIGN KEY (id_conferencista) REFERENCES conferencistas(id_conferencista),
  FOREIGN KEY (codigo_espacio) REFERENCES espacios(codigo_espacio)
);


CREATE TABLE IF NOT EXISTS usuarios 
(
  id_usuario VARCHAR(30) NOT NULL,
  nom_usuario VARCHAR(30) NOT NULL,
  correo VARCHAR(30),
  telefono VARCHAR(30),
  pass VARCHAR(30) NOT NULL,
  sexo VARCHAR(30),
  tipo VARCHAR(30) NOT NULL, --TIPO OPERADOR O PARTICIPANTE--

  PRIMARY KEY (id_usuario)
);

CREATE TABLE IF NOT EXISTS inscripciones
(
  codigo_conferencia INTEGER NOT NULL,
  id_usuario VARCHAR(30) NOT NULL,
  fecha_registro TIMESTAMP NOT NULL,
  estado VARCHAR(30) NOT NULL, --PRE-INSCRITO O INSCRITO--

  PRIMARY KEY (codigo_conferencia, id_usuario),
  FOREIGN KEY (codigo_conferencia) REFERENCES conferencias(codigo_conferencia),
  FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
);

CREATE TABLE IF NOT EXISTS encuestas
(
 codigo_conferencia INTEGER NOT NULL,
 id_usuario VARCHAR(30) NOT NULL,
 fecha_encuesta DATE NOT NULL,
 p1 INTEGER NOT NULL,
 P2 INTEGER NOT NULL,
 P3 INTEGER NOT NULL,
 P4 INTEGER NOT NULL,
 P5 INTEGER NOT NULL,

 PRIMARY KEY (codigo_conferencia, id_usuario),
 FOREIGN KEY (codigo_conferencia) REFERENCES conferencias(codigo_conferencia),
 FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
);


INSERT INTO usuarios(id_usuario, nom_usuario, correo, telefono, pass, sexo, tipo)
VALUES(1234, 'USUARIOTEST', 'EXAMPLE@GMAIL.COM', '555-555-555', 'PASSWORD', 'MASCULINO', 'OPERADOR');
