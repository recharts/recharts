import{e as t}from"./iframe-DRAz-MOV.js";import{S as i}from"./ChartSizeDimensions-B-YSta_X.js";import{J as s,h as g,f as h,R as l}from"./arrayEqualityCheck-C8643F2b.js";import{C as c}from"./ComposedChart-O_-CVA72.js";import{p as d}from"./Page-Cj8EiXz7.js";import{L as u}from"./Line-CziVn159.js";import{X as f}from"./XAxis-LfLbW5h3.js";import{Y as M}from"./YAxis-Exnm2m07.js";import{L as b}from"./Legend-DAlheZF3.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DMSAaaR1.js";import"./immer-7dbUwIWB.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Bq0uftOK.js";import"./index-BwgIdcXX.js";import"./hooks-DKliz_JR.js";import"./axisSelectors-B3X53-PT.js";import"./d3-scale-CP3jXnNI.js";import"./zIndexSlice-QFEsuJ_i.js";import"./renderedTicksSlice-C3sDnISd.js";import"./CartesianChart-D16-_KrV.js";import"./chartDataContext-DfgXfLVB.js";import"./CategoricalChart-mIZr-3BC.js";import"./Layer-7ou2jnr2.js";import"./ReactUtils-C_AD8QSo.js";import"./Label-BA834Vai.js";import"./Text-BfMqXVQN.js";import"./DOMUtils-BDvhlQed.js";import"./ZIndexLayer-BQfiKj8k.js";import"./ActivePoints-6EKZqhHa.js";import"./Dot-DXpzcep7.js";import"./types-BHj1SP9z.js";import"./RegisterGraphicalItemId-DNpPqdGB.js";import"./ErrorBarContext-C2uHiTDW.js";import"./GraphicalItemClipPath-DkmmuFjC.js";import"./SetGraphicalItem-BOrXETUL.js";import"./useAnimationId-CSxRZUsd.js";import"./getRadiusAndStrokeWidthFromDot-bTkwdsC0.js";import"./ActiveShapeUtils-BkbmdP_u.js";import"./isPlainObject-CaT7z4Jz.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CIlVtzFE.js";import"./Trapezoid-i_eTbcia.js";import"./Sector-BFFY6GnN.js";import"./Symbols-BE03y18L.js";import"./symbol-BJNbjT1E.js";import"./step-DsP_EtiA.js";import"./Curve-rCu2vvgU.js";import"./CartesianAxis-BEMLBmX5.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-Buqr-Q9u.js";import"./uniqBy-C7Z_8_ul.js";import"./iteratee-BbZqSogb.js";function E(){const r=s(),e=g(),o=h();return r==null||o==null||e==null?null:t.createElement(t.Fragment,null,t.createElement(i,{width:r.left,height:e,labels:{background:"Left",horizontal:"useMargin.left"}}),t.createElement(i,{width:r.right,x:o-r.right,height:e,labels:{background:"Right",horizontal:"useMargin.right"}}),t.createElement(i,{width:o,height:r.top,labels:{background:"Top",vertical:"useMargin.top"}}),t.createElement(i,{width:o,height:r.bottom,y:e-r.bottom,labels:{background:"Bottom",vertical:"useMargin.bottom"}}))}const wt={title:"API/hooks/useMargin",component:s,parameters:{docs:{description:{component:"This story demonstrates the use of the `useMargin` hook to read chart margin in a responsive container."}}}},a={name:"useMargin",render:r=>t.createElement(l,{width:r.width,height:r.height},t.createElement(c,{data:d,margin:r.margin},t.createElement(u,{dataKey:"pv"}),t.createElement(f,{dataKey:"name"}),t.createElement(M,null),t.createElement(b,null),t.createElement(E,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var m,n,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
