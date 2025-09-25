<?php
// =====================================
// ARQUIVO: config/Database.php
// =====================================

class Database
{
    private static $instance = null;
    private $connection;
    
    private function __construct()
    {
        try {
            $this->connection = new PDO(
              "pgsql:host=" . $_ENV['SUPABASE_HOST'] . ";port=5432;dbname=" . $_ENV['SUPABASE_DB'] . ";sslmode=require",
              $_ENV['SUPABASE_USER'],
              $_ENV['SUPABASE_PASSWORD'],
              [
                    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                    PDO::ATTR_EMULATE_PREPARES => false
                ]
            );
        } catch (PDOException $e) {
            die("Connection failed: " . $e->getMessage());
        }
    }
    
    public static function getInstance(): Database
    {
        if (self::$instance === null) {
            self::$instance = new self();
        }
        return self::$instance;
    }
    
    public function getConnection(): PDO
    {
        return $this->connection;
    }
}