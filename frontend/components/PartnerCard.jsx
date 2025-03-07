import React from 'react';
const flagImports = import.meta.glob('../static/flags/*.svg', { eager: true });

const PartnerCard = ({ 
  countryCode, 
  country, 
  partnerName, 
  ministry, 
  partnerWebsite, 
  ministryWebsite, 
  context = 'carousel-mobile' 
}) => {
  const getFlagUrl = (code) => {
    const flagPath = `../static/flags/${code.toLowerCase()}.svg`;
    return flagImports[flagPath]?.default || '';
  };

  // Define only context-specific styles
  const styles = {
    'carousel-mobile': {
      container: "max-w-48 min-w-[160px]",
      countryName: "text-base font-bold",
      label: "text-sm",
      value: "text-base"
    },
    'carousel-desktop': {
      container: "w-64",
      countryName: "text-xl font-bold",
      label: "",
      value: "text-lg"
    },
    'grid': {
      container: "w-full max-w-xs",
      countryName: "text-xl font-bold",
      label: "",
      value: "text-lg"
    }
  };

  // Use the appropriate style based on context
  const style = styles[context] || styles['carousel-mobile'];

  return (
    <div className={`text-left bg-gray1 rounded-3xl p-2 ${style.container}`}>
      <div className="mb-3 bg-white rounded-2xl p-3">
        <div className="overflow-hidden w-full mb-2 flex items-center justify-center">
          <img 
            className="h-auto w-full max-w-full max-h-full object-contain rounded-xl" 
            src={getFlagUrl(countryCode)}
            alt={`${country} flag`} 
          />
        </div>
        <h2 className={`mt-3 uppercase ${style.countryName}`}>{country}</h2>
      </div>

      <div className="mb-3 bg-white rounded-2xl p-4">
        <p className={`font-semibold text-gray2 mb-1 ${style.label}`}>Partner</p>
        {partnerWebsite ? (
          <a 
            href={partnerWebsite} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`font-semibold text-black hover:text-gray-700 underline inline-block max-w-full ${style.value}`} 
            style={{ wordWrap: 'anywhere' }}
          >
            {partnerName}
          </a>
        ) : (
          <p className={`font-semibold inline-block max-w-full ${style.value}`} style={{ wordWrap: 'anywhere' }}>
            {partnerName}
          </p>
        )}
      </div>

      {ministry && (
        <div className="bg-white rounded-2xl p-4">
          <p className={`font-semibold text-gray2 mb-1 ${style.label}`}>With support of</p>
          {ministryWebsite ? (
            <a 
              href={ministryWebsite} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`font-semibold text-black hover:text-gray-700 underline inline-block max-w-full ${style.value}`} 
              style={{ wordWrap: 'anywhere' }}
            >
              {ministry}
            </a>
          ) : (
            <p className={`font-semibold inline-block max-w-full ${style.value}`} style={{ wordWrap: 'anywhere' }}>
              {ministry}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default PartnerCard; 