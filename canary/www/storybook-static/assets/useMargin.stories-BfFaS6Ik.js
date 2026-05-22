import{e as t}from"./iframe-BhUxTtiL.js";import{S as i}from"./ChartSizeDimensions-Bic6l-OJ.js";import{ah as p,ac as g,ae as h,g as l}from"./arrayEqualityCheck-DppgWusB.js";import{C as c}from"./ComposedChart-BMn_6oDC.js";import{p as d}from"./Page-DPte-9pC.js";import{L as u}from"./Line-p3VovnKi.js";import{X as f}from"./XAxis-C73en9jh.js";import{Y as M}from"./YAxis-CqkUk7nh.js";import{L as b}from"./Legend-307I_yqh.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BwRhqspK.js";import"./immer-CHCHxlI3.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BR1uoXx0.js";import"./index-XjGx_uyE.js";import"./hooks-DR2LEq6I.js";import"./axisSelectors-CJkBbfZc.js";import"./d3-scale-XHTmrGeR.js";import"./zIndexSlice-nXWOo65n.js";import"./renderedTicksSlice-CYNpjUFM.js";import"./CartesianChart-Bbu5UDic.js";import"./chartDataContext-l2E_xhbE.js";import"./CategoricalChart-BpuJQUho.js";import"./Curve-BICrVSEu.js";import"./types-Lg-gn8wA.js";import"./step-DotG6x7P.js";import"./path-DyVhHtw_.js";import"./Layer-BGQI9FGV.js";import"./ReactUtils-BLhQELGN.js";import"./Label-B-L_WnHM.js";import"./Text-_q4HIlMq.js";import"./DOMUtils-BPHETHho.js";import"./ZIndexLayer-BPpIaF6c.js";import"./ActivePoints-B8FRaVHI.js";import"./Dot-Bn8XUR1d.js";import"./RegisterGraphicalItemId-05uKE1t1.js";import"./ErrorBarContext-xJxnsNXv.js";import"./GraphicalItemClipPath-CLhlaT2j.js";import"./SetGraphicalItem-C4bg6-5U.js";import"./useAnimationId-B-QfnVAI.js";import"./getRadiusAndStrokeWidthFromDot-CjnN3OM9.js";import"./ActiveShapeUtils-BtaI_SKC.js";import"./CartesianAxis-Dg6rum68.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-DS4uPA9_.js";import"./symbol-CUmDLBsP.js";import"./useElementOffset-JSdm64jE.js";import"./uniqBy-BCcn4akX.js";import"./iteratee-BIvWeTYe.js";function E(){const r=p(),e=g(),o=h();return r==null||o==null||e==null?null:t.createElement(t.Fragment,null,t.createElement(i,{width:r.left,height:e,labels:{background:"Left",horizontal:"useMargin.left"}}),t.createElement(i,{width:r.right,x:o-r.right,height:e,labels:{background:"Right",horizontal:"useMargin.right"}}),t.createElement(i,{width:o,height:r.top,labels:{background:"Top",vertical:"useMargin.top"}}),t.createElement(i,{width:o,height:r.bottom,y:e-r.bottom,labels:{background:"Bottom",vertical:"useMargin.bottom"}}))}const ft={title:"API/hooks/useMargin",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `useMargin` hook to read chart margin in a responsive container."}}}},a={name:"useMargin",render:r=>t.createElement(l,{width:r.width,height:r.height},t.createElement(c,{data:d,margin:r.margin},t.createElement(u,{dataKey:"pv"}),t.createElement(f,{dataKey:"name"}),t.createElement(M,null),t.createElement(b,null),t.createElement(E,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var m,n,s;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
