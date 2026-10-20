/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import styles from './App.module.css';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { CategoriesSection } from './components/CategoriesSection';
import { AdvantagesSection } from './components/AdvantagesSection';
import { LeadFormSection } from './components/LeadFormSection';
import { Footer } from './components/Footer';
import { FileUp } from 'lucide-react';

export default function App() {
  const [selectedCategoryForForm, setSelectedCategoryForForm] = useState<string>('');

  const scrollToForm = () => {
    const el = document.getElementById('lead-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToCatalog = () => {
    const el = document.getElementById('catalog');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.appContainer}>
      {/* 1. Header (Sticky) */}
      <Header onScrollToForm={scrollToForm} />

      <main className={styles.mainContent}>
        {/* 2. Hero Section */}
        <Hero
          onScrollToForm={scrollToForm}
          onScrollToCatalog={scrollToCatalog}
        />

        {/* 3. О компании */}
        <AboutSection />

        {/* 4. Что мы поставляем (13 направлений) */}
        <CategoriesSection
          onSelectCategoryForForm={(catTitle) => setSelectedCategoryForForm(catTitle)}
          onScrollToForm={scrollToForm}
        />

        {/* 5. Преимущества B2B (4 колонки) */}
        <AdvantagesSection />

        {/* 6. Lead Capture Form */}
        <LeadFormSection
          initialCategory={selectedCategoryForForm}
          onClearInitialCategory={() => setSelectedCategoryForForm('')}
        />
      </main>

      {/* 7. Footer */}
      <Footer onScrollToForm={scrollToForm} />

      {/* Floating CTA button for fast access */}
      <button
        type="button"
        className={styles.floatingCta}
        onClick={scrollToForm}
        aria-label="Загрузить спецификацию"
      >
        <FileUp size={16} />
        <span>Загрузить спецификацию</span>
      </button>
    </div>
  );
}
