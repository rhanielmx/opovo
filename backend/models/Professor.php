<?php

class Professor
{
    private $db;
    
    public function __construct()
    {
        $this->db = Database::getInstance()->getConnection();
    }
    
    public function getAll(): array
    {
        $query = "SELECT * FROM professors ORDER BY name ASC";
        $stmt = $this->db->prepare($query);
        $stmt->execute();
        
        return $stmt->fetchAll();
    }
    
    public function getById(string $id): ?array
    {
        $query = "SELECT * FROM professors WHERE id = :id";
        $stmt = $this->db->prepare($query);
        $stmt->bindParam(':id', $id);
        $stmt->execute();
        
        $result = $stmt->fetch();
        return $result ?: null;
    }
    
    public function getWithCourses(string $id): ?array
    {
        $query = "
            SELECT 
                p.*,
                COALESCE(
                    JSON_AGG(
                        JSON_BUILD_OBJECT(
                            'id', c.id,
                            'name', c.name,
                            'workload', c.workload,
                            'price', c.price,
                            'access_period', c.access_period,
                            'modality', c.modality,
                            'tags', c.tags,
                            'banner_image', c.banner_image
                        )
                    ) FILTER (WHERE c.id IS NOT NULL), '[]'
                ) as courses
            FROM professors p
            LEFT JOIN course_professors cp ON p.id = cp.professor_id
            LEFT JOIN courses c ON cp.course_id = c.id
            WHERE p.id = :id
            GROUP BY p.id
        ";
        
        $stmt = $this->db->prepare($query);
        $stmt->bindParam(':id', $id);
        $stmt->execute();
        
        $result = $stmt->fetch();
        if ($result) {
            $result['courses'] = json_decode($result['courses'], true);
        }
        
        return $result ?: null;
    }
}