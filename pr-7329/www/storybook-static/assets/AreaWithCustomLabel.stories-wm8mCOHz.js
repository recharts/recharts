import{e as t}from"./iframe-BhgNWdm2.js";import{R as c}from"./arrayEqualityCheck-BPYeEWp9.js";import{C as d}from"./ComposedChart-ByWdqqEr.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-CtKiUyDo.js";import{R as u}from"./RechartsHookInspector-BwLyLCbr.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-D43Wpvex.js";import"./immer-B8rRfUkI.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D_AVgKr-.js";import"./index-CqC_U7ug.js";import"./hooks-jOaINvHQ.js";import"./axisSelectors-CZf8mr5P.js";import"./d3-scale-D8GbsE5m.js";import"./zIndexSlice-Lcr8coq9.js";import"./renderedTicksSlice-D9cY7pVC.js";import"./CartesianChart-D0cl_oJT.js";import"./chartDataContext-Cguc2YyF.js";import"./CategoricalChart-DQs5NoOs.js";import"./Curve-CxXqlxgs.js";import"./types-Bn2_ZBIB.js";import"./step-CB53NYyG.js";import"./Layer-BkasUZxz.js";import"./ReactUtils-BDMzm1YE.js";import"./Label-BRyOnYfu.js";import"./Text-2yWCgbKe.js";import"./DOMUtils-Cxmm0Icy.js";import"./ZIndexLayer-Do4fofgT.js";import"./ActivePoints-tcDNwRIU.js";import"./Dot-CYDciASH.js";import"./RegisterGraphicalItemId-Db3TPLUh.js";import"./GraphicalItemClipPath-BH2oacZ_.js";import"./SetGraphicalItem-C_WqfzHK.js";import"./useAnimationId-Bo7L-9bR.js";import"./getRadiusAndStrokeWidthFromDot-DorA-DYi.js";import"./graphicalItemSelectors-B2BxqOJH.js";import"./index-owEklC_q.js";import"./ChartSizeDimensions-J0Tmkxsz.js";import"./OffsetShower-C_q72LRF.js";import"./PlotAreaShower-CDcLHpUT.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement(h,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(u,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
