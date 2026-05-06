import{e as t}from"./iframe-CB3xDsCu.js";import{S as i}from"./ChartSizeDimensions-B9c3BCsk.js";import{J as s,h as g,f as h,R as l}from"./arrayEqualityCheck-BR3R0AIc.js";import{C as c}from"./ComposedChart-CS2PtOXx.js";import{p as d}from"./Page-Cj8EiXz7.js";import{L as u}from"./Line-B3-O5qK3.js";import{X as f}from"./XAxis-DYQUx0ZR.js";import{Y as M}from"./YAxis-mQ0C3LQl.js";import{L as b}from"./Legend-B_Fv6KKC.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-D2yjNbgT.js";import"./immer-DVlX7gWW.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DzH2iSQ0.js";import"./index-dzLlUSBq.js";import"./hooks-DFjGEA5J.js";import"./axisSelectors-BD2wGdYf.js";import"./d3-scale-DBjacL5V.js";import"./zIndexSlice-BDUpIrxI.js";import"./renderedTicksSlice-DTGPDQhB.js";import"./CartesianChart-Cn7O9-Sb.js";import"./chartDataContext-BOo6jc00.js";import"./CategoricalChart-D8l_W_kj.js";import"./Layer-Ch9gTjDA.js";import"./ReactUtils-VpSEOCqX.js";import"./Label-Br8zkPUL.js";import"./Text-UtkJ3ap3.js";import"./DOMUtils-D031Yf3A.js";import"./ZIndexLayer-Cz6Wxl3N.js";import"./ActivePoints-BkwIf39h.js";import"./Dot-DjIPoMxO.js";import"./types-DISef9EU.js";import"./RegisterGraphicalItemId-CB7Ow1C1.js";import"./ErrorBarContext-CBtIL5Hk.js";import"./GraphicalItemClipPath-CS8dxw6f.js";import"./SetGraphicalItem-gnY-9bMd.js";import"./useAnimationId-DK8UFsIQ.js";import"./getRadiusAndStrokeWidthFromDot-BuBjGrUL.js";import"./ActiveShapeUtils-Bccy3ucd.js";import"./isPlainObject-YEY4Yrhn.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B5g_Hqxg.js";import"./Trapezoid-C2jtUOqg.js";import"./Sector-CIMNq_ez.js";import"./Symbols-BHAxghFO.js";import"./symbol-B_QpE6oW.js";import"./step-Dz5tlK5n.js";import"./Curve-BUSUbFqo.js";import"./CartesianAxis-DkDylqpL.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-CyqDBPox.js";import"./uniqBy-C2DdLMF2.js";import"./iteratee-F7SoTddw.js";function E(){const r=s(),e=g(),o=h();return r==null||o==null||e==null?null:t.createElement(t.Fragment,null,t.createElement(i,{width:r.left,height:e,labels:{background:"Left",horizontal:"useMargin.left"}}),t.createElement(i,{width:r.right,x:o-r.right,height:e,labels:{background:"Right",horizontal:"useMargin.right"}}),t.createElement(i,{width:o,height:r.top,labels:{background:"Top",vertical:"useMargin.top"}}),t.createElement(i,{width:o,height:r.bottom,y:e-r.bottom,labels:{background:"Bottom",vertical:"useMargin.bottom"}}))}const wt={title:"API/hooks/useMargin",component:s,parameters:{docs:{description:{component:"This story demonstrates the use of the `useMargin` hook to read chart margin in a responsive container."}}}},a={name:"useMargin",render:r=>t.createElement(l,{width:r.width,height:r.height},t.createElement(c,{data:d,margin:r.margin},t.createElement(u,{dataKey:"pv"}),t.createElement(f,{dataKey:"name"}),t.createElement(M,null),t.createElement(b,null),t.createElement(E,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var m,n,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
