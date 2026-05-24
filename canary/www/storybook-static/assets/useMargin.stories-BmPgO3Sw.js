import{e as t}from"./iframe-CxCywqzA.js";import{S as i}from"./ChartSizeDimensions-CFycJ4k1.js";import{ah as p,ac as g,ae as h,g as l}from"./arrayEqualityCheck-yVNwB6mW.js";import{C as c}from"./ComposedChart-CX5jdlg2.js";import{p as d}from"./Page-DPte-9pC.js";import{L as u}from"./Line-ZzkhjeKR.js";import{X as f}from"./XAxis-_gXpBYMm.js";import{Y as M}from"./YAxis-DxVfrwf5.js";import{L as b}from"./Legend-CSTAcr5S.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DyFfO_sZ.js";import"./immer-B8hoAty4.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-ReU4AUnJ.js";import"./index-Pf0lqjAZ.js";import"./hooks-bOP2AOQf.js";import"./axisSelectors-DhlA5n5_.js";import"./d3-scale-CxndOeQp.js";import"./zIndexSlice-DVQoyP0x.js";import"./renderedTicksSlice-D6OwKyas.js";import"./CartesianChart-DzAU9ZU1.js";import"./chartDataContext-DIpKw8P8.js";import"./CategoricalChart-Bsvtk9Il.js";import"./Curve-BRrh0cMa.js";import"./types-ou1XrYCh.js";import"./step-IqpDGeuN.js";import"./path-DyVhHtw_.js";import"./Layer-BIf3cKek.js";import"./ReactUtils-9u_I1YpW.js";import"./Label-C7vnjRze.js";import"./Text-D9QqhyNw.js";import"./DOMUtils-C_VBv5EQ.js";import"./ZIndexLayer-DP6IzTUW.js";import"./ActivePoints-C96qswx6.js";import"./Dot-D7kdX87a.js";import"./RegisterGraphicalItemId-BpFbTFO3.js";import"./ErrorBarContext-CRsTDduf.js";import"./GraphicalItemClipPath-vFOoMVO7.js";import"./SetGraphicalItem-CwSOO4xE.js";import"./useAnimationId-C-vOWrwQ.js";import"./getRadiusAndStrokeWidthFromDot-cuaaV9XU.js";import"./ActiveShapeUtils-sPKYOUtI.js";import"./CartesianAxis-CJvJrEPT.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-BqKh7AmN.js";import"./symbol-B6dbz-VY.js";import"./useElementOffset-DCPR5Aep.js";import"./uniqBy-CKEO767k.js";import"./iteratee-CVDXqgnY.js";function E(){const r=p(),e=g(),o=h();return r==null||o==null||e==null?null:t.createElement(t.Fragment,null,t.createElement(i,{width:r.left,height:e,labels:{background:"Left",horizontal:"useMargin.left"}}),t.createElement(i,{width:r.right,x:o-r.right,height:e,labels:{background:"Right",horizontal:"useMargin.right"}}),t.createElement(i,{width:o,height:r.top,labels:{background:"Top",vertical:"useMargin.top"}}),t.createElement(i,{width:o,height:r.bottom,y:e-r.bottom,labels:{background:"Bottom",vertical:"useMargin.bottom"}}))}const ft={title:"API/hooks/useMargin",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `useMargin` hook to read chart margin in a responsive container."}}}},a={name:"useMargin",render:r=>t.createElement(l,{width:r.width,height:r.height},t.createElement(c,{data:d,margin:r.margin},t.createElement(u,{dataKey:"pv"}),t.createElement(f,{dataKey:"name"}),t.createElement(M,null),t.createElement(b,null),t.createElement(E,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var m,n,s;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(s=(n=a.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const Mt=["UseMargin"];export{a as UseMargin,Mt as __namedExportsOrder,ft as default};
