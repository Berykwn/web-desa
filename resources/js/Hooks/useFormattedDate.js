import { useState, useEffect } from 'react';

const useFormattedDate = (updatedAt) => {
  const [formattedUpdatedAt, setFormattedUpdatedAt] = useState('');

  useEffect(() => {
    // Convert the updated_at string to a Date object
    const updatedAtDate = new Date(updatedAt);

    // Format the date using toLocaleString
    const formattedDate = updatedAtDate.toLocaleString('en-ID', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });

    // Update the state with the formatted date
    setFormattedUpdatedAt(formattedDate);
  }, [updatedAt]);

  return formattedUpdatedAt;
};

export default useFormattedDate;
