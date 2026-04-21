import{e as t}from"./iframe-DyvFbeiY.js";import{R as c}from"./arrayEqualityCheck-Bn5wKa8z.js";import{C as d}from"./ComposedChart-DfTxnUhc.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-5xj0ICdh.js";import{R as u}from"./RechartsHookInspector-DV82AArc.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DGnWrc4H.js";import"./immer-BXVzTfKp.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DdWihcwC.js";import"./index-CNtF4wRg.js";import"./hooks-CfJmKGn6.js";import"./axisSelectors-088cVuhB.js";import"./d3-scale-CNJHznva.js";import"./zIndexSlice-Bqm6vulu.js";import"./renderedTicksSlice-CJenSa8J.js";import"./CartesianChart-CS3DBPlX.js";import"./chartDataContext-DviLklHI.js";import"./CategoricalChart-D-rA1y19.js";import"./Curve-BctzKEO8.js";import"./types-CSsXZ5tJ.js";import"./step-CqS1DS8s.js";import"./Layer-CpTA_ktM.js";import"./ReactUtils-COq0Y09w.js";import"./Label-CDXCniHM.js";import"./Text-Be76LL2i.js";import"./DOMUtils-CzBYED_e.js";import"./ZIndexLayer-C1288rIw.js";import"./ActivePoints-Ci7sTbDq.js";import"./Dot-RjdCxHU2.js";import"./RegisterGraphicalItemId-B9D6uPLZ.js";import"./GraphicalItemClipPath-CYHMq85Z.js";import"./SetGraphicalItem-DiBnTnci.js";import"./useAnimationId-DwaEpfhV.js";import"./getRadiusAndStrokeWidthFromDot-Ce9nLJu3.js";import"./graphicalItemSelectors-BzUrLgRa.js";import"./index-C_zDqZx9.js";import"./ChartSizeDimensions-Ca623tER.js";import"./OffsetShower-B7jjHmTv.js";import"./PlotAreaShower-B6clyZxt.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement(h,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(u,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={coordinateWithValueData}>
          <Area dataKey="y" isAnimationActive={false} label={renderLabel} />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const mt=["CustomizedLabel"];export{e as CustomizedLabel,mt as __namedExportsOrder,at as default};
