import{e as t}from"./iframe-CA8OhNxH.js";import{S as i}from"./ChartSizeDimensions-CM9slMDG.js";import{J as s,h as g,f as h,R as l}from"./arrayEqualityCheck-CL-Z01lB.js";import{C as c}from"./ComposedChart-CxMwSzAt.js";import{p as d}from"./Page-Cj8EiXz7.js";import{L as u}from"./Line-CcQfDutl.js";import{X as f}from"./XAxis-fFf7Kpu6.js";import{Y as M}from"./YAxis-DXR1Un-U.js";import{L as b}from"./Legend-cB2cVTNf.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-C1cg3qcu.js";import"./immer-CLqkMfUW.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CXeUN3o5.js";import"./index-CuTjkf5v.js";import"./hooks-CyxhoeqI.js";import"./axisSelectors-BooSDkXq.js";import"./d3-scale-DD8ooXHD.js";import"./zIndexSlice-DR6ZwnqZ.js";import"./renderedTicksSlice-DkCMmWDM.js";import"./CartesianChart-DIopKqdp.js";import"./chartDataContext-BaaZuqtU.js";import"./CategoricalChart-G3zYlJLo.js";import"./Layer-51jxPk-z.js";import"./ReactUtils-DijgxaRr.js";import"./Label-B9rEotsE.js";import"./Text-QadmgfLW.js";import"./DOMUtils-BdRmP8Tt.js";import"./ZIndexLayer-BbCOJVvb.js";import"./ActivePoints-eqpt3_ru.js";import"./Dot-y1vkSdnO.js";import"./types-DIwXheU2.js";import"./RegisterGraphicalItemId-WQn-qxjl.js";import"./ErrorBarContext-HJShwkTe.js";import"./GraphicalItemClipPath-D8pqnZaq.js";import"./SetGraphicalItem-dL7nqQCK.js";import"./useAnimationId-CFa_WVC3.js";import"./getRadiusAndStrokeWidthFromDot-DfZZAwG7.js";import"./ActiveShapeUtils-CHm7mV1T.js";import"./isPlainObject-BB9dmDmF.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D0apUPF6.js";import"./Trapezoid-DD5_8Z8z.js";import"./Sector-Dda5EE-9.js";import"./Symbols-BdJUl3ke.js";import"./symbol-GRJr5T5S.js";import"./step-Cu2k92Ir.js";import"./Curve-cpd6A-Ga.js";import"./CartesianAxis-f2zOKi0X.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-DiMHwcLU.js";import"./uniqBy-BD6E09wX.js";import"./iteratee-CYU4tR1-.js";function E(){const r=s(),e=g(),o=h();return r==null||o==null||e==null?null:t.createElement(t.Fragment,null,t.createElement(i,{width:r.left,height:e,labels:{background:"Left",horizontal:"useMargin.left"}}),t.createElement(i,{width:r.right,x:o-r.right,height:e,labels:{background:"Right",horizontal:"useMargin.right"}}),t.createElement(i,{width:o,height:r.top,labels:{background:"Top",vertical:"useMargin.top"}}),t.createElement(i,{width:o,height:r.bottom,y:e-r.bottom,labels:{background:"Bottom",vertical:"useMargin.bottom"}}))}const wt={title:"API/hooks/useMargin",component:s,parameters:{docs:{description:{component:"This story demonstrates the use of the `useMargin` hook to read chart margin in a responsive container."}}}},a={name:"useMargin",render:r=>t.createElement(l,{width:r.width,height:r.height},t.createElement(c,{data:d,margin:r.margin},t.createElement(u,{dataKey:"pv"}),t.createElement(f,{dataKey:"name"}),t.createElement(M,null),t.createElement(b,null),t.createElement(E,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var m,n,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
