import{R as t}from"./iframe-BVlfuHR1.js";import{R as p}from"./zIndexSlice-DKBlzg_K.js";import{C as m}from"./ComposedChart-BrTaz3ZS.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-B_6e5l7t.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-2dAZYWIG.js";import"./throttle-B2Qtjc3W.js";import"./index-BQP9-3uy.js";import"./index-Y_wwfQb4.js";import"./RechartsWrapper-DRZJzitw.js";import"./axisSelectors-Brqs7zw9.js";import"./polarAxisSelectors-DnZiXFIF.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BNlCtWSy.js";import"./index-DNy-3Gid.js";import"./index-DZEpaPFi.js";import"./renderedTicksSlice-CoA4ci_o.js";import"./index-CCVms-fF.js";import"./CartesianChart-ZoKsxEgh.js";import"./ZIndexPortal-DaL6GVrS.js";import"./CategoricalChart-DD3gjEAO.js";import"./Layer-B5eXi8NV.js";import"./LabelList-qAsFJxAr.js";import"./Label-Ckax5Juk.js";import"./Text-BxId80OJ.js";import"./DOMUtils-Dtel_m_3.js";import"./ZIndexLayer-6Z0WH24s.js";import"./ActivePoints-CI1sJ5FS.js";import"./Dot-Btb-E3dw.js";import"./types-DYWAvxYY.js";import"./activeStyles-B82PQSZb.js";import"./useAnimationId-eAQDadKJ.js";import"./dataEntryStyles-DSEQ0COb.js";import"./Symbols-Djyf5WWk.js";import"./symbol-ucn0ySfm.js";import"./path-DyVhHtw_.js";import"./SetGraphicalItem-Cncgk9Qh.js";import"./getRadiusAndStrokeWidthFromDot-Cneka8AD.js";import"./ActiveShapeUtils--AsRwBXZ.js";import"./Curve-D680kDYc.js";import"./step-O-KWti3S.js";import"./useEffectiveDataKey-BtHFWZML.js";const et={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},rt=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
