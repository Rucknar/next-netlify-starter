import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="container">
      <Head>
        <title>Privacy Policy - Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Privacy Policy for Vintaga ltd." />
        <section>
          {/* You can fill in your privacy policy text here */}
          <p>Last updated: 30th March 2024</p>
          <p>
            Welcome to Vintaga Ltd. This Privacy Policy describes how we
            collect, use, process, and share your information, including
            personal information, in conjunction with your access to and use of
            the Vintaga app and its services. By using the app, you agree to the
            collection and use of information in accordance with this policy.
          </p>
          <h2>Information We Collect</h2>
          <p>
            When you use the Vintaga app, we collect information related to your
            whisky investment tracking activities. This includes, but is not
            limited to, your investment entries, preferences, and usage data. To
            facilitate your experience, we may also require you to provide us
            with certain personally identifiable information, including but not
            limited to your email address.
          </p>
          <h2>How We Use Your Information</h2>
          <p>Vintaga Ltd uses the collected data for various purposes:</p>
          <ul>
            <li>To provide and maintain our Service</li>
            <li>To notify you about changes to our Service</li>
            <li>
              To allow you to participate in interactive features of our Service
              when you choose to do so
            </li>
            <li>To provide customer care and support</li>
            <li>
              To provide analysis or valuable information so that we can improve
              the Service
            </li>
            <li>To monitor the usage of the Service</li>
            <li>To detect, prevent and address technical issues</li>
          </ul>
          <h2>Anonymized Data</h2>
          <p>
            We aggregate and anonymize data collected through the Vintaga app to
            help understand usage patterns and improve our product. This
            anonymized data may be used to enhance the Vintaga experience and
            develop new features or services.
          </p>
          <h2>Sharing Your Personal Information</h2>
          <p>
            Vintaga Ltd is committed to safeguarding your privacy. We will not
            share your personal details with third parties, except as described
            in this Privacy Policy:
          </p>
          <ul>
            <li>
              <strong>Third-Party Services:</strong> If any features, existing
              or future, require us to share your data with agents,
              distilleries, or other third parties (e.g., for integrations),
              this will be done on an opt-in basis for existing users. You will
              have the opportunity to agree to or opt-out of such sharing.
            </li>
            <li>
              <strong>Compliance with Laws:</strong> We may disclose your
              information where required to do so by law or subpoena or if we
              believe that such action is necessary to comply with the law and
              the reasonable requests of law enforcement or to protect the
              security or integrity of our Service.
            </li>
          </ul>
          <h2>Security of Data</h2>
          <p>
            The security of your data is important to us, but remember that no
            method of transmission over the Internet or method of electronic
            storage is 100% secure. While we strive to use commercially
            acceptable means to protect your Personal Information, we cannot
            guarantee its absolute security.
          </p>
          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page.
            You are advised to review this Privacy Policy periodically for any
            changes. Changes to this Privacy Policy are effective when they are
            posted on this page.
          </p>
          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us by email at [Your Contact Email].
          </p>
          <p>
            By using our app, you consent to the practices described in this
            Privacy Policy. This Privacy Policy is integral to our Terms of
            Service and is subject to change as our service evolves and expands.
            Please check back regularly to ensure you are aware of any changes.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
