import { useTranslation } from "react-i18next";
import { SectionTitle } from "../../components/sectionTitle/sectionTitle";
import { ReactComponent as SuitcaseIcon } from "../../assets/icons/suitcase.svg";

import cls from "./experience.module.scss";

export const Experience = () => {
  const { t } = useTranslation();
  return (
    <section>
      <SectionTitle
        title={t("опыт работы")}
        Icon={SuitcaseIcon}
        className={cls.devider}
      />
      <div className={cls.content}>
        <div className={cls.point}>
          10.2023 —
          <br />
          {t("н.в.")}
        </div>
        <div className={cls.description}>
          <p className={cls.organization}>{t("Клевертек")}</p>
          <p className={cls.position}>{t("frontend-разработчик")}</p>
          <p className={cls.chapterTitle}>{t("Обязанности")}</p>
          <ul className={cls.list}>
            <li>
              {t(
                "Разработка и поддержка UI-приложения (добавление новых фич, актуализация зависимостей)"
              )}
            </li>
            <li>{t("Устранение выявленных деффектов")}</li>
            <li>
              {t(
                "Рефакторинг кода, устранение codeSmells и прочих замечаний, выявленных sonarqube"
              )}
            </li>
            <li>{t("Разработка Unit и e2e тестов фронтенд части")}</li>
          </ul>
          <p className={cls.chapterTitle}>{t("Содержание работы")}</p>
          <p className={cls.workDescription}>
            {t(
              "Разрабатываемое приложение относится к сфере финтеха (для АО 'АльфаБанк'). Построено на основе микросервисной архитектуры;"
            )}
          </p>
          <p className={cls.workDescription}>
            {t(
              "Основная используемая технология — Реакт, также используется NodeJS;"
            )}
          </p>
          <p className={cls.workDescription}>
            {t(
              "В сфере ответственности имеются модули, написанные как на классах, так и на функциях;"
            )}
          </p>
          <p className={cls.workDescription}>
            {t(
              "В качестве стейт-менеджера — используется RTK, в т.ч. RTK-Query. Использование библиотек Jest и Cypress для разработки тестов. Подключение модулей приложения посредствам WMF (Webpack). Активное использование библиотеки Core-components. Устранение выявленных при помощи AppSec уязвимостей;"
            )}
          </p>
          <p className={cls.workDescription}>
            {t(
              "В качестве дополнительной нагрузки осуществляется подготовка учебных докладов по техническим темам для принятых на работу начинающих специалистов."
            )}
          </p>
        </div>
      </div>
      <div className={cls.content}>
        <div className={cls.point}>
          04.2022 —
          <br />
          10.2023
        </div>
        <div className={cls.description}>
          <p className={cls.organization}>{t("Асист-Лаб")}</p>
          <p className={cls.position}>{t("frontend-разработчик")}</p>
          <p className={cls.chapterTitle}>{t("Обязанности")}</p>
          <ul className={cls.list}>
            <li>{t("asist-description1")}</li>
          </ul>
          <p className={cls.chapterTitle}>{t("Содержание работы")}</p>
          <p className={cls.workDescription}>{t("asist-description2")}</p>
          <p className={cls.workDescription}>{t("asist-description3")}</p>
        </div>
      </div>
    </section>
  );
};