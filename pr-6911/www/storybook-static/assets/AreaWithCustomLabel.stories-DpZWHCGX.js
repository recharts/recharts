import{e as t}from"./iframe-Bp7wnAMR.js";import{R as c}from"./arrayEqualityCheck-DxE10Oy_.js";import{C as d}from"./ComposedChart-DcPTD6P5.js";import{A as l}from"./Area-GuMkRfH3.js";import{R as h}from"./RechartsHookInspector-DHfob8nJ.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-73ODOPj1.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-C4djzgpQ.js";import"./hooks-CNofKjzo.js";import"./axisSelectors-hHhjBbva.js";import"./zIndexSlice-CRBGxDjV.js";import"./CartesianChart-Dno3SfYe.js";import"./chartDataContext-nk0Pjs0Z.js";import"./CategoricalChart-CZ-Ak8iT.js";import"./Curve-C9HH72jI.js";import"./types-7BwnP8OD.js";import"./Layer-7joqFoN-.js";import"./ReactUtils-DrfTY3Od.js";import"./Label-Tu9yek-h.js";import"./Text-DwUQNXUe.js";import"./DOMUtils-dKVtaV9j.js";import"./ZIndexLayer-CSCYRG22.js";import"./ActivePoints-Ctmx7Brj.js";import"./Dot-CALDlJiD.js";import"./RegisterGraphicalItemId-DL9uxaj9.js";import"./GraphicalItemClipPath-8AiwXJLZ.js";import"./SetGraphicalItem-Bo7sM5w_.js";import"./useAnimationId-goMb22IV.js";import"./getRadiusAndStrokeWidthFromDot-FCZZS-qa.js";import"./graphicalItemSelectors-y2G6qR0K.js";import"./index-D6AxLi4e.js";import"./ChartSizeDimensions-DwflQZom.js";import"./OffsetShower-B6O-ZqIp.js";import"./PlotAreaShower-B0Yqyt4M.js";const Z={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=s=>{const{index:p,x:r,y:o}=s;return t.createElement("text",{key:p,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
