import{e as t}from"./iframe-CgO1MpLR.js";import{S as i}from"./ChartSizeDimensions-BHD_hXk_.js";import{J as s,h as g,f as h,R as l}from"./arrayEqualityCheck-u-i53ess.js";import{C as c}from"./ComposedChart-_NVVn82o.js";import{L as d}from"./Line-BmBLmpVt.js";import{X as u}from"./XAxis-2XcNPuPe.js";import{Y as f}from"./YAxis-DlCb0Sdu.js";import{L as M}from"./Legend-DbHoqBrs.js";import{p as b}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DhOBRlG4.js";import"./immer-CbOoSQee.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CDt2FmMO.js";import"./index-DXMTaf8u.js";import"./hooks-2os6LPs1.js";import"./axisSelectors-GgUYtUsd.js";import"./d3-scale-DrxfQAZk.js";import"./zIndexSlice-Bk7fG6-8.js";import"./renderedTicksSlice-BCt2n75F.js";import"./CartesianChart-9rc0WcRq.js";import"./chartDataContext-BsDrumof.js";import"./CategoricalChart-B51A2DYk.js";import"./Layer-BnKx9soM.js";import"./ReactUtils-aHtS1QKc.js";import"./Label-DuKpvZQ2.js";import"./Text-BsiCf19y.js";import"./DOMUtils-ClzY_4R6.js";import"./ZIndexLayer-GawZf7gt.js";import"./ActivePoints-4Dquq-We.js";import"./Dot-i5e7mgOR.js";import"./types-CR8KEC21.js";import"./RegisterGraphicalItemId-DbAYEj3z.js";import"./ErrorBarContext-CuzIsVL-.js";import"./GraphicalItemClipPath-Kfq1Q5v1.js";import"./SetGraphicalItem-BLM5KnkQ.js";import"./useAnimationId-DCzIcKnG.js";import"./getRadiusAndStrokeWidthFromDot-DB6-Bj1Z.js";import"./ActiveShapeUtils-B380zvEd.js";import"./isPlainObject-BwngMX5y.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-By3Xy3Xn.js";import"./Trapezoid-CIGdjkmu.js";import"./Sector-D7mFZfC7.js";import"./Symbols-gxmwBdwn.js";import"./symbol-BbAFTquJ.js";import"./step-Do923Rg0.js";import"./Curve-DQA1Id8x.js";import"./CartesianAxis-BWRdw-B1.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-DfZinX6A.js";import"./uniqBy-D_Tq5wIv.js";import"./iteratee-BApfnIwz.js";function E(){const r=s(),e=g(),o=h();return r==null||o==null||e==null?null:t.createElement(t.Fragment,null,t.createElement(i,{width:r.left,height:e,labels:{background:"Left",horizontal:"useMargin.left"}}),t.createElement(i,{width:r.right,x:o-r.right,height:e,labels:{background:"Right",horizontal:"useMargin.right"}}),t.createElement(i,{width:o,height:r.top,labels:{background:"Top",vertical:"useMargin.top"}}),t.createElement(i,{width:o,height:r.bottom,y:e-r.bottom,labels:{background:"Bottom",vertical:"useMargin.bottom"}}))}const wt={title:"API/hooks/useMargin",component:s,parameters:{docs:{description:{component:"This story demonstrates the use of the `useMargin` hook to read chart margin in a responsive container."}}}},a={name:"useMargin",render:r=>t.createElement(l,{width:r.width,height:r.height},t.createElement(c,{data:b,margin:r.margin},t.createElement(d,{dataKey:"pv"}),t.createElement(u,{dataKey:"name"}),t.createElement(f,null),t.createElement(M,null),t.createElement(E,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var m,n,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
