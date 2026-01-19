import{e as t}from"./iframe-BfEeuf29.js";import{R as c}from"./arrayEqualityCheck-CQTYn8oK.js";import{C as d}from"./ComposedChart-PLvFJZNy.js";import{A as l}from"./Area-BR8IeUQb.js";import{R as h}from"./RechartsHookInspector-CaAU2h8E.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-D5wHr7xB.js";import"./PolarUtils-B3A4Bn44.js";import"./RechartsWrapper-DsA4AxRI.js";import"./hooks-CshdMEx0.js";import"./axisSelectors-BzW232an.js";import"./zIndexSlice-DJbSQN7A.js";import"./CartesianChart-Ded3Vhag.js";import"./chartDataContext-96TYBSAN.js";import"./CategoricalChart-Dc9eAC4P.js";import"./Curve-QDibvidp.js";import"./types-B9h6Osdn.js";import"./Layer-WUPrCNhO.js";import"./ReactUtils-Dy1dqhtA.js";import"./Label-BQL_xh_a.js";import"./Text-Cat3JN_E.js";import"./DOMUtils-kfWXwCLP.js";import"./ZIndexLayer-nNaEVjlH.js";import"./ActivePoints-BLQCmbLM.js";import"./Dot-CJLw0pnw.js";import"./RegisterGraphicalItemId-BNJoKXDB.js";import"./GraphicalItemClipPath-BkoIn00V.js";import"./SetGraphicalItem-D6lIAA2e.js";import"./useAnimationId-593qmaql.js";import"./getRadiusAndStrokeWidthFromDot-7aN4YOPs.js";import"./graphicalItemSelectors-BrBcZ1Wi.js";import"./index-n-fO4kHm.js";import"./ChartSizeDimensions-DtODaN3g.js";import"./OffsetShower-usFsQs5P.js";import"./PlotAreaShower-Pa3IuuRb.js";const Z={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=s=>{const{index:p,x:r,y:o}=s;return t.createElement("text",{key:p,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
