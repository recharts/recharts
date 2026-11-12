import{R as t}from"./iframe-Ct1svimm.js";import{R as p}from"./zIndexSlice-DuTNyMvu.js";import{C as m}from"./ComposedChart-Cy6iJ-vC.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-BwZFR0WV.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DkFOW_Ct.js";import"./throttle-pNdBRgo_.js";import"./index-o9gN_zh3.js";import"./index-BvFwwoiY.js";import"./RechartsWrapper-D0VQQHcg.js";import"./axisSelectors-CIwgaX7y.js";import"./polarAxisSelectors-nz6HV1AE.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BL9MDqqK.js";import"./index-LDd6dT7n.js";import"./index-CGKMaXkl.js";import"./renderedTicksSlice-LVzR_DNz.js";import"./index-CNkpQGrJ.js";import"./fillDefinitions-vVBAQBUA.js";import"./CartesianChart-fUt3zqCh.js";import"./chartDataContext-D2vVYZsu.js";import"./CategoricalChart-Darb6O46.js";import"./Layer-CbeDBXuD.js";import"./dataEntryStyles-CHH9ur-w.js";import"./Label-B2Mk85O5.js";import"./Text-VSzLHfPE.js";import"./ZIndexLayer-BltRI-Nr.js";import"./ActivePoints-Bj7-j5Zz.js";import"./Dot-CCM7dYWU.js";import"./types-EANqWthO.js";import"./activeStyles-DWgBPDlx.js";import"./useAnimationId-CDKCdXQz.js";import"./Symbols-Bnfs-9ht.js";import"./symbol-CiSLDvHg.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-inprgaSw.js";import"./getRadiusAndStrokeWidthFromDot-B2vi1B3A.js";import"./ActiveShapeUtils-BuOJWJdn.js";import"./Curve-D34yK1QN.js";import"./step-Cz5QOKdQ.js";import"./useEffectiveDataKey-CW73rX9I.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},et=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
