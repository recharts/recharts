import{e as t}from"./iframe-Dh5fYf52.js";import{R as c}from"./arrayEqualityCheck-y3xWNCWZ.js";import{C as d}from"./ComposedChart-DvBGIcj2.js";import{A as l}from"./Area-fH8aJinW.js";import{R as h}from"./RechartsHookInspector-ClQgWiSn.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BCuzZFIX.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-B9qWPH0f.js";import"./hooks-e_pos7oA.js";import"./axisSelectors-D3iLKS-b.js";import"./zIndexSlice-DOeznw_J.js";import"./CartesianChart-BLNnKMYl.js";import"./chartDataContext-BW7kgRyE.js";import"./CategoricalChart-D_2x8xbQ.js";import"./Curve-BtY66874.js";import"./types-BQGztJ7o.js";import"./Layer-CyyRPVZz.js";import"./ReactUtils-DdUIndVV.js";import"./Label-BgIRNGCU.js";import"./Text-CCyTgoDW.js";import"./DOMUtils-CdAxT0DP.js";import"./ZIndexLayer-Chf-nD0r.js";import"./ActivePoints-gq73oefV.js";import"./Dot-B05UwBke.js";import"./RegisterGraphicalItemId-dPya34ZY.js";import"./GraphicalItemClipPath-Cuekam0c.js";import"./SetGraphicalItem-DoysDgrz.js";import"./useAnimationId-hVsf5NM-.js";import"./getRadiusAndStrokeWidthFromDot-B6ckmWt2.js";import"./graphicalItemSelectors-B7G_vDQd.js";import"./index-AL6ZY6S6.js";import"./ChartSizeDimensions-CLcrLXEy.js";import"./OffsetShower-cs_5-XLY.js";import"./PlotAreaShower-CX2JG_yj.js";const Z={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=s=>{const{index:p,x:r,y:o}=s;return t.createElement("text",{key:p,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
