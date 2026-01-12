import{e as t}from"./iframe-CsBbFWpF.js";import{R as c}from"./arrayEqualityCheck-jcy1YLjA.js";import{C as d}from"./ComposedChart-BxAEf0za.js";import{A as l}from"./Area-D4B3V4QE.js";import{R as h}from"./RechartsHookInspector-Ce0vrec4.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Di-bRFCz.js";import"./PolarUtils-DudrDAyL.js";import"./RechartsWrapper-M1yD5X0u.js";import"./hooks-51EGl8Fk.js";import"./axisSelectors-C8uaVJja.js";import"./zIndexSlice-CXgHVliP.js";import"./CartesianChart-DlU5PpKX.js";import"./chartDataContext-C4MvfWzW.js";import"./CategoricalChart-BoRcIHlb.js";import"./Curve-BV6casI8.js";import"./types-DZkoNYJ-.js";import"./Layer-B5pUJ7d6.js";import"./ReactUtils-B73M-NEp.js";import"./Label-vO0tFBMQ.js";import"./Text-CXOTFpC0.js";import"./DOMUtils-DCk3Ra7U.js";import"./ZIndexLayer-DoHUAHyH.js";import"./ActivePoints-BtxRiwR-.js";import"./Dot-pAY9JTIt.js";import"./RegisterGraphicalItemId-DEKbhPBq.js";import"./GraphicalItemClipPath-BGGubKyF.js";import"./SetGraphicalItem-D-yEZ2eQ.js";import"./useAnimationId-DQyCpAJd.js";import"./getRadiusAndStrokeWidthFromDot-Dzk2HrW3.js";import"./graphicalItemSelectors-p0H2OFb-.js";import"./index-30ex7hAw.js";import"./ChartSizeDimensions-BxqurYlH.js";import"./OffsetShower-Cz9yhNvC.js";import"./PlotAreaShower-CYw1ViUZ.js";const Z={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=s=>{const{index:p,x:r,y:o}=s;return t.createElement("text",{key:p,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
