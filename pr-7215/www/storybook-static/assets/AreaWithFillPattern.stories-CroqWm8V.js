import{e as t}from"./iframe-W4Sx2LmA.js";import{R as p}from"./arrayEqualityCheck-nt69rbNg.js";import{C as m}from"./ComposedChart-DVlgHodQ.js";import{c as s}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-DSnsVUgB.js";import{R as l}from"./RechartsHookInspector-Ft4_PiAb.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-2Cae6Gg7.js";import"./immer-B5uHt3-v.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-V_uqMe0M.js";import"./index-C0P2H7BI.js";import"./hooks-Dtno9pbE.js";import"./axisSelectors-CLSq_PV7.js";import"./d3-scale-Cc2KV_M4.js";import"./string-B6fdYHAA.js";import"./zIndexSlice-B4A5_8Yi.js";import"./renderedTicksSlice-dCK1eX84.js";import"./CartesianChart-v8Cliy-Y.js";import"./chartDataContext-D35ia9Nl.js";import"./CategoricalChart-BDjWSCBE.js";import"./Layer-BaLfWC67.js";import"./AnimatedItems-ORWSBWd2.js";import"./Label-aDrplQOD.js";import"./Text-CLwKs2sm.js";import"./DOMUtils-D7MEc4ch.js";import"./ZIndexLayer-Icro7Prq.js";import"./useAnimationId-BhZqgZTb.js";import"./ActivePoints-C0fyqzJF.js";import"./Dot-BiRIcMlM.js";import"./types-C7u7ujMp.js";import"./RegisterGraphicalItemId-CmKLmlaQ.js";import"./GraphicalItemClipPath-DGbYSZbB.js";import"./SetGraphicalItem-DZ57qSXA.js";import"./getRadiusAndStrokeWidthFromDot-CMxbT_Fy.js";import"./ActiveShapeUtils-B164ljio.js";import"./isPlainObject-OTvoF1ix.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BJERAndb.js";import"./Trapezoid-U3hbbJ2B.js";import"./Sector-CSPavfQA.js";import"./Symbols-DLTvK8m8.js";import"./symbol-DpMzgL8C.js";import"./step-01ontriS.js";import"./Curve-BQ0Kb0jt.js";import"./graphicalItemSelectors-CZa159lu.js";import"./index-CXRjpi5i.js";import"./ChartSizeDimensions-BbncuPUL.js";import"./OffsetShower-DPIr9odL.js";import"./PlotAreaShower-DUcsSPBD.js";const st={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:s},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(l,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const lt=["FillPattern"];export{e as FillPattern,lt as __namedExportsOrder,st as default};
