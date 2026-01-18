import{e as t}from"./iframe--x23rdHV.js";import{R as c}from"./arrayEqualityCheck-BD1qZPxT.js";import{C as d}from"./ComposedChart-Cx255MWZ.js";import{A as l}from"./Area-BARbmsxb.js";import{R as h}from"./RechartsHookInspector-CS_N4Y-F.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Q3fBKAvl.js";import"./PolarUtils-DJ6pmdE6.js";import"./RechartsWrapper-CaVQgtIT.js";import"./hooks-B9glux5h.js";import"./axisSelectors-DmpeXiUd.js";import"./zIndexSlice-BZ8J8CWC.js";import"./CartesianChart-7YsubAAE.js";import"./chartDataContext-CDQnRCpO.js";import"./CategoricalChart-NDapYkGp.js";import"./Curve-BsoHhr4Y.js";import"./types-DIiwzDHn.js";import"./Layer-W9JL67lG.js";import"./ReactUtils-Bbi28O4z.js";import"./Label-CHtfbXlI.js";import"./Text-C7KTYcc4.js";import"./DOMUtils-a1QzPdPR.js";import"./ZIndexLayer-ezCnztm4.js";import"./ActivePoints-BGDarTer.js";import"./Dot-DVriPTsk.js";import"./RegisterGraphicalItemId-DjY_2vEh.js";import"./GraphicalItemClipPath-B3HNdztG.js";import"./SetGraphicalItem-Ccb8m39o.js";import"./useAnimationId-DUCYZNMW.js";import"./getRadiusAndStrokeWidthFromDot-pzOWmeWo.js";import"./graphicalItemSelectors-CO_EFJn4.js";import"./index-DL_1z0BC.js";import"./ChartSizeDimensions-wrT4dmYN.js";import"./OffsetShower-CJxOrGxz.js";import"./PlotAreaShower-AHA62Bp0.js";const Z={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=s=>{const{index:p,x:r,y:o}=s;return t.createElement("text",{key:p,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
