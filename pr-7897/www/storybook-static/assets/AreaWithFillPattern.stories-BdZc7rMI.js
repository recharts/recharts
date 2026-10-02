import{R as t}from"./iframe-B0sakJiE.js";import{R as p}from"./zIndexSlice-C2JoSOuc.js";import{C as m}from"./ComposedChart-CtXhtoOd.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-DnalDdi7.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-C7TX7owl.js";import"./index-DsNYe81z.js";import"./index-BXQEz9WW.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-ssIH5a_N.js";import"./isWellBehavedNumber-DiVn1zM4.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BpIUDAEt.js";import"./axisSelectors-DAvStXmd.js";import"./d3-scale-CBENh8dV.js";import"./index-CshZKuHv.js";import"./index-B_LLgB3d.js";import"./renderedTicksSlice-BPkvdwOw.js";import"./index-7d7qLSfx.js";import"./CartesianChart-BkOoMrfQ.js";import"./chartDataContext-Bl9ftmGr.js";import"./CategoricalChart-i5JvNUXt.js";import"./Layer-CcOy9dqf.js";import"./AnimatedItems-DhCfcvtd.js";import"./Label-CXhmz5va.js";import"./Text-YdcYRLnk.js";import"./DOMUtils-Cp8HsdRc.js";import"./useId-ByzngA9u.js";import"./useBackwardsCompatibleTheme-yTt122QS.js";import"./ZIndexLayer-C7T7VX-U.js";import"./useAnimationId-fISgZVPU.js";import"./ActivePoints-REhV00gC.js";import"./Dot-CHjZWmhk.js";import"./types-BxUBO_Vd.js";import"./RegisterGraphicalItemId-BMnnO_Y6.js";import"./GraphicalItemClipPath-DDSyttGC.js";import"./SetGraphicalItem-BtMMOS1d.js";import"./getRadiusAndStrokeWidthFromDot-Bo_6wHZf.js";import"./ActiveShapeUtils-DnkyzZr6.js";import"./Curve-B_1SwL8s.js";import"./step-step2nKl.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-CN480731.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},rt=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
