import{R as e}from"./iframe-DkECMRhY.js";import{R as c}from"./zIndexSlice-DrphCOe8.js";import{C as d}from"./ComposedChart-DAUnDtCN.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-CPa4oTPR.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-OeP2NIwG.js";import"./index-Bs5MO9B0.js";import"./index-B2EkAXQG.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-9kFOeAbx.js";import"./isWellBehavedNumber-C5D-spqh.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DT2t4UUR.js";import"./index-CubO9nle.js";import"./index-48_ZTq2u.js";import"./renderedTicksSlice-Dz89v3et.js";import"./axisSelectors-O1utMkLJ.js";import"./d3-scale-DCyD-m6k.js";import"./CartesianChart-DlZ9N_1W.js";import"./chartDataContext-Buh6poim.js";import"./CategoricalChart-Ctl-0XVF.js";import"./Layer-BR_lx081.js";import"./AnimatedItems-D_PfprH1.js";import"./Label-D0EmKjrf.js";import"./Text-D0YGp1Dc.js";import"./DOMUtils-m9hSMA-C.js";import"./ZIndexLayer-CJnfUCXF.js";import"./useAnimationId-BLnnlAbr.js";import"./ActivePoints-CRIWlOJ4.js";import"./Dot-DRTvDWT7.js";import"./types-BhAPDMfv.js";import"./RegisterGraphicalItemId-DM_TAUFh.js";import"./GraphicalItemClipPath-B9n7ZYaN.js";import"./SetGraphicalItem-AXvs4ZTf.js";import"./getRadiusAndStrokeWidthFromDot-BOG-LMh5.js";import"./ActiveShapeUtils-BkWJCflD.js";import"./Curve-55NMYWP1.js";import"./step-BU5cS4PN.js";import"./path-DyVhHtw_.js";import"./graphicalItemSelectors-BSInLqmO.js";const ot={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:r,y:o}=s;return e.createElement("text",{key:n,x:r,y:o,className:"customized-label"},`${r}, ${o}`)},t={render:()=>e.createElement(c,{width:"100%",height:i},e.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},e.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))};var a,m,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const it=["CustomizedLabel"];export{t as CustomizedLabel,it as __namedExportsOrder,ot as default};
