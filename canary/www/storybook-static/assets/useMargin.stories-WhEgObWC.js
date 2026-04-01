import{e as t}from"./iframe-DY46aw1T.js";import{S as i}from"./ChartSizeDimensions-Cyi7sjqL.js";import{J as s,h as g,f as h,R as l}from"./arrayEqualityCheck-0_K9klWl.js";import{C as c}from"./ComposedChart-xNspB-SJ.js";import{p as d}from"./Page-Cj8EiXz7.js";import{L as u}from"./Line-BpqthCpk.js";import{X as f}from"./XAxis-_Mr4CO1Y.js";import{Y as M}from"./YAxis-DuAnuVSE.js";import{L as b}from"./Legend-DH9x-Ph_.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Cb7Us82j.js";import"./immer-BvCcuZ6o.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CSeg5AQz.js";import"./index-D_nfX1S8.js";import"./hooks-nf1zKR0g.js";import"./axisSelectors-C9B6Wugz.js";import"./d3-scale-DfNPAUjz.js";import"./zIndexSlice-CoVcCSuo.js";import"./renderedTicksSlice-D-nZzoJO.js";import"./CartesianChart-DO22hXPG.js";import"./chartDataContext-DXzlJMXH.js";import"./CategoricalChart-DUj4pKmY.js";import"./Layer-hFhQiM_L.js";import"./ReactUtils-Cz-9gufx.js";import"./Label-BXRSGziE.js";import"./Text-BzNExQTR.js";import"./DOMUtils-DGEQ3O38.js";import"./ZIndexLayer-DnZ_K0Nx.js";import"./ActivePoints-BQsjSyf0.js";import"./Dot-Bs5nAcv2.js";import"./types-Dtzv1a1O.js";import"./RegisterGraphicalItemId-wZiFGjJl.js";import"./ErrorBarContext-BdBDnSnf.js";import"./GraphicalItemClipPath-BxX-Y-FU.js";import"./SetGraphicalItem-V1giDG84.js";import"./useAnimationId-Zdg7gWN0.js";import"./getRadiusAndStrokeWidthFromDot-BlOwTSD5.js";import"./ActiveShapeUtils-C_pX6xWx.js";import"./isPlainObject-zUPa-N8J.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BEP5-Dm7.js";import"./Trapezoid-vSPDkj38.js";import"./Sector-BAsKK7Vz.js";import"./Symbols-CVBOcrIt.js";import"./symbol-CEFOgOTV.js";import"./step-CyrTl9M_.js";import"./Curve-DQutT_ql.js";import"./CartesianAxis-CK3eGRof.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-DwWwMAQX.js";import"./uniqBy-CUYvsV5i.js";import"./iteratee-Dyz53KPO.js";function E(){const r=s(),e=g(),o=h();return r==null||o==null||e==null?null:t.createElement(t.Fragment,null,t.createElement(i,{width:r.left,height:e,labels:{background:"Left",horizontal:"useMargin.left"}}),t.createElement(i,{width:r.right,x:o-r.right,height:e,labels:{background:"Right",horizontal:"useMargin.right"}}),t.createElement(i,{width:o,height:r.top,labels:{background:"Top",vertical:"useMargin.top"}}),t.createElement(i,{width:o,height:r.bottom,y:e-r.bottom,labels:{background:"Bottom",vertical:"useMargin.bottom"}}))}const wt={title:"API/hooks/useMargin",component:s,parameters:{docs:{description:{component:"This story demonstrates the use of the `useMargin` hook to read chart margin in a responsive container."}}}},a={name:"useMargin",render:r=>t.createElement(l,{width:r.width,height:r.height},t.createElement(c,{data:d,margin:r.margin},t.createElement(u,{dataKey:"pv"}),t.createElement(f,{dataKey:"name"}),t.createElement(M,null),t.createElement(b,null),t.createElement(E,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var m,n,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
