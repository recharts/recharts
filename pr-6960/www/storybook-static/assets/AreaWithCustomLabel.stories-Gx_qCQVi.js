import{e as t}from"./iframe-CWWhV85a.js";import{R as c}from"./arrayEqualityCheck-BrvYjDvj.js";import{C as d}from"./ComposedChart-UkKK6Wyd.js";import{A as l}from"./Area-CSvoRF3j.js";import{R as h}from"./RechartsHookInspector-C1-BzxNv.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-C1e51uNd.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B76lvk5b.js";import"./hooks-hmYRkmbQ.js";import"./axisSelectors-DefXTn4I.js";import"./zIndexSlice-DakyRb4z.js";import"./CartesianChart-9TMDzitE.js";import"./chartDataContext-B_cxSlaG.js";import"./CategoricalChart-B6q7J0Mb.js";import"./Curve-CEhuq5Wz.js";import"./types-HO0i5iTi.js";import"./Layer-CEGJXWpg.js";import"./ReactUtils-erR6fuGc.js";import"./Label-sj2OS_tg.js";import"./Text-BGl_BLD8.js";import"./DOMUtils-DdesQF23.js";import"./ZIndexLayer-CsGSNJ1a.js";import"./ActivePoints-DYENIXWD.js";import"./Dot-COoG0jLM.js";import"./RegisterGraphicalItemId-C6xkCy3A.js";import"./GraphicalItemClipPath-60MS9PCs.js";import"./SetGraphicalItem-CgqlK889.js";import"./useAnimationId--U2HKBmo.js";import"./getRadiusAndStrokeWidthFromDot-DAki4Jbv.js";import"./graphicalItemSelectors-DJcPITn-.js";import"./index-1_XwddF_.js";import"./ChartSizeDimensions-BYyG2w9L.js";import"./OffsetShower-BriTQDS6.js";import"./PlotAreaShower-CFNBsBQe.js";const Z={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=s=>{const{index:p,x:r,y:o}=s;return t.createElement("text",{key:p,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
