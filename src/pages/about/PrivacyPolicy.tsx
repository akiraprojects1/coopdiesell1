import React from 'react';
import { Shield, Lock, Eye, Bell } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="pt-20">
      <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            Política de <span className="text-green-500">Privacidade</span>
          </h1>
          
          <div className="max-w-4xl mx-auto mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Coleta de Dados */}
              <div className="bg-white/5 p-8 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <Shield className="text-green-500 w-8 h-8 mr-3" />
                  <h2 className="text-2xl font-bold">Coleta de Dados</h2>
                </div>
                <p className="text-gray-300">
                  Coletamos apenas informações necessárias para fornecer nossos serviços,
                  sempre de forma transparente e com seu consentimento explícito.
                </p>
              </div>

              {/* Proteção de Dados */}
              <div className="bg-white/5 p-8 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <Lock className="text-green-500 w-8 h-8 mr-3" />
                  <h2 className="text-2xl font-bold">Proteção de Dados</h2>
                </div>
                <p className="text-gray-300">
                  Utilizamos medidas de segurança avançadas para proteger suas informações
                  contra acesso não autorizado e uso indevido.
                </p>
              </div>
            </div>

            {/* Seções Detalhadas */}
            <div className="space-y-12">
              <section className="bg-white/5 p-8 rounded-xl backdrop-blur-sm">
                <div className="flex items-center mb-6">
                  <Eye className="text-green-500 w-8 h-8 mr-3" />
                  <h2 className="text-2xl font-bold">Uso de Informações</h2>
                </div>
                <div className="space-y-4 text-gray-300">
                  <p>
                    Suas informações são utilizadas exclusivamente para:
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Fornecer e melhorar nossos serviços</li>
                    <li>Processar suas solicitações e transações</li>
                    <li>Enviar comunicações importantes sobre sua conta</li>
                    <li>Personalizar sua experiência com nossos serviços</li>
                  </ul>
                </div>
              </section>

              <section className="bg-white/5 p-8 rounded-xl backdrop-blur-sm">
                <div className="flex items-center mb-6">
                  <Bell className="text-green-500 w-8 h-8 mr-3" />
                  <h2 className="text-2xl font-bold">Seus Direitos</h2>
                </div>
                <div className="space-y-4 text-gray-300">
                  <p>
                    Você tem direito a:
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Acessar seus dados pessoais</li>
                    <li>Solicitar correção de informações incorretas</li>
                    <li>Solicitar a exclusão de seus dados</li>
                    <li>Revogar seu consentimento a qualquer momento</li>
                  </ul>
                </div>
              </section>
            </div>

            {/* Contato */}
            <div className="mt-12 bg-white/5 p-8 rounded-xl backdrop-blur-sm text-center">
              <h2 className="text-2xl font-bold mb-4">Dúvidas sobre Privacidade?</h2>
              <p className="text-gray-300 mb-6">
                Entre em contato com nosso Encarregado de Proteção de Dados (DPO)
              </p>
              <button
                onClick={() => window.location.href = 'mailto:dpo@coopdiesel.com.br'}
                className="bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                Contatar DPO
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;