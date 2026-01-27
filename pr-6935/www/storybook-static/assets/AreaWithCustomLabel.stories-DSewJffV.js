import{e as t}from"./iframe-IlsB_rJq.js";import{R as c}from"./arrayEqualityCheck-DRku3AZG.js";import{C as d}from"./ComposedChart-CyYwEyzP.js";import{A as l}from"./Area-y9bLGfBE.js";import{R as h}from"./RechartsHookInspector-HlZdM34s.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-B3pOdsrQ.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-C3UkR7qf.js";import"./hooks-DcodrmVZ.js";import"./axisSelectors-DKjWCzWL.js";import"./zIndexSlice-CKbt9tj5.js";import"./CartesianChart-KFcBxL2h.js";import"./chartDataContext-CrRgJL1Z.js";import"./CategoricalChart-Bh-A6rTf.js";import"./Curve-BktJTjWe.js";import"./types-tqXwELcn.js";import"./Layer-vBbFq665.js";import"./ReactUtils-Pssbr3N2.js";import"./Label-DZIMKlIj.js";import"./Text-_vyUeh1U.js";import"./DOMUtils-C0sVJTg_.js";import"./ZIndexLayer-9CrWluzk.js";import"./ActivePoints-Cr8soWVC.js";import"./Dot-BxXnrLYt.js";import"./RegisterGraphicalItemId-jN59e1bG.js";import"./GraphicalItemClipPath-C9Or-tsl.js";import"./SetGraphicalItem-Aa6pLrW9.js";import"./useAnimationId-Bms0uFs7.js";import"./getRadiusAndStrokeWidthFromDot-De11iLXV.js";import"./graphicalItemSelectors-Da7SJyMZ.js";import"./index-Bb2whpql.js";import"./ChartSizeDimensions-B6V8cLcI.js";import"./OffsetShower-CdxkHZVP.js";import"./PlotAreaShower-BGz_VUd3.js";const Z={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=s=>{const{index:p,x:r,y:o}=s;return t.createElement("text",{key:p,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(n=(m=e.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};const tt=["CustomizedLabel"];export{e as CustomizedLabel,tt as __namedExportsOrder,Z as default};
