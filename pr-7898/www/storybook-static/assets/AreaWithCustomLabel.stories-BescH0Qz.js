import{R as r}from"./iframe-Ek26OKJE.js";import{R as c}from"./zIndexSlice-Cb7AOhUN.js";import{C as d}from"./ComposedChart-Bemin9MV.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-CJNKvKIo.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-nAaWLAvW.js";import"./index-Bhq43Y8T.js";import"./index-CH5hGN9X.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DikHbtvd.js";import"./isWellBehavedNumber-C3YqTazs.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B_5MzBNC.js";import"./axisSelectors-BZyUnxor.js";import"./d3-scale-Di7qtVT_.js";import"./index-CVfvjw4V.js";import"./index-CddS4NP_.js";import"./renderedTicksSlice-Bw9pF84S.js";import"./index-tmDn5Ue5.js";import"./CartesianChart-BUYt3N23.js";import"./chartDataContext-q8RiqEic.js";import"./CategoricalChart-Co9RgHLu.js";import"./Layer-DRl71Sg_.js";import"./AnimatedItems-B7V8aYKV.js";import"./Label-Bl-xJBza.js";import"./Text-DbwWqm58.js";import"./DOMUtils-BY_uPlRS.js";import"./useId-rsWHAn-D.js";import"./useBackwardsCompatibleTheme-Drt73puE.js";import"./ZIndexLayer-CR_MqsJe.js";import"./useAnimationId-CwN306xk.js";import"./ActivePoints-CnBuc0OH.js";import"./Dot-CSgA8HWq.js";import"./types-USIGaiIt.js";import"./RegisterGraphicalItemId-DmFzdfAb.js";import"./GraphicalItemClipPath-BeXUWsOJ.js";import"./SetGraphicalItem-OIwhrDsV.js";import"./getRadiusAndStrokeWidthFromDot-Dg98J8GV.js";import"./ActiveShapeUtils-AftK0wfE.js";import"./Curve-8tFNvOBV.js";import"./step-DzHhz21P.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-CLabRpL-.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
