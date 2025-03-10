import React from 'react';
const flagImports = import.meta.glob('../static/flags/*.svg', { eager: true });
const ministryLogoImports = import.meta.glob('../static/logos/Ministries/*.png', { eager: true });
const partnerLogoImports = import.meta.glob('../static/logos/Partners/*.png', { eager: true });

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
    return flagImports[flagPath]?.default || null;
  };
  const getMinistryLogoUrl = (code) => {
    const ministryLogoPath = `../static/logos/Ministries/${code.toUpperCase()}.png`;
    return ministryLogoImports[ministryLogoPath]?.default || null;
  };
  const getPartnerLogoUrl = (code) => {
    const partnerLogoPath = `../static/logos/Partners/${code.toUpperCase()}.png`;
    console.log(partnerLogoPath);
    return partnerLogoImports[partnerLogoPath]?.default || null;
  };

  // Define only context-specific styles
  const styles = {
    'carousel-mobile': {
      container: "max-w-48 min-w-[160px]",
      countryName: "text-base font-bold",
      label: "text-sm",
      value: "text-base",
      logos: true,
    },
    'carousel-grid-mobile': {
      container: "max-w-48 min-w-[160px]",
      countryName: "text-base font-bold",
      label: "text-sm",
      value: "text-base",
      logos: false,
    },
    'carousel-desktop': {
      container: "w-64",
      countryName: "text-xl font-bold",
      label: "",
      value: "text-lg",
      logos: true,
    },
    'grid': {
      container: "w-full max-w-xs",
      countryName: "text-xl font-bold",
      label: "",
      value: "text-lg",
      logos: false,
    }
  };

  // Use the appropriate style based on context
  const style = styles[context] || styles['carousel-mobile'];

  return (
    <div className={`text-left bg-gray1 rounded-3xl p-[8px] ${style.container}`}>
      <div className="mb-[8px] bg-white rounded-2xl p-3">
        <div className="overflow-hidden w-full flex items-center justify-left gap-2 ml-1">
          <img 
            className="h-auto w-8 rounded" 
            src={getFlagUrl(countryCode)}
            alt={`${country} flag`} 
          />
          <h2 className={`uppercase ${style.countryName}`}>{country}</h2>
        </div>
      </div>

      <div className="mb-[8px] bg-white rounded-2xl p-4">
        <p className={`font-semibold text-gray2 mb-1 ${style.label}`}>Partner</p>
        {getPartnerLogoUrl(countryCode) && style.logos && (
          <img 
            src={getPartnerLogoUrl(countryCode)} 
            alt={`${partnerName} logo`} 
            className="w-auto h-20 object-contain my-2"
          />
        )}
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
          {getMinistryLogoUrl(countryCode) && style.logos && (
            <img 
              src={getMinistryLogoUrl(countryCode)} 
              alt={`${ministry} logo`} 
              className="h-10 max-w-30 object-contain my-2"
            />
          )}
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