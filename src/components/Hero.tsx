import React from 'react';
import styles from './Hero.module.css';
import { COMPANY_INFO } from '../data/categories';
import { FileUp, ArrowDown, ShieldCheck, Percent, Clock, CalendarClock } from 'lucide-react';

interface HeroProps {
  onScrollToForm: () => void;
  onScrollToCatalog: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToForm, onScrollToCatalog }) => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroBackdrop} />

      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          
          {/* Top Industrial Badge */}
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            <span>Официальный B2B Поставщик · Работаем с юридическими лицами</span>
          </div>

          {/* H1 Heading strictly according to requirements */}
          <h1 className={styles.title}>
            Комплексное снабжение промышленных предприятий
          </h1>

          {/* Subtitle */}
          <p className={styles.subtitle}>
            Поставка инструмента, оборудования и крепежа в Смоленске и Смоленской области.
          </p>

          {/* Big Red Button + Secondary Action */}
          <div className={styles.actionsRow}>
            <button
              type="button"
              className={styles.primaryCtaBtn}
              onClick={onScrollToForm}
            >
              <FileUp size={22} />
              <span>Загрузить спецификацию для расчета</span>
            </button>

            <button
              type="button"
              className={styles.secondaryBtn}
              onClick={onScrollToCatalog}
            >
              <span>Посмотреть 13 направлений</span>
              <ArrowDown size={18} />
            </button>
          </div>

          {/* 4 Stats / USP Badges */}
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statValue}>
                <span>14 дней</span>
              </div>
              <div className={styles.statLabel}>
                Отсрочка платежа, лимиты по согласованию
              </div>
            </div>

            <div className={styles.statCard}>
              <div className={styles.statValue}>
                <span className={styles.statAccent}>1 счет</span>
              </div>
              <div className={styles.statLabel}>
                Закрываем сложные сборные спецификации
              </div>
            </div>

            <div className={styles.statCard}>
              <div className={styles.statValue}>
                <span>13</span>
              </div>
              <div className={styles.statLabel}>
                Профильных направлений снабжения MRO
              </div>
            </div>

            <div className={styles.statCard}>
              <div className={styles.statValue}>
                <span className={styles.statAccent}>от 24ч</span>
              </div>
              <div className={styles.statLabel}>
                Срок комплектации и быстрая отгрузка
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
