import{e as t}from"./iframe-BtT0SffI.js";import{S as i}from"./ChartSizeDimensions-77XN8iRa.js";import{J as s,h as g,f as h,R as l}from"./arrayEqualityCheck-CUZpg3gX.js";import{C as c}from"./ComposedChart-Bz4spIYG.js";import{p as d}from"./Page-Cj8EiXz7.js";import{L as u}from"./Line-CancUYtT.js";import{X as f}from"./XAxis-DXJhdPvR.js";import{Y as M}from"./YAxis-CB6KhlLv.js";import{L as b}from"./Legend-BON36ZKC.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-D8J53oj2.js";import"./immer-BbVrPebv.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D-UxfXd4.js";import"./index-yehPfNJx.js";import"./hooks-DumFRXGT.js";import"./axisSelectors-BJ3ETvYB.js";import"./d3-scale-Crn8UFeD.js";import"./zIndexSlice-EIyEPPia.js";import"./renderedTicksSlice-DR61tOdZ.js";import"./CartesianChart-CmyYYHYF.js";import"./chartDataContext-D50adY5q.js";import"./CategoricalChart-CFyceSYG.js";import"./Layer-C7tDoNBc.js";import"./ReactUtils-BK_CWQIO.js";import"./Label-DMCJfrwq.js";import"./Text-CjXZVbw2.js";import"./DOMUtils-C0x823nG.js";import"./ZIndexLayer-Dsmg3QGj.js";import"./ActivePoints-cSdEfonb.js";import"./Dot-4SrqtSKy.js";import"./types-mmIvaWnd.js";import"./RegisterGraphicalItemId-DOATocTa.js";import"./ErrorBarContext-ClxAS9vu.js";import"./GraphicalItemClipPath-CKGxUURQ.js";import"./SetGraphicalItem-y832ODij.js";import"./useAnimationId-Dq1v2kj_.js";import"./getRadiusAndStrokeWidthFromDot-SP98bMI8.js";import"./ActiveShapeUtils-qAI1kzWp.js";import"./isPlainObject-DlgbpHVk.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DihoywZ_.js";import"./Trapezoid-CtXqEzYB.js";import"./Sector-BupA_fFM.js";import"./Symbols-Bh8GvTwl.js";import"./symbol-BNo9YZcN.js";import"./step-B__dH_Lt.js";import"./Curve-BjgRzFMd.js";import"./CartesianAxis-By19jgIb.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-4EhrUaEt.js";import"./uniqBy-DpQ-3Wwt.js";import"./iteratee-BTq1FiMa.js";function E(){const r=s(),e=g(),o=h();return r==null||o==null||e==null?null:t.createElement(t.Fragment,null,t.createElement(i,{width:r.left,height:e,labels:{background:"Left",horizontal:"useMargin.left"}}),t.createElement(i,{width:r.right,x:o-r.right,height:e,labels:{background:"Right",horizontal:"useMargin.right"}}),t.createElement(i,{width:o,height:r.top,labels:{background:"Top",vertical:"useMargin.top"}}),t.createElement(i,{width:o,height:r.bottom,y:e-r.bottom,labels:{background:"Bottom",vertical:"useMargin.bottom"}}))}const wt={title:"API/hooks/useMargin",component:s,parameters:{docs:{description:{component:"This story demonstrates the use of the `useMargin` hook to read chart margin in a responsive container."}}}},a={name:"useMargin",render:r=>t.createElement(l,{width:r.width,height:r.height},t.createElement(c,{data:d,margin:r.margin},t.createElement(u,{dataKey:"pv"}),t.createElement(f,{dataKey:"name"}),t.createElement(M,null),t.createElement(b,null),t.createElement(E,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var m,n,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
