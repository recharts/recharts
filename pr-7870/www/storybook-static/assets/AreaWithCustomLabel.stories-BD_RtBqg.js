import{R as r}from"./iframe-BrVE5RSW.js";import{R as c}from"./zIndexSlice-CHsJbjJD.js";import{C as d}from"./ComposedChart-CCPBzUyH.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-orhN6l56.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BQaLLzka.js";import"./index-LfrCHYrZ.js";import"./index-Sva1rZOH.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BD9NC1fi.js";import"./isWellBehavedNumber-BVgmnW9g.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DQVN278-.js";import"./axisSelectors-BDU1QiXu.js";import"./d3-scale-BmnvRTpm.js";import"./index-C5upL2ad.js";import"./index-SZqQo-6K.js";import"./renderedTicksSlice-DXuyBJO_.js";import"./index-BmC-zE0O.js";import"./CartesianChart-D0yCkzIu.js";import"./chartDataContext-3sx737Gw.js";import"./CategoricalChart-B2Hi-_kM.js";import"./Layer-BvSPpSNQ.js";import"./AnimatedItems-Bzkg4GxV.js";import"./Label-DySzAUNx.js";import"./Text-B4ZIZNbZ.js";import"./DOMUtils-IYFeeRl2.js";import"./useId-DbY0de1j.js";import"./useBackwardsCompatibleTheme-CF13ge8-.js";import"./ZIndexLayer-BERp6HrO.js";import"./useAnimationId-CaCeoqu2.js";import"./ActivePoints--e6lCWWz.js";import"./Dot-B2RdazQP.js";import"./types-CE2qBNHK.js";import"./RegisterGraphicalItemId-Cg9vlh9g.js";import"./GraphicalItemClipPath-C1RnAz3w.js";import"./SetGraphicalItem-BFu8ftGQ.js";import"./getRadiusAndStrokeWidthFromDot-Cg4paiyF.js";import"./ActiveShapeUtils-DIhJJb_m.js";import"./Curve-DQe-iWey.js";import"./step-DvhKjAy0.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-BCiQfNgb.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
