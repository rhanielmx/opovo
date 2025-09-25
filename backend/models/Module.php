<?php

class Module
{
    private $db;
    
    public function __construct()
    {
        $this->db = Database::getInstance()->getConnection();
    }
    
    public function getByCourseId(string $courseId): array
    {
        $query = "
            SELECT * FROM modules 
            WHERE course_id = :course_id 
            ORDER BY order_number ASC
        ";
        
        $stmt = $this->db->prepare($query);
        $stmt->bindParam(':course_id', $courseId);
        $stmt->execute();
        
        return $stmt->fetchAll();
    }
    
    public function getById(string $id): ?array
    {
        $query = "SELECT * FROM modules WHERE id = :id";
        $stmt = $this->db->prepare($query);
        $stmt->bindParam(':id', $id);
        $stmt->execute();
        
        $result = $stmt->fetch();
        return $result ?: null;
    }
}
