import{R as r}from"./iframe-1kyud43n.js";import{R as c}from"./zIndexSlice-Cz5lyADs.js";import{C as d}from"./ComposedChart-DbMpgtlU.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-DlBHGjFD.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Hu0TR0tN.js";import"./index-DSXagRxi.js";import"./index-_AXMDP6s.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BuZ_Ktq7.js";import"./isWellBehavedNumber-CN4_9Vj1.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C6lw4dqn.js";import"./index-C2be1uTX.js";import"./index-XjPcI5ms.js";import"./axisSelectors-l88JnyTW.js";import"./d3-scale-CyS0eQ4Y.js";import"./renderedTicksSlice-DyP9_snd.js";import"./CartesianChart-DvAV2_6S.js";import"./chartDataContext-CIvFsnLa.js";import"./CategoricalChart-BmX_T4yF.js";import"./Layer-BIHn5b7O.js";import"./AnimatedItems-DeTQYvPq.js";import"./Label-C1lR5ca8.js";import"./Text-DH0wfypU.js";import"./DOMUtils-PMyjxqYh.js";import"./useId-9eWNRi00.js";import"./useBackwardsCompatibleTheme-CSH7ZS6o.js";import"./ZIndexLayer-JkDBeXjs.js";import"./useAnimationId-RVCSWKWu.js";import"./ActivePoints-Bncm4L2S.js";import"./Dot-DagwZWJ3.js";import"./types-CTti3ygY.js";import"./RegisterGraphicalItemId-BzVYbG1B.js";import"./GraphicalItemClipPath-CPrhIVsz.js";import"./SetGraphicalItem-ydaT6l1I.js";import"./getRadiusAndStrokeWidthFromDot-Cv0Blg-c.js";import"./ActiveShapeUtils-rwurj85y.js";import"./Curve-DxkIWAgM.js";import"./step-CTArbJyP.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-BRoA24w2.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(a=t.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const pt=["CustomizedLabel"];export{t as CustomizedLabel,pt as __namedExportsOrder,at as default};
