import{e as t}from"./iframe-DU2QcQF_.js";import{S as i}from"./ChartSizeDimensions-B-rd_hON.js";import{E as s,h as g,f as h,R as l}from"./arrayEqualityCheck-BBRUJMgE.js";import{C as c}from"./ComposedChart-D66mG1g1.js";import{p as d}from"./Page-Cj8EiXz7.js";import{L as u}from"./Line-3CSWX_Lb.js";import{X as f}from"./XAxis-BTwSQmla.js";import{Y as E}from"./YAxis-Cz7bs7UA.js";import{L as M}from"./Legend--mPxRXzv.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BRw4v6sg.js";import"./immer-D_hC97QS.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Dkm_90y8.js";import"./index-LW5E5x2X.js";import"./hooks-CLgIfPXm.js";import"./axisSelectors-DCuZe5xZ.js";import"./d3-scale-Cl2Mf9ve.js";import"./string-B6fdYHAA.js";import"./zIndexSlice-DH5OVU_d.js";import"./renderedTicksSlice-DKMiT0hM.js";import"./CartesianChart-DdZk3nRt.js";import"./chartDataContext-BWCdO7Tf.js";import"./CategoricalChart-DI28mp2q.js";import"./Layer-CsymvJcW.js";import"./Curve-C80_Q5kF.js";import"./types-CW6teSnw.js";import"./step-Bh598Jf-.js";import"./AnimatedItems-dOeoQkDw.js";import"./Label-Xfq-LPcv.js";import"./Text-C9SLmSKD.js";import"./DOMUtils-BQcJZQLN.js";import"./ZIndexLayer-BezITi0w.js";import"./useAnimationId-u-3taHzi.js";import"./ActivePoints-BzCdDU40.js";import"./Dot-yVHcR-eE.js";import"./RegisterGraphicalItemId-Cw3F3qyO.js";import"./ErrorBarContext-MDyyOlAz.js";import"./GraphicalItemClipPath-DML64_av.js";import"./SetGraphicalItem-BXFmGWYP.js";import"./getRadiusAndStrokeWidthFromDot-OGLFBmVs.js";import"./ActiveShapeUtils-DoCRNyCQ.js";import"./isPlainObject-zOhZ7DbK.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-MTy_JW56.js";import"./Trapezoid-DGJrygRD.js";import"./Sector-foysTS17.js";import"./Symbols-BJFlDYmu.js";import"./symbol-B0GgNpuh.js";import"./CartesianAxis-CfZS-xOz.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-ROzhXFOA.js";import"./uniqBy-C_-hIJrl.js";import"./iteratee-DICIiPho.js";function b(){const r=s(),e=g(),o=h();return r==null||o==null||e==null?null:t.createElement(t.Fragment,null,t.createElement(i,{width:r.left,height:e,labels:{background:"Left",horizontal:"useMargin.left"}}),t.createElement(i,{width:r.right,x:o-r.right,height:e,labels:{background:"Right",horizontal:"useMargin.right"}}),t.createElement(i,{width:o,height:r.top,labels:{background:"Top",vertical:"useMargin.top"}}),t.createElement(i,{width:o,height:r.bottom,y:e-r.bottom,labels:{background:"Bottom",vertical:"useMargin.bottom"}}))}const Ct={title:"API/hooks/useMargin",component:s,parameters:{docs:{description:{component:"This story demonstrates the use of the `useMargin` hook to read chart margin in a responsive container."}}}},a={name:"useMargin",render:r=>t.createElement(l,{width:r.width,height:r.height},t.createElement(c,{data:d,margin:r.margin},t.createElement(u,{dataKey:"pv"}),t.createElement(f,{dataKey:"name"}),t.createElement(E,null),t.createElement(M,null),t.createElement(b,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var m,n,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'useMargin',
  render: (args: Args) => {
    return <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin}>
          <Line dataKey="pv" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <MarginShower />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  args: {
    width: '100%',
    height: 400,
    margin: {
      top: 30,
      right: 170,
      bottom: 30,
      left: 120
    }
  }
}`,...(p=(n=a.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const vt=["UseMargin"];export{a as UseMargin,vt as __namedExportsOrder,Ct as default};
