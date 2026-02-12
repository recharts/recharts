import{e as t}from"./iframe-ByhUx3i5.js";import{R as c}from"./arrayEqualityCheck-Dc2-6IGJ.js";import{C as d}from"./ComposedChart-BqdUV1Sk.js";import{A as l}from"./Area--2qLCi0V.js";import{R as h}from"./RechartsHookInspector-7ObrtXBg.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BXU9cl7Q.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CIwNTWTh.js";import"./hooks-3yl5iFEg.js";import"./axisSelectors-NQs8EjRk.js";import"./zIndexSlice-D3kDw7sn.js";import"./CartesianChart-R5e0LOwa.js";import"./chartDataContext-BYf5RbAV.js";import"./CategoricalChart-5ePC_oFI.js";import"./Curve-CS0P1hcX.js";import"./types-CJt6eGgj.js";import"./Layer-C6tXeN-I.js";import"./ReactUtils-BmZRR5An.js";import"./Label-CEJ3y0id.js";import"./Text-D9qGFk_y.js";import"./DOMUtils-CN3Smf_c.js";import"./ZIndexLayer-ktHWf7_5.js";import"./ActivePoints-D515SR-u.js";import"./Dot-COBzijtS.js";import"./RegisterGraphicalItemId-CUDjPLNo.js";import"./GraphicalItemClipPath-CCO6Hfg0.js";import"./SetGraphicalItem-d5ssc5Bz.js";import"./useAnimationId-aMq0pZgy.js";import"./getRadiusAndStrokeWidthFromDot-ph1c7d2p.js";import"./graphicalItemSelectors-CD7_eHaQ.js";import"./index-Bitkd77q.js";import"./ChartSizeDimensions-DxQjWf1j.js";import"./OffsetShower-DxCTP-c8.js";import"./PlotAreaShower-DB1zgg4x.js";const Z={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=s=>{const{index:p,x:r,y:o}=s;return t.createElement("text",{key:p,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
