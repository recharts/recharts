import{R as r}from"./iframe-DsVopAcH.js";import{R as c}from"./zIndexSlice-CGOHGuEy.js";import{C as d}from"./ComposedChart-BQuW28P0.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-Cz5kzbo4.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BobbsZsr.js";import"./index-BVvb2y__.js";import"./index-CFv1WTge.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BHrKsPc_.js";import"./isWellBehavedNumber-Br_jDsOR.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BRE0A59j.js";import"./axisSelectors-Dgut4uty.js";import"./d3-scale-Eru_6FDY.js";import"./index-Ds1bCQEW.js";import"./index-B91uvtzr.js";import"./renderedTicksSlice-C8E6fsP2.js";import"./index-C4MX6gyH.js";import"./CartesianChart-B1PZqYEM.js";import"./chartDataContext-C5PzVTiP.js";import"./CategoricalChart-Cry5pYjh.js";import"./Layer-BiKMlTZw.js";import"./AnimatedItems-Brc7OfV1.js";import"./Label-yfckENu2.js";import"./Text-nN9fGOPh.js";import"./DOMUtils-DoArDhDK.js";import"./useId-B3ZiYYeF.js";import"./useBackwardsCompatibleTheme-CGfGQXHh.js";import"./ZIndexLayer-D4yIu8AC.js";import"./useAnimationId-C2i6ANfU.js";import"./ActivePoints-D3ORl2JH.js";import"./Dot-kLE6mRv4.js";import"./types-BimouhM4.js";import"./RegisterGraphicalItemId-BpLRWLUo.js";import"./GraphicalItemClipPath-5LNoh5eI.js";import"./SetGraphicalItem-DoTInfhC.js";import"./getRadiusAndStrokeWidthFromDot-BIVN16ui.js";import"./ActiveShapeUtils-BltEi4et.js";import"./Curve-wbgCoDzv.js";import"./step-B5nwCRak.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity---g9lV2H.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
