import{R as t}from"./iframe-BmTk4yvk.js";import{R as p}from"./zIndexSlice-Yn5j7TCZ.js";import{C as m}from"./ComposedChart-Bc1PW_h6.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-DDX-1dA6.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Cn0PCCle.js";import"./throttle-C169ds0A.js";import"./index-iOVTbJVR.js";import"./index-DmmaZxkJ.js";import"./RechartsWrapper-C4oIzQNw.js";import"./axisSelectors-jta8-9EA.js";import"./polarAxisSelectors-DyW5Xsuk.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-B_DRoaP4.js";import"./index-D6yCXLHc.js";import"./index-D-9h2rsp.js";import"./renderedTicksSlice-Dl_orwkE.js";import"./index-DOadfo9X.js";import"./CartesianChart-Fep-b6_D.js";import"./ZIndexPortal-CWm5UVGf.js";import"./CategoricalChart-D92RpbLO.js";import"./Layer-DW7OR7eh.js";import"./LabelList-DAIqpE2b.js";import"./Label-CYaQfkAd.js";import"./Text-U4GGp_wV.js";import"./pageBackground-QX1GlboQ.js";import"./ZIndexLayer-DvmFXfZN.js";import"./ActivePoints-D2fdi6S1.js";import"./Dot-DCITuPps.js";import"./types-BwQb0UT4.js";import"./activeStyles-PiE_qWsW.js";import"./useAnimationId-Crx209Lx.js";import"./dataEntryStyles-D6I3YMTN.js";import"./Symbols-C5McylxL.js";import"./symbol-DPYOxqZZ.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-DFIrza8W.js";import"./getRadiusAndStrokeWidthFromDot-K0OFVwh2.js";import"./ActiveShapeUtils-DOogD9OD.js";import"./Curve-DHjJHUtL.js";import"./step-X3pWD_rY.js";import"./useEffectiveDataKey-B__g_9Jm.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},rt=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};export{e as FillPattern,rt as __namedExportsOrder,et as default};
