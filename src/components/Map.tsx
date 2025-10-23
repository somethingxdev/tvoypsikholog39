import {
  YMap,
  YMapDefaultSchemeLayer,
  YMapDefaultFeaturesLayer,
  YMapComponentsProvider,
  YMapDefaultMarker,
} from 'ymap3-components';

function Map() {
  return (
    <div className='py-10'>
			<h2 className='text-4xl xl:text-5xl mb-5 text-center px-3.5'>г. Калининград, ул. Генделя, 3А</h2>
      <div className="h-[300px] md:h-[500px] w-full">
        <YMapComponentsProvider apiKey={'59037372-5663-482e-9a7d-56426e4a0f94'}>
          <YMap location={{ center: [20.496563, 54.72165], zoom: 15 }}>
            <YMapDefaultSchemeLayer />
            <YMapDefaultFeaturesLayer />
            <YMapDefaultMarker coordinates={[20.496563, 54.72165]} />
          </YMap>
        </YMapComponentsProvider>
      </div>
    </div>
  );
}

export default Map;
