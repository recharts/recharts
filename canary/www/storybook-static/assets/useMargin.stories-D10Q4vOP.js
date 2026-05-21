import{e as t}from"./iframe-DNsUwX5k.js";import{S as i}from"./ChartSizeDimensions-DUMsduP3.js";import{ah as s,ac as g,ae as h,g as l}from"./arrayEqualityCheck-XA4mGyWk.js";import{C as c}from"./ComposedChart-Cmjf3y7z.js";import{p as d}from"./Page-DPte-9pC.js";import{L as u}from"./Line-B6QUTRYX.js";import{X as f}from"./XAxis-ONim8OVF.js";import{Y as M}from"./YAxis-C_-amdVX.js";import{L as b}from"./Legend-AtBpIshp.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BfvXjv4K.js";import"./immer-BPrEK5Rz.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-AU67btz7.js";import"./index-DYHZYw9F.js";import"./hooks-B6BHB-7W.js";import"./axisSelectors-YJUEl-2g.js";import"./d3-scale-Bdi71Qs5.js";import"./zIndexSlice-C-6628LZ.js";import"./renderedTicksSlice-JsYvqF2I.js";import"./CartesianChart-FHxIuFwU.js";import"./chartDataContext-A5vEwNfY.js";import"./CategoricalChart-C9xxMr9R.js";import"./Layer-DWNEDYKO.js";import"./ReactUtils-CLpPl2yo.js";import"./Label-DrlcblLQ.js";import"./Text-CaUPu0Ls.js";import"./DOMUtils-DEWL1h2i.js";import"./ZIndexLayer-COBAY4xu.js";import"./ActivePoints-BULqV-gI.js";import"./Dot-CqXou1PJ.js";import"./types-DAXoUOiX.js";import"./RegisterGraphicalItemId-C0Pyz4Je.js";import"./ErrorBarContext-D803I392.js";import"./GraphicalItemClipPath-DhAcpDyX.js";import"./SetGraphicalItem-BCtoQcNZ.js";import"./useAnimationId-gBW8_6W-.js";import"./getRadiusAndStrokeWidthFromDot-Cq_xctji.js";import"./ActiveShapeUtils-CsZp4u_s.js";import"./isPlainObject-N__ihfse.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-h1QYOt2M.js";import"./Trapezoid-DDnY6d6S.js";import"./Sector-CETfwnvm.js";import"./Symbols-JY5hg72Q.js";import"./symbol-CKZaVPZy.js";import"./step--sLhjxi-.js";import"./Curve-BVLF1D_I.js";import"./CartesianAxis-Ctr04CZm.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-DEU7ULV0.js";import"./uniqBy-PI0PJHxt.js";import"./iteratee-BuVbuqpH.js";function E(){const r=s(),e=g(),o=h();return r==null||o==null||e==null?null:t.createElement(t.Fragment,null,t.createElement(i,{width:r.left,height:e,labels:{background:"Left",horizontal:"useMargin.left"}}),t.createElement(i,{width:r.right,x:o-r.right,height:e,labels:{background:"Right",horizontal:"useMargin.right"}}),t.createElement(i,{width:o,height:r.top,labels:{background:"Top",vertical:"useMargin.top"}}),t.createElement(i,{width:o,height:r.bottom,y:e-r.bottom,labels:{background:"Bottom",vertical:"useMargin.bottom"}}))}const wt={title:"API/hooks/useMargin",component:s,parameters:{docs:{description:{component:"This story demonstrates the use of the `useMargin` hook to read chart margin in a responsive container."}}}},a={name:"useMargin",render:r=>t.createElement(l,{width:r.width,height:r.height},t.createElement(c,{data:d,margin:r.margin},t.createElement(u,{dataKey:"pv"}),t.createElement(f,{dataKey:"name"}),t.createElement(M,null),t.createElement(b,null),t.createElement(E,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var m,n,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
