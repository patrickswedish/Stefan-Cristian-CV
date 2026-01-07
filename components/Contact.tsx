
import React, { useState } from 'react';
import SectionHeading from './SectionHeading.tsx';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { Translations } from '../types.ts';

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

interface ContactProps {
  t: Translations;
}

const Contact: React.FC<ContactProps> = ({ t }) => {
  const [formData, setFormData] = useState({
    name: '', company: '', email: '', phone: '', message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Inquiry Received. Stefan will contact you shortly.");
    setFormData({ name: '', company: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <SectionHeading title={t.contact.title} subtitle={t.contact.subtitle} />

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mt-16">
          <div className="space-y-10 flex flex-col justify-center">
            <div>
              <h3 className="text-sm font-black text-navy mb-8 tracking-[0.3em] uppercase opacity-40">{t.contact.infoTitle}</h3>
              <p className="text-base md:text-lg text-slate-600 mb-10 leading-relaxed font-medium">
                {t.contact.infoDesc}
              </p>
              
              <div className="space-y-4">
                <a 
                  href="https://wa.me/41766239131" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 p-6 rounded-3xl bg-[#25D366] text-white transition-all group hover:bg-[#1eb956] shadow-xl shadow-[#25D366]/20 relative overflow-hidden active:scale-[0.98]"
                >
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/20 flex items-center justify-center flex-shrink-0 backdrop-blur-md shadow-inner">
                    <WhatsAppIcon />
                  </div>
                  <div className="relative z-10">
                    <div className="text-[9px] font-black text-white/80 uppercase tracking-[0.2em] mb-0.5">{t.contact.whatsapp}</div>
                    <div className="text-xl md:text-2xl font-black tracking-tight">+41 76 623 91 31</div>
                  </div>
                  <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:scale-150 transition-transform duration-700">
                    <WhatsAppIcon />
                  </div>
                </a>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                  <a href="tel:0766239131" className="flex items-center gap-5 p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:border-amber-accent/30 transition-all group hover:bg-white hover:shadow-2xl active:scale-[0.98]">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-navy text-amber-accent flex items-center justify-center flex-shrink-0 shadow-lg group-hover:bg-amber-accent group-hover:text-navy transition-colors">
                      <Phone size={20} />
                    </div>
                    <div>
                      <div className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] mb-0.5">{t.contact.labels.phone}</div>
                      <div className="text-lg md:text-xl font-black text-navy group-hover:text-amber-accent transition-colors tracking-tight">076 623 91 31</div>
                    </div>
                  </a>

                  <a href="mailto:stefan_cristian93@yahoo.com" className="flex items-center gap-5 p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:border-amber-accent/30 transition-all group hover:bg-white hover:shadow-2xl active:scale-[0.98]">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-navy text-amber-accent flex items-center justify-center flex-shrink-0 shadow-lg group-hover:bg-amber-accent group-hover:text-navy transition-colors">
                      <Mail size={20} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] mb-0.5">{t.contact.labels.email}</div>
                      <div className="text-sm md:text-base font-black text-navy group-hover:text-amber-accent transition-colors tracking-tight truncate">stefan_cristian93@yahoo.com</div>
                    </div>
                  </a>
                </div>

                <div className="flex items-center gap-5 p-6 rounded-3xl bg-slate-50 border border-slate-100 group">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-navy text-amber-accent flex items-center justify-center flex-shrink-0 shadow-lg">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] mb-0.5">Aarwangen, CH</div>
                    <div className="text-sm md:text-base font-bold text-navy/70 leading-tight">Wynauerstrasse 20, 4912</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-navy rounded-[3rem] p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-amber-accent opacity-5 rounded-full blur-3xl"></div>
            <h3 className="text-2xl md:text-3xl font-black mb-10 relative z-10 tracking-tight">{t.contact.formTitle}</h3>
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">{t.contact.labels.name}</label>
                  <input 
                    type="text" 
                    required 
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-amber-accent focus:outline-none transition-all placeholder:text-slate-600 font-medium text-white" 
                    placeholder="Jane Smith" 
                    value={formData.name} 
                    onChange={(e) => setFormData({...formData, name: e.target.value})} 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">{t.contact.labels.company}</label>
                  <input 
                    type="text" 
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-amber-accent focus:outline-none transition-all placeholder:text-slate-600 font-medium text-white" 
                    placeholder="Logistics AG" 
                    value={formData.company} 
                    onChange={(e) => setFormData({...formData, company: e.target.value})} 
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">{t.contact.labels.email}</label>
                  <input 
                    type="email" 
                    required 
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-amber-accent focus:outline-none transition-all placeholder:text-slate-600 font-medium text-white" 
                    placeholder="hr@logistics.ch" 
                    value={formData.email} 
                    onChange={(e) => setFormData({...formData, email: e.target.value})} 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">{t.contact.labels.phone}</label>
                  <input 
                    type="tel" 
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-amber-accent focus:outline-none transition-all placeholder:text-slate-600 font-medium text-white" 
                    placeholder="+41..." 
                    value={formData.phone} 
                    onChange={(e) => setFormData({...formData, phone: e.target.value})} 
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">{t.contact.labels.message}</label>
                <textarea 
                  rows={4} 
                  required 
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-amber-accent focus:outline-none transition-all placeholder:text-slate-600 font-medium text-white resize-none" 
                  placeholder="Inquiry details..." 
                  value={formData.message} 
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full py-5 bg-amber-accent hover:bg-amber-600 text-navy font-black rounded-2xl flex items-center justify-center gap-4 transition-all shadow-xl active:scale-95 text-xs uppercase tracking-[0.3em]"
              >
                {t.contact.submit}
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
