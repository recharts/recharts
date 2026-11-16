import{R as t}from"./iframe-ChMBHEXU.js";import{R as p}from"./zIndexSlice-Cd2z3Eer.js";import{C as m}from"./ComposedChart-B7Dgc5aq.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-DJ5vn0dV.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-X_3NC_87.js";import"./throttle-Cnp_ppL_.js";import"./index-hGd76TNN.js";import"./index-SyLToHDG.js";import"./RechartsWrapper-DPxS5GGe.js";import"./axisSelectors-CyYfX19F.js";import"./polarAxisSelectors-D-ZNarpI.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-B_LSdR1o.js";import"./index-DyVFOlJ7.js";import"./index-B193mqnD.js";import"./renderedTicksSlice-BLUfpxyl.js";import"./index-Dyev39ZM.js";import"./fillDefinitions-BXMuCbY2.js";import"./CartesianChart-AmmyZjSo.js";import"./chartDataContext-Q7_H0Fyo.js";import"./CategoricalChart-mubfvuGW.js";import"./Layer-Db_exIRl.js";import"./dataEntryStyles-BARWQZ2-.js";import"./Label-ZGXU1are.js";import"./Text-BiLv0S0Y.js";import"./ZIndexLayer-OHuleK-j.js";import"./ActivePoints-mf0f4bpo.js";import"./Dot-DD7kJ9X3.js";import"./types-DgDe6MQb.js";import"./activeStyles-BxZootHE.js";import"./useAnimationId-CSNfiiSW.js";import"./Symbols-DH6a8AH_.js";import"./symbol-CSHS3Q6e.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-RJE-RN3x.js";import"./getRadiusAndStrokeWidthFromDot-CwS8CmXh.js";import"./ActiveShapeUtils-Dx41DMd2.js";import"./Curve-C_M0JkPD.js";import"./step-BAe_ZTJZ.js";import"./useEffectiveDataKey-Djw6ESIG.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},et=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
