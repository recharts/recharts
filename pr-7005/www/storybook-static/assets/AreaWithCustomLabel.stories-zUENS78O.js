import{e as t}from"./iframe-BdYBH0hQ.js";import{R as c}from"./arrayEqualityCheck-CnZHVnux.js";import{C as d}from"./ComposedChart-BGyCZHRq.js";import{A as l}from"./Area-CEAOQZs4.js";import{R as h}from"./RechartsHookInspector-XSvtem8K.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BV4LHELv.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-92XHVlpU.js";import"./hooks-CxwMnTRQ.js";import"./axisSelectors-B830JJxv.js";import"./zIndexSlice-5OAeHe1c.js";import"./CartesianChart-CWPbPBgj.js";import"./chartDataContext-nXwfjN3A.js";import"./CategoricalChart-CVN3i_3c.js";import"./Curve-C1OuXXjt.js";import"./types-CeaFy_xO.js";import"./Layer-CC1sQm5k.js";import"./ReactUtils-BSN6r0Fc.js";import"./Label-nQ379wTM.js";import"./Text-CVFxhhr-.js";import"./DOMUtils-kJuruXzl.js";import"./ZIndexLayer-D6TqYbdI.js";import"./ActivePoints-B5y_bpJR.js";import"./Dot-B2CiLsKD.js";import"./RegisterGraphicalItemId-I_7XyWpB.js";import"./GraphicalItemClipPath-CKTjJatZ.js";import"./SetGraphicalItem-DY9tfEfN.js";import"./useAnimationId-D1PUvmFT.js";import"./getRadiusAndStrokeWidthFromDot-BackDSVj.js";import"./graphicalItemSelectors-BJTRBxI-.js";import"./index-CsvAOYvG.js";import"./ChartSizeDimensions-CblMQBhU.js";import"./OffsetShower-CHh6x2lZ.js";import"./PlotAreaShower-CNu2XHWT.js";const Z={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=s=>{const{index:p,x:r,y:o}=s;return t.createElement("text",{key:p,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
