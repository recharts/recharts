import{e as t}from"./iframe-DA7dsAjt.js";import{R as c}from"./arrayEqualityCheck-B2Tullra.js";import{C as d}from"./ComposedChart-BvICr3ON.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-DUMhKIdw.js";import{R as u}from"./RechartsHookInspector-DyuMbIeF.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-B7E-EJR0.js";import"./immer-CgNeP4Cn.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DUd0AjRv.js";import"./index-CjGLS6_1.js";import"./hooks-D-1ZrX9e.js";import"./axisSelectors-BJkuMl5j.js";import"./d3-scale-vc3zo1Az.js";import"./zIndexSlice-QK0EAxoG.js";import"./renderedTicksSlice-izlEPV0Q.js";import"./CartesianChart-BGT6UcsB.js";import"./chartDataContext-COI91jzY.js";import"./CategoricalChart-OHcwZY8x.js";import"./Curve-CSUb-Mmt.js";import"./types-BGlT9ghA.js";import"./step-D3Kjh6oK.js";import"./Layer-CA2bGkBA.js";import"./ReactUtils-Cqv1MuoY.js";import"./Label-BbSyBdDv.js";import"./Text-BDZGl2AG.js";import"./DOMUtils-g7EKoefO.js";import"./ZIndexLayer-CtisNWGZ.js";import"./ActivePoints-CYKlTQ6D.js";import"./Dot-B0m4Ez5e.js";import"./RegisterGraphicalItemId-Cw14-A1S.js";import"./GraphicalItemClipPath-CU2uvT1M.js";import"./SetGraphicalItem-M42qZfYw.js";import"./useAnimationId-Ow7TV2bH.js";import"./getRadiusAndStrokeWidthFromDot-DJFGm-Zo.js";import"./graphicalItemSelectors-D6QPi44o.js";import"./index-WFnamGGq.js";import"./ChartSizeDimensions-DOvk2LHO.js";import"./OffsetShower-G9RnNqRi.js";import"./PlotAreaShower-BULJQmBU.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement(h,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(u,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
