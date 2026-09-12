export const metadata = {
  title: "AMIDEFEM Studio",
  description: "Espace de gestion du contenu de l'AMIDEFEM",
  robots: { index: false, follow: false },
};

export default function StudioRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
