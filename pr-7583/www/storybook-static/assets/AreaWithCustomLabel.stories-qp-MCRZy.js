import{R as e}from"./iframe-DtpJQkSw.js";import{R as c}from"./zIndexSlice-Dy2ZfcaY.js";import{C as d}from"./ComposedChart-oPCW50r4.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-BmBbTw6H.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CYLsUs0w.js";import"./index-CVik1Y94.js";import"./index-qBeIIgbT.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-Cjc4ovdW.js";import"./isWellBehavedNumber-BvF_giMt.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-GuBZSFZ_.js";import"./index-Vvo-Q6um.js";import"./index-CFRYfm15.js";import"./renderedTicksSlice-C4FsNrs6.js";import"./axisSelectors-BtA0yFqg.js";import"./d3-scale-BbQAu0RB.js";import"./CartesianChart-DwY-VUV4.js";import"./chartDataContext-CkSWHG6R.js";import"./CategoricalChart-B6Np4ceD.js";import"./Layer-A5fdUiAt.js";import"./AnimatedItems-EBWp9peZ.js";import"./Label-C9iRyFHw.js";import"./Text-CTFoNHWc.js";import"./DOMUtils-Cb4JkhR_.js";import"./ZIndexLayer-BnsLSc-b.js";import"./useAnimationId-B_99W7UQ.js";import"./ActivePoints-G-h1IpPy.js";import"./Dot-DSt-WMWp.js";import"./types-D6abfmrW.js";import"./RegisterGraphicalItemId-Bw3Bvi6g.js";import"./GraphicalItemClipPath-DeNzzcHV.js";import"./SetGraphicalItem-x1medb7e.js";import"./getRadiusAndStrokeWidthFromDot-N4R43LAE.js";import"./ActiveShapeUtils-DirzpQmC.js";import"./Curve-D1mPklqy.js";import"./step-WcxcGmzd.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-3hFJ8itx.js";const ot={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={coordinateWithValueData}>
          <Area dataKey="y" isAnimationActive={false} label={renderLabel} />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const it=["CustomizedLabel"];export{t as CustomizedLabel,it as __namedExportsOrder,ot as default};
