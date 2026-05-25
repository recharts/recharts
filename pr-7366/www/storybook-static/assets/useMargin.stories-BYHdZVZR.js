import{e as t}from"./iframe-D1Y9TY-u.js";import{S as i}from"./ChartSizeDimensions-BkxRlTbK.js";import{ah as p,ac as g,ae as h,g as l}from"./arrayEqualityCheck-DPvIBees.js";import{C as c}from"./ComposedChart-Dv2kn-Hm.js";import{p as d}from"./Page-DPte-9pC.js";import{L as u}from"./Line-DINGk1Pq.js";import{X as f}from"./XAxis-5BMZV76c.js";import{Y as M}from"./YAxis-D2V4IA3o.js";import{L as b}from"./Legend-DsviXKmW.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DD8L0n44.js";import"./immer-CxQQPMht.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B0rnCwdR.js";import"./index-D5E_lAb8.js";import"./hooks-CFGEq-6u.js";import"./axisSelectors-DhcMUj02.js";import"./d3-scale-BrKRNhi9.js";import"./zIndexSlice-CgFHZos-.js";import"./renderedTicksSlice-W-15kQDb.js";import"./CartesianChart-B6m73if6.js";import"./chartDataContext-C5ZGItfB.js";import"./CategoricalChart-DcwMFRg_.js";import"./Curve-5XiXyCEh.js";import"./types-BaB5y5-3.js";import"./step-kC9Mr0-h.js";import"./path-DyVhHtw_.js";import"./Layer-B3bXBbbL.js";import"./ReactUtils-Cn5gX129.js";import"./Label-DE2OURwo.js";import"./Text-Dd-bZYpK.js";import"./DOMUtils-DyWiHKN-.js";import"./ZIndexLayer-CfpM-rLj.js";import"./ActivePoints-B66CzNHK.js";import"./Dot-DAICBiMe.js";import"./RegisterGraphicalItemId-Bn3tPr19.js";import"./ErrorBarContext-BTNYxynC.js";import"./GraphicalItemClipPath-BvycXnEO.js";import"./SetGraphicalItem-B11RgMwt.js";import"./useAnimationId-BZgLvOHt.js";import"./getRadiusAndStrokeWidthFromDot-Ba8qt8Pw.js";import"./ActiveShapeUtils-D80gxDtc.js";import"./CartesianAxis-BWlWM6yy.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-CqvIZRje.js";import"./symbol-DNxYcXd2.js";import"./useElementOffset-BtDVv38m.js";import"./uniqBy-EEMST3z6.js";import"./iteratee-DqKHEi3O.js";function E(){const r=p(),e=g(),o=h();return r==null||o==null||e==null?null:t.createElement(t.Fragment,null,t.createElement(i,{width:r.left,height:e,labels:{background:"Left",horizontal:"useMargin.left"}}),t.createElement(i,{width:r.right,x:o-r.right,height:e,labels:{background:"Right",horizontal:"useMargin.right"}}),t.createElement(i,{width:o,height:r.top,labels:{background:"Top",vertical:"useMargin.top"}}),t.createElement(i,{width:o,height:r.bottom,y:e-r.bottom,labels:{background:"Bottom",vertical:"useMargin.bottom"}}))}const ft={title:"API/hooks/useMargin",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `useMargin` hook to read chart margin in a responsive container."}}}},a={name:"useMargin",render:r=>t.createElement(l,{width:r.width,height:r.height},t.createElement(c,{data:d,margin:r.margin},t.createElement(u,{dataKey:"pv"}),t.createElement(f,{dataKey:"name"}),t.createElement(M,null),t.createElement(b,null),t.createElement(E,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var m,n,s;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
