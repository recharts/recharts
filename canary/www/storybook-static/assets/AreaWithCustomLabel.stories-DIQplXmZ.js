import{R as r}from"./iframe-D54unYLy.js";import{R as c}from"./zIndexSlice-Cm3b7ejj.js";import{C as d}from"./ComposedChart-D7cf1DfT.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-ChzN4-1G.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DMkP6nmZ.js";import"./index-DTKKzB_q.js";import"./index-DJM2R3WX.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CJCAn8xn.js";import"./isWellBehavedNumber-BRWfHs55.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Sp30bFVi.js";import"./axisSelectors-CGx4lpK1.js";import"./d3-scale-izKDfaZA.js";import"./index-C9p80rQK.js";import"./index-DILyQNHS.js";import"./renderedTicksSlice-D7aoxSus.js";import"./index-BNdKzrH5.js";import"./CartesianChart-CcD5rs5o.js";import"./chartDataContext-Coa6LtBf.js";import"./CategoricalChart-Bg1dkEg1.js";import"./Layer-crHiZgAm.js";import"./activeStyles-qzo8AQBX.js";import"./Label-A3PRHVZO.js";import"./Text-CRGGbb6_.js";import"./pageBackground-CsysAoq2.js";import"./useId-B4uqruq9.js";import"./useBackwardsCompatibleTheme-BSJdofEh.js";import"./ZIndexLayer-DfUYfUZg.js";import"./useAnimationId-C7SuCt1Q.js";import"./dataEntryStyles-CsFYoURq.js";import"./ActivePoints-Bqn9pf-5.js";import"./Dot-B2rX6rOm.js";import"./types-BmPqNA2a.js";import"./GraphicalItemClipPath-DDtxOsTL.js";import"./SetGraphicalItem-Y9oO0QZg.js";import"./getRadiusAndStrokeWidthFromDot-DqXexg1f.js";import"./ActiveShapeUtils-DPaRxWi8.js";import"./Curve-leEdGdAp.js";import"./step-C309cuJU.js";import"./path-DyVhHtw_.js";import"./useEffectiveDataKey-BB9JnQ0o.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
