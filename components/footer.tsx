export default function Footer() {
  return (
    <footer className="bg-titulo text-white">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <p className="font-display text-2xl font-semibold">NeuroEssência</p>
            <p className="text-sm opacity-70 mt-1">Avaliação Neuropsicológica</p>
            <p className="text-sm opacity-70 mt-3">Contagem — MG</p>
            <p className="text-sm opacity-70">Atendimento presencial e online</p>
          </div>
          <div className="flex flex-col gap-2 text-sm opacity-80">
            <p className="font-semibold mb-1">Navegação</p>
            <a href="#sobre" className="hover:opacity-100 opacity-70 transition-opacity">Sobre</a>
            <a href="#indicacoes" className="hover:opacity-100 opacity-70 transition-opacity">Para quem</a>
            <a href="#processo" className="hover:opacity-100 opacity-70 transition-opacity">Como funciona</a>
            <a href="#faq" className="hover:opacity-100 opacity-70 transition-opacity">Dúvidas</a>
          </div>
          <div className="text-sm">
            <p className="font-semibold mb-1">Contato</p>
            <a
              href="https://wa.me/5531995356323"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-70 hover:opacity-100 transition-opacity"
            >
              (31) 99535-6323
            </a>
            <p className="opacity-50 text-xs mt-3">Conselho Regional de Psicologia</p>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-white/20 text-center text-xs opacity-50">
          <p>© 2025 NeuroEssência. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
