import{e as t}from"./iframe-eZ9JX-07.js";import{S as i}from"./ChartSizeDimensions-jqrtviWa.js";import{J as s,h as g,f as h,R as l}from"./arrayEqualityCheck-Cj2Is5Mm.js";import{C as c}from"./ComposedChart-BHW-hoiz.js";import{p as d}from"./Page-Cj8EiXz7.js";import{L as u}from"./Line-d0u3ebXE.js";import{X as f}from"./XAxis-mp_eEoS6.js";import{Y as M}from"./YAxis-uS2rijQh.js";import{L as b}from"./Legend-CEvG3Enx.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CliKq00o.js";import"./immer-Dr1bFi29.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BUoHei1k.js";import"./index-CNMtCejR.js";import"./hooks-DpV54l8p.js";import"./axisSelectors-AGz0-S2g.js";import"./d3-scale-BKcomRju.js";import"./zIndexSlice-BusLYGIS.js";import"./renderedTicksSlice-CqnrbROG.js";import"./CartesianChart-BK9rkCv_.js";import"./chartDataContext-CvCw_h_X.js";import"./CategoricalChart-YrnJ6OFy.js";import"./Layer-B6nAt8jX.js";import"./ReactUtils-DWnSk2Q-.js";import"./Label-mBy1-y0R.js";import"./Text-CRkMMQ59.js";import"./DOMUtils-D0fPz5DE.js";import"./ZIndexLayer-DbJ2I37n.js";import"./ActivePoints-RdCeodjM.js";import"./Dot-BOZkbRZB.js";import"./types-CmytQtTQ.js";import"./RegisterGraphicalItemId-BAw53RVk.js";import"./ErrorBarContext-Bpf6-6dn.js";import"./GraphicalItemClipPath-vABmGIfK.js";import"./SetGraphicalItem-By9FetZz.js";import"./useAnimationId-CSNZHJ-3.js";import"./getRadiusAndStrokeWidthFromDot-DN82KodC.js";import"./ActiveShapeUtils-BMNGvKsh.js";import"./isPlainObject-DLc4kyQA.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-_vtEiEA1.js";import"./Trapezoid-BBUAydEo.js";import"./Sector-Dv17oJda.js";import"./Symbols-CvJdDdpZ.js";import"./symbol-CdZf4kom.js";import"./step-CSEuamYk.js";import"./Curve-rjvi0w8u.js";import"./CartesianAxis-DlLnH-y1.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-DrYCL9O-.js";import"./uniqBy-CqnG_K8V.js";import"./iteratee-1GFPdpFT.js";function E(){const r=s(),e=g(),o=h();return r==null||o==null||e==null?null:t.createElement(t.Fragment,null,t.createElement(i,{width:r.left,height:e,labels:{background:"Left",horizontal:"useMargin.left"}}),t.createElement(i,{width:r.right,x:o-r.right,height:e,labels:{background:"Right",horizontal:"useMargin.right"}}),t.createElement(i,{width:o,height:r.top,labels:{background:"Top",vertical:"useMargin.top"}}),t.createElement(i,{width:o,height:r.bottom,y:e-r.bottom,labels:{background:"Bottom",vertical:"useMargin.bottom"}}))}const wt={title:"API/hooks/useMargin",component:s,parameters:{docs:{description:{component:"This story demonstrates the use of the `useMargin` hook to read chart margin in a responsive container."}}}},a={name:"useMargin",render:r=>t.createElement(l,{width:r.width,height:r.height},t.createElement(c,{data:d,margin:r.margin},t.createElement(u,{dataKey:"pv"}),t.createElement(f,{dataKey:"name"}),t.createElement(M,null),t.createElement(b,null),t.createElement(E,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var m,n,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
