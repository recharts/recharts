import{e as t}from"./iframe-Br7b33cR.js";import{S as i}from"./ChartSizeDimensions-D_sBOB8N.js";import{J as s,h as g,f as h,R as l}from"./arrayEqualityCheck-BDKsVEjv.js";import{C as c}from"./ComposedChart-BA7IAlKp.js";import{p as d}from"./Page-Cj8EiXz7.js";import{L as u}from"./Line-DiemE468.js";import{X as f}from"./XAxis-TVgTAVSm.js";import{Y as M}from"./YAxis-BOEj2uLm.js";import{L as b}from"./Legend-mcm1bE2i.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CdmMjLyp.js";import"./immer-BhWlJGD4.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D63T188Y.js";import"./index-DVsOwuOo.js";import"./hooks-BC1xVB-F.js";import"./axisSelectors-hQ7yLifF.js";import"./d3-scale-DdreInNE.js";import"./zIndexSlice-DsbsVgFf.js";import"./renderedTicksSlice-BcwlNeh2.js";import"./CartesianChart-Cn-qy5pU.js";import"./chartDataContext-CpalcXUw.js";import"./CategoricalChart-xWzy3I98.js";import"./Layer-IwfPtrhx.js";import"./ReactUtils-WaUbZ0sz.js";import"./Label-SApjRgym.js";import"./Text-D-_zWi9U.js";import"./DOMUtils-B_HE9eSD.js";import"./ZIndexLayer-D-LZtBsa.js";import"./ActivePoints-DDCoLWpR.js";import"./Dot-D2QBiTth.js";import"./types-CjQO2tSW.js";import"./RegisterGraphicalItemId-Bvds7-Cj.js";import"./ErrorBarContext-BxzjAj_b.js";import"./GraphicalItemClipPath-B3sq3Fvy.js";import"./SetGraphicalItem-rBYE9Kbl.js";import"./useAnimationId-DXRTa-xv.js";import"./getRadiusAndStrokeWidthFromDot-CxbakQi2.js";import"./ActiveShapeUtils-Dqrm1tKM.js";import"./isPlainObject-ggbrHHb5.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D361kRQy.js";import"./Trapezoid-CU7AezY8.js";import"./Sector-BovvqAup.js";import"./Symbols-LMEzLfWp.js";import"./symbol-dl1ml4W0.js";import"./step-BTmPe7Fi.js";import"./Curve-BrUwP9tn.js";import"./CartesianAxis-Dlnx8Z1G.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-w8M65t7d.js";import"./uniqBy-CKMV7Df5.js";import"./iteratee-D20FIo_7.js";function E(){const r=s(),e=g(),o=h();return r==null||o==null||e==null?null:t.createElement(t.Fragment,null,t.createElement(i,{width:r.left,height:e,labels:{background:"Left",horizontal:"useMargin.left"}}),t.createElement(i,{width:r.right,x:o-r.right,height:e,labels:{background:"Right",horizontal:"useMargin.right"}}),t.createElement(i,{width:o,height:r.top,labels:{background:"Top",vertical:"useMargin.top"}}),t.createElement(i,{width:o,height:r.bottom,y:e-r.bottom,labels:{background:"Bottom",vertical:"useMargin.bottom"}}))}const wt={title:"API/hooks/useMargin",component:s,parameters:{docs:{description:{component:"This story demonstrates the use of the `useMargin` hook to read chart margin in a responsive container."}}}},a={name:"useMargin",render:r=>t.createElement(l,{width:r.width,height:r.height},t.createElement(c,{data:d,margin:r.margin},t.createElement(u,{dataKey:"pv"}),t.createElement(f,{dataKey:"name"}),t.createElement(M,null),t.createElement(b,null),t.createElement(E,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var m,n,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
