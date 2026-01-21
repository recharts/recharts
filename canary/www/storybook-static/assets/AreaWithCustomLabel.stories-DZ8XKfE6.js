import{e as t}from"./iframe-Dt2-Rn2T.js";import{R as c}from"./arrayEqualityCheck-e3rdG8sZ.js";import{C as d}from"./ComposedChart-CpKIk9zm.js";import{A as l}from"./Area-D3SF1HRK.js";import{R as h}from"./RechartsHookInspector-5aSdxu_t.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BoKEDzkZ.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-CBGhND_r.js";import"./hooks-DJKBhfj1.js";import"./axisSelectors-B_oLlWSB.js";import"./zIndexSlice-C1nzEFYS.js";import"./CartesianChart-B7uV6D3o.js";import"./chartDataContext-DW1Hpk6b.js";import"./CategoricalChart-Dpdb76Jr.js";import"./Curve-Ff2ksW4t.js";import"./types-BU6HIYaW.js";import"./Layer-Cy-kS3Tn.js";import"./ReactUtils-OtSSiA15.js";import"./Label-C32CYHoq.js";import"./Text-Bi0muiqL.js";import"./DOMUtils-ngjC_q0v.js";import"./ZIndexLayer-RqzvM65R.js";import"./ActivePoints-DYpwLrvq.js";import"./Dot-yws4r2HM.js";import"./RegisterGraphicalItemId-BHPtgntX.js";import"./GraphicalItemClipPath-DzB0Slfu.js";import"./SetGraphicalItem-C72JWaDt.js";import"./useAnimationId-C5m05tY7.js";import"./getRadiusAndStrokeWidthFromDot-9ys3gSvC.js";import"./graphicalItemSelectors-CxiBt8fS.js";import"./index-DBIfqZnx.js";import"./ChartSizeDimensions-CGKu1G21.js";import"./OffsetShower-Cg1AihHI.js";import"./PlotAreaShower-Byk-bE4C.js";const Z={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=s=>{const{index:p,x:r,y:o}=s;return t.createElement("text",{key:p,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
