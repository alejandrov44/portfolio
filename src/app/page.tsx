import ProfileBadge from "@/components/profile-badge";
import EnvelopeIcon from "@/images/icons/page/envelope";

const Home: React.FC = () => {
  return (
    <div className="contact-container">
      <ProfileBadge />
      <div className="contact-header">
        <p>I'm always up for a chat! Feel free to reach out.</p>
      </div>
      <div className="contact-details">
        <div className="contact-item">
          <EnvelopeIcon className="contact-icon" alt="Envelope Icon" />
          <a href="mailto:alejandrovianalaba@gmail.com" className="contact-link">
            alejandrovianalaba@gmail.com
          </a>
        </div>
        <div className="contact-fun">
          <p>Or catch up over a coffee ☕</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
