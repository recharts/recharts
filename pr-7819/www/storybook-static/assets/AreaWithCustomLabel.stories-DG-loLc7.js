import{R as r}from"./iframe-iz9dRDhe.js";import{R as c}from"./zIndexSlice-BdPqcxx_.js";import{C as d}from"./ComposedChart-DjYayHbw.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-DBoUsRnp.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DE0tlCdA.js";import"./index-DxHaJGfQ.js";import"./index-Bl-8dy8S.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DtNPAsTQ.js";import"./isWellBehavedNumber--SX7jZAJ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CUdNLZqv.js";import"./axisSelectors-2huN7QkS.js";import"./d3-scale-DHC9WiBl.js";import"./index-mn3tws3H.js";import"./index-8jy5f1Un.js";import"./renderedTicksSlice-CEU3EycZ.js";import"./index-Bn7rp-xI.js";import"./CartesianChart-DOgw209l.js";import"./chartDataContext-CeQ-Tm4w.js";import"./CategoricalChart-D__Jof4a.js";import"./Layer-DYGhC4_B.js";import"./AnimatedItems-Dc8Ivobd.js";import"./Label-C1iyqFpa.js";import"./Text-CUS7a8VN.js";import"./DOMUtils-lupu9nOG.js";import"./useId-HDpOWxLn.js";import"./useBackwardsCompatibleTheme-BDaqedqa.js";import"./ZIndexLayer-TqmbKYqx.js";import"./useAnimationId-7yr0q3Dd.js";import"./ActivePoints-DShx2jgH.js";import"./Dot-B7QvGJur.js";import"./types-LFzxVX1I.js";import"./RegisterGraphicalItemId-CDExOK2J.js";import"./GraphicalItemClipPath-C5R-amEZ.js";import"./SetGraphicalItem-CMqF7RNk.js";import"./getRadiusAndStrokeWidthFromDot-CQjtIaHq.js";import"./ActiveShapeUtils-DFPOUViC.js";import"./Curve-D2o1LRz2.js";import"./step-C36qcU_Q.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-MtWjlwkT.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
