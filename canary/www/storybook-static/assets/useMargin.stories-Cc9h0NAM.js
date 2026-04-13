import{e as t}from"./iframe-Br4eYoVn.js";import{S as i}from"./ChartSizeDimensions-DeYSdXrS.js";import{J as s,h as g,f as h,R as l}from"./arrayEqualityCheck-BTssjmx8.js";import{C as c}from"./ComposedChart-DO9Baogr.js";import{p as d}from"./Page-Cj8EiXz7.js";import{L as u}from"./Line-CjfZ9drr.js";import{X as f}from"./XAxis-C8A1sscS.js";import{Y as M}from"./YAxis-WZOcc484.js";import{L as b}from"./Legend-Covp1wtm.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-d8J7CQ2o.js";import"./immer-DPmqhqsD.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BAtpNlJG.js";import"./index-q-WvHn66.js";import"./hooks-qMCGdphr.js";import"./axisSelectors-CHWOzT-A.js";import"./d3-scale-CCjKFVY6.js";import"./zIndexSlice-C3EiH9DM.js";import"./renderedTicksSlice-Tssq-3bV.js";import"./CartesianChart-Cr6moti0.js";import"./chartDataContext-DmHyrOc9.js";import"./CategoricalChart-RTBYP3g_.js";import"./Layer-BXiy0Hpp.js";import"./ReactUtils-Dn-n-3Yl.js";import"./Label-CUHpuvtr.js";import"./Text-DSxsG7eI.js";import"./DOMUtils-CbhnCx5H.js";import"./ZIndexLayer-BkFJTbU_.js";import"./ActivePoints-BJ31ITZc.js";import"./Dot-ec03_cyV.js";import"./types-Bdr3PbTc.js";import"./RegisterGraphicalItemId-DFun1y8y.js";import"./ErrorBarContext-B31x6VGT.js";import"./GraphicalItemClipPath-Szud5QX3.js";import"./SetGraphicalItem-Bcsb28JH.js";import"./useAnimationId-7Mhr-lzJ.js";import"./getRadiusAndStrokeWidthFromDot-DtONMN5t.js";import"./ActiveShapeUtils-C1KBE52j.js";import"./isPlainObject-Dnct6C6Z.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BnOsz_oj.js";import"./Trapezoid-CWbkVsvx.js";import"./Sector-DL1xggZ9.js";import"./Symbols-DmFirhkx.js";import"./symbol-NUJ48OEk.js";import"./step-DYF_aI-7.js";import"./Curve-C9oEn5cY.js";import"./CartesianAxis-DnfdLPHJ.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-BqlbwxZo.js";import"./uniqBy-ByNeAQ4B.js";import"./iteratee-B-3U5ZDw.js";function E(){const r=s(),e=g(),o=h();return r==null||o==null||e==null?null:t.createElement(t.Fragment,null,t.createElement(i,{width:r.left,height:e,labels:{background:"Left",horizontal:"useMargin.left"}}),t.createElement(i,{width:r.right,x:o-r.right,height:e,labels:{background:"Right",horizontal:"useMargin.right"}}),t.createElement(i,{width:o,height:r.top,labels:{background:"Top",vertical:"useMargin.top"}}),t.createElement(i,{width:o,height:r.bottom,y:e-r.bottom,labels:{background:"Bottom",vertical:"useMargin.bottom"}}))}const wt={title:"API/hooks/useMargin",component:s,parameters:{docs:{description:{component:"This story demonstrates the use of the `useMargin` hook to read chart margin in a responsive container."}}}},a={name:"useMargin",render:r=>t.createElement(l,{width:r.width,height:r.height},t.createElement(c,{data:d,margin:r.margin},t.createElement(u,{dataKey:"pv"}),t.createElement(f,{dataKey:"name"}),t.createElement(M,null),t.createElement(b,null),t.createElement(E,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var m,n,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
