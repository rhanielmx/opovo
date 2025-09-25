<?php

class ApiController
{
    private $professorModel;
    private $courseModel;
    private $moduleModel;
    
    public function __construct()
    {
        $this->professorModel = new Professor();
        $this->courseModel = new Course();
        $this->moduleModel = new Module();
    }
    
    public function handleRequest(): void
    {
        header('Content-Type: application/json');
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
        header('Access-Control-Allow-Headers: Content-Type, Authorization');
        
        if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
            http_response_code(200);
            return;
        }
        
        $method = $_SERVER['REQUEST_METHOD'];
        $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
        $segments = explode('/', trim($uri, '/'));
        
        if ($method !== 'GET') {
            $this->sendResponse(['error' => 'Only GET method is supported'], 405);
            return;
        }
        
        try {
            $this->routeRequest($segments);
        } catch (Exception $e) {
            $this->sendResponse(['error' => $e->getMessage()], 500);
        }
    }
    
    private function routeRequest(array $segments): void
    {
        if (empty($segments[0])) {
            $this->sendResponse(['message' => 'API de Cursos Online', 'version' => '1.0']);
            return;
        }
        
        switch ($segments[0]) {
            case 'professors':
                $this->handleProfessors($segments);
                break;
                
            case 'courses':
                $this->handleCourses($segments);
                break;
                
            case 'modules':
                $this->handleModules($segments);
                break;
                
            default:
                $this->sendResponse(['error' => 'Endpoint not found'], 404);
        }
    }
    
    private function handleProfessors(array $segments): void
    {
        if (isset($segments[1])) {
            $professorId = $segments[1];
            
            if (isset($segments[2]) && $segments[2] === 'courses') {
                $professor = $this->professorModel->getWithCourses($professorId);
            } else {
                $professor = $this->professorModel->getById($professorId);
            }
            
            if ($professor) {
                $this->sendResponse($professor);
            } else {
                $this->sendResponse(['error' => 'Professor not found'], 404);
            }
        } else {
            $professors = $this->professorModel->getAll();
            $this->sendResponse($professors);
        }
    }
    
    private function handleCourses(array $segments): void
    {
        if (isset($segments[1])) {
            $courseId = $segments[1];
            
            if (isset($segments[2])) {
                switch ($segments[2]) {
                    case 'modules':
                        $modules = $this->moduleModel->getByCourseId($courseId);
                        $this->sendResponse($modules);
                        break;
                        
                    case 'details':
                        $course = $this->courseModel->getWithDetails($courseId);
                        if ($course) {
                            $this->sendResponse($course);
                        } else {
                            $this->sendResponse(['error' => 'Course not found'], 404);
                        }
                        break;
                        
                    default:
                        $this->sendResponse(['error' => 'Invalid endpoint'], 404);
                }
            } else {
                $course = $this->courseModel->getById($courseId);
                if ($course) {
                    $this->sendResponse($course);
                } else {
                    $this->sendResponse(['error' => 'Course not found'], 404);
                }
            }
        } else {
            $includeDetails = isset($_GET['include_details']) && $_GET['include_details'] === 'true';
            
            if ($includeDetails) {
                $courses = $this->courseModel->getAllWithDetails();
            } else {
                $courses = $this->courseModel->getAll();
            }
            
            $this->sendResponse($courses);
        }
    }
    
    private function handleModules(array $segments): void
    {
        if (isset($segments[1])) {
            $moduleId = $segments[1];
            $module = $this->moduleModel->getById($moduleId);
            
            if ($module) {
                $this->sendResponse($module);
            } else {
                $this->sendResponse(['error' => 'Module not found'], 404);
            }
        } else {
            $this->sendResponse(['error' => 'Module ID is required'], 400);
        }
    }
    
    private function sendResponse(array $data, int $statusCode = 200): void
    {
        http_response_code($statusCode);
        echo json_encode($data, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
    }
}