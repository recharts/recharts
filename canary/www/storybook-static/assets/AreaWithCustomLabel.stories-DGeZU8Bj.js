import{e as t}from"./iframe-DhLWPZ06.js";import{R as c}from"./arrayEqualityCheck-CC1O7uMi.js";import{C as d}from"./ComposedChart-DqQWtOY7.js";import{A as l}from"./Area-1h9C-XgS.js";import{R as h}from"./RechartsHookInspector-BYy17HVN.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Xflu8RP3.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DUMd0Jc6.js";import"./hooks-BVelaaLp.js";import"./axisSelectors-DMZtzusH.js";import"./zIndexSlice-DphDhRje.js";import"./CartesianChart-XrmXSdkV.js";import"./chartDataContext-D-yHh9FI.js";import"./CategoricalChart-CZEP5E7E.js";import"./Curve-CrhEQPlh.js";import"./types-C2AjUdZP.js";import"./Layer-DYv-jvxI.js";import"./ReactUtils-BtUFOzkx.js";import"./Label-FSHYxmdz.js";import"./Text-DO5FmLPB.js";import"./DOMUtils-CqWLBihg.js";import"./ZIndexLayer-DD1HiNcR.js";import"./ActivePoints-DprIqvLX.js";import"./Dot-BoxzeF_p.js";import"./RegisterGraphicalItemId-DKys76eX.js";import"./GraphicalItemClipPath-CuDzi9bq.js";import"./SetGraphicalItem-BLAlPe4G.js";import"./useAnimationId-C9SVwlUf.js";import"./getRadiusAndStrokeWidthFromDot-Lki9i3qE.js";import"./graphicalItemSelectors-BatNh7yM.js";import"./index-DvWkBSj_.js";import"./ChartSizeDimensions-C4EMLUii.js";import"./OffsetShower-DlJYxrX-.js";import"./PlotAreaShower-HP7o8TwR.js";const Z={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=s=>{const{index:p,x:r,y:o}=s;return t.createElement("text",{key:p,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
