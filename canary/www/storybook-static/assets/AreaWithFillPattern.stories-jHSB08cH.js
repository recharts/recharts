import{R as t}from"./iframe-DUGvLzaM.js";import{R as p}from"./zIndexSlice-B4Mogj2z.js";import{C as m}from"./ComposedChart-cwP5-Ry_.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-hCR3_btE.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-iBva9Xri.js";import"./index-Bf1ebX0Z.js";import"./index-D4rZIo04.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-B6fFLtp3.js";import"./isWellBehavedNumber-Dz-qkofC.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Ba1hxoNM.js";import"./axisSelectors-CGc2s0Fh.js";import"./d3-scale-C86sab-h.js";import"./index-CmYddVJ2.js";import"./index-CwW47wP2.js";import"./renderedTicksSlice-CrtrmLXp.js";import"./index-C-yXSHy-.js";import"./CartesianChart-CoHpfyp6.js";import"./chartDataContext-DrEWUsQF.js";import"./CategoricalChart-W5cmFX3l.js";import"./Layer-C-Z-OoWn.js";import"./activeStyles-DDiORVPn.js";import"./Label-C6rBfDHi.js";import"./Text-DzH8Q7Re.js";import"./pageBackground-9CWG-5EI.js";import"./useId-Bo2C_hQY.js";import"./useBackwardsCompatibleTheme-Dm759DN1.js";import"./ZIndexLayer-ytkVOhJ8.js";import"./useAnimationId-FtVQIfuZ.js";import"./dataEntryStyles-DRqvsfnl.js";import"./ActivePoints-C8OEAzuD.js";import"./Dot-B4gb0ExT.js";import"./types-CAM6k8hf.js";import"./GraphicalItemClipPath-BsVVWJrM.js";import"./SetGraphicalItem-BkJcCs8V.js";import"./getRadiusAndStrokeWidthFromDot-Bj_75x8K.js";import"./ActiveShapeUtils-CYHb3Hz-.js";import"./Curve-BLS66xAF.js";import"./step-CA28nkdr.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-CNWhuATd.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},rt=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
