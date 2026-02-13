import{e as t}from"./iframe-KPAXLOLU.js";import{R as p}from"./arrayEqualityCheck-C56QUJ1f.js";import{C as m}from"./ComposedChart-DeZSIAh0.js";import{A as r}from"./Area-C_ZnVWTd.js";import{R as s}from"./RechartsHookInspector-kpgbJjbF.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DoONYDR5.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DbDiUXBh.js";import"./hooks-BSsx0bCA.js";import"./axisSelectors-BryM1FYj.js";import"./zIndexSlice-BZZRXwbi.js";import"./CartesianChart-DFX2Z7FU.js";import"./chartDataContext-T6w2KyJs.js";import"./CategoricalChart-Dk9GNXPU.js";import"./Curve-DKnP5GEK.js";import"./types-Bf6Uuk4n.js";import"./Layer-Da82H4oD.js";import"./ReactUtils-DU0YFNnG.js";import"./Label-BCITgdoX.js";import"./Text-bc5Wvmbt.js";import"./DOMUtils-tqc8lMYW.js";import"./ZIndexLayer-DGM-MLqc.js";import"./ActivePoints-Be3meqdm.js";import"./Dot-Bzj5Rswh.js";import"./RegisterGraphicalItemId-DhvOJqxy.js";import"./GraphicalItemClipPath-CMapYqoy.js";import"./SetGraphicalItem-DnuvD-SA.js";import"./useAnimationId-CcLJkYYw.js";import"./getRadiusAndStrokeWidthFromDot-HFeMNqJA.js";import"./graphicalItemSelectors-CbNq9yul.js";import"./index-DScL8g0g.js";import"./ChartSizeDimensions-DvlPtCXc.js";import"./OffsetShower-DO6TyZAZ.js";import"./PlotAreaShower-Cm4MMGxs.js";const N={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(s,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={coordinateWithValueData}>
          <defs>
            <pattern id="left" width="12" height="4" patternUnits="userSpaceOnUse">
              <rect width="4" height="4" fill="#8884d8" />
            </pattern>
            <pattern id="right" width="8" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <rect width="4" height="4" fill="#82ca9d" />
            </pattern>
          </defs>
          <Area type="monotone" dataKey="x" stroke="#8884d8" fillOpacity={1} fill="url(#left)" />
          <Area type="monotone" dataKey="y" stroke="#82ca9d" fillOpacity={1} fill="url(#right)" />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const Q=["FillPattern"];export{e as FillPattern,Q as __namedExportsOrder,N as default};
