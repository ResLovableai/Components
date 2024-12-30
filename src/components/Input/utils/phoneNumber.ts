export const formatPhoneNumber = (value: string): string => {
  // Remove all non-digit characters
  const cleanValue = value.replace(/\D/g, '');
  
  // Split into array of numbers if multiple
  const numbers = cleanValue.split(',');
  
  // Only keep first 5 numbers
  const limitedNumbers = numbers.slice(0, 5);
  
  // Format each number
  const formattedNumbers = limitedNumbers.map(num => {
    if (num.length <= 3) return num;
    if (num.length <= 6) return `${num.slice(0, 3)}-${num.slice(3)}`;
    return `${num.slice(0, 3)}-${num.slice(3, 6)}-${num.slice(6, 10)}`;
  });
  
  return formattedNumbers.join(', ');
};