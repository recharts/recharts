import{e as t}from"./iframe-D1Y9TY-u.js";import{g as c}from"./arrayEqualityCheck-DPvIBees.js";import{C as d}from"./ComposedChart-Dv2kn-Hm.js";import{a as l}from"./Coordinate-CcdTesrj.js";import{A as h}from"./Area-gTAklQHj.js";import{R as u}from"./RechartsHookInspector-DlKiXr8l.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DD8L0n44.js";import"./immer-CxQQPMht.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B0rnCwdR.js";import"./index-D5E_lAb8.js";import"./hooks-CFGEq-6u.js";import"./axisSelectors-DhcMUj02.js";import"./d3-scale-BrKRNhi9.js";import"./zIndexSlice-CgFHZos-.js";import"./renderedTicksSlice-W-15kQDb.js";import"./CartesianChart-B6m73if6.js";import"./chartDataContext-C5ZGItfB.js";import"./CategoricalChart-DcwMFRg_.js";import"./Curve-5XiXyCEh.js";import"./types-BaB5y5-3.js";import"./step-kC9Mr0-h.js";import"./path-DyVhHtw_.js";import"./Layer-B3bXBbbL.js";import"./ReactUtils-Cn5gX129.js";import"./Label-DE2OURwo.js";import"./Text-Dd-bZYpK.js";import"./DOMUtils-DyWiHKN-.js";import"./ZIndexLayer-CfpM-rLj.js";import"./ActivePoints-B66CzNHK.js";import"./Dot-DAICBiMe.js";import"./RegisterGraphicalItemId-Bn3tPr19.js";import"./GraphicalItemClipPath-BvycXnEO.js";import"./SetGraphicalItem-B11RgMwt.js";import"./useAnimationId-BZgLvOHt.js";import"./getRadiusAndStrokeWidthFromDot-Ba8qt8Pw.js";import"./graphicalItemSelectors-Bc__06oy.js";import"./index-twG5rrjJ.js";import"./ChartSizeDimensions-BkxRlTbK.js";import"./OffsetShower-XnxI6Cxg.js";import"./PlotAreaShower-BNnVE1WV.js";const mt={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement(h,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(u,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const pt=["CustomizedLabel"];export{e as CustomizedLabel,pt as __namedExportsOrder,mt as default};
