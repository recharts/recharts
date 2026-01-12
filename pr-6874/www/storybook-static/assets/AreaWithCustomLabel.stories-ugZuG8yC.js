import{e as t}from"./iframe-CzId_vMR.js";import{R as c}from"./arrayEqualityCheck-DSdyV2X5.js";import{C as d}from"./ComposedChart-CMv1ks2h.js";import{A as l}from"./Area-Cqyadbn2.js";import{R as h}from"./RechartsHookInspector-Co5fk2RP.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CjfObxG9.js";import"./PolarUtils-pvs2WqdL.js";import"./RechartsWrapper-CN4xlQ0u.js";import"./hooks-C9JnWS43.js";import"./axisSelectors-OGsi9SPN.js";import"./zIndexSlice-BwlmGQPJ.js";import"./CartesianChart-Cp_RTL_u.js";import"./chartDataContext-bc8aYpmC.js";import"./CategoricalChart-Fsg15egP.js";import"./Curve-D5USJD5l.js";import"./types-DjXw3wTJ.js";import"./Layer-Cd1nD4kQ.js";import"./ReactUtils-B9bn4DTf.js";import"./Label-C0ElDb7Z.js";import"./Text-DyrIV_fF.js";import"./DOMUtils-DbOiFokS.js";import"./ZIndexLayer-C_SxWHYm.js";import"./ActivePoints-FI39lxZ5.js";import"./Dot-BamGkrTG.js";import"./RegisterGraphicalItemId-CBAG7Y6C.js";import"./GraphicalItemClipPath-BWo7OkkL.js";import"./SetGraphicalItem-w1vQ_GFV.js";import"./useAnimationId-DOB-FYIq.js";import"./getRadiusAndStrokeWidthFromDot-DhoyS4sY.js";import"./graphicalItemSelectors-Dp2Wlk9M.js";import"./index-CS_I0C1E.js";import"./ChartSizeDimensions-DGZWUdPh.js";import"./OffsetShower-b12JY01P.js";import"./PlotAreaShower-BQSWUX-t.js";const Z={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=s=>{const{index:p,x:r,y:o}=s;return t.createElement("text",{key:p,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
