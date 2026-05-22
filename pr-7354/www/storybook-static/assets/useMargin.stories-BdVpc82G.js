import{e as t}from"./iframe-wPjdlMkh.js";import{S as i}from"./ChartSizeDimensions-CSliTc3n.js";import{ah as p,ac as g,ae as h,g as l}from"./arrayEqualityCheck-C2qrry8R.js";import{C as c}from"./ComposedChart-DRK5OR9O.js";import{p as d}from"./Page-DPte-9pC.js";import{L as u}from"./Line-3LeznW14.js";import{X as f}from"./XAxis-_OYHLA6K.js";import{Y as M}from"./YAxis-CALSYCDu.js";import{L as b}from"./Legend-TABkCGtc.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DRV1yjEG.js";import"./immer-BpPfFNPI.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B-jo2qpq.js";import"./index-CRU-lK14.js";import"./hooks-DMKFe6xQ.js";import"./axisSelectors-BeV9utXI.js";import"./d3-scale-NFHY5pWC.js";import"./zIndexSlice-CfQuOadn.js";import"./renderedTicksSlice-DSJJKDzx.js";import"./CartesianChart-TFHKXQrQ.js";import"./chartDataContext-Ds7D7t0h.js";import"./CategoricalChart-C7FeICx9.js";import"./Curve-CTJQqo2b.js";import"./types-D-aEIpto.js";import"./step-BR5xtyiz.js";import"./path-DyVhHtw_.js";import"./Layer-Cueh5NkG.js";import"./ReactUtils-DkGkgP-m.js";import"./Label-BRKSm8Ce.js";import"./Text-D_Ir2n4d.js";import"./DOMUtils-CiWWI4hV.js";import"./ZIndexLayer-D9w89N_j.js";import"./ActivePoints-0zG1dEq0.js";import"./Dot-BxnY7nzN.js";import"./RegisterGraphicalItemId-CMP7i145.js";import"./ErrorBarContext-C8p1ky5C.js";import"./GraphicalItemClipPath-Iqn3z8Uo.js";import"./SetGraphicalItem-FTMP51O8.js";import"./useAnimationId-FpSV_Xeh.js";import"./getRadiusAndStrokeWidthFromDot-BcYs4mGB.js";import"./ActiveShapeUtils-Dm52jN-p.js";import"./CartesianAxis-BzSAAt9Y.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-CxPJ2NK4.js";import"./symbol-0Nqa0CmC.js";import"./useElementOffset-BW7DH_NQ.js";import"./uniqBy-Csen4X-d.js";import"./iteratee-Bu02any-.js";function E(){const r=p(),e=g(),o=h();return r==null||o==null||e==null?null:t.createElement(t.Fragment,null,t.createElement(i,{width:r.left,height:e,labels:{background:"Left",horizontal:"useMargin.left"}}),t.createElement(i,{width:r.right,x:o-r.right,height:e,labels:{background:"Right",horizontal:"useMargin.right"}}),t.createElement(i,{width:o,height:r.top,labels:{background:"Top",vertical:"useMargin.top"}}),t.createElement(i,{width:o,height:r.bottom,y:e-r.bottom,labels:{background:"Bottom",vertical:"useMargin.bottom"}}))}const ft={title:"API/hooks/useMargin",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `useMargin` hook to read chart margin in a responsive container."}}}},a={name:"useMargin",render:r=>t.createElement(l,{width:r.width,height:r.height},t.createElement(c,{data:d,margin:r.margin},t.createElement(u,{dataKey:"pv"}),t.createElement(f,{dataKey:"name"}),t.createElement(M,null),t.createElement(b,null),t.createElement(E,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var m,n,s;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
