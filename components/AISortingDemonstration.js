"use client";

import { motion, AnimatePresence } from "framer-motion";
// İkonlar: DollarSign, TrendingUp, Percent, Tag, Mail, Lock, Settings, Folder, Repeat2, ArrowDown, Shield, CheckCircle, Zap, Box
import { DollarSign, TrendingUp, Percent, Tag, Mail, Lock, Settings, Repeat2, ArrowDown, Shield, CheckCircle, Zap, Box } from "lucide-react"; 
import { useState, useEffect, useCallback } from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs) {
    return twMerge(clsx(inputs));
}

// 🔑 TEMALAR ve RENKLER
const THEME_TAGS = [
    { id: 0, label: "Invoice (Fatura)", icon: DollarSign, color: "text-emerald-400", rule: "Fatura No: #1029", ruleType: "İçerik Anahtar Kelimesi" }, 
    { id: 1, label: "Promo (Kampanya)", icon: Percent, color: "text-rose-500", rule: "Konu: %50 İndirim", ruleType: "Konu Başlığı" }, 
    { id: 2, label: "Finance (Finans)", icon: TrendingUp, color: "text-violet-400", rule: "Gönderen: Banka Adresi", ruleType: "Gönderen Adresi" }, 
];

// Animasyon Aşamaları
const STAGES = [
    { step: 0, name: "Gelen Mail", icon: Mail, color: "text-gray-400", title: "Mail Tespit" },
    { step: 1, name: "Şifre Çözme", icon: Lock, color: "text-amber-400", title: "Güvenli Erişim" },
    { step: 2, name: "Kural Analizi", icon: Settings, color: "text-pink-400", title: "Kullanıcı Kuralları" },
    { step: 3, name: "Etiketleme", icon: Tag, color: "text-blue-400", title: "AI Sınıflandırma" }, 
    // 🔑 AŞAMA BAŞLIĞI GÜNCELLENDİ
    { step: 4, name: "Nihai Onay", icon: CheckCircle, color: "text-green-400", title: "Nihai Etiket Onayı" },
];

