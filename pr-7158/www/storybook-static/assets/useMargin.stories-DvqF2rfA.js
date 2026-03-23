import{e as t}from"./iframe-CJ63uMHg.js";import{S as i}from"./ChartSizeDimensions-C_IgMMTX.js";import{J as s,h as g,f as h,R as l}from"./arrayEqualityCheck-CjZgOdyP.js";import{C as c}from"./ComposedChart-BUz5v2gp.js";import{L as d}from"./Line-HCaUYNRw.js";import{X as u}from"./XAxis-CaS203aX.js";import{Y as f}from"./YAxis-BJ9lAReC.js";import{L as M}from"./Legend-D94wkKyo.js";import{p as b}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CMjyVNNi.js";import"./immer-CKeBagLw.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DPJT4FLk.js";import"./index-BTkZssxQ.js";import"./hooks-DAjaeQkS.js";import"./axisSelectors-Cmmc63M7.js";import"./d3-scale-Ba7WtcOV.js";import"./zIndexSlice-DcFOWvFe.js";import"./renderedTicksSlice-BxvVTmCz.js";import"./CartesianChart-CnhtnX-W.js";import"./chartDataContext-BCusU8xR.js";import"./CategoricalChart-mP3FKWNM.js";import"./Layer-DwPjM_1S.js";import"./ReactUtils-BrLU3nhQ.js";import"./Label-BT9o0AB1.js";import"./Text-C4Zilip_.js";import"./DOMUtils-CEnHACCK.js";import"./ZIndexLayer-hB7INJpc.js";import"./ActivePoints-CuJqjtUw.js";import"./Dot-D4anQyzH.js";import"./types-Cg-iPHUY.js";import"./RegisterGraphicalItemId-B1D-i393.js";import"./ErrorBarContext-dABLLY8L.js";import"./GraphicalItemClipPath-B2w_akpT.js";import"./SetGraphicalItem-BO21g4cB.js";import"./useAnimationId-B1Pbcgq5.js";import"./getRadiusAndStrokeWidthFromDot-C1RJ8FJA.js";import"./ActiveShapeUtils-B2UK-_O2.js";import"./isPlainObject-DxawGvw9.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-RAhStLpg.js";import"./Trapezoid-DE_yg1mh.js";import"./Sector-D96mfy5y.js";import"./Symbols-Yo7h6BqR.js";import"./symbol-6foS3Lbf.js";import"./step-CrMJLvxS.js";import"./Curve-CD35vdaK.js";import"./CartesianAxis-DJXCnb2v.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-Db3u9B4j.js";import"./uniqBy-YwcJNLS3.js";import"./iteratee-BOLGpibr.js";function E(){const r=s(),e=g(),o=h();return r==null||o==null||e==null?null:t.createElement(t.Fragment,null,t.createElement(i,{width:r.left,height:e,labels:{background:"Left",horizontal:"useMargin.left"}}),t.createElement(i,{width:r.right,x:o-r.right,height:e,labels:{background:"Right",horizontal:"useMargin.right"}}),t.createElement(i,{width:o,height:r.top,labels:{background:"Top",vertical:"useMargin.top"}}),t.createElement(i,{width:o,height:r.bottom,y:e-r.bottom,labels:{background:"Bottom",vertical:"useMargin.bottom"}}))}const wt={title:"API/hooks/useMargin",component:s,parameters:{docs:{description:{component:"This story demonstrates the use of the `useMargin` hook to read chart margin in a responsive container."}}}},a={name:"useMargin",render:r=>t.createElement(l,{width:r.width,height:r.height},t.createElement(c,{data:b,margin:r.margin},t.createElement(d,{dataKey:"pv"}),t.createElement(u,{dataKey:"name"}),t.createElement(f,null),t.createElement(M,null),t.createElement(E,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var m,n,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
