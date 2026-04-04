import{e as t}from"./iframe-Y_RGNuVZ.js";import{S as i}from"./ChartSizeDimensions-Kjtp9_ay.js";import{J as s,h as g,f as h,R as l}from"./arrayEqualityCheck-Ds7SKd67.js";import{C as c}from"./ComposedChart-CVsBvOUG.js";import{p as d}from"./Page-Cj8EiXz7.js";import{L as u}from"./Line-B2Ca7ZOh.js";import{X as f}from"./XAxis-DOlhxeJx.js";import{Y as M}from"./YAxis-a000WLRS.js";import{L as b}from"./Legend-Bvq1ik-S.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CNDGD4av.js";import"./immer-CvMOMmfr.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-0AKdwcb0.js";import"./index-6zWqcpfE.js";import"./hooks-D-ukaKl5.js";import"./axisSelectors-B08StVJi.js";import"./d3-scale-xMg1wH9a.js";import"./zIndexSlice-Ba0CiZj_.js";import"./renderedTicksSlice-BNYNUWgh.js";import"./CartesianChart-tAchdUZG.js";import"./chartDataContext-DLrhoiOn.js";import"./CategoricalChart-xZ700W9g.js";import"./Layer-B3aEjvUI.js";import"./ReactUtils-DW9WQHfP.js";import"./Label-C7BzYfbz.js";import"./Text-2I-RPtH4.js";import"./DOMUtils-Cmq9iEnp.js";import"./ZIndexLayer-BkWVTcKj.js";import"./ActivePoints-M-0Nj2uW.js";import"./Dot-B6xO9r8i.js";import"./types-DUF6Oaqa.js";import"./RegisterGraphicalItemId-DQOzlEQV.js";import"./ErrorBarContext-D2MsqZ2g.js";import"./GraphicalItemClipPath-DV3rsVOw.js";import"./SetGraphicalItem-Cr3Eh_Ii.js";import"./useAnimationId-D3O-mVgt.js";import"./getRadiusAndStrokeWidthFromDot-BLOpOIfG.js";import"./ActiveShapeUtils-fVk6EKo1.js";import"./isPlainObject-1pSWT5Op.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dr0T3_ga.js";import"./Trapezoid-52KgDugC.js";import"./Sector-NVf3Jf9G.js";import"./Symbols-BkK6C4o8.js";import"./symbol-CHniFcTm.js";import"./step-BeTRk8e6.js";import"./Curve-okqgdx-1.js";import"./CartesianAxis-UB1S8E_N.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-DXlRn5Ww.js";import"./uniqBy-CJG1yfnn.js";import"./iteratee-N29jbGML.js";function E(){const r=s(),e=g(),o=h();return r==null||o==null||e==null?null:t.createElement(t.Fragment,null,t.createElement(i,{width:r.left,height:e,labels:{background:"Left",horizontal:"useMargin.left"}}),t.createElement(i,{width:r.right,x:o-r.right,height:e,labels:{background:"Right",horizontal:"useMargin.right"}}),t.createElement(i,{width:o,height:r.top,labels:{background:"Top",vertical:"useMargin.top"}}),t.createElement(i,{width:o,height:r.bottom,y:e-r.bottom,labels:{background:"Bottom",vertical:"useMargin.bottom"}}))}const wt={title:"API/hooks/useMargin",component:s,parameters:{docs:{description:{component:"This story demonstrates the use of the `useMargin` hook to read chart margin in a responsive container."}}}},a={name:"useMargin",render:r=>t.createElement(l,{width:r.width,height:r.height},t.createElement(c,{data:d,margin:r.margin},t.createElement(u,{dataKey:"pv"}),t.createElement(f,{dataKey:"name"}),t.createElement(M,null),t.createElement(b,null),t.createElement(E,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var m,n,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
