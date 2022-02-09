import React, { Fragment, useState, useEffect, useRef } from 'react';
import './style.css';
import { Map, APILoader, Marker } from '@uiw/react-amap';

// function Demo() {
//   const [dragEnable, setDragEnable] = useState(true);
//   const [display, setDisplay] = useState(true);
//   const [zoom, setZoom] = useState(15);
//   const [viewMode, setViewMode] = useState('3D');
//   return (
//     <Fragment>
//       <button onClick={() => setDragEnable(!dragEnable)}>
//         {dragEnable ? '禁用' : '启用'}拖拽
//       </button>
//       <button onClick={() => setDisplay(!display)}>
//         {display ? '卸载' : '加载'}地图
//       </button>
//       <button onClick={() => setViewMode(viewMode === '3D' ? '2D' : '3D')}>
//         {viewMode}地图
//       </button>
//       <button onClick={() => setZoom(zoom + 1)}>放大 +1 - ({zoom})</button>
//       <button onClick={() => setZoom(zoom - 1)}>缩小 -1 - ({zoom})</button>
//       <div style={{ width: '100%', height: 350 }}>
//         {display && (
//           <Map
//             dragEnable={dragEnable}
//             zoom={zoom}
//             viewMode={viewMode}
//             pitch={viewMode === '2D' ? 0 : 70}
//           />
//         )}
//       </div>
//     </Fragment>
//   );
// }

// function Demo() {
//   const mapRef = useRef();
//   useEffect(() => {
//     console.log('mapRef:', mapRef);
//   }, []);
//   return (
//     <div style={{ width: '100%', height: 330 }}>
//       <Map
//         layers={[new AMap.TileLayer.Satellite()]}
//         ref={(instance) => {
//           if (instance && instance.map) {
//             const bounds = instance.map.getBounds();
//             console.log('instance', instance);
//           }
//         }}
//       />
//       <Map layers={[new AMap.TileLayer.Satellite()]} ref={mapRef} />
//     </div>
//   );
// }

// const Demo = () => (
//   <div style={{ width: '100%', height: '300px' }}>
//     <APILoader akay="a7a90e05a37d3f6bf76d4a9032fc9129">
//       <Map
//         onComplete={(data, de) => {
//           console.log('地图加载完成！', data, de);
//         }}
//         onClick={() => {
//           console.log('点击事件！');
//         }}
//       />
//     </APILoader>
//   </div>
// );

