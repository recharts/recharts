import{R as r}from"./iframe--dVKNbCw.js";import{R as c}from"./zIndexSlice-CpZXb3K1.js";import{C as d}from"./ComposedChart-BWbHkL8w.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-8SpwSzCk.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Vdk2BIuN.js";import"./index-BwEVofa3.js";import"./index-vo2of-1-.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-19MGuD5L.js";import"./isWellBehavedNumber-D1RSe1xb.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DRzg3fGD.js";import"./axisSelectors-asW4dLtq.js";import"./d3-scale-Daiirif0.js";import"./index-11dfO-im.js";import"./index-Bm7T0tPh.js";import"./renderedTicksSlice-DVZBX-9w.js";import"./index-BXnIb1gt.js";import"./CartesianChart-H_ULY9r1.js";import"./chartDataContext-BbvPlaK7.js";import"./CategoricalChart-D868Clfo.js";import"./Layer-DfItUnsr.js";import"./activeStyles-Kpuk4WPq.js";import"./Label-BMbpqhNX.js";import"./Text-ah79KUdU.js";import"./pageBackground-BuDL1xc_.js";import"./useId--mgRrHy6.js";import"./useBackwardsCompatibleTheme-D4D1b67A.js";import"./ZIndexLayer-BW0svFjl.js";import"./useAnimationId-Rf69jy07.js";import"./dataEntryStyles-Cq_oAnz_.js";import"./ActivePoints-DkHKRT6s.js";import"./Dot-SmgdmdqO.js";import"./types-CJbJ0IDT.js";import"./GraphicalItemClipPath-CTsg__fe.js";import"./SetGraphicalItem-BLl6tKFV.js";import"./getRadiusAndStrokeWidthFromDot-CZD0qUAD.js";import"./ActiveShapeUtils-DZz0A4i8.js";import"./Curve-goXmosWw.js";import"./step-Cg-bszWe.js";import"./path-DyVhHtw_.js";import"./useEffectiveDataKey-DluS1fAA.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(a=t.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};export{t as CustomizedLabel,pt as __namedExportsOrder,at as default};
