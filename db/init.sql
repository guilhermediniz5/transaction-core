CREATE TABLE users 
( 
 id SERIAL PRIMARY KEY,  
 nome VARCHAR(100) NOT NULL,  
 email VARCHAR(100) NOT NULL,  
 saldo INT NOT NULL
); 

CREATE TABLE transactions 
( 
 id SERIAL PRIMARY KEY,  
 from_user INT NOT NULL,  
 to_user INT NOT NULL,  
 valor INT NOT NULL,  
 status VARCHAR(20) NOT NULL,  
 created_at TIMESTAMP NOT NULL
); 

ALTER TABLE transactions ADD FOREIGN KEY(from_user) REFERENCES users (id);
ALTER TABLE transactions ADD FOREIGN KEY(to_user) REFERENCES users (id);