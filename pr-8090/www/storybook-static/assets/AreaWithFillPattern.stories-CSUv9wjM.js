import{R as t}from"./iframe-Dop2FCJV.js";import{R as p}from"./zIndexSlice-nsfMN2si.js";import{C as m}from"./ComposedChart-Om7t0Gx9.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-CB9dlfuW.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DqELWZLJ.js";import"./throttle-D7xfBLch.js";import"./index-DDOIydJq.js";import"./index-CUtMqYq0.js";import"./RechartsWrapper-ziCTvKBS.js";import"./axisSelectors-CeHIB0K5.js";import"./polarAxisSelectors-C3wFvSyu.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Cxj7JE2J.js";import"./index-V2eSo_Pn.js";import"./index-CjK1kGrZ.js";import"./renderedTicksSlice-CNT_Edzm.js";import"./index-DD0oc2h8.js";import"./CartesianChart-DS3MFgQ4.js";import"./ZIndexPortal-D3fjmMCx.js";import"./CategoricalChart-W3056MsQ.js";import"./Layer-B-MIuFUl.js";import"./LabelList-DYliLjPH.js";import"./Label-BDgfZPfI.js";import"./Text-umIfGz-9.js";import"./pageBackground-BKmWYBJ8.js";import"./ZIndexLayer-mYkteocL.js";import"./dataEntryStyles-DYOt2-v1.js";import"./ActivePoints-BOSFqPiQ.js";import"./Dot-CHpl-5cF.js";import"./types-BszWz-w9.js";import"./activeStyles-DnOLUEXC.js";import"./useAnimationId-CQv1eLqe.js";import"./Symbols-nX61tU3C.js";import"./symbol-DyAd0qFf.js";import"./path-DyVhHtw_.js";import"./RegisterGraphicalItemId-CAURusbQ.js";import"./SetGraphicalItem--5ECUYsd.js";import"./getRadiusAndStrokeWidthFromDot-CybZPC8K.js";import"./ActiveShapeUtils-BAcgfjQM.js";import"./Curve-0Qnio8ZJ.js";import"./step-CV2mnDR5.js";import"./useEffectiveDataKey-gZcrHKmB.js";const rt={title:"Examples/cartesian/Area/With Fill Pattern"},[s,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:s,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"})))},it=["FillPattern"];var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
