import { useState } from "react";
function BotaoLembrete() {
    const [mensagem, setMensagem] = useState("");
    async function ativarLembrete() {
        // 1. Se o navegador não tiver 'Notification' em window,
        // mostre a mensagem "Este navegador não aceita notificações." e pare (return)
        if (!("Notification" in window)) {
            setMensagem("Este navegador não aceita notificações.");
            return;
        }

        // 2. Peça a permissão e guarde a resposta numa constante
        // (lembre: requestPermission devolve uma Promise, use await)
        const permissao = await Notification.requestPermission();

        // 3. Se a resposta for diferente de 'granted',
        // mostre "Você não permitiu as notificações." e pare
        if (permissao !== "granted") {
            setMensagem("Você não permitiu as notificações.");
            return;
        }

        // 4. Espere o Service Worker ficar pronto e guarde em 'registro'
        const registro = await navigator.serviceWorker.ready;

        // 5. Mostre a notificação com registro.showNotification(...)
        // título: nome do seu evento
        // body: uma frase de lembrete
        // icon: '/icone-192.png'
        await registro.showNotification("GameJam OC 48h", {
            body: "Não perca o início da GameJam OC 48h!",
            icon: "/icone-192.png",
        });

        // 6. Mostre na tela a mensagem "Lembrete ativado!"
        setMensagem("Lembrete ativado!");
    }
    return (
        <div className="mt-4">
            <button
                type="button"
                onClick={ativarLembrete}
                className="inline-flex items-center justify-center gap-2 bg-card hover:bg-slate-700/80 text-slate-200 hover:text-white font-semibold text-sm px-6 py-3 rounded-xl border border-slate-700 hover:border-slate-600 shadow-md transition-all cursor-pointer min-h-[44px] focus:outline-none focus:ring-2 focus:ring-primaria"
            >
                🔔 Me lembre do evento
            </button>
            {mensagem && (
                <p role="status" className="mt-2 text-sm font-medium text-slate-300">
                    {mensagem}
                </p>
            )}
        </div>
    );
}
export default BotaoLembrete;