import{R as t}from"./iframe-DsuaRm2b.js";import{R as p}from"./zIndexSlice-BHCK5tg8.js";import{C as m}from"./ComposedChart-C07yVNqj.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-DGgX6SGh.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-tBmiBd0v.js";import"./throttle-CuCThFR3.js";import"./index-BjBwgNd2.js";import"./index-DLanYFve.js";import"./RechartsWrapper-B7rLRibb.js";import"./axisSelectors-CXh7ZK0v.js";import"./polarAxisSelectors-ZY9QidmG.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-D1FvEoQ3.js";import"./index-BqhjsQ14.js";import"./index-vSo2F5h4.js";import"./renderedTicksSlice-W2QLd4az.js";import"./index-C0CHU-c7.js";import"./CartesianChart-CFB_Qy3A.js";import"./ZIndexPortal-DYBSHocn.js";import"./CategoricalChart-Do18W6-M.js";import"./Layer-Bvg1MEF5.js";import"./LabelList-B1g8Cfod.js";import"./Label-Bg_SjTDz.js";import"./Text-7KEzSR95.js";import"./pageBackground-gwgMpjOQ.js";import"./ZIndexLayer-FbasJJ13.js";import"./dataEntryStyles-CVVg9ITz.js";import"./ActivePoints-BIHfIwHR.js";import"./Dot-CLio3VMY.js";import"./types-BVjfEegt.js";import"./activeStyles-BEbyAFUN.js";import"./useAnimationId-BDMFeBiK.js";import"./Symbols-Sb1I6V5y.js";import"./symbol-DiPBPxxC.js";import"./path-DyVhHtw_.js";import"./RegisterGraphicalItemId-ovNP-fPN.js";import"./SetGraphicalItem-DN4Prq4p.js";import"./getRadiusAndStrokeWidthFromDot-CuYo3i94.js";import"./ActiveShapeUtils-z3i_FVcp.js";import"./Curve-B54D09ht.js";import"./step-CnnXSPZn.js";import"./useEffectiveDataKey-DBOtZYxA.js";const rt={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},it=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
