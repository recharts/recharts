import{R as r}from"./iframe-BehVlOkm.js";import{R as c}from"./zIndexSlice-CdmzvBWn.js";import{C as d}from"./ComposedChart-CYwBQNg8.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-5wURnVFr.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-3ebqMYzS.js";import"./index-nl04o6LQ.js";import"./index-lttadt3D.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-9hqPoiPG.js";import"./isWellBehavedNumber-BwNlQ7J1.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-0yqzaTB4.js";import"./axisSelectors-DyVT26JG.js";import"./d3-scale-DlStqn9j.js";import"./index-CaKklxJL.js";import"./index-BrZJdMim.js";import"./renderedTicksSlice-dw4JvkQu.js";import"./index-BxFZJssh.js";import"./CartesianChart-DZXsAfAP.js";import"./chartDataContext-COawrzjC.js";import"./CategoricalChart-Bb7rG0O4.js";import"./Layer-Drrwe-kT.js";import"./AnimatedItems-DX3Aqvyi.js";import"./Label-3Vi5DR-p.js";import"./Text-DdbsBRSW.js";import"./DOMUtils-DRfi6Z_9.js";import"./useId-TSoobfid.js";import"./useBackwardsCompatibleTheme-DC96YUQX.js";import"./ZIndexLayer-C8fMsiAz.js";import"./useAnimationId-PYM0HN7I.js";import"./ActivePoints-CSlqy7_R.js";import"./Dot-BJdMpeRo.js";import"./types-CAE_u7CX.js";import"./RegisterGraphicalItemId-B_HypSlK.js";import"./GraphicalItemClipPath-DHrIaKZQ.js";import"./SetGraphicalItem-ke9OEdFg.js";import"./getRadiusAndStrokeWidthFromDot-Dn20e6Na.js";import"./ActiveShapeUtils-DgsGKv18.js";import"./Curve-DIgGrV17.js";import"./step-DaHJvpwY.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-CpoXyJzx.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
