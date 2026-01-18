import{e as t}from"./iframe-majBtK-E.js";import{R as c}from"./arrayEqualityCheck-DVgUr5sF.js";import{C as d}from"./ComposedChart-Rw7RmovT.js";import{A as l}from"./Area-BEvAr44e.js";import{R as h}from"./RechartsHookInspector-C8tTsK9b.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-B4pC6M3l.js";import"./PolarUtils-CJsRsyos.js";import"./RechartsWrapper-0u9Ddv25.js";import"./hooks-oixdIqV0.js";import"./axisSelectors-Ce1DsLqd.js";import"./zIndexSlice-7SDVSN9y.js";import"./CartesianChart-BL_zgiIZ.js";import"./chartDataContext-CZTJj6RV.js";import"./CategoricalChart-D7h1yX10.js";import"./Curve-9TopWPhs.js";import"./types-C6X4a6Ih.js";import"./Layer-BLDMzEqE.js";import"./ReactUtils-CnNdH0Da.js";import"./Label-e34JrSXW.js";import"./Text-phE5o1Gx.js";import"./DOMUtils-mrrzRZs0.js";import"./ZIndexLayer-Dv76Cipi.js";import"./ActivePoints-BicyjPPL.js";import"./Dot-CQ-BA1l2.js";import"./RegisterGraphicalItemId-CiSdioED.js";import"./GraphicalItemClipPath-CMlJ6COV.js";import"./SetGraphicalItem-Bs7RhIp3.js";import"./useAnimationId-BsAnEyOV.js";import"./getRadiusAndStrokeWidthFromDot-BhwwRVIx.js";import"./graphicalItemSelectors-Dgnm4iSu.js";import"./index-C8KZ_CA2.js";import"./ChartSizeDimensions-CwqFjkkT.js";import"./OffsetShower-CIon6stJ.js";import"./PlotAreaShower-BUoNZ3NG.js";const Z={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=s=>{const{index:p,x:r,y:o}=s;return t.createElement("text",{key:p,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
