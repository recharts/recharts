import{e as t}from"./iframe-CiMhD8Yi.js";import{R as c}from"./arrayEqualityCheck-C4O-CzLw.js";import{C as d}from"./ComposedChart-XZpl6H0W.js";import{A as l}from"./Area-DZ_HfVEk.js";import{R as h}from"./RechartsHookInspector-DxnuxuTf.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-B6aPzm2T.js";import"./immer-BJk0N9d3.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Ls9LAbQq.js";import"./index-CPsAC65v.js";import"./hooks-DSwKjRVl.js";import"./axisSelectors-B3rHRVnt.js";import"./d3-scale-DI-LuBEQ.js";import"./zIndexSlice-CiVq3vLn.js";import"./renderedTicksSlice-Bf1zdGqK.js";import"./CartesianChart-DO4e4HPA.js";import"./chartDataContext-DSmgJVpn.js";import"./CategoricalChart-BZ0q9dh3.js";import"./Curve-HKI06HW2.js";import"./types-Dhvr5bGX.js";import"./step-CCWyWrm4.js";import"./Layer-C8wFYCI6.js";import"./ReactUtils-DRjJkC3p.js";import"./Label-CI8CQ0nH.js";import"./Text-DqREd9W9.js";import"./DOMUtils-g-POG1C4.js";import"./ZIndexLayer-BkTc8o4k.js";import"./ActivePoints-CO0qgypy.js";import"./Dot-CyRHVoZw.js";import"./RegisterGraphicalItemId-CiaBhgsv.js";import"./GraphicalItemClipPath-BcJMjVwL.js";import"./SetGraphicalItem-CYrsSIGQ.js";import"./useAnimationId-BtEj36rQ.js";import"./getRadiusAndStrokeWidthFromDot-CpgyNr8P.js";import"./graphicalItemSelectors-BQWjxMFm.js";import"./index-DJX1_Qw4.js";import"./ChartSizeDimensions-0tNXvVd7.js";import"./OffsetShower-Cmsq4yeV.js";import"./PlotAreaShower-BWgVdI6o.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
