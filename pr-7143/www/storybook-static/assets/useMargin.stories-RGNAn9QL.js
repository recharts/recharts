import{e as t}from"./iframe-jjkKyBnh.js";import{S as i}from"./ChartSizeDimensions-CLm1CpLg.js";import{J as s,h as g,f as h,R as l}from"./arrayEqualityCheck-CUp7G6cL.js";import{C as c}from"./ComposedChart-DegKGvWA.js";import{L as d}from"./Line-BsmnuUVe.js";import{X as u}from"./XAxis-Bdq6Jw3w.js";import{Y as f}from"./YAxis-C86w3msg.js";import{L as M}from"./Legend-BmRsAw2I.js";import{p as b}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-zELNaCXr.js";import"./immer-BbVLmXrm.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-JqguxFU2.js";import"./index-BEHJeVcn.js";import"./hooks-wocA-lGH.js";import"./axisSelectors-Dd4S0Ceb.js";import"./d3-scale-Ckxg_Ns_.js";import"./zIndexSlice-CuuIJiqa.js";import"./renderedTicksSlice-B60M8aLp.js";import"./CartesianChart-BCXq_jCV.js";import"./chartDataContext-D_AkUCKZ.js";import"./CategoricalChart-C0mCf7ot.js";import"./Layer-Dm-ZljB7.js";import"./ReactUtils-CrwQQyAX.js";import"./Label-BaP8ifBC.js";import"./Text-C_U00kEv.js";import"./DOMUtils-BMT21emC.js";import"./ZIndexLayer-CNnwO4iC.js";import"./ActivePoints-Das5y6E5.js";import"./Dot-BQZVzyoQ.js";import"./types-BzZyKnH8.js";import"./RegisterGraphicalItemId-DhCgr3Sg.js";import"./ErrorBarContext-BqWlziyG.js";import"./GraphicalItemClipPath-CX2YOSCG.js";import"./SetGraphicalItem-CEEkaG-5.js";import"./useAnimationId-XeqIoJ00.js";import"./getRadiusAndStrokeWidthFromDot-FiGNG78A.js";import"./ActiveShapeUtils-g0vfssj-.js";import"./isPlainObject-BGF86Xvm.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-T-u3oWfl.js";import"./Trapezoid-BeD-5DNQ.js";import"./Sector-Cy9ueYzv.js";import"./Symbols-D7PwakqN.js";import"./symbol-iVbFGN4-.js";import"./step-CFbXCSW0.js";import"./Curve-D2x3KFrb.js";import"./CartesianAxis-CIGCYBrz.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-qOR8Wsad.js";import"./uniqBy-DdvsGrc1.js";import"./iteratee-PTDtPL5V.js";function E(){const r=s(),e=g(),o=h();return r==null||o==null||e==null?null:t.createElement(t.Fragment,null,t.createElement(i,{width:r.left,height:e,labels:{background:"Left",horizontal:"useMargin.left"}}),t.createElement(i,{width:r.right,x:o-r.right,height:e,labels:{background:"Right",horizontal:"useMargin.right"}}),t.createElement(i,{width:o,height:r.top,labels:{background:"Top",vertical:"useMargin.top"}}),t.createElement(i,{width:o,height:r.bottom,y:e-r.bottom,labels:{background:"Bottom",vertical:"useMargin.bottom"}}))}const wt={title:"API/hooks/useMargin",component:s,parameters:{docs:{description:{component:"This story demonstrates the use of the `useMargin` hook to read chart margin in a responsive container."}}}},a={name:"useMargin",render:r=>t.createElement(l,{width:r.width,height:r.height},t.createElement(c,{data:b,margin:r.margin},t.createElement(d,{dataKey:"pv"}),t.createElement(u,{dataKey:"name"}),t.createElement(f,null),t.createElement(M,null),t.createElement(E,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var m,n,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
