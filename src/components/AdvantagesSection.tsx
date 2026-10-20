import React from 'react';
import styles from './AdvantagesSection.module.css';
import { Warehouse, ReceiptText, CalendarClock, GitCompareArrows } from 'lucide-react';

export const AdvantagesSection: React.FC = () => {
  const advantages = [
    {
      icon: <Warehouse size={28} />,
      title: 'Свой склад в Смоленске',
      text: 'Собственный складской комплекс в промышленном районе города. Возможность оперативного самовывоза или экспресс-доставки автотранспортом компании в день согласования заказа.',
      badge: 'Смоленск · Промышленный район',
    },
    {
      icon: <ReceiptText size={28} />,
      title: 'НДС 22% во всех документах',
      text: 'Работаем строго с юридическими лицами по безналичному расчету. Полный комплект официальных закрывающих документов (УПД, счета-фактуры) через ЭДО в день отгрузки.',
      badge: 'ОСНО · ЭДО Диадок / СБИС',
    },
    {
      icon: <CalendarClock size={28} />,
      title: 'Отсрочка платежа',
      text: 'Предоставляем гибкие условия оплаты и кредитные линии до 30-60 дней для постоянных партнеров, производственных холдингов и строительно-монтажных предприятий.',
      badge: 'Лимиты до 5 000 000 ₽',
    },
    {
      icon: <GitCompareArrows size={28} />,
      title: 'Подбор аналогов по ТЗ',
      text: 'Инженерный отдел выполнит профессиональный подбор сертифицированных аналогов по вашим техническим требованиям без потери эксплуатационных характеристик и ресурса.',
      badge: '100% соответствие ГОСТ / DIN',
    },
  ];

  return (
    <section id="advantages" className={styles.section}>
      <div className={styles.container}>
        
        <div className={styles.headerRow}>
          <span className={styles.eyebrow}>Почему выбирают SNABGEAR</span>
          <h2 className={styles.title}>Преимущества работы с нами</h2>
          <p className={styles.subtitle}>
            Мы строим долгосрочные партнерские отношения с закупщиками и главными инженерами предприятий, обеспечивая предсказуемость и надежность поставок.
          </p>
        </div>

        <div className={styles.grid}>
          {advantages.map((adv, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardAccentLine} />
              <div className={styles.iconBox}>
                {adv.icon}
              </div>
              <h3 className={styles.cardTitle}>{adv.title}</h3>
              <p className={styles.cardText}>{adv.text}</p>
              <span className={styles.cardBadge}>{adv.badge}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
