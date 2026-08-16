import{R as t}from"./iframe-Czgh02fE.js";import{R as p}from"./zIndexSlice-Do8f9YWK.js";import{C as m}from"./ComposedChart-B0gx7MIp.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-jO6wXOW9.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-D1C4cigO.js";import"./index-BzAJTpLC.js";import"./index-BnAmj1WN.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-D61FhKsp.js";import"./isWellBehavedNumber-BenVrlkW.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DIxKKW90.js";import"./index-BjeOf0Dt.js";import"./index-B1amEOit.js";import"./axisSelectors-H5jwzs9R.js";import"./d3-scale-DjzQ61DY.js";import"./renderedTicksSlice-DljNETqX.js";import"./CartesianChart-BAydra3V.js";import"./chartDataContext-9fwvPw2D.js";import"./CategoricalChart-BgAf9cWH.js";import"./Layer-zCmZcP2I.js";import"./AnimatedItems-DQ5WKLo7.js";import"./Label-4BEQg_vH.js";import"./Text-CR_8UZPv.js";import"./DOMUtils-CFgNHwO1.js";import"./useBackwardsCompatibleTheme-CqikxVTG.js";import"./ZIndexLayer-s-28Q74q.js";import"./useAnimationId-CBLxCaT-.js";import"./ActivePoints-D5lyHxm4.js";import"./Dot-BPNUB50S.js";import"./types-BOqsceM0.js";import"./RegisterGraphicalItemId-_1lxrS6Z.js";import"./GraphicalItemClipPath-BFEL_l8x.js";import"./SetGraphicalItem-BSCJBMvO.js";import"./getRadiusAndStrokeWidthFromDot-DSA1Map0.js";import"./ActiveShapeUtils-DxWOnmm2.js";import"./Curve--OBRtabt.js";import"./step-BjIepLza.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-v_kQR1u7.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const et=["FillPattern"];export{e as FillPattern,et as __namedExportsOrder,tt as default};
