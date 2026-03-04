import{e as t}from"./iframe-D83ZSNbz.js";import{R as p}from"./arrayEqualityCheck-BGA4RwPN.js";import{C as m}from"./ComposedChart-B5Ky6_S3.js";import{A as r}from"./Area-CLV9qlmu.js";import{R as s}from"./RechartsHookInspector-BWsm2Zwo.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BQFmif0Y.js";import"./immer-CVep4-EU.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-6kLXfAE0.js";import"./index-8b00PKjq.js";import"./hooks-DCtmV1SZ.js";import"./axisSelectors-DsPqnEOY.js";import"./d3-scale-yzqdTiSJ.js";import"./zIndexSlice-z-sDwpjP.js";import"./renderedTicksSlice-Bt6P6Lqy.js";import"./CartesianChart-Zohr5k9I.js";import"./chartDataContext-DzOegroB.js";import"./CategoricalChart-BH19QtA5.js";import"./Curve-VgEiMVDm.js";import"./types-CQ4rEtgJ.js";import"./step-DnRHTEfS.js";import"./Layer-CzMDOsc5.js";import"./ReactUtils-Dwz5eB4M.js";import"./Label-CPoQ7ALx.js";import"./Text-BHw_uujw.js";import"./DOMUtils-Bml6CSWG.js";import"./ZIndexLayer-BlsfoIRs.js";import"./ActivePoints-xgfu-OUk.js";import"./Dot-CeVblkN7.js";import"./RegisterGraphicalItemId-DBtbwGke.js";import"./GraphicalItemClipPath-DCwYUI8F.js";import"./SetGraphicalItem-CVQEh09-.js";import"./useAnimationId-DC1LkXPL.js";import"./getRadiusAndStrokeWidthFromDot-C8XAklJz.js";import"./graphicalItemSelectors-CeivcGR-.js";import"./index-CSluNsr9.js";import"./ChartSizeDimensions--X_0ARq3.js";import"./OffsetShower-CvSCKQiO.js";import"./PlotAreaShower-BKASkiMz.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(s,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const et=["FillPattern"];export{e as FillPattern,et as __namedExportsOrder,tt as default};
