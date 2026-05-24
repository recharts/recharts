import{e as t}from"./iframe-DrZHGfnp.js";import{S as i}from"./ChartSizeDimensions-y6v6hFmg.js";import{ah as p,ac as g,ae as h,g as l}from"./arrayEqualityCheck-BU1FgpAp.js";import{C as c}from"./ComposedChart-DxmmuLi3.js";import{p as d}from"./Page-DPte-9pC.js";import{L as u}from"./Line-CIA-i1-C.js";import{X as f}from"./XAxis-CfPxufGn.js";import{Y as M}from"./YAxis-BDktYU23.js";import{L as b}from"./Legend-CpyzK0FE.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DYZAgT61.js";import"./immer-D0UXwCcn.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B7Mz9FPG.js";import"./index-BP-Nf1tN.js";import"./hooks-D3ynsMIn.js";import"./axisSelectors-m6_CTWOp.js";import"./d3-scale-txqkfOII.js";import"./zIndexSlice-D-dyI62l.js";import"./renderedTicksSlice-7FEKlWww.js";import"./CartesianChart-DJW3KXl1.js";import"./chartDataContext-C7FGjj0C.js";import"./CategoricalChart-iLXWxvTy.js";import"./Curve-BOI2pjPZ.js";import"./types-6QYLxKbI.js";import"./step-BToukfgR.js";import"./path-DyVhHtw_.js";import"./Layer-ClTbBP2Y.js";import"./ReactUtils-DDlt2sQ2.js";import"./Label-BqIF3DzG.js";import"./Text-BwWh8Zp8.js";import"./DOMUtils-DJHj6OuI.js";import"./ZIndexLayer-BfJNfeY9.js";import"./ActivePoints-Ef6nRbul.js";import"./Dot-DoeZby35.js";import"./RegisterGraphicalItemId-BFqXK8dS.js";import"./ErrorBarContext-RFgpZOgG.js";import"./GraphicalItemClipPath-DRJNib_j.js";import"./SetGraphicalItem-BQUpenlh.js";import"./useAnimationId-BQVYm0pl.js";import"./getRadiusAndStrokeWidthFromDot-DUr3gs5u.js";import"./ActiveShapeUtils-Dr-kHcGB.js";import"./CartesianAxis-DI4oFfLH.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-B4qAZBiK.js";import"./symbol-S8QHyV4z.js";import"./useElementOffset-CqMnl3PK.js";import"./uniqBy-XAk6kl3o.js";import"./iteratee-usRtL8cc.js";function E(){const r=p(),e=g(),o=h();return r==null||o==null||e==null?null:t.createElement(t.Fragment,null,t.createElement(i,{width:r.left,height:e,labels:{background:"Left",horizontal:"useMargin.left"}}),t.createElement(i,{width:r.right,x:o-r.right,height:e,labels:{background:"Right",horizontal:"useMargin.right"}}),t.createElement(i,{width:o,height:r.top,labels:{background:"Top",vertical:"useMargin.top"}}),t.createElement(i,{width:o,height:r.bottom,y:e-r.bottom,labels:{background:"Bottom",vertical:"useMargin.bottom"}}))}const ft={title:"API/hooks/useMargin",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `useMargin` hook to read chart margin in a responsive container."}}}},a={name:"useMargin",render:r=>t.createElement(l,{width:r.width,height:r.height},t.createElement(c,{data:d,margin:r.margin},t.createElement(u,{dataKey:"pv"}),t.createElement(f,{dataKey:"name"}),t.createElement(M,null),t.createElement(b,null),t.createElement(E,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var m,n,s;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
