import{e as t}from"./iframe-CTxRHOGj.js";import{R as c}from"./arrayEqualityCheck-B_rRIojj.js";import{C as d}from"./ComposedChart-CJXRd14X.js";import{A as l}from"./Area-B0tZObQE.js";import{R as h}from"./RechartsHookInspector-Dvolm171.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DMjdAuvI.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-B2RXwXeU.js";import"./hooks-C7jgZ8ZG.js";import"./axisSelectors-Dmr46G9_.js";import"./zIndexSlice-fEtQltEu.js";import"./CartesianChart-Dac5W46z.js";import"./chartDataContext-lkL8bl_R.js";import"./CategoricalChart-CwXcJ4KD.js";import"./Curve-Dmxl7Q3I.js";import"./types-CAlg1Faj.js";import"./Layer-NDmuZa_H.js";import"./ReactUtils-BZY6277w.js";import"./Label-D926DJYr.js";import"./Text-mcy7Wgv9.js";import"./DOMUtils-DAlT2U1x.js";import"./ZIndexLayer-hZNMFSqY.js";import"./ActivePoints-ColTAJU4.js";import"./Dot-BjkBWsnl.js";import"./RegisterGraphicalItemId-Cw9P8hA6.js";import"./GraphicalItemClipPath-C6n7_76l.js";import"./SetGraphicalItem-BipBgEa4.js";import"./useAnimationId-BmKrhVKp.js";import"./getRadiusAndStrokeWidthFromDot-DhHV37ye.js";import"./graphicalItemSelectors-C3EXFv3_.js";import"./index-HMl1pmjv.js";import"./ChartSizeDimensions-aD96KjA6.js";import"./OffsetShower-BkNDrOWW.js";import"./PlotAreaShower-hX4_8FHk.js";const Z={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=s=>{const{index:p,x:r,y:o}=s;return t.createElement("text",{key:p,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(n=(m=e.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};const tt=["CustomizedLabel"];export{e as CustomizedLabel,tt as __namedExportsOrder,Z as default};
