import{e as t}from"./iframe-ClXyKNgm.js";import{S as i}from"./ChartSizeDimensions-DpOcPLnw.js";import{J as s,h as g,f as h,R as l}from"./arrayEqualityCheck-CyG4bWUs.js";import{C as c}from"./ComposedChart-GRruxady.js";import{p as d}from"./Page-Cj8EiXz7.js";import{L as u}from"./Line-DczUaO1B.js";import{X as f}from"./XAxis-BLwhd0IJ.js";import{Y as M}from"./YAxis-CJcxVAZe.js";import{L as b}from"./Legend-BDxx4_Kv.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-B-5xg8HJ.js";import"./immer-CtYLZrTd.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-UQqzQ8rP.js";import"./index-CwEdYiZd.js";import"./hooks-BkOTtN17.js";import"./axisSelectors-DQofLmtB.js";import"./d3-scale-PvLZ5v4V.js";import"./zIndexSlice-Dm0UpM_Z.js";import"./renderedTicksSlice-BNvm7omS.js";import"./CartesianChart-DPC4KDkL.js";import"./chartDataContext-Bjc2K54y.js";import"./CategoricalChart-BKNmBDhd.js";import"./Layer-BeDFs85c.js";import"./ReactUtils-Dlva77EJ.js";import"./Label-YkL7q8Nt.js";import"./Text-o1n-qtV3.js";import"./DOMUtils-CHkqX7Ip.js";import"./ZIndexLayer-cavkLRXR.js";import"./ActivePoints-BtoLWo_Y.js";import"./Dot-CTW0FmYa.js";import"./types-C9EK63kj.js";import"./RegisterGraphicalItemId-BL_NupUm.js";import"./ErrorBarContext-PkrPZ9Kd.js";import"./GraphicalItemClipPath-DtnEohhM.js";import"./SetGraphicalItem-taT8ii8S.js";import"./useAnimationId-C8K-aL18.js";import"./getRadiusAndStrokeWidthFromDot-DuLFzzBx.js";import"./ActiveShapeUtils-BifvGgSB.js";import"./isPlainObject-B5RD0MRm.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BAftZiAJ.js";import"./Trapezoid-BOXkO72-.js";import"./Sector-BWSYDmpz.js";import"./Symbols-BGqZ-C7G.js";import"./symbol-DPWTbt42.js";import"./step-hxAHDxbx.js";import"./Curve-gxNk9RQQ.js";import"./CartesianAxis-XpuqdPkr.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-D8EKn9F9.js";import"./uniqBy-DAnNh5o7.js";import"./iteratee-C5vdph3w.js";function E(){const r=s(),e=g(),o=h();return r==null||o==null||e==null?null:t.createElement(t.Fragment,null,t.createElement(i,{width:r.left,height:e,labels:{background:"Left",horizontal:"useMargin.left"}}),t.createElement(i,{width:r.right,x:o-r.right,height:e,labels:{background:"Right",horizontal:"useMargin.right"}}),t.createElement(i,{width:o,height:r.top,labels:{background:"Top",vertical:"useMargin.top"}}),t.createElement(i,{width:o,height:r.bottom,y:e-r.bottom,labels:{background:"Bottom",vertical:"useMargin.bottom"}}))}const wt={title:"API/hooks/useMargin",component:s,parameters:{docs:{description:{component:"This story demonstrates the use of the `useMargin` hook to read chart margin in a responsive container."}}}},a={name:"useMargin",render:r=>t.createElement(l,{width:r.width,height:r.height},t.createElement(c,{data:d,margin:r.margin},t.createElement(u,{dataKey:"pv"}),t.createElement(f,{dataKey:"name"}),t.createElement(M,null),t.createElement(b,null),t.createElement(E,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var m,n,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
