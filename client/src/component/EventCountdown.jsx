import React, { useEffect, useState } from 'react';

const EventCountdown = ({ eventDate }) => {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const eventDateTime = new Date(eventDate);

      const timeDifference = eventDateTime - now;
      if (timeDifference <= 0) {
        // Event has already passed, stop the countdown
        clearInterval(intervalRef.current);
        return;
      }

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });
    };

    const intervalRef = setInterval(updateCountdown, 1000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [eventDate]);

  return (
    <div>
      <p>{countdown.days} days</p>
      <p>{countdown.hours} hours</p>
      <p>{countdown.minutes} minutes</p>
      <p>{countdown.seconds} seconds</p>
    </div>
  );
};

export default EventCountdown;
