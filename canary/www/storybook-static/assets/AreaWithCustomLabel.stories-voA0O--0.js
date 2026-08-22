import{R as r}from"./iframe-C20wDroG.js";import{R as c}from"./zIndexSlice-Dn977bIM.js";import{C as d}from"./ComposedChart-fc9zkA9M.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-D2ffs6qe.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-D_pKwmSO.js";import"./index-Drz6B1BJ.js";import"./index-D0HNPWdm.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DUXs9b9S.js";import"./isWellBehavedNumber-CiTmvWUm.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-ajeFxaVY.js";import"./index-B_Gj3SOI.js";import"./index-CwuSxHdI.js";import"./axisSelectors-D2d7y5tB.js";import"./d3-scale-CMJeOIiZ.js";import"./renderedTicksSlice-CDLV8c3e.js";import"./CartesianChart-D0DqF69B.js";import"./chartDataContext-BN_dA9lB.js";import"./CategoricalChart-BPRT5cE8.js";import"./Layer-DDCJtugd.js";import"./AnimatedItems-BeGp4Wik.js";import"./Label-DkS9BWG5.js";import"./Text-DGWMJ0hU.js";import"./DOMUtils-CaGG5Hmm.js";import"./useId-HPBRJy0D.js";import"./useBackwardsCompatibleTheme-CdR6FU4E.js";import"./ZIndexLayer-DPgbR3ka.js";import"./useAnimationId-Bc7mxzMe.js";import"./ActivePoints-Bxc8A2aK.js";import"./Dot-tDq1zpNX.js";import"./types-BDuMvVkF.js";import"./RegisterGraphicalItemId-CBXEWS4T.js";import"./GraphicalItemClipPath-DnJzFjkV.js";import"./SetGraphicalItem-DfmFtgCH.js";import"./getRadiusAndStrokeWidthFromDot-BXHe0lbi.js";import"./ActiveShapeUtils-BjalrG5Q.js";import"./Curve-CmAw5S9J.js";import"./step-cmv5QLzJ.js";import"./path-DyVhHtw_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-BiO_JgRr.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
