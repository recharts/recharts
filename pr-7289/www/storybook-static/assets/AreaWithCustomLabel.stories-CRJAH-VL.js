import{e as t}from"./iframe-BvixMVLJ.js";import{R as c}from"./arrayEqualityCheck-9JafNuHb.js";import{C as d}from"./ComposedChart-De2rvnWa.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-DfzUrtET.js";import{R as u}from"./RechartsHookInspector-B7OCtou7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CPqr6DGH.js";import"./immer-CaX280hR.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B9hDtRNp.js";import"./index-4u6l2t3f.js";import"./hooks-CmxNexDu.js";import"./axisSelectors-CZAHgbVu.js";import"./d3-scale-DvCQBID5.js";import"./zIndexSlice-Dt-OH-0J.js";import"./renderedTicksSlice-Bakbxnfn.js";import"./CartesianChart-C8rmaTr8.js";import"./chartDataContext-H28vHODo.js";import"./CategoricalChart-B9R3Zf2d.js";import"./Curve-D-7l7mPW.js";import"./types-C4LPRE4X.js";import"./step-DGFNdhZX.js";import"./Layer-E6_PJRcD.js";import"./ReactUtils-CX2Z3mNI.js";import"./Label-2bgwwMrL.js";import"./Text-eQ3pJOEs.js";import"./DOMUtils-DEgurZZA.js";import"./ZIndexLayer-BQCBZf3p.js";import"./ActivePoints-B9v85k-m.js";import"./Dot-BBC1jxnt.js";import"./RegisterGraphicalItemId-BfUUoebv.js";import"./GraphicalItemClipPath-CqZBK23Z.js";import"./SetGraphicalItem-D9gH1oTH.js";import"./useAnimationId-BG6xyOIZ.js";import"./getRadiusAndStrokeWidthFromDot-D5L1c2bL.js";import"./graphicalItemSelectors-DQYamGfv.js";import"./index-CWh6xOze.js";import"./ChartSizeDimensions-j35P-O-9.js";import"./OffsetShower-DT-VFUR7.js";import"./PlotAreaShower-v_ea9rYC.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement(h,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(u,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
