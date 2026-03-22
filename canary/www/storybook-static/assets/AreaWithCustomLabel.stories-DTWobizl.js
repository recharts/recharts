import{e as t}from"./iframe-CgO1MpLR.js";import{R as c}from"./arrayEqualityCheck-u-i53ess.js";import{C as d}from"./ComposedChart-_NVVn82o.js";import{A as l}from"./Area-Dhz1U03T.js";import{R as h}from"./RechartsHookInspector-CDDYORWo.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DhOBRlG4.js";import"./immer-CbOoSQee.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CDt2FmMO.js";import"./index-DXMTaf8u.js";import"./hooks-2os6LPs1.js";import"./axisSelectors-GgUYtUsd.js";import"./d3-scale-DrxfQAZk.js";import"./zIndexSlice-Bk7fG6-8.js";import"./renderedTicksSlice-BCt2n75F.js";import"./CartesianChart-9rc0WcRq.js";import"./chartDataContext-BsDrumof.js";import"./CategoricalChart-B51A2DYk.js";import"./Curve-DQA1Id8x.js";import"./types-CR8KEC21.js";import"./step-Do923Rg0.js";import"./Layer-BnKx9soM.js";import"./ReactUtils-aHtS1QKc.js";import"./Label-DuKpvZQ2.js";import"./Text-BsiCf19y.js";import"./DOMUtils-ClzY_4R6.js";import"./ZIndexLayer-GawZf7gt.js";import"./ActivePoints-4Dquq-We.js";import"./Dot-i5e7mgOR.js";import"./RegisterGraphicalItemId-DbAYEj3z.js";import"./GraphicalItemClipPath-Kfq1Q5v1.js";import"./SetGraphicalItem-BLM5KnkQ.js";import"./useAnimationId-DCzIcKnG.js";import"./getRadiusAndStrokeWidthFromDot-DB6-Bj1Z.js";import"./graphicalItemSelectors-D-J503vA.js";import"./index-Co6Xoctr.js";import"./ChartSizeDimensions-BHD_hXk_.js";import"./OffsetShower-DcNg8xR5.js";import"./PlotAreaShower-Dqalehnj.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
