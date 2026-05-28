import{e as t}from"./iframe-UdgfSgbV.js";import{S as i}from"./ChartSizeDimensions-ql6F2UUA.js";import{ah as p,ac as g,ae as h,g as l}from"./arrayEqualityCheck-CicOt-ds.js";import{C as c}from"./ComposedChart-BcvZKN5E.js";import{p as d}from"./Page-DPte-9pC.js";import{L as u}from"./Line-E0LiBgep.js";import{X as f}from"./XAxis-B_T7-hQi.js";import{Y as M}from"./YAxis-CrK0nuKU.js";import{L as b}from"./Legend-DVK1ZQXW.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DUahjl-e.js";import"./immer-D2PrSKKY.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-niwZzApw.js";import"./index-DugrSXtg.js";import"./hooks-YBktsx8t.js";import"./axisSelectors-DMRIE0Wb.js";import"./d3-scale-UW9tFBgt.js";import"./zIndexSlice-BZq2EGul.js";import"./renderedTicksSlice-l1jYlYN2.js";import"./CartesianChart-Cvpty9Rq.js";import"./chartDataContext-B4DzVMPi.js";import"./CategoricalChart-BUvemvV9.js";import"./Curve-Wo73DpX8.js";import"./types-BRerldyT.js";import"./step-CLnk6C4J.js";import"./path-DyVhHtw_.js";import"./Layer-DfoJX-WM.js";import"./ReactUtils-CpmrlivC.js";import"./Label-GqUuXqgi.js";import"./Text-O_rmI639.js";import"./DOMUtils-CEz4_y1m.js";import"./ZIndexLayer--K-LA7QR.js";import"./ActivePoints-Cj3Tq79L.js";import"./Dot-CQmWQFNO.js";import"./RegisterGraphicalItemId-BLtUrA1U.js";import"./ErrorBarContext-BYjQvvS7.js";import"./GraphicalItemClipPath-qHH5OIPj.js";import"./SetGraphicalItem-sqFy1wuC.js";import"./useAnimationId-_H_C4I0e.js";import"./getRadiusAndStrokeWidthFromDot-Db_XWe9X.js";import"./ActiveShapeUtils-fzwtdy4J.js";import"./CartesianAxis-DTJQvBIX.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-BptSPL3U.js";import"./symbol-BAGO6sGF.js";import"./useElementOffset-BXFO69aB.js";import"./uniqBy-BduRBjZr.js";import"./iteratee-uG1rhi8b.js";function E(){const r=p(),e=g(),o=h();return r==null||o==null||e==null?null:t.createElement(t.Fragment,null,t.createElement(i,{width:r.left,height:e,labels:{background:"Left",horizontal:"useMargin.left"}}),t.createElement(i,{width:r.right,x:o-r.right,height:e,labels:{background:"Right",horizontal:"useMargin.right"}}),t.createElement(i,{width:o,height:r.top,labels:{background:"Top",vertical:"useMargin.top"}}),t.createElement(i,{width:o,height:r.bottom,y:e-r.bottom,labels:{background:"Bottom",vertical:"useMargin.bottom"}}))}const ft={title:"API/hooks/useMargin",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `useMargin` hook to read chart margin in a responsive container."}}}},a={name:"useMargin",render:r=>t.createElement(l,{width:r.width,height:r.height},t.createElement(c,{data:d,margin:r.margin},t.createElement(u,{dataKey:"pv"}),t.createElement(f,{dataKey:"name"}),t.createElement(M,null),t.createElement(b,null),t.createElement(E,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var m,n,s;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(s=(n=a.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const Mt=["UseMargin"];export{a as UseMargin,Mt as __namedExportsOrder,ft as default};
