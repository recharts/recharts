import{R as r}from"./iframe-E8y1LHOl.js";import{R as c}from"./zIndexSlice-CP2K5fjd.js";import{C as d}from"./ComposedChart-LbzptMCb.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-D6zxOZUl.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BI-R_Jee.js";import"./index-B9tVeqRW.js";import"./index-DPYTKeUs.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Dp5H_7QD.js";import"./isWellBehavedNumber-CRMuJk7d.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C8PWTH_z.js";import"./axisSelectors-Bx3EdZdn.js";import"./d3-scale-DaRSGBEX.js";import"./index-uIxCQJLq.js";import"./index-BIh6D11j.js";import"./renderedTicksSlice-C2dkiWvM.js";import"./index-ozGQLW8c.js";import"./CartesianChart-BBRLk3sY.js";import"./chartDataContext-BjS41WHN.js";import"./CategoricalChart-ZbKNQGxB.js";import"./Layer-Bg2OEiKj.js";import"./AnimatedItems-c6sC2Ph5.js";import"./Label-DN0LsbYZ.js";import"./Text-BdpTntNA.js";import"./DOMUtils-8lkeZOFq.js";import"./useId-BmVi-H88.js";import"./useBackwardsCompatibleTheme-vYz6naZ1.js";import"./ZIndexLayer-m7llBpH3.js";import"./useAnimationId-MpB0cIEG.js";import"./ActivePoints-wk2Fpufe.js";import"./Dot-C5og9dHv.js";import"./types-Din7IpfN.js";import"./RegisterGraphicalItemId-zHC8jjTe.js";import"./GraphicalItemClipPath-B1o9CCBQ.js";import"./SetGraphicalItem-BwH3S5eX.js";import"./getRadiusAndStrokeWidthFromDot-xNb8nybi.js";import"./ActiveShapeUtils-CpmlaViF.js";import"./Curve-CzvWk0Dg.js";import"./step-uXGSGbmf.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-C1Aa_3nu.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
