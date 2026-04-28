import{e as t}from"./iframe-DU2QcQF_.js";import{R as c}from"./arrayEqualityCheck-BBRUJMgE.js";import{C as d}from"./ComposedChart-D66mG1g1.js";import{c as l}from"./Coordinate-geWwP0Ct.js";import{A as h}from"./Area-DqvBGpvt.js";import{R as u}from"./RechartsHookInspector-D0TcJcB2.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BRw4v6sg.js";import"./immer-D_hC97QS.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Dkm_90y8.js";import"./index-LW5E5x2X.js";import"./hooks-CLgIfPXm.js";import"./axisSelectors-DCuZe5xZ.js";import"./d3-scale-Cl2Mf9ve.js";import"./string-B6fdYHAA.js";import"./zIndexSlice-DH5OVU_d.js";import"./renderedTicksSlice-DKMiT0hM.js";import"./CartesianChart-DdZk3nRt.js";import"./chartDataContext-BWCdO7Tf.js";import"./CategoricalChart-DI28mp2q.js";import"./Layer-CsymvJcW.js";import"./AnimatedItems-dOeoQkDw.js";import"./Label-Xfq-LPcv.js";import"./Text-C9SLmSKD.js";import"./DOMUtils-BQcJZQLN.js";import"./ZIndexLayer-BezITi0w.js";import"./useAnimationId-u-3taHzi.js";import"./ActivePoints-BzCdDU40.js";import"./Dot-yVHcR-eE.js";import"./types-CW6teSnw.js";import"./RegisterGraphicalItemId-Cw3F3qyO.js";import"./GraphicalItemClipPath-DML64_av.js";import"./SetGraphicalItem-BXFmGWYP.js";import"./getRadiusAndStrokeWidthFromDot-OGLFBmVs.js";import"./ActiveShapeUtils-DoCRNyCQ.js";import"./isPlainObject-zOhZ7DbK.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-MTy_JW56.js";import"./Trapezoid-DGJrygRD.js";import"./Sector-foysTS17.js";import"./Symbols-BJFlDYmu.js";import"./symbol-B0GgNpuh.js";import"./step-Bh598Jf-.js";import"./Curve-C80_Q5kF.js";import"./graphicalItemSelectors-BxcGKM2X.js";import"./index-DyrGUy1I.js";import"./ChartSizeDimensions-B-rd_hON.js";import"./OffsetShower-BsYgMVad.js";import"./PlotAreaShower-D9gSylqx.js";const ut={title:"Examples/cartesian/Area/Customised Label"},[f,i]=[600,300],C=n=>{const{index:s,x:e,y:o}=n;return t.createElement("text",{key:s,x:e,y:o,className:"customized-label"},`${e}, ${o}`)},r={render:()=>t.createElement(c,{width:"100%",height:i},t.createElement(d,{width:f,height:i,margin:{top:20,right:20,bottom:20,left:20},data:l},t.createElement(h,{dataKey:"y",isAnimationActive:!1,label:C}),t.createElement(u,null)))};var m,a,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={coordinateWithValueData}>
          <Area dataKey="y" isAnimationActive={false} label={renderLabel} />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(p=(a=r.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};const ft=["CustomizedLabel"];export{r as CustomizedLabel,ft as __namedExportsOrder,ut as default};
