'use client';

import { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import { nl } from 'date-fns/locale';

export default function BookingSection() {
  const [selected, setSelected] = useState<Date>();

  return (
    <section className="bg-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Text Content */}
        <div className="space-y-6">
          <h2 className="text-[#2E6F5E] text-3xl md:text-4xl font-bold">
            Even kennismaken?
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We zijn benieuwd naar jouw bedrijf en jouw verhaal! Wat zijn je plannen, dromen en doelen? Of je nu al een strategie hebt of nog wat inspiratie kunt gebruiken, wij denken graag met je mee.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Benieuwd wat wij voor je kunnen betekenen met social media marketing?
          </p>
          <p className="text-[#2E6F5E] font-medium">
            Laten we een (digitaal) koffietje drinken & prik een moment in onze agenda! ☕️📅
          </p>
        </div>

        {/* Calendar */}
        <div className="bg-[#CDECE3]/30 p-8 rounded-2xl shadow-lg border border-[#2E6F5E]/10 flex flex-col items-center">
          <h3 className="text-[#2E6F5E] font-bold mb-4 text-lg">
            Selecteer een datum
          </h3>
          <style>{`
            .rdp {
              --rdp-cell-size: 40px;
              --rdp-accent-color: #2E6F5E;
              --rdp-background-color: #CDECE3;
              margin: 0;
            }
            .rdp-day_selected:not([disabled]) { 
              background-color: #2E6F5E; 
              color: white;
            }
            .rdp-day_selected:hover:not([disabled]) { 
              background-color: #1b4332; 
            }
            .rdp-button:hover:not([disabled]):not(.rdp-day_selected) {
              background-color: #CDECE3;
            }
          `}</style>
          <DayPicker
            mode="single"
            selected={selected}
            onSelect={setSelected}
            locale={nl}
            className="bg-white p-4 rounded-xl shadow-sm"
          />
          
          {selected && (
            <div className="mt-6 w-full animate-in fade-in slide-in-from-top-2">
              <p className="text-center text-[#2E6F5E] font-medium mb-4">
                Je hebt geselecteerd: {format(selected, 'PPP', { locale: nl })}
              </p>
              <button className="w-full bg-[#FF7F50] text-white py-3 rounded-md font-bold hover:bg-[#e06b40] transition-colors shadow-md">
                Bevestig Datum
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
