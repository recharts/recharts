import{e as t}from"./iframe-8-kjzB7M.js";import{S as i}from"./ChartSizeDimensions-C53bqH85.js";import{ah as s,ac as g,ae as h,g as l}from"./arrayEqualityCheck-BFH1E3k_.js";import{C as c}from"./ComposedChart-Dr0nJPxm.js";import{p as d}from"./Page-DPte-9pC.js";import{L as u}from"./Line-CGldzIuh.js";import{X as f}from"./XAxis-D2S2cmnw.js";import{Y as M}from"./YAxis-DaRq7QHm.js";import{L as b}from"./Legend-C7Cn7Hy2.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DEBbAbU8.js";import"./immer-DyK63VIN.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B7ei5y6q.js";import"./index-B7HOuyLw.js";import"./hooks-D7HTiiCO.js";import"./axisSelectors-BNYuZguV.js";import"./d3-scale-CQtZ6VlM.js";import"./zIndexSlice-RoK7gDNz.js";import"./renderedTicksSlice-B1hkz5RK.js";import"./CartesianChart-DIcUCgdK.js";import"./chartDataContext-B5w2WfFE.js";import"./CategoricalChart-BSYInFMU.js";import"./Curve-D8ZMrIKx.js";import"./types-BtLx_F1t.js";import"./step-BPajIDVN.js";import"./path-DyVhHtw_.js";import"./Layer-CzqQGym9.js";import"./ReactUtils-CewVIgMM.js";import"./Label-DM3VCT7K.js";import"./Text-CoxxW3ZN.js";import"./DOMUtils-DlGm6rgl.js";import"./ZIndexLayer-BFtzmC6W.js";import"./ActivePoints-B6bRCrz9.js";import"./Dot-kp7349vp.js";import"./RegisterGraphicalItemId-CmJN5Y2e.js";import"./ErrorBarContext-DcV-oeSm.js";import"./GraphicalItemClipPath-CVE49Uj3.js";import"./SetGraphicalItem-DKHyStui.js";import"./useAnimationId-R2tEawoj.js";import"./getRadiusAndStrokeWidthFromDot-DEvwWVK6.js";import"./ActiveShapeUtils-B64sWmQr.js";import"./isPlainObject-Dd1Ki_ZE.js";import"./isPlainObject-BSutPv-K.js";import"./CartesianAxis-CXWQlOps.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-7Fs_OGmI.js";import"./symbol-Dvj3tO81.js";import"./useElementOffset-D5qXLcar.js";import"./uniqBy-twvRpSaZ.js";import"./iteratee-C5SgYX63.js";function E(){const r=s(),e=g(),o=h();return r==null||o==null||e==null?null:t.createElement(t.Fragment,null,t.createElement(i,{width:r.left,height:e,labels:{background:"Left",horizontal:"useMargin.left"}}),t.createElement(i,{width:r.right,x:o-r.right,height:e,labels:{background:"Right",horizontal:"useMargin.right"}}),t.createElement(i,{width:o,height:r.top,labels:{background:"Top",vertical:"useMargin.top"}}),t.createElement(i,{width:o,height:r.bottom,y:e-r.bottom,labels:{background:"Bottom",vertical:"useMargin.bottom"}}))}const bt={title:"API/hooks/useMargin",component:s,parameters:{docs:{description:{component:"This story demonstrates the use of the `useMargin` hook to read chart margin in a responsive container."}}}},a={name:"useMargin",render:r=>t.createElement(l,{width:r.width,height:r.height},t.createElement(c,{data:d,margin:r.margin},t.createElement(u,{dataKey:"pv"}),t.createElement(f,{dataKey:"name"}),t.createElement(M,null),t.createElement(b,null),t.createElement(E,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var m,n,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(n=a.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const Et=["UseMargin"];export{a as UseMargin,Et as __namedExportsOrder,bt as default};
