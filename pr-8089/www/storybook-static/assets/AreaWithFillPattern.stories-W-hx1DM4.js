import{R as t}from"./iframe-Dofq_iQ-.js";import{R as p}from"./zIndexSlice-D1WV8xVK.js";import{C as m}from"./ComposedChart-CsQfk666.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-KeMCZUcp.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Z787kyQ6.js";import"./throttle-DKmFrtnD.js";import"./index-BtkEod5i.js";import"./index-37WXqDMb.js";import"./RechartsWrapper-CETzgtk4.js";import"./axisSelectors-CqE-voO2.js";import"./polarAxisSelectors-CmsaI3Cf.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Bd78fIJ9.js";import"./index-qZlNdlLA.js";import"./index-Bsj9Z6Q4.js";import"./renderedTicksSlice-DEI5ubGX.js";import"./index-CYB006td.js";import"./CartesianChart-D36QcNNB.js";import"./chartDataContext-B2bZJU-K.js";import"./CategoricalChart-DTaKLLfl.js";import"./Layer-DmIM376f.js";import"./activeStyles-B73KwGvD.js";import"./Label-hlz0weoU.js";import"./Text-DvhWb0Oj.js";import"./pageBackground-jkmkuUi_.js";import"./useId-Dit2o_XD.js";import"./ZIndexLayer-CuuRUF_K.js";import"./dataEntryStyles-BZNZhw1g.js";import"./useAnimationId-CwELIUBQ.js";import"./ActivePoints--oTriwIr.js";import"./Dot-CgHFserM.js";import"./types-B7VCcYuj.js";import"./Symbols-BSqZO71K.js";import"./symbol-3INanWh5.js";import"./path-DyVhHtw_.js";import"./RegisterGraphicalItemId-DtelKBLL.js";import"./SetGraphicalItem-DU742dNa.js";import"./getRadiusAndStrokeWidthFromDot-BcCSCHB7.js";import"./ActiveShapeUtils-R-VNi4BZ.js";import"./Curve-Beatw8ZQ.js";import"./step-g7A04fAl.js";import"./useEffectiveDataKey-B7xEEKli.js";const rt={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},it=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
