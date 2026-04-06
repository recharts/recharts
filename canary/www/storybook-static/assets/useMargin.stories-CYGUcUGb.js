import{e as t}from"./iframe-B8SpPQoN.js";import{S as i}from"./ChartSizeDimensions-B4hjUxAl.js";import{J as s,h as g,f as h,R as l}from"./arrayEqualityCheck-2MTTUHAP.js";import{C as c}from"./ComposedChart-DxJImS0j.js";import{p as d}from"./Page-Cj8EiXz7.js";import{L as u}from"./Line-CRgpnWFr.js";import{X as f}from"./XAxis-Cin7z-gi.js";import{Y as M}from"./YAxis-DNa02LBn.js";import{L as b}from"./Legend-6SJRyuws.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DzQ1rR94.js";import"./immer-DXJ0Fvyi.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BPCT0kIp.js";import"./index-0MgJGhOu.js";import"./hooks-D1vO-Uu8.js";import"./axisSelectors-7IbcFarQ.js";import"./d3-scale-CgZuTiLl.js";import"./zIndexSlice-D7POqXab.js";import"./renderedTicksSlice-DVrFbe8I.js";import"./CartesianChart-B4UYsacS.js";import"./chartDataContext-5xAcHE6X.js";import"./CategoricalChart-BwxXShMz.js";import"./Layer-qfrTI4Q6.js";import"./ReactUtils-Dvtx4mkZ.js";import"./Label-D7a9N5YB.js";import"./Text-CvYPnnR9.js";import"./DOMUtils-7jDgYM5P.js";import"./ZIndexLayer-ORGjuoDq.js";import"./ActivePoints-E4Qj7MWm.js";import"./Dot-BgTtenPT.js";import"./types-ro_75Oqz.js";import"./RegisterGraphicalItemId-rH65yuEl.js";import"./ErrorBarContext-UPy6xw3i.js";import"./GraphicalItemClipPath-DEUbhDcY.js";import"./SetGraphicalItem-DEk7bfFl.js";import"./useAnimationId-BPBgs8nb.js";import"./getRadiusAndStrokeWidthFromDot-1d1rwIAq.js";import"./ActiveShapeUtils-CAMIqiYR.js";import"./isPlainObject-D7MEnopY.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CmJKdPc2.js";import"./Trapezoid-B4rCe4Ap.js";import"./Sector-WPeAUgwy.js";import"./Symbols-Dk8MuMBV.js";import"./symbol-BupuQwEg.js";import"./step-oz_v09YS.js";import"./Curve-Cnx0u3AQ.js";import"./CartesianAxis-CtyZJFvD.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-D_wecJQa.js";import"./uniqBy-C7608wgp.js";import"./iteratee-C9ah-un7.js";function E(){const r=s(),e=g(),o=h();return r==null||o==null||e==null?null:t.createElement(t.Fragment,null,t.createElement(i,{width:r.left,height:e,labels:{background:"Left",horizontal:"useMargin.left"}}),t.createElement(i,{width:r.right,x:o-r.right,height:e,labels:{background:"Right",horizontal:"useMargin.right"}}),t.createElement(i,{width:o,height:r.top,labels:{background:"Top",vertical:"useMargin.top"}}),t.createElement(i,{width:o,height:r.bottom,y:e-r.bottom,labels:{background:"Bottom",vertical:"useMargin.bottom"}}))}const wt={title:"API/hooks/useMargin",component:s,parameters:{docs:{description:{component:"This story demonstrates the use of the `useMargin` hook to read chart margin in a responsive container."}}}},a={name:"useMargin",render:r=>t.createElement(l,{width:r.width,height:r.height},t.createElement(c,{data:d,margin:r.margin},t.createElement(u,{dataKey:"pv"}),t.createElement(f,{dataKey:"name"}),t.createElement(M,null),t.createElement(b,null),t.createElement(E,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var m,n,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(n=a.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const Ct=["UseMargin"];export{a as UseMargin,Ct as __namedExportsOrder,wt as default};
