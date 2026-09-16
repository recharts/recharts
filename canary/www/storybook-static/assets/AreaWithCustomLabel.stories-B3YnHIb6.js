import{R as r}from"./iframe-BCNgueVp.js";import{R as c}from"./zIndexSlice-CCtmziB1.js";import{C as d}from"./ComposedChart-BZSfKAao.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-lO__EUYR.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-NhPjNryy.js";import"./index-DknrhM99.js";import"./index-C90YdW0D.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BtKNVX8w.js";import"./isWellBehavedNumber-DQrQxdGi.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DbCJx0GW.js";import"./axisSelectors-D-nEX4IG.js";import"./d3-scale-buoP3Yb_.js";import"./index-WR8kAZrp.js";import"./index-D7hqs4ef.js";import"./renderedTicksSlice-mO9WeRkh.js";import"./index-DhCnaeYc.js";import"./CartesianChart-zbkVSw3C.js";import"./chartDataContext-Di3BbchU.js";import"./CategoricalChart-DQPW05OG.js";import"./Layer-DVqtOL17.js";import"./AnimatedItems-DV3N7EYj.js";import"./Label-B2ReDrEH.js";import"./Text-DAXsYFxH.js";import"./DOMUtils-C7-Ag6_9.js";import"./useId-Ckkf-sDd.js";import"./useBackwardsCompatibleTheme-CFJvwoVT.js";import"./ZIndexLayer-Ccrtcbr9.js";import"./useAnimationId-CBbWVRap.js";import"./ActivePoints-CUqn1Bgc.js";import"./Dot-D59YTPJi.js";import"./types-Dv8LLmcq.js";import"./RegisterGraphicalItemId-D_OLUlPr.js";import"./GraphicalItemClipPath-DQ0b-CJJ.js";import"./SetGraphicalItem-CDaxvQAk.js";import"./getRadiusAndStrokeWidthFromDot-Cb21_3vS.js";import"./ActiveShapeUtils-Cz6FzTvm.js";import"./Curve-NDvVIG-e.js";import"./step-CsaqBRl_.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-CyGmZ9Hw.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
