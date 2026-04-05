import{e as t}from"./iframe-BM7P_3hj.js";import{S as i}from"./ChartSizeDimensions-75IDTK2b.js";import{J as s,h as g,f as h,R as l}from"./arrayEqualityCheck-Bmgq3ZTz.js";import{C as c}from"./ComposedChart-EZo1iYMi.js";import{p as d}from"./Page-Cj8EiXz7.js";import{L as u}from"./Line-CHs41JOZ.js";import{X as f}from"./XAxis-C_LpUhcR.js";import{Y as M}from"./YAxis-BBUcqCa1.js";import{L as b}from"./Legend-v7RNUMCE.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CZ0zKn9L.js";import"./immer-D-2u7HXy.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B8tVHnOf.js";import"./index-Xlum1YFK.js";import"./hooks-BY0xPmaj.js";import"./axisSelectors-Dx6sVhYx.js";import"./d3-scale-B0w3FH9e.js";import"./zIndexSlice-jDjA289q.js";import"./renderedTicksSlice-DVjCr-Qu.js";import"./CartesianChart-Be0mgfMK.js";import"./chartDataContext-CJ-F_waf.js";import"./CategoricalChart-CRvKBBfd.js";import"./Layer-C6LffHMU.js";import"./ReactUtils-DyDnYFSa.js";import"./Label-BQD1_uHZ.js";import"./Text-CQ7mU3s7.js";import"./DOMUtils-DrlqJZq7.js";import"./ZIndexLayer-D7eOOyk7.js";import"./ActivePoints-CM_0l3Rg.js";import"./Dot-C4-mkX5o.js";import"./types-o-wQVJEv.js";import"./RegisterGraphicalItemId-B3DF5B-x.js";import"./ErrorBarContext-8JrkuwkP.js";import"./GraphicalItemClipPath-DJd9bIYV.js";import"./SetGraphicalItem-BjV3tQT1.js";import"./useAnimationId-CDf7Yg_k.js";import"./getRadiusAndStrokeWidthFromDot-BxdGbl3w.js";import"./ActiveShapeUtils-CpIbOFBd.js";import"./isPlainObject-D_XY9Qvh.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-UEK_zsFS.js";import"./Trapezoid-tkh2Io-M.js";import"./Sector-B2gfW0gr.js";import"./Symbols-PsAIzTU_.js";import"./symbol-BXNRxpVN.js";import"./step-DyBB5gGy.js";import"./Curve-CqITwbJh.js";import"./CartesianAxis-BrBA7Fo6.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-DP9By8L-.js";import"./uniqBy-CvtKv9kX.js";import"./iteratee-CcJgzovy.js";function E(){const r=s(),e=g(),o=h();return r==null||o==null||e==null?null:t.createElement(t.Fragment,null,t.createElement(i,{width:r.left,height:e,labels:{background:"Left",horizontal:"useMargin.left"}}),t.createElement(i,{width:r.right,x:o-r.right,height:e,labels:{background:"Right",horizontal:"useMargin.right"}}),t.createElement(i,{width:o,height:r.top,labels:{background:"Top",vertical:"useMargin.top"}}),t.createElement(i,{width:o,height:r.bottom,y:e-r.bottom,labels:{background:"Bottom",vertical:"useMargin.bottom"}}))}const wt={title:"API/hooks/useMargin",component:s,parameters:{docs:{description:{component:"This story demonstrates the use of the `useMargin` hook to read chart margin in a responsive container."}}}},a={name:"useMargin",render:r=>t.createElement(l,{width:r.width,height:r.height},t.createElement(c,{data:d,margin:r.margin},t.createElement(u,{dataKey:"pv"}),t.createElement(f,{dataKey:"name"}),t.createElement(M,null),t.createElement(b,null),t.createElement(E,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var m,n,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
