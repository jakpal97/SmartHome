# Smart Home Website

Nowoczesna strona internetowa dla systemu inteligentnego domu zbudowana z Next.js 14, React, TypeScript, Tailwind CSS i Sanity CMS.

## 🚀 Funkcje

- **Responsywny design** - Dostosowany do wszystkich urządzeń
- **Sanity CMS** - Łatwe zarządzanie treścią
- **Animacje** - Płynne animacje i efekty wizualne
- **SEO** - Zoptymalizowane dla wyszukiwarek
- **TypeScript** - Bezpieczny kod z typowaniem
- **Kontakt** - Dedykowana strona kontaktowa z formularzem

## 🛠️ Technologie

- **Frontend:** Next.js 14, React, TypeScript, Tailwind CSS
- **CMS:** Sanity
- **Hosting:** Vercel
- **Styling:** CSS Modules, FontAwesome

## 📦 Instalacja

1. Sklonuj repozytorium:
   \`\`\`bash
   git clone https://github.com/jakpal97/SmartHome.git
   cd SmartHome
   \`\`\`

2. Zainstaluj zależności:
   \`\`\`bash
   npm install
   \`\`\`

3. Utwórz plik \`.env.local\` i skonfiguruj Sanity:
   \`\`\`env
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
   SANITY_API_READ_TOKEN=your_read_token
   \`\`\`

4. Uruchom serwer deweloperski:
   \`\`\`bash
   npm run dev
   \`\`\`

## 🔧 Konfiguracja Sanity

1. Uruchom Sanity Studio:
   \`\`\`bash
   npm run sanity
   \`\`\`

2. Przejdź do \`http://localhost:3333\` i skonfiguruj treść

## 🚀 Deployment

### Vercel

1. Połącz repozytorium z Vercel
2. Dodaj zmienne środowiskowe w Vercel Dashboard
3. Deploy automatycznie uruchomi się

### Sanity Production

1. Utwórz projekt produkcyjny w Sanity
2. Zaktualizuj zmienne środowiskowe
3. Zaimportuj schemat danych

## 📱 Strony

- \`/\` - Strona główna
- \`/kontakt\` - Strona kontaktowa
- \`/produkty\` - Strona produktów
- \`/studio\` - Sanity Studio

## 🤝 Współpraca

1. Fork repozytorium
2. Utwórz branch (\`git checkout -b feature/nazwa-funkcji\`)
3. Commit zmian (\`git commit -am 'Dodaj nową funkcję'\`)
4. Push do brancha (\`git push origin feature/nazwa-funkcji\`)
5. Utwórz Pull Request

## 📄 Licencja

MIT License
