import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import HomeSectionCard from '../../components/homeSectionCard/HomeSectionCard';

const HomeSectionCarousel = ({ data, title }) => {

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 5 },
  };

  // Filter data based on the title (category)
  const filteredData = data.filter(item => item.category === title);

  // Map filtered data to HomeSectionCard components
  const items = filteredData.map(item => <HomeSectionCard  item={item} />);

  return (
    <div className='relative px-4 lg:px-8 border m-10 rounded-2xl'>
      <h2 className='text-2xl font-bold py-5 text-gray-700'>{title}</h2>
      <div className='relative p5'>
        <AliceCarousel
          items={items}
          responsive={responsive}
          disableButtonsControls
          infinite
        />
      </div>
    </div>
  );
}

export default HomeSectionCarousel;
