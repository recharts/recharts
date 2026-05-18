import{e as t}from"./iframe-CVCS2awI.js";import{S as i}from"./ChartSizeDimensions-Cz6I6g2_.js";import{ag as s,ab as g,ad as h,g as l}from"./arrayEqualityCheck-BScHcl7E.js";import{C as d}from"./ComposedChart-CZbWLpnK.js";import{p as c}from"./Page-DPte-9pC.js";import{L as u}from"./Line-KS6zX881.js";import{X as f}from"./XAxis-DEoN5sn7.js";import{Y as b}from"./YAxis-ofBsFmOO.js";import{L as M}from"./Legend-CcKK5dE7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-ByXJQ66f.js";import"./immer-BGDSirDa.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CsYjkcUu.js";import"./index-DBY1MSkk.js";import"./hooks-DdU_FuUR.js";import"./axisSelectors-Ci1MJvZY.js";import"./d3-scale-BXP4l8lb.js";import"./zIndexSlice-CYiE3KZh.js";import"./renderedTicksSlice-DEe4uQXq.js";import"./CartesianChart-g3EB1H8Z.js";import"./chartDataContext-CE4uM-kC.js";import"./CategoricalChart-DjXgWEwo.js";import"./Layer-ByxoiXYR.js";import"./ReactUtils-rjXWPyV6.js";import"./Label-DaKOoJ3c.js";import"./Text-CDmz-7H5.js";import"./DOMUtils-DM2Mtfvr.js";import"./ZIndexLayer-qvuGpwS0.js";import"./ActivePoints-hZ66QtRZ.js";import"./Dot-BYrokBNa.js";import"./types-Dgqt75FW.js";import"./RegisterGraphicalItemId-DdbYzmem.js";import"./ErrorBarContext-DiMABLnG.js";import"./GraphicalItemClipPath-_oXfIigP.js";import"./SetGraphicalItem-2oqi_YeH.js";import"./useAnimationId-B8F28VZa.js";import"./getRadiusAndStrokeWidthFromDot-l3MHvEmn.js";import"./ActiveShapeUtils-B0Gi97Qx.js";import"./isPlainObject-C1Vy2OK5.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DLDHpE0T.js";import"./Trapezoid-Drv7mFxs.js";import"./Sector-C1cGt--Q.js";import"./Symbols-Dz4m2MlL.js";import"./symbol-DdzOPpJh.js";import"./step-3E9Doowe.js";import"./Curve-CrfOdonX.js";import"./CartesianAxis-PbPLy1Ao.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-CI8CiQoP.js";import"./uniqBy-Bxp-pBrY.js";import"./iteratee-CHH-nYCc.js";function E(){const r=s(),e=g(),o=h();return r==null||o==null||e==null?null:t.createElement(t.Fragment,null,t.createElement(i,{width:r.left,height:e,labels:{background:"Left",horizontal:"useMargin.left"}}),t.createElement(i,{width:r.right,x:o-r.right,height:e,labels:{background:"Right",horizontal:"useMargin.right"}}),t.createElement(i,{width:o,height:r.top,labels:{background:"Top",vertical:"useMargin.top"}}),t.createElement(i,{width:o,height:r.bottom,y:e-r.bottom,labels:{background:"Bottom",vertical:"useMargin.bottom"}}))}const wt={title:"API/hooks/useMargin",component:s,parameters:{docs:{description:{component:"This story demonstrates the use of the `useMargin` hook to read chart margin in a responsive container."}}}},a={name:"useMargin",render:r=>t.createElement(l,{width:r.width,height:r.height},t.createElement(d,{data:c,margin:r.margin},t.createElement(u,{dataKey:"pv"}),t.createElement(f,{dataKey:"name"}),t.createElement(b,null),t.createElement(M,null),t.createElement(E,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var m,n,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
