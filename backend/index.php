<?php

// Carregar variáveis de ambiente
if (file_exists('.env')) {
    $lines = file('.env', FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($lines as $line) {
        if (strpos($line, '=') !== false && strpos($line, '#') !== 0) {
            list($key, $value) = explode('=', $line, 2);
            $_ENV[trim($key)] = trim($value);
        }
    }
}

// Autoload das classes
spl_autoload_register(function ($className) {
    $directories = ['config', 'models', 'controllers'];
    
    foreach ($directories as $directory) {
        $file = __DIR__ . '/' . $directory . '/' . $className . '.php';
        if (file_exists($file)) {
            require_once $file;
            return;
        }
    }
});

// Inicializar API
$controller = new ApiController();
$controller->handleRequest();
