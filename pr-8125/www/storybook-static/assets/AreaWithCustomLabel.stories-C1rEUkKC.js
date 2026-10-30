import{R as r}from"./iframe-DfPB0Wpx.js";import{R as c}from"./zIndexSlice-Vk5rQcki.js";import{C as d}from"./ComposedChart-CjfhBU-E.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-D7vaiEfY.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Bt24D4BM.js";import"./throttle-DIfZf6Rg.js";import"./index-Ax9OSmSr.js";import"./index-jmk38lRQ.js";import"./RechartsWrapper-DGPnCUTJ.js";import"./axisSelectors-CYP2U9Wf.js";import"./polarAxisSelectors-UZRyPZtr.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CsMflnTp.js";import"./index-TI8GAjTb.js";import"./index-C7rcjmTF.js";import"./renderedTicksSlice-DnnXNCqP.js";import"./index-DZEvNl2j.js";import"./CartesianChart-C7bLJAaP.js";import"./ZIndexPortal-BHohkWL-.js";import"./CategoricalChart-B65nKayz.js";import"./Layer-8vRP1mbc.js";import"./LabelList-Nkxiy7Jt.js";import"./Label-2zEOllgr.js";import"./Text-DaqQgel7.js";import"./DOMUtils-C1IGffYG.js";import"./ZIndexLayer-no9MVuHN.js";import"./ActivePoints-RRa8EpH6.js";import"./Dot-DTEgYyAs.js";import"./types-D0-9LK1x.js";import"./activeStyles-ChnEmJqB.js";import"./useAnimationId-C0yM1MFO.js";import"./dataEntryStyles-Dc4guk2V.js";import"./themeFill-BkM1x4hA.js";import"./Symbols-DuFTa5a3.js";import"./symbol-DWiA1K--.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-BxFlQPUr.js";import"./getRadiusAndStrokeWidthFromDot-CgvxCR2o.js";import"./ActiveShapeUtils-CvH07gq7.js";import"./Curve-NvY6PR48.js";import"./step-C1TIQlMm.js";import"./useEffectiveDataKey-DKbAeGMk.js";const pt={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},st=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(a=t.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};export{t as CustomizedLabel,st as __namedExportsOrder,pt as default};
