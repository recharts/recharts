import{R as t}from"./iframe-BaiXEn0-.js";import{R as p}from"./zIndexSlice-CSqAGFLj.js";import{C as m}from"./ComposedChart-DKPCp_TU.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-COUK82aJ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CefoQJzZ.js";import"./throttle-D7xKVZuZ.js";import"./index-BK6mpLXi.js";import"./index-BrUJM5DD.js";import"./RechartsWrapper-BRQNcvpu.js";import"./axisSelectors-s8isxUHu.js";import"./polarAxisSelectors-Com92wlg.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Bpc0urwb.js";import"./index-CGBcSxqi.js";import"./index-YBD3MlPN.js";import"./renderedTicksSlice-GEdADU7H.js";import"./index-BuGbfhN1.js";import"./fillDefinitions-mAC2wE0k.js";import"./CartesianChart-DzuueLPv.js";import"./chartDataContext-DoyYqW6X.js";import"./CategoricalChart-D2YsyGqx.js";import"./Layer-Dc68LG4Z.js";import"./dataEntryStyles-CA2v1itW.js";import"./Label-CWe40LeI.js";import"./Text-Dz83mHfX.js";import"./ZIndexLayer-BmwEMujN.js";import"./ActivePoints-Dk_HtJnf.js";import"./Dot-CesDwFF2.js";import"./types-C6nAEk1h.js";import"./activeStyles-CYcJyLiS.js";import"./useAnimationId-FtoyJDPN.js";import"./Symbols-cv2IRaTf.js";import"./symbol-CRYIzv0a.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-CuWVAy3A.js";import"./getRadiusAndStrokeWidthFromDot-DS02tJFS.js";import"./ActiveShapeUtils-BRs_VSCT.js";import"./Curve-Dg6PTrHd.js";import"./step-Csdb5mG5.js";import"./useEffectiveDataKey-l-c80nhy.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},et=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
