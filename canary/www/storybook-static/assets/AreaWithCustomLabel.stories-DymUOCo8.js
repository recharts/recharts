import{e as t}from"./iframe-BSb16JoR.js";import{R as c}from"./arrayEqualityCheck-CKi6Epe4.js";import{C as d}from"./ComposedChart-BAoNDz5r.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-CriF3674.js";import{R as u}from"./RechartsHookInspector-DGV6Ct7j.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Cg9Aa6Xm.js";import"./immer-BeuBwnCt.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-z7IieHp6.js";import"./index-Bpi9g4Xy.js";import"./hooks-CGl6g5Kn.js";import"./axisSelectors-CQJQ3hKV.js";import"./d3-scale-BCQZ4ydZ.js";import"./zIndexSlice-Bd2Z7-yF.js";import"./renderedTicksSlice-ZjnECHzq.js";import"./CartesianChart-B4OwK7Ni.js";import"./chartDataContext-Cmf9_heI.js";import"./CategoricalChart-b3cJbLQD.js";import"./Curve-CJKywfJT.js";import"./types-BvVKlSL_.js";import"./step-g_dGXwfI.js";import"./Layer-DZYtcC2w.js";import"./ReactUtils-v-8YVmpF.js";import"./Label-tcp5Z6P8.js";import"./Text-GlnZRYGI.js";import"./DOMUtils-B7NSRuk7.js";import"./ZIndexLayer-8dStJwlU.js";import"./ActivePoints-CXu9VOq4.js";import"./Dot-CVpd23iI.js";import"./RegisterGraphicalItemId-C80kvS_1.js";import"./GraphicalItemClipPath-DRfMkQNb.js";import"./SetGraphicalItem-Drb-mPqH.js";import"./useAnimationId-BRGMijHA.js";import"./getRadiusAndStrokeWidthFromDot-CY2Vn6BR.js";import"./graphicalItemSelectors-BxDLltGA.js";import"./index-ZiErzFNv.js";import"./ChartSizeDimensions-BpGSMkxu.js";import"./OffsetShower-C7hr8qqJ.js";import"./PlotAreaShower-CvbFoVDy.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement(h,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(u,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
