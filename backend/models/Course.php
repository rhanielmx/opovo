<?php

class Course
{
    private $db;
    
    public function __construct()
    {
        $this->db = Database::getInstance()->getConnection();
    }
    
    public function getAll(): array
    {
        $query = "SELECT * FROM courses ORDER BY name ASC";
        $stmt = $this->db->prepare($query);
        $stmt->execute();
        
        return $stmt->fetchAll();
    }
    
    public function getById(string $id): ?array
    {
        $query = "SELECT * FROM courses WHERE id = :id";
        $stmt = $this->db->prepare($query);
        $stmt->bindParam(':id', $id);
        $stmt->execute();
        
        $result = $stmt->fetch();
        return $result ?: null;
    }
    
    public function getWithDetails(string $id): ?array
    {
        $query = "
            SELECT 
                c.*,
                COALESCE(
                    JSON_AGG(
                        JSON_BUILD_OBJECT(
                            'id', m.id,
                            'title', m.title,
                            'description', m.description,
                            'order_number', m.order_number
                        )
                        ORDER BY m.order_number
                    ) FILTER (WHERE m.id IS NOT NULL), '[]'
                ) as modules,
                COALESCE(
                    JSON_AGG(
                        JSON_BUILD_OBJECT(
                            'id', p.id,
                            'name', p.name,
                            'formations', p.formations,
                            'description', p.description,
                            'profile_image', p.profile_image
                        )
                    ) FILTER (WHERE p.id IS NOT NULL), '[]'
                ) as professors,
                            FROM courses c
            LEFT JOIN course_professors cp ON c.id = cp.course_id
            LEFT JOIN professors p ON cp.professor_id = p.id
            LEFT JOIN modules m ON c.id = m.course_id
            WHERE c.id = :id
            GROUP BY c.id
        ";
        
        $stmt = $this->db->prepare($query);
        $stmt->bindParam(':id', $id);
        $stmt->execute();
        
        $result = $stmt->fetch();
        if ($result) {
            $result['professors'] = json_decode($result['professors'], true);
            $result['modules'] = json_decode($result['modules'], true);
        }
        
        return $result ?: null;
    }
    
    public function getAllWithDetails(): array
    {
        $query = "
            SELECT 
                c.*,
                COALESCE(
                    JSON_AGG(
                        JSON_BUILD_OBJECT(
                            'id', p.id,
                            'name', p.name,
                            'formations', p.formations,
                            'profile_image', p.profile_image
                        )
                    ) FILTER (WHERE p.id IS NOT NULL), '[]'
                ) as professors,
                COALESCE(
                    JSON_AGG(
                        JSON_BUILD_OBJECT(
                            'id', m.id,
                            'title', m.title,
                            'description', m.description,
                            'order_number', m.order_number                
                        )
                    ORDER BY m.order_number
                    ) FILTER (WHERE m.id IS NOT NULL), '[]'
                ) as modules
            FROM courses c
            LEFT JOIN course_professors cp ON c.id = cp.course_id
            LEFT JOIN professors p ON cp.professor_id = p.id
            LEFT JOIN modules m ON m.course_id = c.id
            GROUP BY c.id
            ORDER BY c.name ASC
        ";
        
        $stmt = $this->db->prepare($query);
        $stmt->execute();
        
        $results = $stmt->fetchAll();
        
        foreach ($results as &$result) {
            $result['professors'] = json_decode($result['professors'], true);
            $result['modules'] = json_decode($result['modules'], true);
        }
        
        return $results;
    }
}