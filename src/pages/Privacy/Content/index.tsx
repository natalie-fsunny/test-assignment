import React from "react";
import { Button, Icon } from "../../../UI";
import styles from "./Content.module.scss";

export const Content = () => {
  return (
    <div className={styles.content}>
      <section className={styles.section}>
        <Button variant="text-right-arrow">
          <Icon variant="arrow" fontSize={7} />
          Back
        </Button>
        <h2 className={styles.h2}>PRIVACY POLICY</h2>
        <p>
          IT Talent OÜ follows the European data protection rules according to
          the General Data Protection Regulation (EU GDPR) when processing
          personal data.
        </p>
        <p>
          To ensure the lawful processing of personal data, we meet the
          following conditions:
        </p>
        <ul>
          <li>
            The data subject (employee, client, training participant) must
            consent to the processing of his or her personal data for one or
            more specific purposes.{" "}
          </li>
          <li>
            We process personal data in order to fulfill an agreement entered
            into with the participation of the data subject.
          </li>
          <li>
            The processing of personal data is necessary for the fulfillment of
            the legal obligation of the controller IT Talent OÜ.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h4 className={styles.subtitle}>How we collect your personal data:</h4>
        <ul>
          <li>
            In particular, we use personal data that you have provided to us
            upon registration on the website or data that we have generated for
            us as a result of the company'styles activities or our service.
          </li>
          <li>
            We receive personal data directly from you when you participate in
            our training. As well as, when you contact us through our website
            (by e-mail, letter, call or participate in a campaign organized by
            us).
          </li>
          <li>
            If you represent our legal entity client, we will receive your
            personal data upon concluding the agreement or during the
            performance of the agreement. As a representative of our legal
            entity client, you can provide us with the personal data of your
            other representatives and/or training participants.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h4 className={styles.subtitle}>
          Purpose of collection the personal data
        </h4>
        <p>
          The purpose of the processing of personal data collected by IT Talent
          OÜ is to comply with the requirements set by law (incl. The Adult
          Education Act) and to ensure the quality of training.
        </p>
        <p> Personal data collected by IT Talent OÜ:</p>
        <ul>
          <li>Name,</li>
          <li>Personal identification code,</li>
          <li>Telephone number,</li>
          <li>Skype contact</li>
          <li>Telegram contact,</li>
          <li>Email address,</li>
          <li>Level of education,</li>
          <li>Work experience.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h4 className={styles.subtitle}>Our Privacy Policy Principles: </h4>
        <ul>
          <li>
            We only collect relevant and necessary personal information. When
            collecting personal data, we proceed from the purpose of the
            processing of personal data, ie we do not collect more personal data
            than necessary.
          </li>
          <li>
            We store personal data in a form that allows the identification of
            data subjects only for as long as it is necessary to fulfill the
            purpose for which the personal data is processed.
          </li>
          <li>
            We monitor the accuracy of personal data and, if necessary,
            supplement, delete, or correct any personal data that is incorrect
            from the point of view of the purpose of processing.
          </li>
          <li>
            We process personal data reliably and securely. The processing is
            lawful, fair, and transparent to the data subject.
          </li>
          <li>
            We choose our partners carefully. We require and expect our
            contractual partners to be careful and ethical in the processing of
            personal data and to keep personal data secure. Our clients can be
            both legal entities and individuals.
          </li>
        </ul>
        <p>
          We process personal data as both a controller and an authorized
          processor. As the controller, we determine the purposes and means of
          processing personal data ourselves. As an authorized processor, we
          follow the written instructions of the controller when processing
          personal data. As an authorized processor, we process personal data in
          accordance with the written instructions arising from the data
          processing agreement entered into with our legal entity client.
        </p>
      </section>

      <section className={styles.section}>
        <h4 className={styles.subtitle}>
          For how long we store personal data?
        </h4>
        <p>
          We retain personal data for as long as it is required and permitted by
          law or necessary to achieve the purposes stated in the Data Protection
          Rules. We store personal data for at least three years. Upon
          expiration of the term of storage of personal data, we will
          permanently delete personal data.
        </p>
      </section>

      <section className={styles.section}>
        <h4 className={styles.subtitle}>Data subject rights</h4>
        <p>
          The data subject has the right to apply to IT Talent OÜ pursuant to
          law:
        </p>
        <ul>
          <li>
            the right to request information on which personal data concerning
            the data subject IT Talent OÜ processes;
          </li>
          <li>the right to access personal data;</li>
          <li>
            the right to request the rectification or erasure of personal data;
          </li>
          <li>
            if there are grounds provided for in legislation, the right to
            demand a restriction on the processing of personal data or to submit
            objections to the processing of personal data;
          </li>
          <li>the right to request the transfer of personal data;</li>
          <li>
            the right not to be the subject of a decision based on automated
            processing.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h4 className={styles.subtitle}>
          We delete the collected personal data as soon as:
        </h4>
        <ul>
          <li>
            Personal data are no longer needed for the purpose for which we
            collected them;
          </li>
          <li>The data subject withdraws the consent given for processing;</li>
          <li>The data subject objects to the processing of personal data;</li>
          <li>We have processed personal data illegally;</li>
          <li>The law requires it.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h4 className={styles.subtitle}>
          Reporting about the personal data breach
        </h4>
        <p>
          In the event of a personal data breach, please report immediately by
          email at info@ittalent.ee or call +372 506 0627. We take the issue of
          personal data security seriously and react immediately to any
          violation.
        </p>
      </section>

      <section className={styles.section}>
        <h4 className={styles.subtitle}>Solving Disagreements</h4>
        <p>
          The parties shall endeavor to resolve any disagreements through
          negotiations. If the dispute could not be resolved through
          negotiations, the parties may apply to the Harju County Court. The
          natural person client who does not enter into the agreement in his or
          her economic and professional activities may also file a complaint
          with the Consumer Protection and Technical Regulatory Authority in the
          event of a violation of his or her rights. It is also possible for a
          data subject to request assistance from the Data Protection
          Inspectorate in exercising his or her rights.
        </p>
      </section>
    </div>
  );
};
