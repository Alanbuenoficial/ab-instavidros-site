
import { Card, CardContent } from "@/components/ui/card";

export default function ABInstavidrosSite() {
  return (
    <div className="min-h-screen bg-white p-8 text-gray-800 font-sans">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-10">
          <img src="/brasao-ab-instavidros.png" alt="Brasão AB Instavidros" className="mx-auto w-32 mb-4" />
          <h1 className="text-4xl font-bold text-blue-900">AB Instavidros</h1>
          <p className="text-lg text-gray-600">Há 16 anos, excelência no atendimento como vidraçaria</p>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Serviços</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {["Troca de roldanas e fechaduras", "Ajustes de regulagem", "Limpeza e vedação",
              "Manutenções em box, janelas e portas", "Fechamentos de pia",
              "Instalação de espelhos colados, com botão ou LED", "Gestão de treinamentos"].map((service, idx) => (
              <Card key={idx}>
                <CardContent className="p-4">{service}</CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Contato</h2>
          <ul className="space-y-2 text-gray-700">
            <li><strong>WhatsApp:</strong> (19) 99821-1270</li>
            <li><strong>Instagram:</strong> @ab.instavidros</li>
            <li><strong>Email:</strong> abinstavidros@gmail.com</li>
            <li><strong>Localização:</strong> Sorocaba - SP</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
