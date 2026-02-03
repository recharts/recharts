import{e as t}from"./iframe-ildNGUcB.js";import{R as c}from"./arrayEqualityCheck-DoW--ad2.js";import{C as d}from"./ComposedChart-DO5A4L0f.js";import{A as l}from"./Area-CQVXFqHU.js";import{R as h}from"./RechartsHookInspector-DjpRKvg6.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-D_1HjOLi.js";import"./PolarUtils-DdS5KPsI.js";import"./RechartsWrapper-BhDWMvuB.js";import"./hooks-B29HBlTR.js";import"./axisSelectors-5o1CXUr3.js";import"./zIndexSlice-D5G-T-vj.js";import"./CartesianChart-042kikpZ.js";import"./chartDataContext-Bqk6xP9U.js";import"./CategoricalChart-C6m-VrJe.js";import"./Curve-C50TS3eJ.js";import"./types-C_F-U0PG.js";import"./Layer-C1Vpqy4i.js";import"./ReactUtils-DZ7Bf0_2.js";import"./Label-hP_NWlrR.js";import"./Text-BJp862GC.js";import"./DOMUtils-BS9doNjR.js";import"./ZIndexLayer-Dxr4KK3S.js";import"./ActivePoints-VRWpag3q.js";import"./Dot-BbvpQGB8.js";import"./RegisterGraphicalItemId-cvEVRPza.js";import"./GraphicalItemClipPath-Cuzcod5_.js";import"./SetGraphicalItem-DnK5n2LJ.js";import"./useAnimationId-BnV1d9M_.js";import"./getRadiusAndStrokeWidthFromDot-DZOYBeyk.js";import"./graphicalItemSelectors-CQqGK5Nr.js";import"./index-Bl4fk5Ry.js";import"./ChartSizeDimensions-DAfFC157.js";import"./OffsetShower-DLkMsMHT.js";import"./PlotAreaShower-Bhcl3vg9.js";const Z={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=s=>{const{index:p,x:r,y:o}=s;return t.createElement("text",{key:p,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
