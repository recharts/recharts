import{e as t}from"./iframe-Dt4aI4cx.js";import{R as c}from"./arrayEqualityCheck-Cy9OM50o.js";import{C as d}from"./ComposedChart-Dj62jzJB.js";import{A as l}from"./Area-BYRjueQL.js";import{R as h}from"./RechartsHookInspector-DwUwNTd-.js";import{c as u}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CnBFDAwN.js";import"./immer-yH4a-Hlo.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BQTEnB61.js";import"./index-DfJHLdb0.js";import"./hooks-Dm9h8rk1.js";import"./axisSelectors-gtHn-lFq.js";import"./d3-scale-BYMZZ-q_.js";import"./zIndexSlice-w9XFtOqX.js";import"./renderedTicksSlice-DE3C--Q6.js";import"./CartesianChart-vzcLi1ES.js";import"./chartDataContext-F8MoEuAy.js";import"./CategoricalChart-yI3i5yFY.js";import"./Curve-ZdoQmbTm.js";import"./types-CrM7aEhh.js";import"./step-BxKH8omU.js";import"./Layer-XX14EpjR.js";import"./ReactUtils-As56lGLj.js";import"./Label-Dmj78U1Q.js";import"./Text-LG7Y1Qb6.js";import"./DOMUtils-5HA3g2TS.js";import"./ZIndexLayer-GPk988Ay.js";import"./ActivePoints-DSq6xApl.js";import"./Dot-DWaeMyCd.js";import"./RegisterGraphicalItemId-BZJpY04p.js";import"./GraphicalItemClipPath-CzTif6uL.js";import"./SetGraphicalItem-ByAuxD-G.js";import"./useAnimationId-Bl7aTw__.js";import"./getRadiusAndStrokeWidthFromDot-DFYx_98L.js";import"./graphicalItemSelectors-DHqk5KA6.js";import"./index-D9ndWW50.js";import"./ChartSizeDimensions-DFLxu7GA.js";import"./OffsetShower-BVHtCcND.js";import"./PlotAreaShower-BLT7b5XW.js";const at={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:r,y:o}=n;return t.createElement("text",{key:s,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},e={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:u},t.createElement(l,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(h,null)))};var a,m,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
