import{R as r}from"./iframe-y6pZoBOe.js";import{R as c}from"./zIndexSlice-BAPHOf-A.js";import{C as d}from"./ComposedChart-BoLdC1zL.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-CKw-ZQMC.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-sUHqZCtQ.js";import"./index-DViwT0RC.js";import"./index-vL-3KTyV.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DK41N9kV.js";import"./isWellBehavedNumber-Cb3oTnMu.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Bd4_Y8lY.js";import"./axisSelectors-BmcHsTRr.js";import"./d3-scale-DRlyCOFP.js";import"./index-B6N9MB9B.js";import"./index-0bNzEg3t.js";import"./renderedTicksSlice-CTLbpy90.js";import"./index-CSbalAtk.js";import"./CartesianChart-Bvg5MZxQ.js";import"./chartDataContext-Dpe-QKhv.js";import"./CategoricalChart-aAiDUiAX.js";import"./Layer-34ncCtUV.js";import"./AnimatedItems-DIgNuRUa.js";import"./Label-9NqXhRk3.js";import"./Text-DdGQmpzq.js";import"./DOMUtils-Co8gRLU9.js";import"./useId-DiCeZzyc.js";import"./useBackwardsCompatibleTheme-DpzVFbqN.js";import"./ZIndexLayer-C7BuriGU.js";import"./useAnimationId-9X7pomqp.js";import"./ActivePoints-CLmTgrQX.js";import"./Dot-ClwGjlu0.js";import"./types-DtUXsqBa.js";import"./RegisterGraphicalItemId-DljjsDCZ.js";import"./GraphicalItemClipPath-6O7hO6A5.js";import"./SetGraphicalItem-BmPIFAsA.js";import"./getRadiusAndStrokeWidthFromDot-BsnIiv2v.js";import"./ActiveShapeUtils-CrA6HvN5.js";import"./Curve-fod9LGdb.js";import"./step-CafFQeb3.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-CXZPeRzX.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={coordinateWithValueData}>
          <Area dataKey="y" isAnimationActive={false} label={renderLabel} />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(p=(a=t.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};export{t as CustomizedLabel,pt as __namedExportsOrder,at as default};
