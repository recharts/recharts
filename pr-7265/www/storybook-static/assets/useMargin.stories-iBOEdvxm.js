import{e as t}from"./iframe-jbS-E__g.js";import{S as i}from"./ChartSizeDimensions-BpE-Gxiy.js";import{J as s,h as g,f as h,R as l}from"./arrayEqualityCheck-Bc6HaNgk.js";import{C as c}from"./ComposedChart-CltpXdcI.js";import{p as d}from"./Page-Cj8EiXz7.js";import{L as u}from"./Line-Etl43fu5.js";import{X as f}from"./XAxis-D2ruk6hB.js";import{Y as M}from"./YAxis-pXEMWudQ.js";import{L as b}from"./Legend-arlg7icL.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-AZHx8nL2.js";import"./immer-1JIHG1sP.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B-Sq2tux.js";import"./index-CUlk-TbT.js";import"./hooks-BJbsnZ8W.js";import"./axisSelectors--9NjHi9J.js";import"./d3-scale-CgsVpM20.js";import"./zIndexSlice-fK74Fe27.js";import"./renderedTicksSlice-kref20Pz.js";import"./CartesianChart-Bb9w7oEt.js";import"./chartDataContext-ZjVOMNJz.js";import"./CategoricalChart-Ca7o1_-0.js";import"./Layer-D3-cQotP.js";import"./ReactUtils-CmIIaVE7.js";import"./Label-CqNEB3cA.js";import"./Text-DPOTj-ff.js";import"./DOMUtils-Co4AyA4r.js";import"./ZIndexLayer-C0UmvjN1.js";import"./ActivePoints-BAygIn8R.js";import"./Dot-B5SXOt0E.js";import"./types-KpzOghRu.js";import"./RegisterGraphicalItemId-B4Mgvmap.js";import"./ErrorBarContext-BTnDLWKc.js";import"./GraphicalItemClipPath-DQWRROhy.js";import"./SetGraphicalItem-CLdOZJOU.js";import"./useAnimationId-Dl-7lH7S.js";import"./getRadiusAndStrokeWidthFromDot-BQh-5tcv.js";import"./ActiveShapeUtils-BRRS2IIP.js";import"./isPlainObject-CVxhLbCo.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CttT3kPR.js";import"./Trapezoid-BNwixCzS.js";import"./Sector-C7-FdoJb.js";import"./Symbols-BT1y5TAN.js";import"./symbol-DR7gyPC3.js";import"./step-CRkklqfM.js";import"./Curve-BHonL5AG.js";import"./CartesianAxis-DVvLgkRy.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-CiRQlEhg.js";import"./uniqBy-CPO7hTdl.js";import"./iteratee-BUzB0L-p.js";function E(){const r=s(),e=g(),o=h();return r==null||o==null||e==null?null:t.createElement(t.Fragment,null,t.createElement(i,{width:r.left,height:e,labels:{background:"Left",horizontal:"useMargin.left"}}),t.createElement(i,{width:r.right,x:o-r.right,height:e,labels:{background:"Right",horizontal:"useMargin.right"}}),t.createElement(i,{width:o,height:r.top,labels:{background:"Top",vertical:"useMargin.top"}}),t.createElement(i,{width:o,height:r.bottom,y:e-r.bottom,labels:{background:"Bottom",vertical:"useMargin.bottom"}}))}const wt={title:"API/hooks/useMargin",component:s,parameters:{docs:{description:{component:"This story demonstrates the use of the `useMargin` hook to read chart margin in a responsive container."}}}},a={name:"useMargin",render:r=>t.createElement(l,{width:r.width,height:r.height},t.createElement(c,{data:d,margin:r.margin},t.createElement(u,{dataKey:"pv"}),t.createElement(f,{dataKey:"name"}),t.createElement(M,null),t.createElement(b,null),t.createElement(E,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var m,n,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
