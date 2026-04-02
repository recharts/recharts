import{e as t}from"./iframe-BVwI20TL.js";import{S as i}from"./ChartSizeDimensions-BbmTVycb.js";import{J as s,h as g,f as h,R as l}from"./arrayEqualityCheck-q35BrOAH.js";import{C as c}from"./ComposedChart-gqrKgpX-.js";import{p as d}from"./Page-Cj8EiXz7.js";import{L as u}from"./Line-Cg3NfnSh.js";import{X as f}from"./XAxis-Luh5ls2c.js";import{Y as M}from"./YAxis-CkI3VGvs.js";import{L as b}from"./Legend-DNjSjV6V.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-PLOIW3pB.js";import"./immer-CKYyw7I3.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B1ccuPti.js";import"./index-aBikmdLQ.js";import"./hooks-DZGA03xX.js";import"./axisSelectors-BSaMlK4p.js";import"./d3-scale-DIeSkgov.js";import"./zIndexSlice-CZKvoJNP.js";import"./renderedTicksSlice-B3vc9s72.js";import"./CartesianChart-B_CBLak0.js";import"./chartDataContext-yFkjRteM.js";import"./CategoricalChart-CfauKlBd.js";import"./Layer-BmJqKhGN.js";import"./ReactUtils-dYl2dBOE.js";import"./Label-3Z8b_JxM.js";import"./Text-CcVVjC8p.js";import"./DOMUtils-aQVlIlVH.js";import"./ZIndexLayer-BZIg8_TU.js";import"./ActivePoints-B9lq65JZ.js";import"./Dot-DeCDV3Wq.js";import"./types-BIqLm2SJ.js";import"./RegisterGraphicalItemId-8gcs_7Mt.js";import"./ErrorBarContext-B-N11lls.js";import"./GraphicalItemClipPath-D5L_NXCW.js";import"./SetGraphicalItem-dD-mjnVv.js";import"./useAnimationId-CflNsn_7.js";import"./getRadiusAndStrokeWidthFromDot-DxWoOp80.js";import"./ActiveShapeUtils-BmYZJk21.js";import"./isPlainObject-BNX6QwlN.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B_wHaT59.js";import"./Trapezoid-C9IYD2pk.js";import"./Sector-B_oSB9k0.js";import"./Symbols-DeCFkgF7.js";import"./symbol-D_Kx8u1W.js";import"./step-BWajvomR.js";import"./Curve-Bi3if4gv.js";import"./CartesianAxis-lBH2hlA3.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-apNPQ-9u.js";import"./uniqBy-DR9geMAy.js";import"./iteratee-Cr_uQpDg.js";function E(){const r=s(),e=g(),o=h();return r==null||o==null||e==null?null:t.createElement(t.Fragment,null,t.createElement(i,{width:r.left,height:e,labels:{background:"Left",horizontal:"useMargin.left"}}),t.createElement(i,{width:r.right,x:o-r.right,height:e,labels:{background:"Right",horizontal:"useMargin.right"}}),t.createElement(i,{width:o,height:r.top,labels:{background:"Top",vertical:"useMargin.top"}}),t.createElement(i,{width:o,height:r.bottom,y:e-r.bottom,labels:{background:"Bottom",vertical:"useMargin.bottom"}}))}const wt={title:"API/hooks/useMargin",component:s,parameters:{docs:{description:{component:"This story demonstrates the use of the `useMargin` hook to read chart margin in a responsive container."}}}},a={name:"useMargin",render:r=>t.createElement(l,{width:r.width,height:r.height},t.createElement(c,{data:d,margin:r.margin},t.createElement(u,{dataKey:"pv"}),t.createElement(f,{dataKey:"name"}),t.createElement(M,null),t.createElement(b,null),t.createElement(E,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var m,n,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
