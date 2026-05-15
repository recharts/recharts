import{e as t}from"./iframe-IedaLeal.js";import{S as i}from"./ChartSizeDimensions-DwT6nbul.js";import{J as s,h as g,f as h,R as l}from"./arrayEqualityCheck-CDeFCuAt.js";import{C as c}from"./ComposedChart-BLFle0FW.js";import{p as d}from"./Page-Cj8EiXz7.js";import{L as u}from"./Line-QYm9FiCp.js";import{X as f}from"./XAxis-CUj044ZC.js";import{Y as M}from"./YAxis-j1HNTz_n.js";import{L as b}from"./Legend-DVndYvev.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DinctDfH.js";import"./immer-Dd6dXjxy.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-0o5SV0j_.js";import"./index-YtVhwzFk.js";import"./hooks-C5y3PU4C.js";import"./axisSelectors-Bx341r0C.js";import"./d3-scale-BX13yOxW.js";import"./zIndexSlice-BZ8DgwR3.js";import"./renderedTicksSlice-DOzQfNkA.js";import"./CartesianChart-DtUsH4ee.js";import"./chartDataContext-DqUMO5tY.js";import"./CategoricalChart-DAXIc6R-.js";import"./Layer-COpu_kTm.js";import"./ReactUtils-De7AqaLg.js";import"./Label-NwC3LlsS.js";import"./Text-ko_k4IV7.js";import"./DOMUtils-BYFJFnuE.js";import"./ZIndexLayer-JYekqGDv.js";import"./ActivePoints-Dn2oKCMT.js";import"./Dot-CXXTrQ7H.js";import"./types-Ci9gDE8O.js";import"./RegisterGraphicalItemId-wI9lHTwH.js";import"./ErrorBarContext-C7FVOsru.js";import"./GraphicalItemClipPath-B96rVctv.js";import"./SetGraphicalItem-BzrdUKT-.js";import"./useAnimationId-D3Yn3hG9.js";import"./getRadiusAndStrokeWidthFromDot-B2hN5pbW.js";import"./ActiveShapeUtils-cikzdunu.js";import"./isPlainObject-BBCFg2tK.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D0StcwZN.js";import"./Trapezoid-DD2FtYjE.js";import"./Sector-BSwgLZD3.js";import"./Symbols-ncFIdchy.js";import"./symbol-BiWopP6m.js";import"./step-CR-qwJGd.js";import"./Curve-BzqwREyl.js";import"./CartesianAxis-DdlOSCj4.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-XMbgmZkO.js";import"./uniqBy-CZ5FVlWP.js";import"./iteratee-DYAmoIVS.js";function E(){const r=s(),e=g(),o=h();return r==null||o==null||e==null?null:t.createElement(t.Fragment,null,t.createElement(i,{width:r.left,height:e,labels:{background:"Left",horizontal:"useMargin.left"}}),t.createElement(i,{width:r.right,x:o-r.right,height:e,labels:{background:"Right",horizontal:"useMargin.right"}}),t.createElement(i,{width:o,height:r.top,labels:{background:"Top",vertical:"useMargin.top"}}),t.createElement(i,{width:o,height:r.bottom,y:e-r.bottom,labels:{background:"Bottom",vertical:"useMargin.bottom"}}))}const wt={title:"API/hooks/useMargin",component:s,parameters:{docs:{description:{component:"This story demonstrates the use of the `useMargin` hook to read chart margin in a responsive container."}}}},a={name:"useMargin",render:r=>t.createElement(l,{width:r.width,height:r.height},t.createElement(c,{data:d,margin:r.margin},t.createElement(u,{dataKey:"pv"}),t.createElement(f,{dataKey:"name"}),t.createElement(M,null),t.createElement(b,null),t.createElement(E,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var m,n,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
