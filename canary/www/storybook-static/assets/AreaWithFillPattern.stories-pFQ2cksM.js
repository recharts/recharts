import{R as t}from"./iframe-nnpNEl0c.js";import{R as p}from"./zIndexSlice-BIxplyvp.js";import{C as m}from"./ComposedChart-CNqzZLnk.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-oJs3bxxn.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-D1Co5jVK.js";import"./throttle-CIO-2ra4.js";import"./index-B_vNRzQ4.js";import"./index-BjMcvTtw.js";import"./RechartsWrapper-VFnYK8V7.js";import"./axisSelectors-DWnmhIgM.js";import"./polarAxisSelectors-jvUDxmEV.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-WiXCw0il.js";import"./index-Db30zo8R.js";import"./index-DcZvMf-G.js";import"./renderedTicksSlice-BMWsCoi3.js";import"./index-CONo-L8r.js";import"./CartesianChart-CujBFFkW.js";import"./ZIndexPortal-Cp9AMkdy.js";import"./CategoricalChart-BMMRGjAS.js";import"./Layer-CzHD4ald.js";import"./LabelList-BNO7oHuM.js";import"./Label-tyPo7vJI.js";import"./Text-D0rrhxSu.js";import"./pageBackground-BLVyr9N2.js";import"./ZIndexLayer-BDSIPNIK.js";import"./dataEntryStyles-BmV4LTxI.js";import"./ActivePoints-J_iA54Fy.js";import"./Dot-BfnVBDM9.js";import"./types-BmjMrM54.js";import"./activeStyles-iZJvEVBW.js";import"./useAnimationId-CJPhZ8Cq.js";import"./Symbols-B8oOAKpP.js";import"./symbol-OKw49DjP.js";import"./path-DyVhHtw_.js";import"./RegisterGraphicalItemId-DWpzbaDo.js";import"./SetGraphicalItem-CRQScpdw.js";import"./getRadiusAndStrokeWidthFromDot-DWNEs6NN.js";import"./ActiveShapeUtils-DRqheEEB.js";import"./Curve-BBlYovqd.js";import"./step-BJvIh3cb.js";import"./useEffectiveDataKey-DTKrhjFl.js";const rt={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},it=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
