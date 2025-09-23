import React, { useState } from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { LogOut, Settings, BookOpen, ChevronDown, Menu } from 'lucide-react';

import logoUANE from '../assets/logo-UANE.svg'

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-[#1F6482] shadow-sm border-b border-b-[#1F6482]/10 h-16 md:h-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-14">
          {/* Logo */}
          <img src={logoUANE} alt="Logo UANE" className="h-6 w-auto" />

          {/* Desktop Navigation Menu */}
          <div className="hidden lg:flex items-center space-x-4">
            <NavigationMenu>
              <NavigationMenuList className="space-x-2">
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="#cursos"
                    className="text-white hover:bg-white/10 hover:text-[#17254D] px-3 py-2 text-sm font-medium transition-colors duration-200"
                  >
                    Cursos
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="#professores"
                    className="text-white hover:bg-white/10 hover:text-[#17254D] px-3 py-2 text-sm font-medium transition-colors duration-200"
                  >
                    Professores
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="#sobre"
                    className="text-white hover:bg-white/10 hover:text-[#17254D] px-3 py-2 text-sm font-medium transition-colors duration-200"
                  >
                    Sobre a UANE
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="#parcerias"
                    className="text-white hover:bg-white/10 hover:text-[#17254D] px-3 py-2 text-sm font-medium transition-colors duration-200"
                  >
                    Parcerias
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Hamburger for tablet/mobile */}
          <div className="flex lg:hidden items-center space-x-2">
            <Button
              variant="ghost"
              className="text-white hover:bg-white/10 hover:text-[#17254D] p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Abrir menu"
            >
              <Menu className="w-6 h-6" />
            </Button>
          </div>

          {/* Portal do Aluno Dropdown (desktop only) */}
          <div className="hidden lg:block">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  className="flex items-center space-x-2 h-10 px-3 text-white hover:bg-white/10 hover:text-[#17254D]"
                >
                  <Avatar className="w-8 h-8">
                    <AvatarImage src="/placeholder-avatar.jpg" alt="João Silva" />
                    <AvatarFallback className="bg-gradient-to-br from-blue-500 to-blue-600 text-white text-sm">
                      RX
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-sm font-medium ">Portal do Aluno</span>
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>
                  <div className="flex items-center space-x-3">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src="/placeholder-avatar.jpg" alt="João Silva" />
                      <AvatarFallback className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
                        RX
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-gray-900">Rhaniel Xavier</span>
                      <span className="text-xs text-gray-500">rhanielxavier@email.com</span>
                    </div>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer">
                  <BookOpen className="w-4 h-4 mr-3" />
                  <span>Meus Cursos</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <Settings className="w-4 h-4 mr-3" />
                  <span>Configurações</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer text-red-600 focus:text-red-600">
                  <LogOut className="w-4 h-4 mr-3" />
                  <span>Sair</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#1F6482] border-t border-[#1F6482]/10 px-4 py-2">
          <ul className="flex flex-col space-y-2 mb-4">
            <li>
              <a
                href="#cursos"
                className="block text-white hover:bg-white/10 hover:text-[#17254D] px-3 py-2 rounded text-sm font-medium transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                Cursos
              </a>
            </li>
            <li>
              <a
                href="#professores"
                className="block text-white hover:bg-white/10 hover:text-[#17254D] px-3 py-2 rounded text-sm font-medium transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                Professores
              </a>
            </li>
            <li>
              <a
                href="#sobre"
                className="block text-white hover:bg-white/10 hover:text-[#17254D] px-3 py-2 rounded text-sm font-medium transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sobre a UANE
              </a>
            </li>
            <li>
              <a
                href="#parcerias"
                className="block text-white hover:bg-white/10 hover:text-[#17254D] px-3 py-2 rounded text-sm font-medium transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                Parcerias
              </a>
            </li>
          </ul>
          {/* Portal do Aluno Dropdown (mobile only) */}
          <div className="block lg:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  className="flex items-center space-x-2 h-10 px-3 text-white hover:bg-white/10 hover:text-[#17254D] w-full justify-start"
                >
                  <Avatar className="w-8 h-8">
                    <AvatarImage src="/placeholder-avatar.jpg" alt="João Silva" />
                    <AvatarFallback className="bg-gradient-to-br from-blue-500 to-blue-600 text-white text-sm">
                      RX
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-sm font-medium ">Portal do Aluno</span>
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                <DropdownMenuLabel>
                  <div className="flex items-center space-x-3">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src="/placeholder-avatar.jpg" alt="João Silva" />
                      <AvatarFallback className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
                        RX
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-gray-900">Rhaniel Xavier</span>
                      <span className="text-xs text-gray-500">rhanielxavier@email.com</span>
                    </div>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer">
                  <BookOpen className="w-4 h-4 mr-3" />
                  <span>Meus Cursos</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <Settings className="w-4 h-4 mr-3" />
                  <span>Configurações</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer text-red-600 focus:text-red-600">
                  <LogOut className="w-4 h-4 mr-3" />
                  <span>Sair</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      )}
    </nav>
  );
}