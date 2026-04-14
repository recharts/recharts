import{e as t}from"./iframe-Cr_9Zxyz.js";import{R as c}from"./arrayEqualityCheck-C67VePae.js";import{C as d}from"./ComposedChart-BP3-QQ_Z.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-C_kHAqwr.js";import{R as u}from"./RechartsHookInspector-CkzoI9c0.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-TCwXH7Ec.js";import"./immer-C4QSyCgb.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CqKKWRfj.js";import"./index-WCTFjGJ3.js";import"./hooks-BpLTq7P8.js";import"./axisSelectors-B1y7r4Cr.js";import"./d3-scale-BBKGKrVC.js";import"./zIndexSlice-DN_TI4P2.js";import"./renderedTicksSlice-CLpIiVNo.js";import"./CartesianChart-CrypXdK_.js";import"./chartDataContext-B_zHpYbg.js";import"./CategoricalChart-Dwl_niiN.js";import"./Curve-BqHbKpq8.js";import"./types-DtvHHfJA.js";import"./step-BUGJ6v3P.js";import"./Layer-LRa_hkeo.js";import"./ReactUtils-B4MRvMvn.js";import"./Label-C4NmpEg6.js";import"./Text-B2FTpI2T.js";import"./DOMUtils-ZnDVm2Wt.js";import"./ZIndexLayer-DdInyA8Z.js";import"./ActivePoints-Bn9vOXXn.js";import"./Dot-B1MaLxXk.js";import"./RegisterGraphicalItemId-DimfmF2M.js";import"./GraphicalItemClipPath-CDQxSlO_.js";import"./SetGraphicalItem-CPb0K0Vx.js";import"./useAnimationId-CtG5S8C9.js";import"./getRadiusAndStrokeWidthFromDot-DY-AYx3Z.js";import"./graphicalItemSelectors-wGJA2e4S.js";import"./index-BCUg-3d0.js";import"./ChartSizeDimensions-BSIBvgzx.js";import"./OffsetShower-CxfJShSk.js";import"./PlotAreaShower-28Fi8dPq.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement(h,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(u,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
