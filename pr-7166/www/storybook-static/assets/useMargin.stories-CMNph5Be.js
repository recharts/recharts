import{e as t}from"./iframe-BA0Mk_bm.js";import{S as i}from"./ChartSizeDimensions-XLtPrUd2.js";import{J as s,h as g,f as h,R as l}from"./arrayEqualityCheck-BXIKBtlL.js";import{C as c}from"./ComposedChart-DMgKK5eu.js";import{L as d}from"./Line-339lVEiU.js";import{X as u}from"./XAxis-BJCrLdXA.js";import{Y as f}from"./YAxis-BeQUgSYX.js";import{L as M}from"./Legend-B135trhz.js";import{p as b}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-B36LrC6B.js";import"./immer-CuXxKPwW.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BFZ1uel6.js";import"./index-DOFwstvs.js";import"./hooks-TaUW4PzE.js";import"./axisSelectors-BPwVyIe5.js";import"./d3-scale-C-j_j56q.js";import"./zIndexSlice-IJtIz665.js";import"./renderedTicksSlice-k5mZM9in.js";import"./CartesianChart-ojIzik51.js";import"./chartDataContext-BS06iSAA.js";import"./CategoricalChart-Dl2FpaUQ.js";import"./Layer-UodA2S_o.js";import"./ReactUtils-DsC8Xpl6.js";import"./Label-BRfB6AgB.js";import"./Text-CQNk2n0w.js";import"./DOMUtils-dYc2sDor.js";import"./ZIndexLayer-7XpdSr6g.js";import"./ActivePoints-Dhry5tye.js";import"./Dot-D5MxPf2e.js";import"./types-bktBoSaY.js";import"./RegisterGraphicalItemId-B9TRMD4g.js";import"./ErrorBarContext-qCzTcwLw.js";import"./GraphicalItemClipPath-D9S218iW.js";import"./SetGraphicalItem-pHlPp9Gw.js";import"./useAnimationId-Del0ERlM.js";import"./getRadiusAndStrokeWidthFromDot-byqxM05I.js";import"./ActiveShapeUtils-jRacbU19.js";import"./isPlainObject-DqKcpOXv.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CRPXSI0S.js";import"./Trapezoid-CwhddTPc.js";import"./Sector-BUd4hzuV.js";import"./Symbols-BlFKSVPh.js";import"./symbol-B4YfvXWL.js";import"./step-BTgjudL3.js";import"./Curve-DYn67gsG.js";import"./CartesianAxis-BT4UVk71.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-BK5XlP36.js";import"./uniqBy-Dh57tVx5.js";import"./iteratee-BxNTpPTk.js";function E(){const r=s(),e=g(),o=h();return r==null||o==null||e==null?null:t.createElement(t.Fragment,null,t.createElement(i,{width:r.left,height:e,labels:{background:"Left",horizontal:"useMargin.left"}}),t.createElement(i,{width:r.right,x:o-r.right,height:e,labels:{background:"Right",horizontal:"useMargin.right"}}),t.createElement(i,{width:o,height:r.top,labels:{background:"Top",vertical:"useMargin.top"}}),t.createElement(i,{width:o,height:r.bottom,y:e-r.bottom,labels:{background:"Bottom",vertical:"useMargin.bottom"}}))}const wt={title:"API/hooks/useMargin",component:s,parameters:{docs:{description:{component:"This story demonstrates the use of the `useMargin` hook to read chart margin in a responsive container."}}}},a={name:"useMargin",render:r=>t.createElement(l,{width:r.width,height:r.height},t.createElement(c,{data:b,margin:r.margin},t.createElement(d,{dataKey:"pv"}),t.createElement(u,{dataKey:"name"}),t.createElement(f,null),t.createElement(M,null),t.createElement(E,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var m,n,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
