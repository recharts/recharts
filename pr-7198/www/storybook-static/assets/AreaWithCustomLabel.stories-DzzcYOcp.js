import{e as t}from"./iframe-D2iPyEE3.js";import{R as c}from"./arrayEqualityCheck-BQ52A-KD.js";import{C as d}from"./ComposedChart-C_oRmZ51.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-C55odWf9.js";import{R as u}from"./RechartsHookInspector-pMynMK3d.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-B2qn9BK_.js";import"./immer-5DUlJX3y.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D9hxchsK.js";import"./index-CGzhf8ES.js";import"./hooks-DmQVapf1.js";import"./axisSelectors-Bf33qp9J.js";import"./d3-scale-D333UmOT.js";import"./zIndexSlice-B-uvLuMe.js";import"./renderedTicksSlice-Cw8jJmSY.js";import"./CartesianChart-C44XCUUQ.js";import"./chartDataContext-B0bZnblU.js";import"./CategoricalChart-kNyVXZoh.js";import"./Curve-gyPLT6fj.js";import"./types-DfbbSUKg.js";import"./step-NQkLQHEn.js";import"./Layer-CIGoVUHw.js";import"./ReactUtils-DlxpINgd.js";import"./Label-CjmamkRK.js";import"./Text-B4mK5G2Y.js";import"./DOMUtils-BDNid5QK.js";import"./ZIndexLayer-ClfHdlij.js";import"./ActivePoints-DO1blp6A.js";import"./Dot-D8o3tU3P.js";import"./RegisterGraphicalItemId-De4zP5NP.js";import"./GraphicalItemClipPath-oM0pOvEZ.js";import"./SetGraphicalItem-3fLhXJ7X.js";import"./useAnimationId-fkVW7SyB.js";import"./getRadiusAndStrokeWidthFromDot-CFwxR8E8.js";import"./graphicalItemSelectors-DEHTmw7m.js";import"./index-DZX1BXuq.js";import"./ChartSizeDimensions-CYgvj-Lj.js";import"./OffsetShower-BwoPAHAo.js";import"./PlotAreaShower-phVVNo9A.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement(h,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(u,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const mt=["CustomizedLabel"];export{e as CustomizedLabel,mt as __namedExportsOrder,at as default};
