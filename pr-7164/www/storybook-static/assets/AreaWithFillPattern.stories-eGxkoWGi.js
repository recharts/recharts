import{e as t}from"./iframe-Cghk5Dv5.js";import{R as p}from"./arrayEqualityCheck-Blp4qByB.js";import{C as m}from"./ComposedChart-BzndwtyO.js";import{A as r}from"./Area-B_ucAqYO.js";import{R as s}from"./RechartsHookInspector-Dhw1ahnh.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Ca9Q42EU.js";import"./immer-C9d2WDC3.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BCDf7E4k.js";import"./index--WQv2JEI.js";import"./hooks-DvHGCK_P.js";import"./axisSelectors-BmN1bSZG.js";import"./d3-scale-DwfmephR.js";import"./zIndexSlice-Cr5Wd2hn.js";import"./renderedTicksSlice-B7PVLtE-.js";import"./CartesianChart-Dl7eKZR1.js";import"./chartDataContext-FHRsRLf6.js";import"./CategoricalChart-BX2q-J4I.js";import"./Curve-tyrMpXlR.js";import"./types-BAdQFhn_.js";import"./step-CJt2p9N6.js";import"./Layer-BZayzYJ5.js";import"./ReactUtils-DJKFAAVq.js";import"./Label-DMYBuQg7.js";import"./Text-CTdXj2Wj.js";import"./DOMUtils-B6BLeQuC.js";import"./ZIndexLayer-C0MHsSee.js";import"./ActivePoints-D_0gNFPA.js";import"./Dot-DDhuD7gd.js";import"./RegisterGraphicalItemId-DxmHa7yf.js";import"./GraphicalItemClipPath-J2zVG9I1.js";import"./SetGraphicalItem-DKkCveHJ.js";import"./useAnimationId-B_fUzLa-.js";import"./getRadiusAndStrokeWidthFromDot-CegfqfN2.js";import"./graphicalItemSelectors-CtRjTlVF.js";import"./index-DQ-QIWuT.js";import"./ChartSizeDimensions-Dm4LSJOm.js";import"./OffsetShower-CKEh5r6l.js";import"./PlotAreaShower-m5B18Oa-.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(s,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
