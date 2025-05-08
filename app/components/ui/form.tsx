import { useState } from 'react';

export default function Portfolio() {
  const [form, setForm] = useState({ nome: '', email: '', telefone: '', assunto: '' });
  const [erro, setErro] = useState('');
  const [sucesso, setSucesso] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nome || !form.email || !form.telefone || !form.assunto) {
      setErro('Todos os campos são obrigatórios.');
      return;
    }
    setErro('');
    try {
      const res = await fetch('https://formspree.io/f/xpwdreew', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome: form.nome,
          email: form.email,
          telefone: form.telefone,
          mensagem: form.assunto,
        }),
      });

      if (res.ok) {
        setSucesso(true);
        setForm({ nome: '', email: '', telefone: '', assunto: '' });
      } else {
        setErro('Erro ao enviar. Tente novamente mais tarde.');
      }
    } catch (err) {
      console.error(err);
      setErro('Erro ao conectar com o servidor.');
    }
  };


  return (
    <>

      {/* Contact Section */}
      <section id="contato" className="py-20 bg-neutral-800 rounded-lg text-white px-6 sm:px-10 lg:px-24">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Fale comigo</h2>
          <p className="text-gray-400 mb-8">
            Estou disponível para novos projetos e oportunidades. Preencha o formulário abaixo:
          </p>

          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <input
              type="text"
              name="nome"
              placeholder="Seu nome"
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-neutral-900 border border-gray-700 text-white"
            />
            <input
              type="email"
              name="email"
              placeholder="Seu e-mail"
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-neutral-900 border border-gray-700 text-white"
            />
            <input
              type="text"
              name="telefone"
              placeholder="Seu telefone"
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-neutral-900 border border-gray-700 text-white"
            />
            <textarea
              name="assunto"
              placeholder="Digite sua mensagem"
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-2 rounded bg-neutral-900 border border-gray-700 text-white"
            />
            {erro && <p className="text-red-500 text-sm">{erro}</p>}
            {sucesso && <p className="text-green-500 text-sm">Mensagem enviada com sucesso!</p>}
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded font-semibold"
            >
              Enviar mensagem
            </button>
          </form>
        </div>
      </section>

    </>
  );
}
