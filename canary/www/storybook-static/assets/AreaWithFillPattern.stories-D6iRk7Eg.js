import{R as t}from"./iframe-ESIqq74j.js";import{R as p}from"./zIndexSlice-CKvG1btl.js";import{C as m}from"./ComposedChart-L_mLjP39.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-BY1odVGc.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-B7R_GNLW.js";import"./throttle-s6zM-TSz.js";import"./index-CADuzeyv.js";import"./index-BLW9Qo5X.js";import"./RechartsWrapper-CmfK6Aj5.js";import"./axisSelectors-Dt46-i8H.js";import"./polarAxisSelectors-3_x-3ruj.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-RU_yJ5H-.js";import"./index-CfWnO0RN.js";import"./index-BUNu1DhE.js";import"./renderedTicksSlice-mNjnmJLW.js";import"./index-COj7acwZ.js";import"./fillDefinitions-DJ6LDeFQ.js";import"./CartesianChart-C07q_lkj.js";import"./chartDataContext-y_Sj-SgN.js";import"./CategoricalChart-DJa-RrVL.js";import"./getRadiusAndStrokeWidthFromDot-DeJPrQyS.js";import"./Layer-Bde02su5.js";import"./dataEntryStyles-CU93DU9D.js";import"./Label-BX7H8p4m.js";import"./Text-SrX2-qRa.js";import"./ZIndexLayer-C_1IKv4J.js";import"./ActivePoints-CTIAjKB9.js";import"./Dot-HenRQ4hS.js";import"./types-CKUWabzj.js";import"./activeStyles-rtMeimPT.js";import"./useAnimationId-Fts_Wu3I.js";import"./Symbols-CUdupVmb.js";import"./symbol-DTe8TmzR.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-D7oZPXcp.js";import"./ActiveShapeUtils-C0RxF4ep.js";import"./Curve-DSZOr6BZ.js";import"./step-CinInmIp.js";import"./useEffectiveDataKey-CNiCq0ga.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},et=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
