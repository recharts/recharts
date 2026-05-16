import{e as t}from"./iframe-CbvHz0qJ.js";import{g as p}from"./arrayEqualityCheck-CIVk4CxQ.js";import{C as m}from"./ComposedChart-C-53BhDQ.js";import{a as s}from"./Coordinate-CcdTesrj.js";import{A as r}from"./Area-BoVUczuZ.js";import{R as l}from"./RechartsHookInspector-C8-wiP8k.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-FfHzzJ36.js";import"./immer-C8JaxkgT.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B5t1ZP3_.js";import"./index-QoqGOv4u.js";import"./hooks-BggtznHY.js";import"./axisSelectors-CyVqvn-7.js";import"./d3-scale-CaSsgBWf.js";import"./zIndexSlice-DOjchSOT.js";import"./renderedTicksSlice-DxWAR4bl.js";import"./CartesianChart-5KTQh7sp.js";import"./chartDataContext-CMNbR_6b.js";import"./CategoricalChart-DaBAgJKk.js";import"./Curve-DeTt9QyO.js";import"./types-D2ZhhyQv.js";import"./step-BAeK-y3y.js";import"./Layer-oNxAKppL.js";import"./ReactUtils-Bd_oEybG.js";import"./Label-DiuN5RYa.js";import"./Text-zXYfGIDc.js";import"./DOMUtils-KYbfHoFv.js";import"./ZIndexLayer-CFivYDgH.js";import"./ActivePoints-n-MNJHjI.js";import"./Dot-7cbWo9Mj.js";import"./RegisterGraphicalItemId-DcNWQseR.js";import"./GraphicalItemClipPath-CH-wZPAw.js";import"./SetGraphicalItem-Dnr1kOuh.js";import"./useAnimationId-cKMJpCeK.js";import"./getRadiusAndStrokeWidthFromDot-FRm3bVco.js";import"./graphicalItemSelectors-BIise6HR.js";import"./index-B7VOlChJ.js";import"./ChartSizeDimensions-Baj3tE5Q.js";import"./OffsetShower-CepRLrgp.js";import"./PlotAreaShower-Bm7LeybJ.js";const tt={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:s},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(l,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
