import{R as r}from"./iframe-CrjMmK-P.js";import{R as c}from"./zIndexSlice-BjJGmtkk.js";import{C as d}from"./ComposedChart-DWFup1Gh.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-BLXX0kET.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DvPRoUwa.js";import"./index-C29X7Fc2.js";import"./index-BDweFuqO.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-1lRPudDL.js";import"./isWellBehavedNumber-i-P4IxnU.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-W15Lm7G0.js";import"./axisSelectors-CArdhpNf.js";import"./d3-scale-60bYpT2W.js";import"./index-DhUbeUHh.js";import"./index-C0KmE10p.js";import"./renderedTicksSlice-CoKKbA57.js";import"./index-p1bk8TMl.js";import"./CartesianChart-CtX-pqzv.js";import"./chartDataContext-rtr64WFG.js";import"./CategoricalChart-RhdZ5xjE.js";import"./Layer-D9-s7BIj.js";import"./AnimatedItems-DhhQShtD.js";import"./Label-BUscAhBU.js";import"./Text-CvoG-yND.js";import"./DOMUtils-BLhe2-Wn.js";import"./useId-BEuvre-A.js";import"./useBackwardsCompatibleTheme-C_kcEgOz.js";import"./ZIndexLayer-BnhEIQdT.js";import"./useAnimationId-yNh7qZi1.js";import"./ActivePoints-l6QKzYun.js";import"./Dot-BglkAryw.js";import"./types-DQIGWyvO.js";import"./RegisterGraphicalItemId-BtD1DcTG.js";import"./GraphicalItemClipPath-d2m1y1AJ.js";import"./SetGraphicalItem-Cz1BmFYo.js";import"./getRadiusAndStrokeWidthFromDot-BZvBgzm6.js";import"./ActiveShapeUtils-DNRW1wio.js";import"./Curve-DmmzRQeA.js";import"./step-XIk4Qxhk.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-D4eInQUL.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
