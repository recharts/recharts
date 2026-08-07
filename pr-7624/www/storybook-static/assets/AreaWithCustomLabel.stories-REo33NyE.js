import{R as e}from"./iframe-DQ5pdRpT.js";import{R as c}from"./zIndexSlice-DQojUU3D.js";import{C as d}from"./ComposedChart-4NtsiuE-.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-DZJATiz1.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-j7vxqIWJ.js";import"./index-B42gFx1y.js";import"./index-CKPKUGRw.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-C2j2eShk.js";import"./isWellBehavedNumber-DO3SFpF7.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper--EivWNjp.js";import"./index-CUdIWJWE.js";import"./index-CUVFW2Mq.js";import"./axisSelectors-BLoeM8Ql.js";import"./d3-scale-CzelId51.js";import"./renderedTicksSlice-DZuwhgdB.js";import"./CartesianChart-DCEWo6vx.js";import"./chartDataContext-BANEa2Gn.js";import"./CategoricalChart-DmEP8iSm.js";import"./Layer-BrLbSCb2.js";import"./AnimatedItems-Bmg4d13Y.js";import"./Label-ogcMQvX_.js";import"./Text-BbwznCj8.js";import"./DOMUtils-3opGu7KJ.js";import"./ZIndexLayer-LAqpTUNY.js";import"./useAnimationId-Bjim9SiW.js";import"./ActivePoints-DNNEApCY.js";import"./Dot-CSL_Jnkg.js";import"./types-DwD8FSIs.js";import"./RegisterGraphicalItemId-gNTwGCiB.js";import"./GraphicalItemClipPath-Cbyv8QGz.js";import"./SetGraphicalItem-BopL2iik.js";import"./graphicalItemIdentity-DhpqhoFM.js";import"./ActiveShapeUtils-ZRRc_Clb.js";import"./Curve-Co2BFljk.js";import"./step-BcS8HbZG.js";import"./path-DyVhHtw_.js";import"./RechartsThemeContext-DYFm3WDH.js";import"./graphicalItemSelectors-JD8lH9Rn.js";const it={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const at=["CustomizedLabel"];export{t as CustomizedLabel,at as __namedExportsOrder,it as default};
