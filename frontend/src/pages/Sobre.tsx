export function Sobre() {
  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-4 text-[#1F6482]">Sobre o Projeto UANE</h1>
      <p className="mb-4 text-lg text-gray-800">
        Este projeto é o frontend do portal <strong>UANE</strong>, desenvolvido para oferecer uma experiência moderna, responsiva e intuitiva para alunos, professores e parceiros.
        Utilizando tecnologias atuais como <span className="font-semibold">React</span>, <span className="font-semibold">TypeScript</span>, <span className="font-semibold">Vite</span> e <span className="font-semibold">Tailwind CSS</span>, o sistema proporciona navegação adaptativa e integração com componentes customizados.
      </p>
      <p className="mb-4 text-gray-800">
        O portal conta com funcionalidades como seleção de cursos, visualização de informações detalhadas, módulos de aprendizado, área de professores e navegação entre páginas como Home, Professores e Sobre.
        O layout é responsivo, garantindo ótima usabilidade tanto em desktops quanto em dispositivos móveis.
      </p>
      <h2 className="text-xl font-bold mt-8 mb-2 text-[#138E98]">Tecnologias Utilizadas</h2>
      <ul className="list-disc list-inside mb-4 text-gray-800">
        <li>React + TypeScript</li>
        <li>Vite</li>
        <li>Tailwind CSS</li>
        <li>Lucide React (ícones)</li>
        <li>Componentes customizados (NavigationMenu, DropdownMenu, Avatar, Button, Accordion, Carousel)</li>
        <li>React Router DOM</li>
        <li>React Query</li>
        {/* <li>Deploy com Docker e Nginx</li> */}
      </ul>
      <h2 className="text-xl font-bold mt-8 mb-2 text-[#138E98]">Desenvolvedor</h2>
      <p className="text-gray-800">
        Projeto desenvolvido por <span className="font-semibold"><a href="https://github.com/rhanielmx">Rhaniel Xavier</a></span>.<br />
        Para saber mais ou contribuir, acesse o repositório ou entre em contato.
      </p>
      <div className="mt-8 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} UANE. Todos os direitos reservados.
      </div>
    </div>
  );
}