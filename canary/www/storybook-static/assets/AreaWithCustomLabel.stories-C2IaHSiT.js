import{e as t}from"./iframe-Byw-Ecda.js";import{R as c}from"./arrayEqualityCheck-DJZ_H245.js";import{C as d}from"./ComposedChart-CAduK1a5.js";import{A as l}from"./Area-C0e4Dvbh.js";import{R as h}from"./RechartsHookInspector-DU_Xges7.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DghbljUc.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-CyPBoUJ2.js";import"./hooks-CRVJYPCv.js";import"./axisSelectors-CfRyBf_k.js";import"./zIndexSlice-BBcvffed.js";import"./CartesianChart-yzTWxCXF.js";import"./chartDataContext-BewYwNuI.js";import"./CategoricalChart-Dg1jHZIf.js";import"./Curve-Dgc9kazX.js";import"./types-C-BvOMCj.js";import"./Layer-BCc3Ql-7.js";import"./ReactUtils-Cjy_uT2w.js";import"./Label-BqnP7yRk.js";import"./Text-Co26eSaA.js";import"./DOMUtils-Cxak4Mzx.js";import"./ZIndexLayer-CyfG8XIl.js";import"./ActivePoints-CxQ9IJdy.js";import"./Dot-DJVqn8HA.js";import"./RegisterGraphicalItemId-Cpx6qHuO.js";import"./GraphicalItemClipPath-C339LZnB.js";import"./SetGraphicalItem-DQzHPnU7.js";import"./useAnimationId-QmVedw8X.js";import"./getRadiusAndStrokeWidthFromDot-1lozLBiZ.js";import"./graphicalItemSelectors-C-onypME.js";import"./index-Bq4G09kn.js";import"./ChartSizeDimensions-B0IYXKC6.js";import"./OffsetShower-BbVu_iXB.js";import"./PlotAreaShower-b86ZtdTd.js";const Z={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=s=>{const{index:p,x:r,y:o}=s;return t.createElement("text",{key:p,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
