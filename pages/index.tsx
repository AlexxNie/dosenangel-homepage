import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Dosenangel – Der Klassiker für unterwegs</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Jetzt die Dosenangel bestellen – Der Kult-Wurfspaß für Festivals & Camping." />
      </Head>

      <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
        <div className="bg-white max-w-md w-full rounded-lg shadow-lg p-6 text-center">
          <h1 className="text-3xl font-bold text-blue-700 mb-4">Dosenangel</h1>
          <img src="/images/dosenangel.jpg" alt="Dosenangel" className="w-full rounded mb-4" />
          <p className="text-xl text-gray-800 mb-2">Nur 14,99 € – inklusive Versand</p>
          <p className="text-gray-600 mb-4">
            Der kultige Wurfspaß für Festivals, Camping & Garten. Jetzt schnell bestellen – solange der Vorrat reicht!
          </p>
          <a
            href="mailto:shop@dosenangel.de?subject=Bestellung Dosenangel&body=Hallo, ich möchte eine Dosenangel bestellen."
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-800 transition"
          >
            Jetzt bestellen
          </a>
        </div>
      </main>
    </>
  );
}
