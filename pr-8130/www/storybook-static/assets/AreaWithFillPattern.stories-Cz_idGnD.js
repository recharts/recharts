import{R as t}from"./iframe-CrYQDt8P.js";import{R as p}from"./zIndexSlice-DgBq9YFj.js";import{C as m}from"./ComposedChart-D3_qR-0w.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-C08JaqL6.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-D-FE3-Id.js";import"./throttle-EZYco_S-.js";import"./index-DoHXxeqs.js";import"./index-Dn-vKA7B.js";import"./RechartsWrapper-BAwtrVn5.js";import"./axisSelectors-CHapoDkY.js";import"./polarAxisSelectors-qncpG9DL.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-B8VX6HZY.js";import"./index-DrQ3dvqS.js";import"./index-xzmL1NPl.js";import"./renderedTicksSlice-B5w1ipks.js";import"./index-OoIkvEPu.js";import"./fillDefinitions-B8rJsHrn.js";import"./CartesianChart-CUqOA5qE.js";import"./ZIndexPortal-Dn8m52P0.js";import"./CategoricalChart-BGIsMW5j.js";import"./Layer-BQFOl3cJ.js";import"./LabelList-C_2TXPHb.js";import"./Label-_UeQKQwH.js";import"./Text-BvJLtM_q.js";import"./DOMUtils-Bh62H6aW.js";import"./ZIndexLayer-Dl5u_ANg.js";import"./ActivePoints-CSQF1wsy.js";import"./Dot-GBqckkZQ.js";import"./types-D5M-0McJ.js";import"./activeStyles-C1vUddIu.js";import"./useAnimationId-DhleLLtl.js";import"./dataEntryStyles-D63lSB48.js";import"./Symbols-BEXEibvH.js";import"./symbol-_3oqr1nj.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-BZH_NFgg.js";import"./getRadiusAndStrokeWidthFromDot-nu59-3In.js";import"./ActiveShapeUtils-DxrQGdht.js";import"./Curve-D-a7nqUy.js";import"./step-DGjeaFMT.js";import"./useEffectiveDataKey-CniHgm4C.js";const rt={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},it=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
