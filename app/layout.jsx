import './globals.css';

export const metadata = {
  title: 'Sustain LATAM — Sostenibilidad que sí mueve la aguja',
  description: 'Recursos prácticos para personas, fintechs y PYMES en LATAM: artículos, shorts y el Toolkit Pagos Verdes.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
