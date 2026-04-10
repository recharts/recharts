import{e as t}from"./iframe-JWSOvVZL.js";import{S as i}from"./ChartSizeDimensions-B0YZDNOc.js";import{J as s,h as g,f as h,R as l}from"./arrayEqualityCheck-DJxJsIgg.js";import{C as c}from"./ComposedChart-C3wId2he.js";import{p as d}from"./Page-Cj8EiXz7.js";import{L as u}from"./Line-CuyuQhyf.js";import{X as f}from"./XAxis-CiEGa-2H.js";import{Y as M}from"./YAxis-DRMcQ1t7.js";import{L as b}from"./Legend-DW6HVUWo.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Db3kyesD.js";import"./immer-Cx8sbOuB.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-_ZAgcFWH.js";import"./index-qboEQSUS.js";import"./hooks-D_fkqjif.js";import"./axisSelectors-BfW2jaQP.js";import"./d3-scale-Cvg0WP4x.js";import"./zIndexSlice-xDRQRS04.js";import"./renderedTicksSlice-D4Sds7TF.js";import"./CartesianChart-6CEzPVWQ.js";import"./chartDataContext-CGNvCd4v.js";import"./CategoricalChart-XXxbMYfW.js";import"./Layer-CVGwLCGQ.js";import"./ReactUtils-qs-97Ac8.js";import"./Label-Cxg_vq25.js";import"./Text-C1wuLOW9.js";import"./DOMUtils-BGNYNETS.js";import"./ZIndexLayer-DKFbEZ_O.js";import"./ActivePoints-XzqbnO-t.js";import"./Dot-DDYCZ56V.js";import"./types-B3dpB15X.js";import"./RegisterGraphicalItemId-7hQHg__D.js";import"./ErrorBarContext-Cka3vvlo.js";import"./GraphicalItemClipPath-BzNC4mI6.js";import"./SetGraphicalItem-Do9Jrivq.js";import"./useAnimationId-BDQqVS92.js";import"./getRadiusAndStrokeWidthFromDot-CGUx355X.js";import"./ActiveShapeUtils-DUqlRNnh.js";import"./isPlainObject-DAbDjRrv.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dy9rRH3J.js";import"./Trapezoid-Np68xL8c.js";import"./Sector-DgiCwcle.js";import"./Symbols-CJQeMuDE.js";import"./symbol-CzcstGin.js";import"./step-NHTakNU6.js";import"./Curve-BSIyWE0E.js";import"./CartesianAxis-BBAUsbPY.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-CvtiAL57.js";import"./uniqBy-BLTAZ1cN.js";import"./iteratee-DMhTgxAn.js";function E(){const r=s(),e=g(),o=h();return r==null||o==null||e==null?null:t.createElement(t.Fragment,null,t.createElement(i,{width:r.left,height:e,labels:{background:"Left",horizontal:"useMargin.left"}}),t.createElement(i,{width:r.right,x:o-r.right,height:e,labels:{background:"Right",horizontal:"useMargin.right"}}),t.createElement(i,{width:o,height:r.top,labels:{background:"Top",vertical:"useMargin.top"}}),t.createElement(i,{width:o,height:r.bottom,y:e-r.bottom,labels:{background:"Bottom",vertical:"useMargin.bottom"}}))}const wt={title:"API/hooks/useMargin",component:s,parameters:{docs:{description:{component:"This story demonstrates the use of the `useMargin` hook to read chart margin in a responsive container."}}}},a={name:"useMargin",render:r=>t.createElement(l,{width:r.width,height:r.height},t.createElement(c,{data:d,margin:r.margin},t.createElement(u,{dataKey:"pv"}),t.createElement(f,{dataKey:"name"}),t.createElement(M,null),t.createElement(b,null),t.createElement(E,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var m,n,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
