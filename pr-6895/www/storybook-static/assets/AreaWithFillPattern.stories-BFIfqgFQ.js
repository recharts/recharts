import{e as t}from"./iframe-BmaSkXVD.js";import{R as p}from"./arrayEqualityCheck-DFn-H49U.js";import{C as m}from"./ComposedChart-BHfLW0JN.js";import{A as r}from"./Area-lgTr6mqT.js";import{R as s}from"./RechartsHookInspector-C0qStJOJ.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Cjwd7qt6.js";import"./PolarUtils-fSNmW3dt.js";import"./RechartsWrapper-CKnhTxOl.js";import"./hooks-DXbNb-JH.js";import"./axisSelectors-CSGKwTAZ.js";import"./zIndexSlice-DNtltYbu.js";import"./CartesianChart-D0l2Cukl.js";import"./chartDataContext-CSlbi7PQ.js";import"./CategoricalChart-BDvQLJnr.js";import"./Curve-Ct1DVFB9.js";import"./types-B1enpQ2U.js";import"./Layer-kGCv99f8.js";import"./ReactUtils-DF_Mupxs.js";import"./Label-Ba2fKD7_.js";import"./Text-D7kjMnBu.js";import"./DOMUtils-Ci6czfq_.js";import"./ZIndexLayer-B0Nv_sMb.js";import"./ActivePoints-Sil-gRtM.js";import"./Dot-arjLiHUj.js";import"./RegisterGraphicalItemId-DmnuQhvD.js";import"./GraphicalItemClipPath-BaRcGmKq.js";import"./SetGraphicalItem-Dkq9thq_.js";import"./useAnimationId-CSP1LMrK.js";import"./getRadiusAndStrokeWidthFromDot-BJgr5w4N.js";import"./graphicalItemSelectors-B6sYLObk.js";import"./index-D8VqDYui.js";import"./ChartSizeDimensions-BIJ2rdc4.js";import"./OffsetShower-CSh__zJW.js";import"./PlotAreaShower-B9ocgXZz.js";const N={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(s,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const Q=["FillPattern"];export{e as FillPattern,Q as __namedExportsOrder,N as default};
