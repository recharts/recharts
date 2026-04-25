import{e as t}from"./iframe-8w6hSOb3.js";import{S as i}from"./ChartSizeDimensions-BdSUC2dN.js";import{J as s,h as g,f as h,R as l}from"./arrayEqualityCheck-BcSkIFjy.js";import{C as c}from"./ComposedChart-BXY8auWm.js";import{p as d}from"./Page-Cj8EiXz7.js";import{L as u}from"./Line-CsDzzK8s.js";import{X as f}from"./XAxis-AMaL4weY.js";import{Y as M}from"./YAxis-Bf2ShXUT.js";import{L as b}from"./Legend-B3iEZQNB.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-B5HxWc-X.js";import"./immer-CNp4ouR9.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CJbnro3S.js";import"./index-DPLqP4cy.js";import"./hooks-DH6TblVT.js";import"./axisSelectors-DJq9vOix.js";import"./d3-scale-DocPO7gd.js";import"./zIndexSlice-xR0tBw_b.js";import"./renderedTicksSlice-CehvSBlF.js";import"./CartesianChart-Bnp5U_KI.js";import"./chartDataContext-CHxjExdF.js";import"./CategoricalChart-C3Pb3oJs.js";import"./Layer-VbLV2S9I.js";import"./ReactUtils-RNztsw35.js";import"./Label-CbTww8i0.js";import"./Text-Bl83wQcg.js";import"./DOMUtils-DpW_Dxz8.js";import"./ZIndexLayer-BZxHBglw.js";import"./ActivePoints-c5MJ5OkK.js";import"./Dot-B5t0Roay.js";import"./types-DDD23-V2.js";import"./RegisterGraphicalItemId-vJe763ER.js";import"./ErrorBarContext-BMaq7Beg.js";import"./GraphicalItemClipPath-CMalPiCh.js";import"./SetGraphicalItem-CLkVCWjn.js";import"./useAnimationId-kYjgFxKg.js";import"./getRadiusAndStrokeWidthFromDot-BGkBgNmA.js";import"./ActiveShapeUtils-CG73MWk5.js";import"./isPlainObject-UED8GYmG.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CYl8kbGp.js";import"./Trapezoid-BJuggP_P.js";import"./Sector-C0Mog3VL.js";import"./Symbols-HCV45nTw.js";import"./symbol-DDPk1XI3.js";import"./step-CO9P-pBw.js";import"./Curve-DCDk8LQV.js";import"./CartesianAxis-B-EZEcGt.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-BS3k8eV3.js";import"./uniqBy-BKrVti4k.js";import"./iteratee-E4lAKDYa.js";function E(){const r=s(),e=g(),o=h();return r==null||o==null||e==null?null:t.createElement(t.Fragment,null,t.createElement(i,{width:r.left,height:e,labels:{background:"Left",horizontal:"useMargin.left"}}),t.createElement(i,{width:r.right,x:o-r.right,height:e,labels:{background:"Right",horizontal:"useMargin.right"}}),t.createElement(i,{width:o,height:r.top,labels:{background:"Top",vertical:"useMargin.top"}}),t.createElement(i,{width:o,height:r.bottom,y:e-r.bottom,labels:{background:"Bottom",vertical:"useMargin.bottom"}}))}const wt={title:"API/hooks/useMargin",component:s,parameters:{docs:{description:{component:"This story demonstrates the use of the `useMargin` hook to read chart margin in a responsive container."}}}},a={name:"useMargin",render:r=>t.createElement(l,{width:r.width,height:r.height},t.createElement(c,{data:d,margin:r.margin},t.createElement(u,{dataKey:"pv"}),t.createElement(f,{dataKey:"name"}),t.createElement(M,null),t.createElement(b,null),t.createElement(E,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var m,n,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
