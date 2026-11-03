import{R as t}from"./iframe-DfQVKpWf.js";import{R as p}from"./zIndexSlice-BRoA5zbQ.js";import{C as m}from"./ComposedChart-UT8hODIU.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-B3aHIf-5.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BRVZcbQl.js";import"./throttle-D0VENALV.js";import"./index-DLkRf9Xs.js";import"./index-Da3zhQui.js";import"./RechartsWrapper-CbT_vqZg.js";import"./axisSelectors-nkYWEth-.js";import"./polarAxisSelectors-DE4p4RgX.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DC9kPgul.js";import"./index-CLjBtDbF.js";import"./index-C3Wo1ixX.js";import"./renderedTicksSlice-COJW81My.js";import"./index-oM5BRh82.js";import"./fillDefinitions-DMhv-djT.js";import"./CartesianChart-BO_j1rd7.js";import"./ZIndexPortal-BgZ3mdtq.js";import"./CategoricalChart-CIbxz_h2.js";import"./Layer-Dxd39IZi.js";import"./LabelList-BjeX7Zh8.js";import"./Label-Dx4XJGMM.js";import"./Text-BguVyW-T.js";import"./DOMUtils-D9csGiWV.js";import"./ZIndexLayer-iHHFBTZW.js";import"./ActivePoints-BKczNKsQ.js";import"./Dot-BJaFOnh2.js";import"./types-B0IgcrJR.js";import"./activeStyles-BlB0_IoV.js";import"./useAnimationId-Co3_Oxtg.js";import"./dataEntryStyles-pydJZJI0.js";import"./Symbols-C8CspVgJ.js";import"./symbol-D5X2owC8.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-24_y6SOu.js";import"./getRadiusAndStrokeWidthFromDot-BVeK6Pqm.js";import"./ActiveShapeUtils-Dij93_Oc.js";import"./Curve-BjBiMZvK.js";import"./step-BYgu61ra.js";import"./useEffectiveDataKey-BuvFv_YU.js";const rt={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},it=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};export{e as FillPattern,it as __namedExportsOrder,rt as default};