const AISortingDemonstration = () => {
    const [step, setStep] = useState(0); 
    const [currentRuleIndex, setCurrentRuleIndex] = useState(0); 
    const [isFinished, setIsFinished] = useState(false);
    const [isListeningEnabled, setIsListeningEnabled] = useState(true); 
    const [isMailReceived, setIsMailReceived] = useState(false); 
    
    const currentRule = THEME_TAGS[currentRuleIndex]; 

    // Tekrar Başlatma İşlevi
    const startNewDemonstration = useCallback(() => {
        setIsFinished(false);
        setStep(0);
        setCurrentRuleIndex((prevIndex) => (prevIndex + 1) % THEME_TAGS.length);
        setIsMailReceived(true); 
    }, []);

    // OTO BAŞLANGIÇ: İlk yüklenmede maili tetikle.
    useEffect(() => {
        if (!isListeningEnabled) return; 
        
        const initialTimer = setTimeout(() => {
            if (!isMailReceived && step === 0) {
                startNewDemonstration();
            }
        }, 1500); 

        return () => clearTimeout(initialTimer);
    }, [isListeningEnabled]);


    // Akışın Otomatik Döngüsü
    useEffect(() => {
        if (!isMailReceived || isFinished) return; 

        // Gecikme süreleri: 300/800/1000/800/1200ms
        const delays = { 0: 300, 1: 800, 2: 1000, 3: 800, 4: 1200 }; 
        
        const timer = setTimeout(() => {
            const nextStep = (step + 1);
            
            if (nextStep > 4) { 
                setIsFinished(true); 
                setIsMailReceived(false); 
            } else {
                setStep(nextStep);
            }
        }, delays[step]);

        return () => clearTimeout(timer);
    }, [step, isFinished, isMailReceived]); 
    
    // Tekrar Başlatma İşlevi (Akış bittiğinde tetiklenir)
    const handleStartSim = () => {
        if (isFinished) {
             startNewDemonstration();
        }
    };


    return (
        <div className="relative w-full p-4 md:p-12 min-h-[950px] flex flex-col items-center bg-[#0b0c0f] border-t border-b border-gray-900 overflow-x-hidden">
            
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#f5f5f5] mb-6 text-center">
                AI Etiketleme Akışı: Gerçek Zamanlı Mail İşleme
            </h2>

            {/* OTO İZİN BLOK: Profesyonel Metin */}
            <div className="mb-10 w-full max-w-5xl text-center">
                <motion.div
                    className={"p-4 rounded-xl border-2 mx-auto border-violet-600 bg-violet-900/20 shadow-lg"}
                >
                    <h3 className="text-xl font-bold flex items-center justify-center mb-2">
                        <motion.span initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="text-violet-400 flex items-center">
                            <Shield className="w-5 h-5 mr-2" />
                            Anlık Mail Akışı Bağlantısı
                        </motion.span>
                    </h3>
                    <p className="text-sm text-gray-400">
                        **Yetkilendirme Onayı:** Sistem, API üzerinden yeni gelen mailleri **anında işlemek** için hazır. İlk mail tespit ediliyor...
                    </p>
                </motion.div>
                
                {/* Tekrar Başlatma Butonu (Akış bittiğinde görünür) */}
                {isFinished && (
                    <motion.button 
                        onClick={handleStartSim}
                        className={"px-8 py-3 rounded-xl font-bold transition-all duration-300 flex items-center justify-center mx-auto mt-6 bg-violet-600 hover:bg-violet-700 text-white shadow-lg"}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <Repeat2 className="w-5 h-5 mr-2" />
                        Yeni Mail Akışını Tekrar Başlat
                    </motion.button>
                )}
                {!isMailReceived && !isFinished && (
                    <div className="mt-6 text-violet-400 font-semibold flex items-center justify-center">
                        <Zap className="w-4 h-4 mr-2 animate-pulse" />
                        Yeni Mail Tespit Edildi, İşleme Başlanıyor...
                    </div>
                )}
            </div>
            {/* --- */}


            <div className="w-full max-w-5xl relative z-10 flex flex-col md:flex-row justify-between items-start gap-8 md:gap-16">

                {/* 1. SOL SÜTUN (MAİL KARTI) */}
                <div className="w-full md:w-1/3 relative flex flex-col items-center md:items-start order-1 md:order-1">
                    
                    {/* HAREKETLİ MAİL KARTI */}
                    <motion.div
                        className={cn(
                            "w-full max-w-xs p-4 rounded-xl shadow-xl transition-colors duration-500 border shrink-0", 
                            step >= 3 ? cn("border-4", currentRule.color.replace('text', 'border'), currentRule.color.replace('text', 'bg') + '/10') : "bg-[#181a1f] border-gray-800",
                            !isMailReceived && "opacity-50"
                        )}
                        initial={{ scale: 0.9 }}
                        animate={{ scale: isFinished || !isMailReceived ? 0.9 : 1 }}
                        key={`mail-card-${currentRule.id}`}
                    >
                        {/* Mail Başlığı */}
                        <div className="flex items-center gap-2 border-b border-gray-700 pb-2 mb-2">
                            <Mail className="w-5 h-5 text-violet-400" /> 
                            <span className="text-base font-semibold text-[#f5f5f5] truncate">
                                {isMailReceived ? (currentRule.rule.split(':')[1] || "Yeni Mail Alındı") : "Bağlantı Aktif"}
                            </span>
                        </div>
                        
                        {/* Etiket/Durum Gösterimi */}
                        <AnimatePresence mode="wait">
                            {step === 0 && isMailReceived && (
                                <motion.div key="initial" initial={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-gray-400 text-sm py-1">Mail Sunucusundan alındı, şifreli veri paketi...</motion.div>
                            )}
                            {step === 3 && (
                                <motion.div
                                    key="tag-final"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className={cn("mt-1 flex items-center justify-center gap-2 p-2 rounded-md font-bold text-base", 
                                        currentRule.color.replace('text', 'bg') + '/20',
                                        currentRule.color
                                    )}
                                >
                                    <currentRule.icon className={cn("w-5 h-5", currentRule.color)} />
                                    {currentRule.label} ETİKETİ ATANDI
                                </motion.div>
                            )}
                            {step < 3 && step > 0 && (
                                <motion.div key="processing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-violet-400 text-sm py-1">İşlem Analiz Ediliyor...</motion.div>
                            )}
                            {step === 4 && (
                                <motion.div key="assigned" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-400 text-sm py-1">Nihai Etiket Onaylandı.</motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>

                {/* 2. ORTA SÜTUN: AKIŞ OKLARI (Dikey Flex, Masaüstü İçin) */}
                <div className="hidden md:flex w-auto flex-col items-center justify-center pt-24 order-2">
                    {STAGES.slice(1).map((stage, index) => (
                        <div key={stage.step} className="flex flex-col items-center">
                            <motion.div
                                className={cn("w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300", 
                                    (stage.step <= step && isMailReceived) ? "bg-violet-500 ring-2 ring-violet-500/50" : "bg-gray-700"
                                )}
                                initial={{ scale: 1 }}
                                animate={{ scale: (stage.step === step && isMailReceived) ? 1.3 : 1 }}
                            >
                                <ArrowDown className="w-5 h-5 text-white" />
                            </motion.div>
                            {/* Dikey boşluk */}
                            {index < STAGES.length - 2 && <div className="h-28 w-px bg-gray-700"></div>} 
                        </div>
                    ))}
                </div>

                {/* 3. SAĞ SÜTUN: İŞLEM NOKTALARI */}
                <div className="w-full md:w-2/3 flex flex-col gap-12 pt-0 order-3 md:order-3">
                    
                    {STAGES.slice(1).map((stage, index) => ( 
                        <motion.div
                            key={stage.step}
                            className={cn(
                                "p-4 rounded-lg border relative min-h-[100px] transition-all duration-300 w-full",
                                (stage.step <= step && isMailReceived) ? stage.color.replace('text', 'border') + '/50 bg-[#181a1f] shadow-xl' : 'border-gray-800 bg-[#181a1f]/60'
                            )}
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: (stage.step <= step && isMailReceived) ? 0 : 50, opacity: (stage.step <= step && isMailReceived) ? 1 : 0.4 }}
                            transition={{ delay: index * 0.15 }}
                        >
                            <h5 className={cn("text-xl font-bold", stage.color, "flex items-center gap-2")}> 
                                <stage.icon className="w-5 h-5" />
                                {stage.title}
                            </h5>
                            <p className="text-base text-[#f5f5f5] mt-1"> 
                                {stage.step === 1 && "**Uçtan Uca Şifre Çözme:** Gelen mailin içeriği, güvenliğiniz için yalnızca burada çözümlenir ve asla kaydedilmez."}
                                {stage.step === 2 && `**Özelleştirilmiş Kural Eşleşmesi:** Kullanıcı tarafından tanımlanan kurallar (örn: **${currentRule.ruleType}**) ile mailin hangi kategoriye ait olduğu tespit edilir.`} 
                                {stage.step === 3 && `**Yapay Zeka Sınıflandırma:** İçerik, konu ve gönderen analizi ile en uygun etiket atanır: **${currentRule.label}**.`}
                                {/* 🔑 METİN GÜNCELLEMESİ */}
                                {stage.step === 4 && "**Nihai Onay:** İşleme giren mailin son etiketi doğrulanır ve mail kutunuzda **" + currentRule.label + "** etiketiyle işaretlenir."}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
            
            {/* 🎯 BİTİŞ ALANI: DAHA GERÇEKÇİ ETİKETLENMİŞ MAİL GÖRÜNÜMÜ */}
            <motion.div
                className="w-full max-w-5xl p-6 md:p-8 rounded-t-xl bg-[#181a1f] border-t border-violet-500 shadow-2xl z-20 mt-16 md:mt-24 shrink-0" 
                initial={{ opacity: 0, y: 100 }}
                animate={isFinished ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                key={`result-page-${currentRule.id}`}
            >
                {/* Sonuç Başlığı */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-2">
                    <h5 className="text-xl font-bold text-[#f5f5f5] flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-400" /> İşlem Sonucu: Etiket Atama Tamamlandı
                    </h5>
                    
                    {/* Tekrar Başlat Butonu */}
                    <button 
                        onClick={handleStartSim}
                        className="text-base text-violet-400 hover:text-violet-300 transition-colors flex items-center gap-1 disabled:opacity-50" 
                        disabled={!isFinished}
                    >
                        <Repeat2 className="w-4 h-4"/> Yeni Akış Başlat
                    </button>
                </div>
                
                {/* 🔑 GÜNCELLENMİŞ SONUÇ MAİLİ SATIRI (Etiket mail içinde vurgulanmış) */}
                <div className={cn(
                    "p-4 rounded-lg flex items-start justify-between gap-4 bg-gray-800 border-l-4",
                    currentRule.color.replace('text', 'border') 
                )}> 
                    
                    {/* Mail Sol Bölüm (Etiket ve Konu) */}
                    <div className="flex items-start gap-4 flex-1">
                        {/* Mail İkonu / Okunma Durumu */}
                        <Mail className="w-5 h-5 text-gray-500 mt-0.5 shrink-0" />
                        
                        <div className="flex flex-col">
                            {/* Gönderen ve Konu */}
                            <div className="text-sm text-gray-400 font-semibold flex items-center mb-1">
                                {currentRule.label} Ekibi <span className="text-gray-500 ml-2 text-xs">| {currentRule.ruleType}</span>
                            </div>
                            
                            <span className="font-semibold text-[#f5f5f5] text-base">
                                {currentRule.rule.split(':')[0]}: {currentRule.rule.split(':')[1]}
                            </span>
                        </div>
                    </div>
                    
                    {/* Etiket Sağ Bölüm (Mail kutusu görünümündeki Etiket) */}
                    <div className="flex items-center gap-2 shrink-0">
                        <div className={cn("px-3 py-1 text-xs font-bold rounded-full", currentRule.color.replace('text', 'bg') + '/30', currentRule.color)}> 
                            <currentRule.icon className="w-3 h-3 inline-block mr-1" />
                            {currentRule.label.split(' ')[0]} 
                        </div>
                        <span className="text-gray-400 text-sm">1 dk önce</span>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default AISortingDemonstration;