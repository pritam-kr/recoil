export const findDateTime = (date) => {
    const addZero = (num) => (num < 10 ? "0" + num : num);
    const dateTime = new Date(date);

    return `${dateTime.getDate()}/${dateTime.getMonth()}/${dateTime.getFullYear()}, ${addZero(
      dateTime.getHours()
    )}:${addZero(dateTime.getMinutes())}`;
  };