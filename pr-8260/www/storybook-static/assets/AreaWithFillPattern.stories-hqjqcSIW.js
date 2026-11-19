import{R as t}from"./iframe-BrId7CKe.js";import{R as p}from"./zIndexSlice-DF5zMGO6.js";import{C as m}from"./ComposedChart-Cnp7765T.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-DeuHSa9P.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DIgz9kBc.js";import"./throttle-CvD-CMS9.js";import"./index-D7ICnWyX.js";import"./index-EO2EMNzs.js";import"./RechartsWrapper-C0PTLzSu.js";import"./axisSelectors-BWicBn7w.js";import"./polarAxisSelectors-BScTjZiA.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Did4wLnp.js";import"./index-B4UkUUGe.js";import"./index-CKY_1Z5f.js";import"./renderedTicksSlice-DAS2rh9P.js";import"./index-Drj8yiU0.js";import"./fillDefinitions-dpOaLydo.js";import"./CartesianChart-BQoBJqDq.js";import"./chartDataContext-BtKuFOy0.js";import"./CategoricalChart-D7PumRDT.js";import"./getRadiusAndStrokeWidthFromDot-2ewH2R2L.js";import"./Layer-CxlvVVO_.js";import"./dataEntryStyles-Dl3_KD-K.js";import"./Label-BOSTGjYW.js";import"./Text-CtzCspEf.js";import"./ZIndexLayer-DtobrSuN.js";import"./ActivePoints-BfbfOk4s.js";import"./Dot-Bz04y-El.js";import"./types-BIH_CFXa.js";import"./activeStyles-haHqTj48.js";import"./useAnimationId-DnW4K7Yj.js";import"./Symbols-DW8eGAaV.js";import"./symbol-Bas1pNoF.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-Bx9N4hIP.js";import"./ActiveShapeUtils-B-iMU9qH.js";import"./Curve-CODof7zW.js";import"./step-D0GmmZR_.js";import"./useEffectiveDataKey-BlMggeza.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},et=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
