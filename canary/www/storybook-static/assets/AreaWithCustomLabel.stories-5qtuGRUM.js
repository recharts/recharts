import{e as t}from"./iframe-BlTD-rim.js";import{R as c}from"./arrayEqualityCheck-rFMbtr9X.js";import{C as d}from"./ComposedChart-rwI72tz9.js";import{A as l}from"./Area-CG2HUbW2.js";import{R as h}from"./RechartsHookInspector-AxC62fMg.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CYyTkUJ3.js";import"./PolarUtils-uT4ExAHg.js";import"./RechartsWrapper-BRiCuj44.js";import"./hooks-ZIQpvDbg.js";import"./axisSelectors-BTk9q0tB.js";import"./zIndexSlice-Ir6gglyl.js";import"./CartesianChart-CytP6aLk.js";import"./chartDataContext-BDSmG94B.js";import"./CategoricalChart-DNOtZmhb.js";import"./Curve-BUANm7-q.js";import"./types-DTlxByIq.js";import"./Layer-COV8jJuI.js";import"./ReactUtils-cgJBm0o5.js";import"./Label-DeeiiEOU.js";import"./Text-CcLFuzDB.js";import"./DOMUtils-JUKIsz3X.js";import"./ZIndexLayer-D1uFjBFZ.js";import"./ActivePoints-CPWPbj6O.js";import"./Dot-C6jOffNH.js";import"./RegisterGraphicalItemId-7-yGWLdn.js";import"./GraphicalItemClipPath-D9Dgqofo.js";import"./SetGraphicalItem-BzR4HcCN.js";import"./useAnimationId-Cp6XJ64u.js";import"./getRadiusAndStrokeWidthFromDot-ByE9rINe.js";import"./graphicalItemSelectors-CzrM9QyT.js";import"./index-BN3nPK1K.js";import"./ChartSizeDimensions-DjKj5CZH.js";import"./OffsetShower-BJ7VFhTL.js";import"./PlotAreaShower-DLdCBikg.js";const Z={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=s=>{const{index:p,x:r,y:o}=s;return t.createElement("text",{key:p,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
