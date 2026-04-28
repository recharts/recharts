import{e as t}from"./iframe-DU2QcQF_.js";import{R as p}from"./arrayEqualityCheck-BBRUJMgE.js";import{C as m}from"./ComposedChart-D66mG1g1.js";import{c as s}from"./Coordinate-geWwP0Ct.js";import{A as r}from"./Area-DqvBGpvt.js";import{R as l}from"./RechartsHookInspector-D0TcJcB2.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BRw4v6sg.js";import"./immer-D_hC97QS.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Dkm_90y8.js";import"./index-LW5E5x2X.js";import"./hooks-CLgIfPXm.js";import"./axisSelectors-DCuZe5xZ.js";import"./d3-scale-Cl2Mf9ve.js";import"./string-B6fdYHAA.js";import"./zIndexSlice-DH5OVU_d.js";import"./renderedTicksSlice-DKMiT0hM.js";import"./CartesianChart-DdZk3nRt.js";import"./chartDataContext-BWCdO7Tf.js";import"./CategoricalChart-DI28mp2q.js";import"./Layer-CsymvJcW.js";import"./AnimatedItems-dOeoQkDw.js";import"./Label-Xfq-LPcv.js";import"./Text-C9SLmSKD.js";import"./DOMUtils-BQcJZQLN.js";import"./ZIndexLayer-BezITi0w.js";import"./useAnimationId-u-3taHzi.js";import"./ActivePoints-BzCdDU40.js";import"./Dot-yVHcR-eE.js";import"./types-CW6teSnw.js";import"./RegisterGraphicalItemId-Cw3F3qyO.js";import"./GraphicalItemClipPath-DML64_av.js";import"./SetGraphicalItem-BXFmGWYP.js";import"./getRadiusAndStrokeWidthFromDot-OGLFBmVs.js";import"./ActiveShapeUtils-DoCRNyCQ.js";import"./isPlainObject-zOhZ7DbK.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-MTy_JW56.js";import"./Trapezoid-DGJrygRD.js";import"./Sector-foysTS17.js";import"./Symbols-BJFlDYmu.js";import"./symbol-B0GgNpuh.js";import"./step-Bh598Jf-.js";import"./Curve-C80_Q5kF.js";import"./graphicalItemSelectors-BxcGKM2X.js";import"./index-DyrGUy1I.js";import"./ChartSizeDimensions-B-rd_hON.js";import"./OffsetShower-BsYgMVad.js";import"./PlotAreaShower-D9gSylqx.js";const st={title:"Examples/cartesian/Area/With Fill Pattern"},[h,i]=[600,300],e={render:()=>t.createElement(p,{width:"100%",height:i},t.createElement(m,{width:h,height:i,margin:{top:20,right:20,bottom:20,left:20},data:s},t.createElement("defs",null,t.createElement("pattern",{id:"left",width:"12",height:"4",patternUnits:"userSpaceOnUse"},t.createElement("rect",{width:"4",height:"4",fill:"#8884d8"})),t.createElement("pattern",{id:"right",width:"8",height:"4",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)"},t.createElement("rect",{width:"4",height:"4",fill:"#82ca9d"}))),t.createElement(r,{type:"monotone",dataKey:"x",stroke:"#8884d8",fillOpacity:1,fill:"url(#left)"}),t.createElement(r,{type:"monotone",dataKey:"y",stroke:"#82ca9d",fillOpacity:1,fill:"url(#right)"}),t.createElement(l,null)))};var o,a,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={coordinateWithValueData}>
          <defs>
            <pattern id="left" width="12" height="4" patternUnits="userSpaceOnUse">
              <rect width="4" height="4" fill="#8884d8" />
            </pattern>
            <pattern id="right" width="8" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <rect width="4" height="4" fill="#82ca9d" />
            </pattern>
          </defs>
          <Area type="monotone" dataKey="x" stroke="#8884d8" fillOpacity={1} fill="url(#left)" />
          <Area type="monotone" dataKey="y" stroke="#82ca9d" fillOpacity={1} fill="url(#right)" />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const lt=["FillPattern"];export{e as FillPattern,lt as __namedExportsOrder,st as default};
