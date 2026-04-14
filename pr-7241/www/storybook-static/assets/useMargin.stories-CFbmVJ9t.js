import{e as t}from"./iframe-BjsnxMFa.js";import{S as i}from"./ChartSizeDimensions-DSkMKFoU.js";import{J as s,h as g,f as h,R as l}from"./arrayEqualityCheck-D79Z1Ft6.js";import{C as c}from"./ComposedChart-szjriw08.js";import{p as d}from"./Page-Cj8EiXz7.js";import{L as u}from"./Line-BrfP0Qst.js";import{X as f}from"./XAxis-CLgGW7JB.js";import{Y as M}from"./YAxis-BVFVddBL.js";import{L as b}from"./Legend-yPgKTZ-e.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-C6oA156h.js";import"./immer-Be7tY_HI.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CW1Hf6N5.js";import"./index-jIvfCkDE.js";import"./hooks-CrPS60z-.js";import"./axisSelectors-DQ8vP1dP.js";import"./d3-scale-DFeGtgyL.js";import"./zIndexSlice-CqY4Aros.js";import"./renderedTicksSlice-BRzJlOTm.js";import"./CartesianChart-D_ZObIBU.js";import"./chartDataContext-CN9xXS5D.js";import"./CategoricalChart-CTcIqTOw.js";import"./Layer-iA63SD1n.js";import"./ReactUtils-BGdgbQc7.js";import"./Label-j2useUX0.js";import"./Text-B0WMAGdM.js";import"./DOMUtils-BmB9R95C.js";import"./ZIndexLayer-DSdMaSo2.js";import"./ActivePoints-CfR2rHSN.js";import"./Dot-CjenfdSB.js";import"./types-BiDeCyZf.js";import"./RegisterGraphicalItemId-BPn4ir3H.js";import"./ErrorBarContext-BeXR1TDd.js";import"./GraphicalItemClipPath-DdpuzGUU.js";import"./SetGraphicalItem-CNGahdfh.js";import"./useAnimationId-B32Lfo5E.js";import"./getRadiusAndStrokeWidthFromDot-Dunai21J.js";import"./ActiveShapeUtils-BjYnAn6x.js";import"./isPlainObject-OzrxZJ1P.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CAvBODoh.js";import"./Trapezoid-BhCHPlaL.js";import"./Sector-Dfr3Hfmg.js";import"./Symbols-D6JP1e2h.js";import"./symbol-GAGGshWY.js";import"./step-CB61oaUG.js";import"./Curve-DKq8m8L2.js";import"./CartesianAxis-CEeDfojt.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-CRjg3G-v.js";import"./uniqBy-D7WiUy_u.js";import"./iteratee-C_gnpoXw.js";function E(){const r=s(),e=g(),o=h();return r==null||o==null||e==null?null:t.createElement(t.Fragment,null,t.createElement(i,{width:r.left,height:e,labels:{background:"Left",horizontal:"useMargin.left"}}),t.createElement(i,{width:r.right,x:o-r.right,height:e,labels:{background:"Right",horizontal:"useMargin.right"}}),t.createElement(i,{width:o,height:r.top,labels:{background:"Top",vertical:"useMargin.top"}}),t.createElement(i,{width:o,height:r.bottom,y:e-r.bottom,labels:{background:"Bottom",vertical:"useMargin.bottom"}}))}const wt={title:"API/hooks/useMargin",component:s,parameters:{docs:{description:{component:"This story demonstrates the use of the `useMargin` hook to read chart margin in a responsive container."}}}},a={name:"useMargin",render:r=>t.createElement(l,{width:r.width,height:r.height},t.createElement(c,{data:d,margin:r.margin},t.createElement(u,{dataKey:"pv"}),t.createElement(f,{dataKey:"name"}),t.createElement(M,null),t.createElement(b,null),t.createElement(E,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var m,n,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
