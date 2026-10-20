import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "DNC UK Accounting",
  description: "Professional accounting and tax services for LTD companies and self-employed individuals in the UK. Servicii de contabilitate pentru românii din Marea Britanie.",
  keywords: [
    'DNC UK Accounting',
    'DNC UKAccounting',
    'UK Accountant',
    'Romanian Accountant UK',
    'Accounting Services UK',
    'Accountant for Romanian Businesses UK',
    'LTD Company Accountant UK',
    'Limited Company Accounting',
    'Company Annual Accounts UK',
    'Corporation Tax Accountant UK',
    'Self Assessment Accountant UK',
    'Self Employed Accountant UK',
    'Tax Return Accountant UK',
    'CIS Tax Return UK',
    'VAT Returns UK',
    'Bookkeeping Services UK',
    'Payroll Services UK',
    'UK Company Formation',
    'HMRC Tax Assistance',
    'Romanian Accounting Services UK',
    'Contabil român în UK',
    'Contabilitate UK',
    'Firmă de contabilitate în Anglia',
    'Servicii contabile UK',
    'Contabil român Londra',
    'Contabilitate firme LTD',
    'Contabil self-employed UK',
    'Declarație fiscală UK',
    'Recuperare taxe Anglia',
    'Înființare firmă LTD UK',
    'Contabilitate pentru români în UK',
    'Declarații VAT și CIS',
    'Salarizare UK',
    'Consultanță fiscală UK',
    'Accountant Waltham Abbey',
    'Accountant Essex',
    'Romanian Accountant London',
    'Romanian Accountant Harlow',
    'Contabil român Essex',
  ],
  authors: [{ name: 'DNC UK Accounting' }],
  viewport: 'width=device-width, initial-scale=1.0',
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
