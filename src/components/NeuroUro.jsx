import React from 'react';
import { Phone, Calendar, Clock, Activity } from 'lucide-react';

const NeuroUro = () => {
  const data = [
    { type: "Neuro Physician", name: "Dr. Rabail Imran", day: "Friday", timing: "7pm to 9pm", contact: "0332-5415203" },
    { type: "Neuro Physician", name: "Dr. Waleed Arshad", day: "Sunday", timing: "5:30pm to 8pm", contact: "0332-2252997" },
    { type: "Neuro Surgeon", name: "Dr. Babar Ali Qureshi", day: "Thursday", timing: "2pm to 4pm", contact: "0334-2625545" },
    { type: "Urologist", name: "Dr. Imran Idrees Memon", day: "Saturday", timing: "11am to 1pm", contact: "0333-2745326" },
    { type: "Urologist", name: "Dr. Shevak Ram", day: "Wednesday", timing: "03pm to 5pm", contact: "0300-3087925" },
    { type: "Urologist", name: "Dr. Azhar Shah", day: "Friday", timing: "03pm to 5pm", contact: "0333-2607673" }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Neuro & Urology Specialists</h2>
        <div className="grid lg:grid-cols-2 gap-8">
          {data.map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border-l-8 border-[#c2272c] flex flex-col md:flex-row justify-between items-center">
              <div>
                <span className="text-xs font-black uppercase text-red-600 tracking-widest">{item.type}</span>
                <h3 className="text-2xl font-bold mt-1">{item.name}</h3>
                <div className="flex gap-4 mt-4 text-gray-500">
                   <p className="text-sm italic">{item.day} | {item.timing}</p>
                </div>
              </div>
              <a href={`tel:${item.contact}`} className="mt-6 md:mt-0 px-6 py-3 bg-gray-900 text-white rounded-full font-bold hover:bg-[#c2272c] transition-colors">
                Call: {item.contact}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NeuroUro;