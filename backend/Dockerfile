FROM php:8.2-cli

# Instala extensões necessárias do PHP e utilitários
RUN apt-get update && \
    apt-get install -y libpq-dev && \
    docker-php-ext-install pdo pdo_pgsql

# Define diretório de trabalho
WORKDIR /var/www/html

# Copia os arquivos da API para o container
COPY . .

# Expõe a porta padrão do servidor embutido do PHP
EXPOSE 8000

# Comando para iniciar a API
CMD ["php", "-S", "0.0.0.0:8000", "index.php"]