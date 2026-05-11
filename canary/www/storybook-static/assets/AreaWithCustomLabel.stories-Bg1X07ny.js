import{e as t}from"./iframe-DrwMi_jY.js";import{R as c}from"./arrayEqualityCheck-B-j0Xn6j.js";import{C as d}from"./ComposedChart-pyYzeAOr.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-DzJMCf04.js";import{R as u}from"./RechartsHookInspector-Dgz_6twg.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-s4nUKxVc.js";import"./immer-CGi3HKm3.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BPsUoTC1.js";import"./index-BfRPVrJS.js";import"./hooks-DuA_RFk6.js";import"./axisSelectors-Df-PAYL2.js";import"./d3-scale-CR0wzDjj.js";import"./zIndexSlice-Cq0CmY1s.js";import"./renderedTicksSlice-6MUNcuFU.js";import"./CartesianChart-C-l714_S.js";import"./chartDataContext-Dpw29ePn.js";import"./CategoricalChart-Cnq8zR7d.js";import"./Curve-B_0v1Aat.js";import"./types-BfZOKs5E.js";import"./step-8t-ymKLI.js";import"./Layer-DYkX7ETa.js";import"./ReactUtils-QKY7d0Xg.js";import"./Label-Y-xTk_cW.js";import"./Text-BDAX0lGk.js";import"./DOMUtils-JSRhYAW0.js";import"./ZIndexLayer-BvKo2Q94.js";import"./ActivePoints-DQSj2864.js";import"./Dot-Bm1SdT5p.js";import"./RegisterGraphicalItemId-C8YIxCe8.js";import"./GraphicalItemClipPath-CHSUdKNG.js";import"./SetGraphicalItem-Bw_3CFfP.js";import"./useAnimationId-BDrjbpdr.js";import"./getRadiusAndStrokeWidthFromDot-CvXHsMkU.js";import"./graphicalItemSelectors-CJ3cCUfC.js";import"./index-CmbvRTYj.js";import"./ChartSizeDimensions-D4m-G81R.js";import"./OffsetShower-r4JmIKW8.js";import"./PlotAreaShower-CAZL1ycm.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement(h,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(u,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
