CREATE USER marketplace_user WITH PASSWORD 'marketplace_password';
GRANT ALL PRIVILEGES ON DATABASE marketplace TO marketplace_user;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO marketplace_user;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO marketplace_user;
