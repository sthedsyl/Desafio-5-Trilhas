"use client";
import MedicoImage from "./_assets/doutor.png";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useState } from "react";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

type Doenca = "Hipertensão" | "Diabetes" | "Dengue" | "Influenza";

const doencasInfo: Record<
  Doenca,
  {
    casos: number;
    descricao: {
      oQueE: string;
      comoPrevenir: string;
    };
  }
> = {
  Hipertensão: {
    casos: 8500,
    descricao: {
      oQueE:
        "É uma condição crônica em que a pressão do sangue nos artérias está permanentemente elevada. Isso significa que o coração precisa trabalhar mais para bombear o sangue para o resto do corpo.",
      comoPrevenir:
        "Para prevenir a hipertensão, é essencial adotar um estilo de vida saudável, praticar exercícios físicos, reduzir o consumo de sal e evitar o consumo excessivo de álcool e tabaco.",
    },
  },
  Diabetes: {
    casos: 4800,
    descricao: {
      oQueE:
        "Doença metabólica caracterizada pelo aumento dos níveis de açúcar no sangue, devido à produção insuficiente ou à resistência à insulina.",
      comoPrevenir:
        "Manter uma alimentação balanceada, praticar exercícios regularmente e fazer acompanhamento médico são essenciais para prevenir o diabetes.",
    },
  },
  Dengue: {
    casos: 2600,
    descricao: {
      oQueE:
        "Doença viral transmitida pelo mosquito Aedes aegypti, que causa febre alta, dores musculares e manchas vermelhas na pele.",
      comoPrevenir:
        "Eliminar criadouros do mosquito, manter ambientes limpos e usar repelentes ajudam a prevenir a dengue.",
    },
  },
  Influenza: {
    casos: 1400,
    descricao: {
      oQueE:
        "Infecção viral que afeta o sistema respiratório, causando sintomas como febre, tosse e dor de garganta.",
      comoPrevenir:
        "Vacinação anual, higiene das mãos e evitar contato próximo com pessoas infectadas são medidas preventivas importantes.",
    },
  },
};

export default function Dashboard() {
  const [doencaSelecionada, setDoencaSelecionada] = useState<Doenca>("Hipertensão");
  return (
    <main className="bg-[#F7FDFD] min-h-screen font-sans">
      {/* Boas-vindas */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center p-8 max-w-6xl mx-auto">
        <div className="mb-8 md:mb-0">
          {/* Responsividade do texto apenas no mobile */}
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Bem-vindo (a) ao Dashboard!</h1>
          <p className="text-gray-600">
            Tenha acesso a dados atualizados sobre doenças mais comuns em sua região e formas de prevenção.
          </p>
        </div>
        <div className="flex justify-center">
          <img src={MedicoImage} alt="Ilustração de médico" />
        </div>
      </section>

      {/* Gráficos com Power BI */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-xl font-bold text-sky-700 mb-6 font-poppins">
          Indicadores de Saúde
        </h2>
        <div className="rounded-2xl overflow-hidden shadow-lg border border-sky-100">
          <iframe
            title="Dashboard Power BI"
            src="https://app.powerbi.com/view?r=eyJrIjoiYTVmMGZkODctZmM1ZC00OTlkLWE0MjItZTI2OTE0NjRmZWZlIiwidCI6ImIzYzAwMzk5LTEwNjEtNGEyOS04NWE2LWQxNWEyMzljM2FkNSJ9"
            width="100%"
            height="600"
            allowFullScreen
            className="w-full"
          ></iframe>
        </div>
      </section>

      {/* Filtro Dropdown */}
      <section className="max-w-3xl mx-auto px-6 mb-8">
        <label
          htmlFor="doenca-select"
          className="block mb-2 font-semibold text-gray-700"
        >
          Selecione a doença:
        </label>
        <select
          id="doenca-select"
          className="w-full p-2 border border-gray-300 rounded-md"
          value={doencaSelecionada}
          onChange={(e) => setDoencaSelecionada(e.target.value as Doenca)}
        >
          {Object.keys(doencasInfo).map((doenca) => (
            <option key={doenca} value={doenca}>
              {doenca}
            </option>
          ))}
        </select>
      </section>

      {/* Seção informativa */}
      <section className="px-6 py-12 max-w-3xl mx-auto">
        <h3 className="text-xl font-semibold text-sky-700 mb-4">
          {doencaSelecionada}
        </h3>
        <div className="bg-white shadow-md p-6 rounded-lg">
          <h4 className="font-bold text-gray-800 mb-2">O que é?</h4>
          <p className="text-gray-600 mb-4">
            {doencasInfo[doencaSelecionada].descricao.oQueE}
          </p>
          <h4 className="font-bold text-gray-800 mb-2">Como prevenir?</h4>
          <p className="text-gray-600">
            {doencasInfo[doencaSelecionada].descricao.comoPrevenir}
          </p>
        </div>
      </section>
    </main>
  );
}