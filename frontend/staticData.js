// This file exports the partners CSV data

// Import the CSV file directly
// The @rollup/plugin-dsv will automatically parse this into an array of objects
import partners from './PUT NEW DATA INTO ME/partners.csv';

// With @rollup/plugin-dsv, the CSV is already parsed into an array of objects
// where the keys are the column headers, so we can export it directly
// or transform it if needed

// Optional: Transform the data if you want to rename fields or convert types
const transformedPartners = partners.map(partner => ({
  countryCode: partner['Код страны'],
  country: partner['Страна'],
  partnerName: partner['Партнёр'],
  partnerWebsite: partner['Сайт партнёра'],
  partnerRepresentative: partner['Представитель'],
  ministry: partner['Министерство'],
  ministryRepresentative: partner['Представитель'],
  ministryWebsite: partner['Сайт министерства'],
  additionalInfo: partner['Доп инфа']
}));

export { transformedPartners as partners };

// If you want to use the raw data directly:
// export { partners }; 