import{R as r}from"./iframe-DeUe7xmC.js";import{R as c}from"./zIndexSlice-B-kuFUwH.js";import{C as d}from"./ComposedChart-XVsRLyio.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-BvZXdmZG.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-D8_Vf5-y.js";import"./index-B3VftlGk.js";import"./index-CS0BzYwB.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-VBNHpirQ.js";import"./isWellBehavedNumber-XmFYrAHS.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-ClGwO2Ez.js";import"./axisSelectors-L5D3YGAp.js";import"./d3-scale-CKlOT7Hq.js";import"./index-D9wuu4lj.js";import"./index-CLX85w7H.js";import"./renderedTicksSlice-zQGjoh1b.js";import"./index-Cegj0e_Y.js";import"./CartesianChart-BRUE9SRS.js";import"./chartDataContext-CBR6ctH_.js";import"./CategoricalChart-DXh-O_P4.js";import"./Layer-CuQjvvoN.js";import"./AnimatedItems-BsztCZc7.js";import"./Label-CJwVVqdY.js";import"./Text-A2KhxUAH.js";import"./DOMUtils-BjCFSCOp.js";import"./useId-lxxddI0G.js";import"./useBackwardsCompatibleTheme-JgYEE_gV.js";import"./ZIndexLayer-qWMWnECq.js";import"./useAnimationId-sq-3c3no.js";import"./ActivePoints-BeTkB1B9.js";import"./Dot-89j0vp4m.js";import"./types-BQuMJRU5.js";import"./RegisterGraphicalItemId-CVA94A2X.js";import"./GraphicalItemClipPath-CO2IN5Qd.js";import"./SetGraphicalItem-DeV-JbkH.js";import"./getRadiusAndStrokeWidthFromDot-CID7eD-5.js";import"./ActiveShapeUtils-Cd6LbszL.js";import"./Curve-DmgBVGdH.js";import"./step-CZi2V8Uw.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-DKt9Ij8h.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
