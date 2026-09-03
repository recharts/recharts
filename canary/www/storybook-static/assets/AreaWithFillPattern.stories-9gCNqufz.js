import{R as t}from"./iframe-DUU2nC7E.js";import{R as p}from"./zIndexSlice-B1qxAnWW.js";import{C as m}from"./ComposedChart-DbguBWi6.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-BQxXaAuk.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DU8m77oh.js";import"./index-DfISOqFY.js";import"./index-BweKhhB8.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BqMh5-lE.js";import"./isWellBehavedNumber-QUwuvSMb.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DlUPtncW.js";import"./axisSelectors-oYeY2Mwn.js";import"./d3-scale-cKq8MwgY.js";import"./index-By0b-RMY.js";import"./index-BLrpc9iL.js";import"./renderedTicksSlice-CQmIW09G.js";import"./index-eVEWj-zV.js";import"./CartesianChart-D01briWp.js";import"./chartDataContext-DFaXfB60.js";import"./CategoricalChart-CP242KCm.js";import"./Layer-CpTHNZLk.js";import"./AnimatedItems-CtOvBSOT.js";import"./Label-BpgemmXF.js";import"./Text-Dq73j3Z8.js";import"./DOMUtils-CWtn717I.js";import"./useId-D3HKJv3C.js";import"./useBackwardsCompatibleTheme-i7diorAo.js";import"./ZIndexLayer-09JGIcjO.js";import"./useAnimationId-Hor1kczP.js";import"./ActivePoints-Wt40jbbC.js";import"./Dot-DSPh_RO_.js";import"./types-D26lJf4n.js";import"./RegisterGraphicalItemId-DH-o1j-9.js";import"./GraphicalItemClipPath-CFHEX7Zj.js";import"./SetGraphicalItem-DSRKMZ7M.js";import"./getRadiusAndStrokeWidthFromDot-D_T6WBHX.js";import"./ActiveShapeUtils-DXSvZ-3T.js";import"./Curve-Dejht0kU.js";import"./step-DsOIwvhZ.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-Dhw2oYc2.js";const rt={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const it=["FillPattern"];export{e as FillPattern,it as __namedExportsOrder,rt as default};
