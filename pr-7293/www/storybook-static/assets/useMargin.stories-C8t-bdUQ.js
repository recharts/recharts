import{e as t}from"./iframe-BBzssXFz.js";import{S as i}from"./ChartSizeDimensions-DX20IRBn.js";import{J as s,h as g,f as h,R as l}from"./arrayEqualityCheck-Bjl1KGHu.js";import{C as c}from"./ComposedChart-BNnTKuEE.js";import{p as d}from"./Page-Cj8EiXz7.js";import{L as u}from"./Line-otGxT1G3.js";import{X as f}from"./XAxis-BKkUGHg6.js";import{Y as M}from"./YAxis-DM7CZp2-.js";import{L as b}from"./Legend-BPEl9xE6.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Csr8SK85.js";import"./immer-7XFVXXFB.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CsBkMUfg.js";import"./index-CafXZux5.js";import"./hooks-Cdjbv1yZ.js";import"./axisSelectors-CFvd2CpI.js";import"./d3-scale-CV33LrVl.js";import"./zIndexSlice-BlJdEm2b.js";import"./renderedTicksSlice-D_eYSGtp.js";import"./CartesianChart-D4Tq8Mp4.js";import"./chartDataContext-DUrxX3r4.js";import"./CategoricalChart-B-bxACDj.js";import"./Layer-CAh1Kgp_.js";import"./ReactUtils-CabJhVob.js";import"./Label-B9ZSBmHd.js";import"./Text-Boz5VXT5.js";import"./DOMUtils-DJmkFWFo.js";import"./ZIndexLayer-C1_Q11sr.js";import"./ActivePoints-DCbS44DF.js";import"./Dot-BOUDlr0E.js";import"./types-CER3-J_V.js";import"./RegisterGraphicalItemId-5EdXQ8V-.js";import"./ErrorBarContext-CM0hmmky.js";import"./GraphicalItemClipPath-DFMtaTzW.js";import"./SetGraphicalItem-C2_0J6B5.js";import"./useAnimationId-G1z57dIT.js";import"./getRadiusAndStrokeWidthFromDot-DBbOA2H8.js";import"./ActiveShapeUtils-C0KQrGSC.js";import"./isPlainObject-CwCFEtjI.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BnC0X1TR.js";import"./Trapezoid-CWYXYqYR.js";import"./Sector-DeNvZ5DZ.js";import"./Symbols-CoEYrWYs.js";import"./symbol-C10iTT4Z.js";import"./step-Dmy2-h0-.js";import"./Curve-Dzo1_9a0.js";import"./CartesianAxis-Dax8GbgD.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-CjjZnAan.js";import"./uniqBy-C66l8_Y0.js";import"./iteratee-41QGm2LS.js";function E(){const r=s(),e=g(),o=h();return r==null||o==null||e==null?null:t.createElement(t.Fragment,null,t.createElement(i,{width:r.left,height:e,labels:{background:"Left",horizontal:"useMargin.left"}}),t.createElement(i,{width:r.right,x:o-r.right,height:e,labels:{background:"Right",horizontal:"useMargin.right"}}),t.createElement(i,{width:o,height:r.top,labels:{background:"Top",vertical:"useMargin.top"}}),t.createElement(i,{width:o,height:r.bottom,y:e-r.bottom,labels:{background:"Bottom",vertical:"useMargin.bottom"}}))}const wt={title:"API/hooks/useMargin",component:s,parameters:{docs:{description:{component:"This story demonstrates the use of the `useMargin` hook to read chart margin in a responsive container."}}}},a={name:"useMargin",render:r=>t.createElement(l,{width:r.width,height:r.height},t.createElement(c,{data:d,margin:r.margin},t.createElement(u,{dataKey:"pv"}),t.createElement(f,{dataKey:"name"}),t.createElement(M,null),t.createElement(b,null),t.createElement(E,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var m,n,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
