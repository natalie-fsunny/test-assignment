import React from "react";
import { useTranslation } from "react-i18next";
import { Button, Icon } from "../../../UI";
import styles from "./Content.module.scss";

export const Content = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.content}>
      <section className={styles.section}>
        <Button variant="text-right-arrow">
          <Icon variant="arrow" fontSize={7} />
          {t("main.back")}
        </Button>
        <h2 className={styles.h2}>{t("main.privacy_policy_title")}</h2>
        <p>{t("main.privacy_policy_content.part1")}</p>
        <p>{t("main.privacy_policy_content.part2")}</p>
        <ul>
          <li>{t("main.privacy_policy_content.part3.part3_1")}</li>
          <li>{t("main.privacy_policy_content.part3.part3_2")}</li>
          <li>{t("main.privacy_policy_content.part3.part3_3")}</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h4 className={styles.subtitle}>
          {t("main.collecting_personal_data_title")}
        </h4>
        <ul>
          <li>{t("main.collecting_personal_data_content.part1.part1_1")}</li>
          <li>{t("main.collecting_personal_data_content.part1.part1_2")}</li>
          <li>{t("main.collecting_personal_data_content.part1.part1_3")}</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h4 className={styles.subtitle}>
          {t("main.purpose_of_collecting_personal_data_title")}
        </h4>
        <p>{t("main.purpose_of_collecting_personal_data_content.part1")}</p>
        <p> {t("main.purpose_of_collecting_personal_data_content.part2")}</p>
        <ul>
          <li>
            {t(
              "main.purpose_of_collecting_personal_data_content.part3.part3_1"
            )}
          </li>
          <li>
            {t(
              "main.purpose_of_collecting_personal_data_content.part3.part3_2"
            )}
          </li>
          <li>
            {t(
              "main.purpose_of_collecting_personal_data_content.part3.part3_3"
            )}
          </li>
          <li>
            {t(
              "main.purpose_of_collecting_personal_data_content.part3.part3_4"
            )}
          </li>
          <li>
            {t(
              "main.purpose_of_collecting_personal_data_content.part3.part3_5"
            )}
          </li>
          <li>
            {t(
              "main.purpose_of_collecting_personal_data_content.part3.part3_6"
            )}
          </li>
          <li>
            {t(
              "main.purpose_of_collecting_personal_data_content.part3.part3_7"
            )}
          </li>
          <li>
            {t(
              "main.purpose_of_collecting_personal_data_content.part3.part3_8"
            )}
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h4 className={styles.subtitle}>
          {t("main.privacy_principles_title")}{" "}
        </h4>
        <ul>
          <li>{t("main.privacy_principles_content.part1.part1_1")}</li>
          <li>{t("main.privacy_principles_content.part1.part1_2")}</li>
          <li>{t("main.privacy_principles_content.part1.part1_3")}</li>
          <li>{t("main.privacy_principles_content.part1.part1_4")}</li>
          <li>{t("main.privacy_principles_content.part1.part1_5")}</li>
        </ul>
        <p>{t("main.privacy_principles_content.part2")}</p>
      </section>

      <section className={styles.section}>
        <h4 className={styles.subtitle}>
          {t("main.storing_personal_data_title")}
        </h4>
        <p>{t("main.storing_personal_data_content.part1")}</p>
      </section>

      <section className={styles.section}>
        <h4 className={styles.subtitle}>
          {t("main.data_subject_rights_title")}
        </h4>
        <p>{t("main.data_subject_rights_content.part1")}</p>
        <ul>
          <li>{t("main.data_subject_rights_content.part2.part2_1")}</li>
          <li>{t("main.data_subject_rights_content.part2.part2_2")}</li>
          <li>{t("main.data_subject_rights_content.part2.part2_3")}</li>
          <li>{t("main.data_subject_rights_content.part2.part2_4")}</li>
          <li>{t("main.data_subject_rights_content.part2.part2_5")}</li>
          <li>{t("main.data_subject_rights_content.part2.part2_6")}</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h4 className={styles.subtitle}>{t("main.deletion_data_title")}</h4>
        <ul>
          <li>{t("main.deletion_data_content.part1.part1_1")}</li>
          <li>{t("main.deletion_data_content.part1.part1_2")}</li>
          <li>{t("main.deletion_data_content.part1.part1_3")}</li>
          <li>{t("main.deletion_data_content.part1.part1_4")}</li>
          <li>{t("main.deletion_data_content.part1.part1_5")}</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h4 className={styles.subtitle}>{t("main.reporting_title")}</h4>
        <p>{t("main.reporting_content.part1")}</p>
      </section>

      <section className={styles.section}>
        <h4 className={styles.subtitle}>
          {t("main.solving_disagreements_title")}
        </h4>
        <p>{t("main.solving_disagreements_content.part1")}</p>
      </section>
    </div>
  );
};
