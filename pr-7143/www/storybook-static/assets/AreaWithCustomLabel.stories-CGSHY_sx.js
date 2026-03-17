import{e as t}from"./iframe-jjkKyBnh.js";import{R as c}from"./arrayEqualityCheck-CUp7G6cL.js";import{C as d}from"./ComposedChart-DegKGvWA.js";import{A as l}from"./Area-DUQ1_Cv7.js";import{R as h}from"./RechartsHookInspector-CxT_wKdY.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-zELNaCXr.js";import"./immer-BbVLmXrm.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-JqguxFU2.js";import"./index-BEHJeVcn.js";import"./hooks-wocA-lGH.js";import"./axisSelectors-Dd4S0Ceb.js";import"./d3-scale-Ckxg_Ns_.js";import"./zIndexSlice-CuuIJiqa.js";import"./renderedTicksSlice-B60M8aLp.js";import"./CartesianChart-BCXq_jCV.js";import"./chartDataContext-D_AkUCKZ.js";import"./CategoricalChart-C0mCf7ot.js";import"./Curve-D2x3KFrb.js";import"./types-BzZyKnH8.js";import"./step-CFbXCSW0.js";import"./Layer-Dm-ZljB7.js";import"./ReactUtils-CrwQQyAX.js";import"./Label-BaP8ifBC.js";import"./Text-C_U00kEv.js";import"./DOMUtils-BMT21emC.js";import"./ZIndexLayer-CNnwO4iC.js";import"./ActivePoints-Das5y6E5.js";import"./Dot-BQZVzyoQ.js";import"./RegisterGraphicalItemId-DhCgr3Sg.js";import"./GraphicalItemClipPath-CX2YOSCG.js";import"./SetGraphicalItem-CEEkaG-5.js";import"./useAnimationId-XeqIoJ00.js";import"./getRadiusAndStrokeWidthFromDot-FiGNG78A.js";import"./graphicalItemSelectors-CS2qZzUz.js";import"./index-CJmZG3j5.js";import"./ChartSizeDimensions-CLm1CpLg.js";import"./OffsetShower-n-Td0s15.js";import"./PlotAreaShower-5quEOdpp.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
