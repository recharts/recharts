import{R as r}from"./iframe-CUSfJVGy.js";import{R as c}from"./zIndexSlice-DHvlitAO.js";import{C as d}from"./ComposedChart-hQ25gI1G.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-r2wfaTOR.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Dw_3NXl9.js";import"./index-DM8acuEY.js";import"./index-BjrjF_sl.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-eB2rdyhX.js";import"./isWellBehavedNumber-BlhXGToZ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DAlfJkzI.js";import"./axisSelectors-Ba-uagI8.js";import"./d3-scale-B5gueGek.js";import"./index-cWSuCV9A.js";import"./index-aMAZnXxU.js";import"./renderedTicksSlice-DTIkQgMV.js";import"./index-BHb_Ppqj.js";import"./CartesianChart-CYmwXWF8.js";import"./chartDataContext-C8S7uA6r.js";import"./CategoricalChart-CCLAUHt0.js";import"./Layer-D3Rs15Eb.js";import"./activeStyles-D0GvvJcq.js";import"./Label-CA5pDLh0.js";import"./Text-D1HNj6gm.js";import"./pageBackground-Cedpup01.js";import"./useId-KB6j76rh.js";import"./useBackwardsCompatibleTheme-C4dzzNKp.js";import"./ZIndexLayer-DS-kTeIC.js";import"./dataEntryStyles-DaqIqY42.js";import"./useAnimationId-5nMvsn6t.js";import"./ActivePoints-DGPkFg2Z.js";import"./Dot-CuTOnkdw.js";import"./types-CPjFjIqL.js";import"./RegisterGraphicalItemId-Brr1oXEa.js";import"./SetGraphicalItem-C-ccX4yH.js";import"./getRadiusAndStrokeWidthFromDot-D3hEZZtv.js";import"./ActiveShapeUtils-JeO-QszI.js";import"./Curve-CVDIysdN.js";import"./step-DHG-DUf8.js";import"./path-DyVhHtw_.js";import"./useEffectiveDataKey-CoJRTSM6.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
