import{e as t}from"./iframe-8sIubbdi.js";import{R as c}from"./arrayEqualityCheck-DbCj9c-Y.js";import{C as d}from"./ComposedChart-uiW_8j2H.js";import{A as l}from"./Area-BA3pf917.js";import{R as h}from"./RechartsHookInspector-AlYSKZYm.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DuCQFLVY.js";import"./immer-BT2n2B7O.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D30EcdBX.js";import"./index-CbU0dTJ6.js";import"./hooks-D_DW5Oi2.js";import"./axisSelectors-DxwSejiD.js";import"./d3-scale-DEnCLOEW.js";import"./zIndexSlice-VsYA40So.js";import"./renderedTicksSlice-CfkkEf9Z.js";import"./CartesianChart-CXlojrwJ.js";import"./chartDataContext-4cME9qvC.js";import"./CategoricalChart-C7NQof8g.js";import"./Curve-BZpcUU-T.js";import"./types-Bp02LWfB.js";import"./step-CjuXRgh8.js";import"./Layer-BRXiwqet.js";import"./ReactUtils-BXvpQNi2.js";import"./Label-DilR1ra4.js";import"./Text-3TK1Y5vF.js";import"./DOMUtils-DytWm70I.js";import"./ZIndexLayer-Ts04gVrK.js";import"./ActivePoints-KfMw2aSf.js";import"./Dot-TuBc5AFD.js";import"./RegisterGraphicalItemId-Cm3HEb7M.js";import"./GraphicalItemClipPath-C8kD9Qqm.js";import"./SetGraphicalItem-CsZep-cL.js";import"./useAnimationId-De5EZ4DF.js";import"./getRadiusAndStrokeWidthFromDot-7blQF-c9.js";import"./graphicalItemSelectors-CPoOjEEq.js";import"./index-QIusEcOA.js";import"./ChartSizeDimensions-B-IxYWC1.js";import"./OffsetShower-CFWyxT0Z.js";import"./PlotAreaShower-CXMf_89y.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
