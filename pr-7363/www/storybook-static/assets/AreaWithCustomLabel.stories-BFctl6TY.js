import{e as t}from"./iframe-CA2bza4n.js";import{g as c}from"./arrayEqualityCheck-DAdSVd1l.js";import{C as d}from"./ComposedChart-BKM2Jk4b.js";import{a as l}from"./Coordinate-CcdTesrj.js";import{A as h}from"./Area-BtxFyoBj.js";import{R as u}from"./RechartsHookInspector-QZX819t0.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BnLaySgP.js";import"./immer-DasQIOIX.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B5q3WxuV.js";import"./index-CsA15_6S.js";import"./hooks-C5pIdCPM.js";import"./axisSelectors-To1e2V6V.js";import"./d3-scale-rP3V7GwL.js";import"./zIndexSlice-CSAGQhtB.js";import"./renderedTicksSlice-DH7mHkyS.js";import"./CartesianChart-DK-SLcv_.js";import"./chartDataContext-DoiK_cA8.js";import"./CategoricalChart-eE49ceQM.js";import"./Curve-7nNudVZs.js";import"./types-CZ_BmrzD.js";import"./step-BK3O3AGs.js";import"./path-DyVhHtw_.js";import"./Layer-2pQ-0vOW.js";import"./ReactUtils-CEO6nkw8.js";import"./Label-BmhtQvJ8.js";import"./Text-GI5oKEYa.js";import"./DOMUtils-DrG-za0U.js";import"./ZIndexLayer-_xwh97le.js";import"./ActivePoints-rXvPQbuC.js";import"./Dot-C7a5PgHO.js";import"./RegisterGraphicalItemId-DMySGUM1.js";import"./GraphicalItemClipPath-qf9cPUyg.js";import"./SetGraphicalItem-iX6trfIf.js";import"./useAnimationId-CvBgWeeZ.js";import"./getRadiusAndStrokeWidthFromDot-M3B-XLBm.js";import"./graphicalItemSelectors-Cx0iqyOb.js";import"./index-DZjuuzp6.js";import"./ChartSizeDimensions-BRPqgDFi.js";import"./OffsetShower-CTWF0vR4.js";import"./PlotAreaShower-CqWXxpLn.js";const mt={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement(h,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(u,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={coordinateWithValueData}>
          <Area dataKey="y" isAnimationActive={false} label={renderLabel} />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const pt=["CustomizedLabel"];export{e as CustomizedLabel,pt as __namedExportsOrder,mt as default};
