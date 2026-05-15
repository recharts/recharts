import{e as t}from"./iframe-C_AsYugi.js";import{S as i}from"./ChartSizeDimensions-Dh66BsMo.js";import{J as s,h as g,f as h,R as l}from"./arrayEqualityCheck-xvllERIt.js";import{C as c}from"./ComposedChart-cY0MWVeZ.js";import{p as d}from"./Page-Cj8EiXz7.js";import{L as u}from"./Line-QUZhKIKJ.js";import{X as f}from"./XAxis-DH_rN-kM.js";import{Y as M}from"./YAxis-gzpn2USg.js";import{L as b}from"./Legend-CiVde6Tb.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CerPTbDf.js";import"./immer-BPZQF6xW.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C0wr5dja.js";import"./index-DBNDbbEj.js";import"./hooks-DRvuAM61.js";import"./axisSelectors-D6N9K5pJ.js";import"./d3-scale-bPIVgrq4.js";import"./zIndexSlice-CVos1qNt.js";import"./renderedTicksSlice-CULSuwf6.js";import"./CartesianChart-Bf-pcG1N.js";import"./chartDataContext-DxmOKRxG.js";import"./CategoricalChart-C3pZv0iV.js";import"./Layer-Dz5BSX-y.js";import"./ReactUtils-BIcQ9LuG.js";import"./Label-Ck2nWAbG.js";import"./Text-CQ7cV61I.js";import"./DOMUtils-BnflEJNu.js";import"./ZIndexLayer-Dpd4MxoT.js";import"./ActivePoints-D_gOxfcF.js";import"./Dot-E0S9rOFh.js";import"./types-DFzRwbJd.js";import"./RegisterGraphicalItemId-Br_TTAem.js";import"./ErrorBarContext-Di7xd7Lk.js";import"./GraphicalItemClipPath-DUplZfGU.js";import"./SetGraphicalItem-DnFjb-ph.js";import"./useAnimationId-GLik1JQl.js";import"./getRadiusAndStrokeWidthFromDot-CMmixfMt.js";import"./ActiveShapeUtils-BW3KdMee.js";import"./isPlainObject-yome26yk.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DSXX-_zw.js";import"./Trapezoid-BE4mHG6h.js";import"./Sector-RBT64hMb.js";import"./Symbols-BrylnLFr.js";import"./symbol-Cv3vZKNL.js";import"./step-BNGIjVY6.js";import"./Curve-DqcNZQQ9.js";import"./CartesianAxis-Qsc6tL7N.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-CcesUvCf.js";import"./uniqBy-BwUTREYv.js";import"./iteratee-0Dlmk-XD.js";function E(){const r=s(),e=g(),o=h();return r==null||o==null||e==null?null:t.createElement(t.Fragment,null,t.createElement(i,{width:r.left,height:e,labels:{background:"Left",horizontal:"useMargin.left"}}),t.createElement(i,{width:r.right,x:o-r.right,height:e,labels:{background:"Right",horizontal:"useMargin.right"}}),t.createElement(i,{width:o,height:r.top,labels:{background:"Top",vertical:"useMargin.top"}}),t.createElement(i,{width:o,height:r.bottom,y:e-r.bottom,labels:{background:"Bottom",vertical:"useMargin.bottom"}}))}const wt={title:"API/hooks/useMargin",component:s,parameters:{docs:{description:{component:"This story demonstrates the use of the `useMargin` hook to read chart margin in a responsive container."}}}},a={name:"useMargin",render:r=>t.createElement(l,{width:r.width,height:r.height},t.createElement(c,{data:d,margin:r.margin},t.createElement(u,{dataKey:"pv"}),t.createElement(f,{dataKey:"name"}),t.createElement(M,null),t.createElement(b,null),t.createElement(E,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var m,n,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
