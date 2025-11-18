import './RegisterForm.css'

export default function RegisterForm() {
    return (
        <div className="w-full h-screen flex items-center justify-center font-poppins">
            <div className='inset-shadow-sms p-8 rounded-lg border border-gray-300 flex flex-col'>
                <h1 className="text-2xl font-bold">Crie sua Conta</h1>
                <span className='text-sm text-gray-500 mb-10'>Informe seu nome, e-mail e senha</span>

                <form className="flex flex-col gap-5 w-80">
                    <div className='flex flex-col'>
                        <label className='text-xs font-bold text-gray-400'>NOME</label>
                        <input
                            type="text"
                            placeholder="Digite o nome completo"
                            className="h-10 text-sm bg-white border-b border-gray-300  outline-blue-700 font-poppins"
                        />
                    </div>

                    <div className='flex flex-col'>
                        <label className='text-xs font-bold text-gray-400'>E-MAIL</label>
                        <input
                            type="text"
                            placeholder="exemplo@mail.com"
                            className="h-10 text-sm bg-white border-b border-gray-300  outline-blue-700 font-poppins"
                        />
                    </div>

                    <div className='flex flex-col'>
                        <label className='text-xs font-bold text-gray-400'>SENHA</label>
                        <input
                            type="text"
                            placeholder="Digite sua senha"
                            className="h-10 text-sm bg-white border-b border-gray-300  outline-blue-700 font-poppins"
                        />
                    </div>

                    <button
                        type="submit"
                        className="h-13 bg-blue-800 rounded-md text-white font-semibold text-base px-3 cursor-pointer transition-filter duration-200 hover:brightness-90 border-none"
                    >
                        Salvar
                    </button>
                </form>
            </div>
        </div>
    )
}
