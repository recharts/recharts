import{R as r}from"./iframe-DmaTyynO.js";import{R as c}from"./zIndexSlice-C61SZGFC.js";import{C as d}from"./ComposedChart-DrMn_Pg_.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-BDoBJybB.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DMA9KLNR.js";import"./index-OHCUWRAn.js";import"./index-V9EvyoG7.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CtyyIUUO.js";import"./isWellBehavedNumber-BK90QDph.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BGC7v2QA.js";import"./axisSelectors-BM_a9F6K.js";import"./d3-scale-DI5fHYPy.js";import"./index-HETsTNte.js";import"./index-COAu8Zax.js";import"./renderedTicksSlice-DqtLTQXs.js";import"./index-C4wr6Lq-.js";import"./CartesianChart-BKxlRmtn.js";import"./chartDataContext-DAmq05uD.js";import"./CategoricalChart-BUSfmukV.js";import"./Layer-CKq6pjpc.js";import"./AnimatedItems-BAF8K0tv.js";import"./Label-CMdX73k3.js";import"./Text-2AUGODc6.js";import"./DOMUtils-BpsSUmre.js";import"./useId-3sGAzHtm.js";import"./useBackwardsCompatibleTheme-DqjXKSq9.js";import"./ZIndexLayer-Cc-SqaEZ.js";import"./useAnimationId-DxNsV_0m.js";import"./ActivePoints-CNIiMQe1.js";import"./Dot-CR2DCP22.js";import"./types-DmC6Y3U4.js";import"./RegisterGraphicalItemId-CDWIwrm3.js";import"./GraphicalItemClipPath-DsQ7p0LM.js";import"./SetGraphicalItem-D6LEIG6h.js";import"./getRadiusAndStrokeWidthFromDot-DfMtRmCC.js";import"./ActiveShapeUtils-BIrsW6YR.js";import"./Curve-Bgge_Gh-.js";import"./step-D7AfTI4H.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-Cz-Bal4G.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
