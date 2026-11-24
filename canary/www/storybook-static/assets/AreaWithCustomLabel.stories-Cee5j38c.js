import{R as r}from"./iframe-3nQ-xZag.js";import{R as c}from"./zIndexSlice-Dm-AMY-R.js";import{C as d}from"./ComposedChart-BTAIT8TE.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-0nLeI4S9.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CB2UEG-j.js";import"./get-CjriyByo.js";import"./throttle-VgoIbkK-.js";import"./index-GNDyZ-zm.js";import"./index-ByeDIwBG.js";import"./RechartsWrapper-CLBNIVU_.js";import"./axisSelectors-fNaznWMp.js";import"./polarAxisSelectors-dCOIGnCj.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Nv905U8s.js";import"./index-BQJ2UTdx.js";import"./index-D4meeqfk.js";import"./renderedTicksSlice-BwWN8huf.js";import"./index-Diug9bjW.js";import"./fillDefinitions-BLnlF0KU.js";import"./CartesianChart-D8wOEODK.js";import"./chartDataContext-CxxFWOOm.js";import"./CategoricalChart-D8F0hlwY.js";import"./getRadiusAndStrokeWidthFromDot-DqipViX9.js";import"./Layer-B7hf8wrq.js";import"./dataEntryStyles-31cxgZsa.js";import"./Label-CjKwBg5w.js";import"./Text-DQIY-xVt.js";import"./ZIndexLayer-5jwQGiTj.js";import"./ActivePoints-Ba3qB0HE.js";import"./Dot-B0shGOFT.js";import"./types-CveBZAlv.js";import"./activeStyles-BALJdcO7.js";import"./useAnimationId-JHyqMuIo.js";import"./Symbols-tD_4MAA2.js";import"./symbol-34ANNL6v.js";import"./path-BBMZd4YL.js";import"./SetGraphicalItem-CcSizHOA.js";import"./ActiveShapeUtils-CPk9lbeK.js";import"./Curve-D3218arp.js";import"./step-nf1yL9aW.js";import"./useEffectiveDataKey-DHnfGJ84.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},mt=["CustomizedLabel"];var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as CustomizedLabel,mt as __namedExportsOrder,at as default};
