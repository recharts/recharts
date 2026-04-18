import{e as t}from"./iframe-C7MtdY8E.js";import{S as i}from"./ChartSizeDimensions-jmlBhTx2.js";import{J as s,h as g,f as h,R as l}from"./arrayEqualityCheck-DgrHMpGx.js";import{C as c}from"./ComposedChart-CFjyPj2A.js";import{p as d}from"./Page-Cj8EiXz7.js";import{L as u}from"./Line-DHYjswyr.js";import{X as f}from"./XAxis-3uF26BVq.js";import{Y as M}from"./YAxis-D_0wuDlr.js";import{L as b}from"./Legend-aMhIY0-J.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BARk_uhU.js";import"./immer-tybRsQ9G.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BCy35Z8x.js";import"./index-ZRFMj45p.js";import"./hooks-CRCNzzkU.js";import"./axisSelectors-BszE-kHQ.js";import"./d3-scale--QLdYl1D.js";import"./zIndexSlice-3LN6T8_r.js";import"./renderedTicksSlice-Vrp6ItcJ.js";import"./CartesianChart-CIdWsL9L.js";import"./chartDataContext-bU1HBY0X.js";import"./CategoricalChart-DeBE8RoO.js";import"./Layer-Ulref4PH.js";import"./ReactUtils-BhCHdCFE.js";import"./Label-DSRQ68Gc.js";import"./Text-D3CPw6sI.js";import"./DOMUtils-Caf6EbGd.js";import"./ZIndexLayer-Chbgzy16.js";import"./ActivePoints-BwYpscwz.js";import"./Dot-BqE6ffT8.js";import"./types-BR6al878.js";import"./RegisterGraphicalItemId-DRO9PQuR.js";import"./ErrorBarContext-DwrVEdn2.js";import"./GraphicalItemClipPath-CvFbG0n3.js";import"./SetGraphicalItem-4oFR7JPf.js";import"./useAnimationId-xNATfe3s.js";import"./getRadiusAndStrokeWidthFromDot-DnzUrahg.js";import"./ActiveShapeUtils-Bu5dlaov.js";import"./isPlainObject-CwNYxtMJ.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Ci3DSaKm.js";import"./Trapezoid-CKW8i93u.js";import"./Sector-AhRoIGMa.js";import"./Symbols-DB88izld.js";import"./symbol-Ct681S22.js";import"./step-DOKoL0Mc.js";import"./Curve-DoPC-oTP.js";import"./CartesianAxis-B2QCJlN1.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-US88cDQq.js";import"./uniqBy-DpqRNa_X.js";import"./iteratee-BhA28Kjc.js";function E(){const r=s(),e=g(),o=h();return r==null||o==null||e==null?null:t.createElement(t.Fragment,null,t.createElement(i,{width:r.left,height:e,labels:{background:"Left",horizontal:"useMargin.left"}}),t.createElement(i,{width:r.right,x:o-r.right,height:e,labels:{background:"Right",horizontal:"useMargin.right"}}),t.createElement(i,{width:o,height:r.top,labels:{background:"Top",vertical:"useMargin.top"}}),t.createElement(i,{width:o,height:r.bottom,y:e-r.bottom,labels:{background:"Bottom",vertical:"useMargin.bottom"}}))}const wt={title:"API/hooks/useMargin",component:s,parameters:{docs:{description:{component:"This story demonstrates the use of the `useMargin` hook to read chart margin in a responsive container."}}}},a={name:"useMargin",render:r=>t.createElement(l,{width:r.width,height:r.height},t.createElement(c,{data:d,margin:r.margin},t.createElement(u,{dataKey:"pv"}),t.createElement(f,{dataKey:"name"}),t.createElement(M,null),t.createElement(b,null),t.createElement(E,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var m,n,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
