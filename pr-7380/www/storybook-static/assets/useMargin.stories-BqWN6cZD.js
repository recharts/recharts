import{e as t}from"./iframe-OJf-GSLb.js";import{S as i}from"./ChartSizeDimensions-CdI027Rl.js";import{ah as p,ac as g,ae as h,g as l}from"./arrayEqualityCheck-2_Nd0mNT.js";import{C as c}from"./ComposedChart-BWezQ33r.js";import{p as d}from"./Page-DPte-9pC.js";import{L as u}from"./Line-CxGxpbK3.js";import{X as f}from"./XAxis-CUozMhVT.js";import{Y as M}from"./YAxis-DlvLAsVD.js";import{L as b}from"./Legend-BrKSycFF.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BhVQCFaS.js";import"./immer-fAzYVHYH.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-3Zay038b.js";import"./index-DjZjz4Db.js";import"./hooks-CH3cPIGX.js";import"./axisSelectors-kxctmjqQ.js";import"./d3-scale-DxGCPbiE.js";import"./zIndexSlice-CRdCk5dL.js";import"./renderedTicksSlice-DYga_drD.js";import"./CartesianChart-CJkqFERC.js";import"./chartDataContext-NT00FYUd.js";import"./CategoricalChart-BCcW9_uy.js";import"./Curve-Cdrr4XTN.js";import"./types-DpddDWMl.js";import"./step-4r8B6sQi.js";import"./path-DyVhHtw_.js";import"./Layer-DtNuGt5z.js";import"./ReactUtils-CyupdVou.js";import"./Label-B3MBaUXp.js";import"./Text-ArxOC8oM.js";import"./DOMUtils-CMlg3GAM.js";import"./ZIndexLayer-BJFmSDw9.js";import"./ActivePoints-C9vqSoFh.js";import"./Dot-brDQHNAJ.js";import"./RegisterGraphicalItemId-BFbrCMwR.js";import"./ErrorBarContext-A27a6g1h.js";import"./GraphicalItemClipPath-QzIzaY2E.js";import"./SetGraphicalItem-B_Nz5Xvt.js";import"./useAnimationId-Dwrr6l_F.js";import"./getRadiusAndStrokeWidthFromDot-CpS1-IJD.js";import"./ActiveShapeUtils-CU2HJa4X.js";import"./CartesianAxis-Bqyi-QIr.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Symbols-Cdsrrpbe.js";import"./symbol-xNgab6R1.js";import"./useElementOffset-DO9IDGjg.js";import"./uniqBy-ChVqF39z.js";import"./iteratee-CbbfjsHA.js";function E(){const r=p(),e=g(),o=h();return r==null||o==null||e==null?null:t.createElement(t.Fragment,null,t.createElement(i,{width:r.left,height:e,labels:{background:"Left",horizontal:"useMargin.left"}}),t.createElement(i,{width:r.right,x:o-r.right,height:e,labels:{background:"Right",horizontal:"useMargin.right"}}),t.createElement(i,{width:o,height:r.top,labels:{background:"Top",vertical:"useMargin.top"}}),t.createElement(i,{width:o,height:r.bottom,y:e-r.bottom,labels:{background:"Bottom",vertical:"useMargin.bottom"}}))}const ft={title:"API/hooks/useMargin",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `useMargin` hook to read chart margin in a responsive container."}}}},a={name:"useMargin",render:r=>t.createElement(l,{width:r.width,height:r.height},t.createElement(c,{data:d,margin:r.margin},t.createElement(u,{dataKey:"pv"}),t.createElement(f,{dataKey:"name"}),t.createElement(M,null),t.createElement(b,null),t.createElement(E,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var m,n,s;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
