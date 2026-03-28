import{e as t}from"./iframe-C27-mxY1.js";import{R as c}from"./arrayEqualityCheck-D-5eU_dz.js";import{C as d}from"./ComposedChart-KJkIi4eH.js";import{A as l}from"./Area-B90aD0O4.js";import{R as h}from"./RechartsHookInspector-C_T85NFo.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-B1dYXzyb.js";import"./immer-CWybgQyF.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BXh7or_8.js";import"./index-Cipx1Q0g.js";import"./hooks-DsYJGE2Z.js";import"./axisSelectors-DwTIaSff.js";import"./d3-scale-OsBLx27H.js";import"./zIndexSlice-BLW0sC1L.js";import"./renderedTicksSlice-CUE3MGhg.js";import"./CartesianChart-D9sILVKg.js";import"./chartDataContext-YAUKbSg3.js";import"./CategoricalChart-CJAeAbHf.js";import"./Curve-C3fWZnPx.js";import"./types-DbJv915h.js";import"./step-DPeTeJhQ.js";import"./Layer-DIVtJdsU.js";import"./ReactUtils-DuG0Tdq5.js";import"./Label-B6Z4EDvc.js";import"./Text-CElC0_ua.js";import"./DOMUtils-D5gfPOoi.js";import"./ZIndexLayer-B-pky4ZU.js";import"./ActivePoints-h9H1Ebnw.js";import"./Dot-DiMYf5U7.js";import"./RegisterGraphicalItemId-CuWJpCyW.js";import"./GraphicalItemClipPath-CJlc_ulB.js";import"./SetGraphicalItem-1mG4wi13.js";import"./useAnimationId-TcKlRMa1.js";import"./getRadiusAndStrokeWidthFromDot-BW0gjx4V.js";import"./graphicalItemSelectors-BQJe7JS2.js";import"./index-B878aojC.js";import"./ChartSizeDimensions-DFVuZGv4.js";import"./OffsetShower-r-mNA0Bt.js";import"./PlotAreaShower-ulVkY6PA.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
