import{e as t}from"./iframe-BhN7WL5Z.js";import{R as c}from"./arrayEqualityCheck-D4vVSxnz.js";import{C as d}from"./ComposedChart-MPi4Nq7B.js";import{A as l}from"./Area-BQgHKYuy.js";import{R as h}from"./RechartsHookInspector-DuzZFa2V.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BPD9bTh0.js";import"./PolarUtils-DA1Z2LDM.js";import"./RechartsWrapper-ngVbXQIL.js";import"./hooks-EmXHGT5T.js";import"./axisSelectors-BCCMRHlB.js";import"./zIndexSlice-wy9BZePe.js";import"./CartesianChart-DIFYt1Ja.js";import"./chartDataContext-Dmy6E_I7.js";import"./CategoricalChart-BDJKnV04.js";import"./Curve-BUxUFTVS.js";import"./types-D2HNEHHU.js";import"./Layer-CfPqbk4S.js";import"./ReactUtils-C4jZBCSK.js";import"./Label-DbCyuY2T.js";import"./Text-PQiv9oDi.js";import"./DOMUtils-CqVI9jgk.js";import"./ZIndexLayer-C8mR-iMG.js";import"./ActivePoints-C2WvuJKe.js";import"./Dot-DJcxz675.js";import"./RegisterGraphicalItemId-DQrs3EuT.js";import"./GraphicalItemClipPath-DtY2K5G-.js";import"./SetGraphicalItem-DwcdpMKU.js";import"./useAnimationId-BWf0K4Q5.js";import"./getRadiusAndStrokeWidthFromDot-CK7f_m59.js";import"./graphicalItemSelectors-GuUi1bBK.js";import"./index-AX7IXW21.js";import"./ChartSizeDimensions-BBuJ0j_U.js";import"./OffsetShower-6CzCe99R.js";import"./PlotAreaShower-CAbHCjr4.js";const Z={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=s=>{const{index:p,x:r,y:o}=s;return t.createElement("text",{key:p,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
