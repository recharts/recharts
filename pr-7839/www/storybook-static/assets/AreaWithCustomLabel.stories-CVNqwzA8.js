import{R as r}from"./iframe-MgA714vo.js";import{R as c}from"./zIndexSlice-BFtzjsbT.js";import{C as d}from"./ComposedChart-DLmauAU1.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-BmBAk59t.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CokMtKXH.js";import"./index-yQC3T5y5.js";import"./index-DFNNaDkT.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CB1SP_2F.js";import"./isWellBehavedNumber-DFMdcmiK.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D1iPbMRH.js";import"./axisSelectors-D8SlF3gx.js";import"./d3-scale-DxJKI2TE.js";import"./index-Gf96Mz3o.js";import"./index-BISHQAp4.js";import"./renderedTicksSlice-C4wx_D1w.js";import"./index-Bvn5aErC.js";import"./CartesianChart-BsRTJ-St.js";import"./chartDataContext-j9c_a0aH.js";import"./CategoricalChart-DPsIkKm4.js";import"./Layer-B-SLfZPM.js";import"./AnimatedItems-DYaErfcH.js";import"./Label-cwVDT-eO.js";import"./Text-DScWdIKY.js";import"./DOMUtils-79tWRulU.js";import"./useId-Wj9uSNps.js";import"./useBackwardsCompatibleTheme-DSXeHE4Z.js";import"./ZIndexLayer-CrYLcujZ.js";import"./useAnimationId-Dkacjwid.js";import"./ActivePoints-BYWv-6T2.js";import"./Dot-DxSSo-Hw.js";import"./types-CZP1hKch.js";import"./RegisterGraphicalItemId-DjHk3rYd.js";import"./GraphicalItemClipPath-CuTt-XI_.js";import"./SetGraphicalItem-C0yQ7ETh.js";import"./getRadiusAndStrokeWidthFromDot-DoNGVpMm.js";import"./ActiveShapeUtils-GenD1j5W.js";import"./Curve-BBMmlamO.js";import"./step-Jmsq3o4W.js";import"./path-DyVhHtw_.js";import"./useGraphicalItemIdentity-BtRSxKs5.js";const at={title:"Examples/cartesian/Area/Customised Label"},[u,i]=[600,300],f=s=>{const{index:n,x:e,y:o}=s;return r.createElement("text",{key:n,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},t={render:()=>r.createElement(c,{width:"100%",height:i},r.createElement(d,{width:u,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},r.createElement(h,{dataKey:"y",isAnimationActive:!1,label:f})))},pt=["CustomizedLabel"];var m,a,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
