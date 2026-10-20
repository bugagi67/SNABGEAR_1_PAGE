import React from 'react';
import styles from './CategoriesSection.module.css';
import { SUPPLY_CATEGORIES, CategoryItem } from '../data/categories';
import {
  Disc,
  Zap,
  Scissors,
  ShieldAlert,
  Wrench,
  Layers,
  Sprout,
  Package,
  ThermometerSnowflake,
  Wind,
  Factory,
  FlaskConical,
  Flame,
  ArrowRight,
  FileSpreadsheet
} from 'lucide-react';

interface CategoriesSectionProps {
  onSelectCategoryForForm: (categoryTitle: string) => void;
  onScrollToForm: () => void;
}

export const CategoriesSection: React.FC<CategoriesSectionProps> = ({
  onSelectCategoryForForm,
  onScrollToForm,
}) => {
  const renderIcon = (iconName: string) => {
    const props = { size: 24 };
    switch (iconName) {
      case 'Disc':
        return <Disc {...props} />;
      case 'Zap':
        return <Zap {...props} />;
      case 'Scissors':
        return <Scissors {...props} />;
      case 'ShieldAlert':
        return <ShieldAlert {...props} />;
      case 'Wrench':
        return <Wrench {...props} />;
      case 'Layers':
        return <Layers {...props} />;
      case 'Sprout':
        return <Sprout {...props} />;
      case 'Package':
        return <Package {...props} />;
      case 'ThermometerSnowflake':
        return <ThermometerSnowflake {...props} />;
      case 'Wind':
        return <Wind {...props} />;
      case 'Factory':
        return <Factory {...props} />;
      case 'FlaskConical':
        return <FlaskConical {...props} />;
      case 'Flame':
        return <Flame {...props} />;
      default:
        return <Package {...props} />;
    }
  };

  return (
    <section id="catalog" className={styles.section}>
      <div className={styles.container}>
        
        {/* Section Header */}
        <div className={styles.headerRow}>
          <span className={styles.eyebrow}>Номенклатура поставок</span>
          <h2 className={styles.title}>Что мы поставляем</h2>
          <p className={styles.subtitle}>
            13 ключевых направлений комплексного снабжения предприятий, цехов и строительных площадок со склада в Смоленске с гарантией соответствия ГОСТ и ТУ.
          </p>
        </div>

        {/* 13 Categories Grid (no internal page transitions, presentation style as requested) */}
        <div className={styles.grid}>
          {SUPPLY_CATEGORIES.map((cat, index) => (
            <div key={cat.id} className={styles.card}>
              <span className={styles.cardNumber}>
                {index < 9 ? `0${index + 1}` : index + 1}
              </span>

              <div>
                <div className={styles.cardTop}>
                  <div className={styles.iconWrapper}>
                    {renderIcon(cat.iconName)}
                  </div>
                  <div>
                    <h3 className={styles.cardTitle}>{cat.title}</h3>
                  </div>
                </div>

                <p className={styles.cardDesc}>{cat.description}</p>

                <div className={styles.examplesList}>
                  {cat.examples.map((ex, i) => (
                    <span key={i} className={styles.exampleTag}>
                      {ex}
                    </span>
                  ))}
                </div>
              </div>

              <div className={styles.cardFooter}>
                <div className={styles.stockStatus}>
                  <span className={styles.statusDot} />
                  <span>В наличии на складе</span>
                </div>

                <button
                  type="button"
                  className={styles.requestBtn}
                  onClick={() => {
                    onSelectCategoryForForm(cat.title);
                    onScrollToForm();
                  }}
                >
                  <span>Запросить КП</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className={styles.bottomBanner}>
          <div>
            <div className={styles.bannerTitle}>
              Не нашли нужную позицию или типоразмер в списке?
            </div>
            <div className={styles.bannerSubtitle}>
              Отправьте вашу сводную спецификацию — инженерная служба SNABGEAR оперативно подберет позиции по ГОСТ и ТУ.
            </div>
          </div>

          <button
            type="button"
            className={styles.bannerBtn}
            onClick={onScrollToForm}
          >
            Прикрепить смету на расчет
          </button>
        </div>

      </div>
    </section>
  );
};
