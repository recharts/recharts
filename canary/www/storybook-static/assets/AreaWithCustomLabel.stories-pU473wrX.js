import{e as t}from"./iframe-BlK4-FEU.js";import{R as c}from"./arrayEqualityCheck-D3CpbvMw.js";import{C as d}from"./ComposedChart-B-MlCPo2.js";import{A as l}from"./Area-Cr0nmtFc.js";import{R as h}from"./RechartsHookInspector-C2emUIYz.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CZGT4OJp.js";import"./PolarUtils-Bw67yi1j.js";import"./RechartsWrapper-CfP2CNrR.js";import"./hooks-CsC49iNH.js";import"./axisSelectors-t10Pjb8y.js";import"./zIndexSlice-BTFlkBrM.js";import"./CartesianChart-BYkRfU90.js";import"./chartDataContext-_WqeN7e1.js";import"./CategoricalChart-CsSPHay3.js";import"./Curve-CwI3FqjW.js";import"./types-nGVhtMBW.js";import"./Layer-1XFlzVag.js";import"./ReactUtils-CLW_TYB_.js";import"./Label-B5t3anSs.js";import"./Text-BHa3XVhG.js";import"./DOMUtils-DL2vfQ8H.js";import"./ZIndexLayer-BXfqJV7n.js";import"./ActivePoints-Ub5O0fxy.js";import"./Dot-Ci8eNhkT.js";import"./RegisterGraphicalItemId-Co3MVnsu.js";import"./GraphicalItemClipPath-P9ZnzsFU.js";import"./SetGraphicalItem-DuRVqxef.js";import"./useAnimationId-H0jghrnG.js";import"./getRadiusAndStrokeWidthFromDot-BZzhWtQa.js";import"./graphicalItemSelectors-BArIi9is.js";import"./index-B4rQ1OLH.js";import"./ChartSizeDimensions-DNL5OR5F.js";import"./OffsetShower-DbODKAvT.js";import"./PlotAreaShower-C8cqHodv.js";const Z={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=s=>{const{index:p,x:r,y:o}=s;return t.createElement("text",{key:p,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
