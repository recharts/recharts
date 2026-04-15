import{e as t}from"./iframe-2KzY7SZI.js";import{S as i}from"./ChartSizeDimensions-OFKXx0KH.js";import{J as s,h as g,f as h,R as l}from"./arrayEqualityCheck-C_KFC4aG.js";import{C as c}from"./ComposedChart-BTJVM0N_.js";import{p as d}from"./Page-Cj8EiXz7.js";import{L as u}from"./Line-B_bmc7jI.js";import{X as f}from"./XAxis-IZqHvSRM.js";import{Y as M}from"./YAxis-BdZCTlTT.js";import{L as b}from"./Legend-DFsMMSVt.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DCkyn-XH.js";import"./immer-BbCSCUWa.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-6FLOJafv.js";import"./index-DWwY0oag.js";import"./hooks-D41MmbXB.js";import"./axisSelectors-btICR-6o.js";import"./d3-scale-YB1UXNlF.js";import"./zIndexSlice-DkD_gkVE.js";import"./renderedTicksSlice-DkyMgPSK.js";import"./CartesianChart-BjELWt2X.js";import"./chartDataContext-Cd81LqCh.js";import"./CategoricalChart-XS_rytPK.js";import"./Layer-CDY6haxt.js";import"./ReactUtils-CP-aoZRs.js";import"./Label-30J3b0Tu.js";import"./Text-D9eiSsSq.js";import"./DOMUtils-qhd3ut3X.js";import"./ZIndexLayer-CjxdKwx6.js";import"./ActivePoints-A9eI8SQH.js";import"./Dot-D6GzpgpC.js";import"./types-C82LLnNR.js";import"./RegisterGraphicalItemId-vClWkM0Z.js";import"./ErrorBarContext-CYcgyRmM.js";import"./GraphicalItemClipPath-D6n4jgua.js";import"./SetGraphicalItem-BxWbQ_06.js";import"./useAnimationId-DwCOtHiA.js";import"./getRadiusAndStrokeWidthFromDot-PInnfI7S.js";import"./ActiveShapeUtils-CWrruK-s.js";import"./isPlainObject-k6awtQUp.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CQd-B1Q8.js";import"./Trapezoid-BF_TMfHF.js";import"./Sector-Bhzm6McX.js";import"./Symbols-BgWJ7GGh.js";import"./symbol-D5FcbSZZ.js";import"./step-B9r6R9dH.js";import"./Curve-D8MF2fMv.js";import"./CartesianAxis-iQKBE-lF.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-Cy_K7xEb.js";import"./uniqBy-DOsmyNAl.js";import"./iteratee-DwOYEDyO.js";function E(){const r=s(),e=g(),o=h();return r==null||o==null||e==null?null:t.createElement(t.Fragment,null,t.createElement(i,{width:r.left,height:e,labels:{background:"Left",horizontal:"useMargin.left"}}),t.createElement(i,{width:r.right,x:o-r.right,height:e,labels:{background:"Right",horizontal:"useMargin.right"}}),t.createElement(i,{width:o,height:r.top,labels:{background:"Top",vertical:"useMargin.top"}}),t.createElement(i,{width:o,height:r.bottom,y:e-r.bottom,labels:{background:"Bottom",vertical:"useMargin.bottom"}}))}const wt={title:"API/hooks/useMargin",component:s,parameters:{docs:{description:{component:"This story demonstrates the use of the `useMargin` hook to read chart margin in a responsive container."}}}},a={name:"useMargin",render:r=>t.createElement(l,{width:r.width,height:r.height},t.createElement(c,{data:d,margin:r.margin},t.createElement(u,{dataKey:"pv"}),t.createElement(f,{dataKey:"name"}),t.createElement(M,null),t.createElement(b,null),t.createElement(E,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var m,n,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
