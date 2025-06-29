const Notification = ({ message }) => {
  return <>{message && <p style={{ color: 'green' }}>{message}</p>}</>;
};

export default Notification;