const Demo = () => {
  const [show, setShow] = useState(true);
  // const [map, setMap] = useState();
  return (
    <>
      <button onClick={() => setShow(!show)}>{show ? '隐藏' : '显示'}</button>
      <div style={{ width: '100%', height: '500px' }}>
        <Map
          zoom={11}
          center={[114.173355, 22.320048]}
          ref={(instance) => {
            if (instance && instance.map && !map) {
              setMap(instance.map);
            }
          }}
        >
          {/* <Marker
            visiable={show}
            title="北京市"
            offset={new AMap.Pixel(-13, -30)}
            label={{
              // 设置文本标注偏移量
              offset: new AMap.Pixel(20, 20),
              // 设置文本标注内容
              content: "<div class='info'>这里是北京</div>",
              // 设置文本标注方位
              direction: 'right',
            }}
            position={new AMap.LngLat(116.405285, 39.904989)}
          />
          {/* 连续3marker */}
          {/* <Marker
            visiable={show}
            icon={
              new AMap.Icon({
                imageSize: new AMap.Size(25, 34),
                image:
                  '//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-1.png',
              })
            }
            offset={new AMap.Pixel(-13, -30)}
            position={new AMap.LngLat(116.205467, 39.907761)}
          />
          <Marker
            visiable={show}
            icon={
              new AMap.Icon({
                imageSize: new AMap.Size(25, 34),
                image:
                  '//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-2.png',
              })
            }
            offset={new AMap.Pixel(-13, -30)}
            position={[116.368904, 39.913423]}
          />
          <Marker
            visiable={show}
            icon={
              new AMap.Icon({
                imageSize: new AMap.Size(25, 34),
                image:
                  '//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-3.png',
              })
            }
            offset={new AMap.Pixel(-13, -30)}
            position={[116.305467, 39.807761]}
          /> */}
          <Marker
            visiable={show}
            title="香港特別行政區"
            position={new AMap.LngLat(114.173355, 22.320048)}
          />
          {/* <Marker
            visiable={show}
            title="將軍澳小赤沙康城路1號"
            offset={new AMap.Pixel(-13, -30)}
            label={{
              // 设置文本标注偏移量
              offset: new AMap.Pixel(2, 2),
              // 设置文本标注内容
              content: "<div class='info'>测试点1</div>",
              // 设置文本标注方位
              direction: 'right',
            }}
            position={new AMap.LngLat(114.173355, 22.320153)}
          />
          <Marker
            visiable={show}
            title="將軍澳小赤沙康城路1號"
            offset={new AMap.Pixel(-13, -30)}
            label={{
              // 设置文本标注偏移量
              offset: new AMap.Pixel(2, 2),
              // 设置文本标注内容
              content: "<div class='info'>测试点2</div>",
              // 设置文本标注方位
              direction: 'right',
            }}
            position={new AMap.LngLat(114.173355, 22.324155)}
          />
          <Marker
            visiable={show}
            title="將軍澳小赤沙康城路1號"
            offset={new AMap.Pixel(-13, -30)}
            label={{
              // 设置文本标注偏移量
              offset: new AMap.Pixel(2, 2),
              // 设置文本标注内容
              content: "<div class='info'>  测试点3</div>",
              // 设置文本标注方位
              direction: 'right',
            }}
            position={new AMap.LngLat(114.173355, 22.321456)}
          />
          <Marker
            visiable={show}
            title="將軍澳小赤沙康城路1號"
            offset={new AMap.Pixel(-13, -30)}
            label={{
              // 设置文本标注偏移量
              offset: new AMap.Pixel(2, 2),
              // 设置文本标注内容
              content: "<div class='info'>  测试点4</div>",
              // 设置文本标注方位
              direction: 'right',
            }}
            position={new AMap.LngLat(114.173355, 22.431456)}
          />
          <Marker
            visiable={show}
            title="將軍澳小赤沙康城路1號"
            offset={new AMap.Pixel(-13, -30)}
            label={{
              // 设置文本标注偏移量
              offset: new AMap.Pixel(2, 2),
              // 设置文本标注内容
              content: "<div class='info'>  测试点5</div>",
              // 设置文本标注方位
              direction: 'right',
            }}
            position={new AMap.LngLat(114.173355, 22.331456)}
          />
          <Marker
            visiable={show}
            title="將軍澳小赤沙康城路1號"
            offset={new AMap.Pixel(-13, -30)}
            label={{
              // 设置文本标注偏移量
              offset: new AMap.Pixel(2, 2),
              // 设置文本标注内容
              content: "<div class='info'>  测试点5</div>",
              // 设置文本标注方位
              direction: 'right',
            }}
            position={new AMap.LngLat(114.174355, 22.331456)}
          />
          <Marker
            visiable={show}
            title="將軍澳小赤沙康城路1號"
            offset={new AMap.Pixel(-13, -30)}
            label={{
              // 设置文本标注偏移量
              offset: new AMap.Pixel(2, 2),
              // 设置文本标注内容
              content: "<div class='info'>  测试点5</div>",
              // 设置文本标注方位
              direction: 'right',
            }}
            position={new AMap.LngLat(114.171355, 22.331456)}
          />
          {/* /////////////////// */}
          {/* <Marker
            visiable={show}
            icon={
              new AMap.Icon({
                imageSize: new AMap.Size(25, 34),
                image:
                  '//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-1.png',
              })
            }
            offset={new AMap.Pixel(-13, -30)}
            position={new AMap.LngLat(114.171355, 22.331456)}
          />
          <Marker
            visiable={show}
            icon={
              new AMap.Icon({
                imageSize: new AMap.Size(25, 34),
                image:
                  '//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-2.png',
              })
            }
            offset={new AMap.Pixel(-13, -30)}
            position={[114.171355, 22.331456]}
          />
          <Marker
            visiable={show}
            icon={
              new AMap.Icon({
                imageSize: new AMap.Size(25, 34),
                image:
                  '//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-3.png',
              })
            }
            offset={new AMap.Pixel(-13, -30)}
            position={[116.171355, 22.331456]}
          />  */}
        </Map>
      </div>
    </>
  );
};

export default function App() {
  const Demo1 = () => (
    <div style={{ width: '100%', height: '300px' }}>
      <APILoader akay="a7a90e05a37d3f6bf76d4a9032fc9129">
        <Map />
      </APILoader>
    </div>
  );
  return (
    <div>
      <Demo1 />
    </div>
  );
}
