import{e as t}from"./iframe-Bg6hY-Lh.js";import{R as c}from"./arrayEqualityCheck-BDis9FaH.js";import{C as d}from"./ComposedChart-BrWT8Xtr.js";import{A as l}from"./Area-45ufVJTI.js";import{R as h}from"./RechartsHookInspector-C0SDsqLX.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BI7FFBV-.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DkqFGzuB.js";import"./hooks-DM-gzZjo.js";import"./axisSelectors-GHndRTSk.js";import"./zIndexSlice-DBH2YRr7.js";import"./CartesianChart-B3uSsgOm.js";import"./chartDataContext-BNQKMBbL.js";import"./CategoricalChart-fiMHtwty.js";import"./Curve-J_xBTbd1.js";import"./types-CCzU0McW.js";import"./Layer-CbLnIqdO.js";import"./ReactUtils-CFjZLDuN.js";import"./Label-XrRQ-MXs.js";import"./Text-G-UMIUqa.js";import"./DOMUtils-BOstDSsm.js";import"./ZIndexLayer-DyYnxyDJ.js";import"./ActivePoints-DvypOqa9.js";import"./Dot-BIrCeUw-.js";import"./RegisterGraphicalItemId-DQWcO4Xr.js";import"./GraphicalItemClipPath-CQF6nnWi.js";import"./SetGraphicalItem-B1--8enS.js";import"./useAnimationId-9L0wWVYf.js";import"./getRadiusAndStrokeWidthFromDot-B6sH4uog.js";import"./graphicalItemSelectors-BNuWLpIf.js";import"./index-C3KvIg2I.js";import"./ChartSizeDimensions-oau-P_ha.js";import"./OffsetShower-B8fezjcj.js";import"./PlotAreaShower-_vIJxFcu.js";const Z={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=s=>{const{index:p,x:r,y:o}=s;return t.createElement("text",{key:p,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
