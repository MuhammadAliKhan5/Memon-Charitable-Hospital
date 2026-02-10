import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-8 right-8 z-50 group">
      <a 
        href="https://wa.me/923197822734" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-gradient-to-br from-[#25D366] to-[#128C7E] p-4 rounded-full shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-110 hover:rotate-12 hover:shadow-2xl hover:shadow-[#25D366]/40"
      >
        {/* Tooltip */}
        <div className="absolute -left-48 top-1/2 -translate-y-1/2 bg-white px-4 py-2 rounded-lg shadow-lg text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="flex items-center gap-2">
            <MessageCircle size={16} className="text-[#25D366]" />
            <span className="text-gray-800">Need Help? Chat Now!</span>
          </div>
          <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rotate-45"></div>
        </div>
        
        <MessageCircle size={28} className="text-white" />
      </a>
    </div>
  );
};

export default WhatsAppButton;