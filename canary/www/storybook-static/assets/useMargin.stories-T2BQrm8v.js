import{e as t}from"./iframe-5nyyyA4e.js";import{S as i}from"./ChartSizeDimensions-CHqoYXte.js";import{J as s,h as g,f as h,R as l}from"./arrayEqualityCheck-DhH-5wr2.js";import{C as c}from"./ComposedChart-Cxl5hqIP.js";import{L as d}from"./Line-Bd-6aEXe.js";import{X as u}from"./XAxis-CpInK2W7.js";import{Y as f}from"./YAxis-D9arQ46Y.js";import{L as M}from"./Legend-CHYzLi17.js";import{p as b}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CeTTuEfb.js";import"./immer-2somCEQQ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DbfL-s84.js";import"./index-DrSxOYtm.js";import"./hooks-CdfksvpZ.js";import"./axisSelectors-CobE02gZ.js";import"./d3-scale-puoPpyC3.js";import"./zIndexSlice-C6txXD1x.js";import"./renderedTicksSlice-Cm-fMS3n.js";import"./CartesianChart-CFvpoJB5.js";import"./chartDataContext-SxjdhjDb.js";import"./CategoricalChart-DI7k_Lzd.js";import"./Layer-DviFQGNi.js";import"./ReactUtils-BrfFtQHh.js";import"./Label-CduFeyI1.js";import"./Text-CE1WfcL6.js";import"./DOMUtils-Dq_WTVX1.js";import"./ZIndexLayer-OUT57C2H.js";import"./ActivePoints-C08M__J8.js";import"./Dot-YnFnwCT3.js";import"./types-BpXzUYak.js";import"./RegisterGraphicalItemId-Co9Ixth9.js";import"./ErrorBarContext-CfPRQDi6.js";import"./GraphicalItemClipPath-4mU8FIdV.js";import"./SetGraphicalItem-YjHvOXLE.js";import"./useAnimationId-C32uUUSq.js";import"./getRadiusAndStrokeWidthFromDot-BSz_BA2S.js";import"./ActiveShapeUtils-DGjL05Fk.js";import"./isPlainObject-BQonFNMT.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BJXxZxcM.js";import"./Trapezoid-BDtTj6J0.js";import"./Sector-STsIidKv.js";import"./Symbols-CXSqTNLX.js";import"./symbol-DYTo8Fkb.js";import"./step-CMCDVxPb.js";import"./Curve-CtxNRaVC.js";import"./CartesianAxis-D47MJU_E.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-BTKbSGPa.js";import"./uniqBy-DdFUbo3O.js";import"./iteratee-B-bQO1-C.js";function E(){const r=s(),e=g(),o=h();return r==null||o==null||e==null?null:t.createElement(t.Fragment,null,t.createElement(i,{width:r.left,height:e,labels:{background:"Left",horizontal:"useMargin.left"}}),t.createElement(i,{width:r.right,x:o-r.right,height:e,labels:{background:"Right",horizontal:"useMargin.right"}}),t.createElement(i,{width:o,height:r.top,labels:{background:"Top",vertical:"useMargin.top"}}),t.createElement(i,{width:o,height:r.bottom,y:e-r.bottom,labels:{background:"Bottom",vertical:"useMargin.bottom"}}))}const wt={title:"API/hooks/useMargin",component:s,parameters:{docs:{description:{component:"This story demonstrates the use of the `useMargin` hook to read chart margin in a responsive container."}}}},a={name:"useMargin",render:r=>t.createElement(l,{width:r.width,height:r.height},t.createElement(c,{data:b,margin:r.margin},t.createElement(d,{dataKey:"pv"}),t.createElement(u,{dataKey:"name"}),t.createElement(f,null),t.createElement(M,null),t.createElement(E,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var m,n,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
