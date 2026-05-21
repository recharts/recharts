import{e as t}from"./iframe-tCDnQpzm.js";import{S as i}from"./ChartSizeDimensions-CSUyRejl.js";import{ah as s,ac as g,ae as h,g as l}from"./arrayEqualityCheck-BqXouEks.js";import{C as c}from"./ComposedChart-Cfho0nKw.js";import{p as d}from"./Page-DPte-9pC.js";import{L as u}from"./Line-WG_QdsGX.js";import{X as f}from"./XAxis-DlOxqtL0.js";import{Y as M}from"./YAxis-0OaZrEQM.js";import{L as b}from"./Legend-DesdeSYT.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-D6_84qa3.js";import"./immer-BCZknwAa.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DYnmCVjv.js";import"./index-CHnjtEz6.js";import"./hooks-WR0dNOnI.js";import"./axisSelectors-Bvp9z5f_.js";import"./d3-scale-QLPPlH86.js";import"./zIndexSlice-1EM6QKoG.js";import"./renderedTicksSlice-CYtMAut8.js";import"./CartesianChart-DTQQkyNB.js";import"./chartDataContext-D8A6GgIn.js";import"./CategoricalChart-9BDeQmwn.js";import"./Curve-CVwA5fsZ.js";import"./types-vkQzCy74.js";import"./step-D_7jw6OV.js";import"./path-DyVhHtw_.js";import"./Layer-DztRGY_N.js";import"./ReactUtils-C9ZM0Mib.js";import"./Label--ydmIzGM.js";import"./Text-BLCv1zgM.js";import"./DOMUtils-Dbb4XIEW.js";import"./ZIndexLayer-DKwmZsVD.js";import"./ActivePoints-CleYGUIG.js";import"./Dot-ebcJneEk.js";import"./RegisterGraphicalItemId-D4uIuwhl.js";import"./ErrorBarContext-NilxMudN.js";import"./GraphicalItemClipPath-BzZEJgMk.js";import"./SetGraphicalItem-DtCToAmA.js";import"./useAnimationId-DsF55F49.js";import"./getRadiusAndStrokeWidthFromDot-CYyWgj3n.js";import"./ActiveShapeUtils-fioPLRDw.js";import"./isPlainObject-DxYEqwrD.js";import"./isPlainObject-BSutPv-K.js";import"./CartesianAxis-DhIcmypy.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-3A54Td4V.js";import"./symbol-kVzeEIJH.js";import"./useElementOffset-CFSLqz7e.js";import"./uniqBy-DQiWu0tK.js";import"./iteratee-0H7YfotS.js";function E(){const r=s(),e=g(),o=h();return r==null||o==null||e==null?null:t.createElement(t.Fragment,null,t.createElement(i,{width:r.left,height:e,labels:{background:"Left",horizontal:"useMargin.left"}}),t.createElement(i,{width:r.right,x:o-r.right,height:e,labels:{background:"Right",horizontal:"useMargin.right"}}),t.createElement(i,{width:o,height:r.top,labels:{background:"Top",vertical:"useMargin.top"}}),t.createElement(i,{width:o,height:r.bottom,y:e-r.bottom,labels:{background:"Bottom",vertical:"useMargin.bottom"}}))}const bt={title:"API/hooks/useMargin",component:s,parameters:{docs:{description:{component:"This story demonstrates the use of the `useMargin` hook to read chart margin in a responsive container."}}}},a={name:"useMargin",render:r=>t.createElement(l,{width:r.width,height:r.height},t.createElement(c,{data:d,margin:r.margin},t.createElement(u,{dataKey:"pv"}),t.createElement(f,{dataKey:"name"}),t.createElement(M,null),t.createElement(b,null),t.createElement(E,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var m,n,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
