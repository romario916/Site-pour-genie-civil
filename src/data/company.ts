
export interface Company {
  name: string;
  description: string;
  email: string;
  phone: string;
  whatsapp: string;
  address: string;
  mapsUrl: string;
}

export const company: Company = {
  name: "BTP Pro",
  description:
    "Présentation professionnelle des services de bâtiment et de travaux publics.",
  email: "romari@gmail.com",
  phone: "0373362172",
  whatsapp: "+261384520234",
  address: "Antananarivo",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Antananarivo%2C+Madagascar",
};
