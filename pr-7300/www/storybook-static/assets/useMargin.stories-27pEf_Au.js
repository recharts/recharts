import{e as t}from"./iframe-BR42SwHx.js";import{S as i}from"./ChartSizeDimensions-FLfKJQs_.js";import{J as s,h as g,f as h,R as l}from"./arrayEqualityCheck-BTlu6_X5.js";import{C as c}from"./ComposedChart-dNCERGfx.js";import{p as d}from"./Page-Cj8EiXz7.js";import{L as u}from"./Line-CDs3wcp9.js";import{X as f}from"./XAxis-Tjb-FFWw.js";import{Y as M}from"./YAxis-vI32OOi5.js";import{L as b}from"./Legend-CgeqB7Dx.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-C3ZG36Xp.js";import"./immer-CBsUjXpI.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C0DQb4gv.js";import"./index-D16v1uX6.js";import"./hooks-D8cR8gUo.js";import"./axisSelectors-CoHyz1fh.js";import"./d3-scale-UZASi0oQ.js";import"./zIndexSlice-DLL8OYNe.js";import"./renderedTicksSlice-C8E2aIah.js";import"./CartesianChart-CEhCqBUJ.js";import"./chartDataContext-DeHpxm8Y.js";import"./CategoricalChart-6WrjOunx.js";import"./Layer-DvQoXU13.js";import"./ReactUtils-CgBYlHJF.js";import"./Label-DVExpSeB.js";import"./Text-D4m4zxqs.js";import"./DOMUtils-sfbIoaFE.js";import"./ZIndexLayer-8Duyh3JO.js";import"./ActivePoints-DIaFZui8.js";import"./Dot-mjncFdWi.js";import"./types-CNxj5JXu.js";import"./RegisterGraphicalItemId-BuXbHokx.js";import"./ErrorBarContext-BHkWs-ti.js";import"./GraphicalItemClipPath-C0dhtMPj.js";import"./SetGraphicalItem-BZOj4gaY.js";import"./useAnimationId-B6YKrKnq.js";import"./getRadiusAndStrokeWidthFromDot-zEBVevUM.js";import"./ActiveShapeUtils-Bs6a3E44.js";import"./isPlainObject-CgqdHIW2.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Di_iOTI6.js";import"./Trapezoid-BEZ2jh2g.js";import"./Sector-CuH6E9-r.js";import"./Symbols-BwMDCpyM.js";import"./symbol-DV-iQcJU.js";import"./step-CO8PYd_W.js";import"./Curve-MgYQVsjt.js";import"./CartesianAxis-Bu_sq35Y.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-cx0ADUit.js";import"./uniqBy-CrOA1Xwi.js";import"./iteratee-DQsTI-if.js";function E(){const r=s(),e=g(),o=h();return r==null||o==null||e==null?null:t.createElement(t.Fragment,null,t.createElement(i,{width:r.left,height:e,labels:{background:"Left",horizontal:"useMargin.left"}}),t.createElement(i,{width:r.right,x:o-r.right,height:e,labels:{background:"Right",horizontal:"useMargin.right"}}),t.createElement(i,{width:o,height:r.top,labels:{background:"Top",vertical:"useMargin.top"}}),t.createElement(i,{width:o,height:r.bottom,y:e-r.bottom,labels:{background:"Bottom",vertical:"useMargin.bottom"}}))}const wt={title:"API/hooks/useMargin",component:s,parameters:{docs:{description:{component:"This story demonstrates the use of the `useMargin` hook to read chart margin in a responsive container."}}}},a={name:"useMargin",render:r=>t.createElement(l,{width:r.width,height:r.height},t.createElement(c,{data:d,margin:r.margin},t.createElement(u,{dataKey:"pv"}),t.createElement(f,{dataKey:"name"}),t.createElement(M,null),t.createElement(b,null),t.createElement(E,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var m,n,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
