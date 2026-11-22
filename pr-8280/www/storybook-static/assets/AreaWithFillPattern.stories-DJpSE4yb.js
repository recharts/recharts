import{R as t}from"./iframe-BU2uaiQT.js";import{R as p}from"./zIndexSlice-B7Ww3qol.js";import{C as m}from"./ComposedChart-0ICAtkFu.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-DlZI-UMM.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-C2wLywwD.js";import"./throttle-CcBx4b7F.js";import"./index-DgFA6NAr.js";import"./index-BrUaXQP2.js";import"./RechartsWrapper-DJs7SFO5.js";import"./axisSelectors-D_lL4SFu.js";import"./polarAxisSelectors-NZrfm7K-.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BmCizgpV.js";import"./index-KnqMoSVw.js";import"./index-Y51TWOSn.js";import"./renderedTicksSlice-CbO7RmCe.js";import"./index-BmKufkZC.js";import"./fillDefinitions-CvAEkStr.js";import"./CartesianChart-C6-Tr1WN.js";import"./chartDataContext-C2FLfdfd.js";import"./CategoricalChart-LCCfHS5i.js";import"./getRadiusAndStrokeWidthFromDot-EXJcUNWf.js";import"./Layer-Bk2JkGA1.js";import"./dataEntryStyles-BQSK-138.js";import"./Label-CM1LVEBq.js";import"./Text-DcepGaW8.js";import"./ZIndexLayer-DWfXGHkj.js";import"./ActivePoints-BVY4H7tc.js";import"./Dot-tdH7rvCo.js";import"./types-BGeljdCR.js";import"./activeStyles-C3KdIcht.js";import"./useAnimationId-DGhOgRI0.js";import"./Symbols-D3wHF1gQ.js";import"./symbol-4tNLkD_c.js";import"./path-BBMZd4YL.js";import"./SetGraphicalItem-DIE9SpoX.js";import"./ActiveShapeUtils-BmdPhGHL.js";import"./Curve-CAcSf3Dw.js";import"./step-B9D1ky0j.js";import"./useEffectiveDataKey-u5bBQA4i.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},et=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};export{e as FillPattern,et as __namedExportsOrder,tt as default};
