import{e as t}from"./iframe-DV9Ev_ie.js";import{S as i}from"./ChartSizeDimensions-CdNN_o6b.js";import{J as s,h as g,f as h,R as l}from"./arrayEqualityCheck-DZA7w_Bp.js";import{C as c}from"./ComposedChart-BgY2G0Pe.js";import{p as d}from"./Page-Cj8EiXz7.js";import{L as u}from"./Line-CHEmmSQ1.js";import{X as f}from"./XAxis-D2587yBO.js";import{Y as M}from"./YAxis-Bm2CKIBG.js";import{L as b}from"./Legend-bd7wrWHk.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Df82JNH7.js";import"./immer-BixWiXhD.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DhKJ-pN_.js";import"./index-Bky92Y6v.js";import"./hooks-DHdaviyJ.js";import"./axisSelectors-B_EYpjD9.js";import"./d3-scale-B-Q90L68.js";import"./zIndexSlice-BRPsmEL1.js";import"./renderedTicksSlice-DCke5O88.js";import"./CartesianChart-Cbu_0e1L.js";import"./chartDataContext-DSMYXZ4e.js";import"./CategoricalChart-DJtN3jt_.js";import"./Layer-BqOaf8xV.js";import"./ReactUtils-DkzvKT6G.js";import"./Label--ztUVZ3i.js";import"./Text--RFKRppg.js";import"./DOMUtils-CiIcfYdd.js";import"./ZIndexLayer-C8euaCum.js";import"./ActivePoints-BBkQSQpw.js";import"./Dot-CeMR27_E.js";import"./types-8qlrq-tq.js";import"./RegisterGraphicalItemId-fV7oEbJx.js";import"./ErrorBarContext-KDIj2oXC.js";import"./GraphicalItemClipPath-DvLqBiqP.js";import"./SetGraphicalItem-DIvDoWjl.js";import"./useAnimationId-CtSlzYdH.js";import"./getRadiusAndStrokeWidthFromDot-CJZz_FDP.js";import"./ActiveShapeUtils-Duc_m_vE.js";import"./isPlainObject-B3OPGy8K.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-FILpJ6On.js";import"./Trapezoid-sNlfsjwh.js";import"./Sector-C5qUq4cG.js";import"./Symbols-H35j_AL3.js";import"./symbol-BxNtN3Tt.js";import"./step-Ct5f--oN.js";import"./Curve-BVz3ddlm.js";import"./CartesianAxis-DWCZU6Tq.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-DH0zqrwg.js";import"./uniqBy-DQ9VqyX-.js";import"./iteratee-B0cPffwU.js";function E(){const r=s(),e=g(),o=h();return r==null||o==null||e==null?null:t.createElement(t.Fragment,null,t.createElement(i,{width:r.left,height:e,labels:{background:"Left",horizontal:"useMargin.left"}}),t.createElement(i,{width:r.right,x:o-r.right,height:e,labels:{background:"Right",horizontal:"useMargin.right"}}),t.createElement(i,{width:o,height:r.top,labels:{background:"Top",vertical:"useMargin.top"}}),t.createElement(i,{width:o,height:r.bottom,y:e-r.bottom,labels:{background:"Bottom",vertical:"useMargin.bottom"}}))}const wt={title:"API/hooks/useMargin",component:s,parameters:{docs:{description:{component:"This story demonstrates the use of the `useMargin` hook to read chart margin in a responsive container."}}}},a={name:"useMargin",render:r=>t.createElement(l,{width:r.width,height:r.height},t.createElement(c,{data:d,margin:r.margin},t.createElement(u,{dataKey:"pv"}),t.createElement(f,{dataKey:"name"}),t.createElement(M,null),t.createElement(b,null),t.createElement(E,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var m,n,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
