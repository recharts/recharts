import{e as t}from"./iframe-C_RKSEYG.js";import{S as i}from"./ChartSizeDimensions-Du4NUIhU.js";import{J as s,h as g,f as h,R as l}from"./arrayEqualityCheck-XhN9n2BV.js";import{C as c}from"./ComposedChart-BzOUY-Ur.js";import{L as d}from"./Line-CObjJQTD.js";import{X as u}from"./XAxis-3q4SInU2.js";import{Y as f}from"./YAxis-Dw1AfdQf.js";import{L as M}from"./Legend-0q0gcXTg.js";import{p as b}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-wWOI_tEY.js";import"./immer-BXvw-sb6.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DJ6mrGyY.js";import"./index-BRt1FalZ.js";import"./hooks-BUBBsNP0.js";import"./axisSelectors-octxjJ6L.js";import"./d3-scale-Bly9GB_U.js";import"./zIndexSlice-Dau3iHk3.js";import"./renderedTicksSlice-BsnvkrRv.js";import"./CartesianChart-Dpt-Gkc_.js";import"./chartDataContext-Dj8ePN8G.js";import"./CategoricalChart-BeDTe7Ft.js";import"./Layer-Bdbbvous.js";import"./ReactUtils-CN-zxxkn.js";import"./Label-DjnSNkR5.js";import"./Text-DZ8oBtno.js";import"./DOMUtils-D3avAUhw.js";import"./ZIndexLayer-C2eZ7492.js";import"./ActivePoints-CR4cquNR.js";import"./Dot-DdhwcviA.js";import"./types-DsqucEgb.js";import"./RegisterGraphicalItemId-BrlGhgM7.js";import"./ErrorBarContext-B6LOYifa.js";import"./GraphicalItemClipPath-mtAKD-sR.js";import"./SetGraphicalItem-DAHF2TwR.js";import"./useAnimationId-A_rRmY4T.js";import"./getRadiusAndStrokeWidthFromDot-wxvSaUa-.js";import"./ActiveShapeUtils-DCdigpXF.js";import"./isPlainObject-DUDNoV38.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BR00ZYjW.js";import"./Trapezoid-BcY_848k.js";import"./Sector-C6nUzz_C.js";import"./Symbols-D-Mqycxx.js";import"./symbol-CQ2DdqBk.js";import"./step-CZqcHwF_.js";import"./Curve-C9iWhVEb.js";import"./CartesianAxis-Q9iq7WI3.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-UIzr0A2v.js";import"./uniqBy-BK5HoLxp.js";import"./iteratee-Dn6k9_7E.js";function E(){const r=s(),e=g(),o=h();return r==null||o==null||e==null?null:t.createElement(t.Fragment,null,t.createElement(i,{width:r.left,height:e,labels:{background:"Left",horizontal:"useMargin.left"}}),t.createElement(i,{width:r.right,x:o-r.right,height:e,labels:{background:"Right",horizontal:"useMargin.right"}}),t.createElement(i,{width:o,height:r.top,labels:{background:"Top",vertical:"useMargin.top"}}),t.createElement(i,{width:o,height:r.bottom,y:e-r.bottom,labels:{background:"Bottom",vertical:"useMargin.bottom"}}))}const wt={title:"API/hooks/useMargin",component:s,parameters:{docs:{description:{component:"This story demonstrates the use of the `useMargin` hook to read chart margin in a responsive container."}}}},a={name:"useMargin",render:r=>t.createElement(l,{width:r.width,height:r.height},t.createElement(c,{data:b,margin:r.margin},t.createElement(d,{dataKey:"pv"}),t.createElement(u,{dataKey:"name"}),t.createElement(f,null),t.createElement(M,null),t.createElement(E,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var m,n,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
