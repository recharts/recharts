import{e as t}from"./iframe-BExdC6gN.js";import{S as i}from"./ChartSizeDimensions-DVous5ni.js";import{ah as s,ac as g,ae as h,g as l}from"./arrayEqualityCheck-DOMqUAof.js";import{C as c}from"./ComposedChart-CfHGhx4q.js";import{p as d}from"./Page-DPte-9pC.js";import{L as u}from"./Line-CtNgSGaI.js";import{X as f}from"./XAxis-CiJpP_bt.js";import{Y as M}from"./YAxis-CJCe92Ep.js";import{L as b}from"./Legend-B2lxEszQ.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BABy-fAx.js";import"./immer-fLQu0D5z.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BFXm4Z4I.js";import"./index-dnhQRVhY.js";import"./hooks-f9uoWTfr.js";import"./axisSelectors-G4Ozr4C7.js";import"./d3-scale-CPvJwxK1.js";import"./zIndexSlice-DqK4zht4.js";import"./renderedTicksSlice-Cgs3_pbO.js";import"./CartesianChart-DEFw3dUf.js";import"./chartDataContext-zs3q_52z.js";import"./CategoricalChart-GKia85wb.js";import"./Curve-BAgcgHZR.js";import"./types-DfAw3uAA.js";import"./step-D4OvHG8Z.js";import"./path-DyVhHtw_.js";import"./Layer-Bn8zfoRz.js";import"./ReactUtils-Dgl8JF7u.js";import"./Label-BEYaNe1v.js";import"./Text-DprtRutp.js";import"./DOMUtils-DUHeo9eF.js";import"./ZIndexLayer-7iJ9Z1BS.js";import"./ActivePoints-BRlCo6wv.js";import"./Dot-DeXpLXf5.js";import"./RegisterGraphicalItemId-CGA7gaf-.js";import"./ErrorBarContext-B68PiQ82.js";import"./GraphicalItemClipPath-B5kn33G8.js";import"./SetGraphicalItem-DVUCQsv1.js";import"./useAnimationId-DlRyv4oq.js";import"./getRadiusAndStrokeWidthFromDot-CEsaKSHL.js";import"./ActiveShapeUtils-BBh91YEI.js";import"./isPlainObject-Eh4Z7yDc.js";import"./isPlainObject-BSutPv-K.js";import"./CartesianAxis-DOEtdq2b.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-P9zroqHz.js";import"./symbol-DqwVPS5C.js";import"./useElementOffset-B0Mp0O5s.js";import"./uniqBy-RnJXqtWx.js";import"./iteratee-BYEtbo7d.js";function E(){const r=s(),e=g(),o=h();return r==null||o==null||e==null?null:t.createElement(t.Fragment,null,t.createElement(i,{width:r.left,height:e,labels:{background:"Left",horizontal:"useMargin.left"}}),t.createElement(i,{width:r.right,x:o-r.right,height:e,labels:{background:"Right",horizontal:"useMargin.right"}}),t.createElement(i,{width:o,height:r.top,labels:{background:"Top",vertical:"useMargin.top"}}),t.createElement(i,{width:o,height:r.bottom,y:e-r.bottom,labels:{background:"Bottom",vertical:"useMargin.bottom"}}))}const bt={title:"API/hooks/useMargin",component:s,parameters:{docs:{description:{component:"This story demonstrates the use of the `useMargin` hook to read chart margin in a responsive container."}}}},a={name:"useMargin",render:r=>t.createElement(l,{width:r.width,height:r.height},t.createElement(c,{data:d,margin:r.margin},t.createElement(u,{dataKey:"pv"}),t.createElement(f,{dataKey:"name"}),t.createElement(M,null),t.createElement(b,null),t.createElement(E,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var m,n,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(n=a.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const Et=["UseMargin"];export{a as UseMargin,Et as __namedExportsOrder,bt as default};
