import{e as t}from"./iframe-CgD2l6ll.js";import{S as i}from"./ChartSizeDimensions-D4uuPom-.js";import{J as s,h as g,f as h,R as l}from"./arrayEqualityCheck-Ce8ToQce.js";import{C as c}from"./ComposedChart-BtEXXQiL.js";import{p as d}from"./Page-Cj8EiXz7.js";import{L as u}from"./Line-CWagXAtR.js";import{X as f}from"./XAxis-Dwv3lvMC.js";import{Y as M}from"./YAxis-B1mR4R6T.js";import{L as b}from"./Legend-B8culLxq.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BcwZVjgI.js";import"./immer-CSa9Hlzz.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Csl_cz9v.js";import"./index-CiRw8P2v.js";import"./hooks-Bpy6m5AM.js";import"./axisSelectors-odqRCvmi.js";import"./d3-scale-BuJMnYaW.js";import"./zIndexSlice-CWeG0hvl.js";import"./renderedTicksSlice-BTs2Zr2I.js";import"./CartesianChart-Dnb9hNXP.js";import"./chartDataContext-CpiPBezf.js";import"./CategoricalChart-CrkBWVhR.js";import"./Layer-xPACpCXS.js";import"./ReactUtils-DT-vzjkJ.js";import"./Label-D_DKdnsr.js";import"./Text-B-yzB-LI.js";import"./DOMUtils-CLb0DfXc.js";import"./ZIndexLayer-8FhZChLk.js";import"./ActivePoints-CfIeRm58.js";import"./Dot-CmUBOjxz.js";import"./types-CO3nSITq.js";import"./RegisterGraphicalItemId-DQH7cQCp.js";import"./ErrorBarContext-eq28NwTt.js";import"./GraphicalItemClipPath-oqYXxjvR.js";import"./SetGraphicalItem-Be8y5kPC.js";import"./useAnimationId-DgqiEA4Q.js";import"./getRadiusAndStrokeWidthFromDot-BIOm4JA6.js";import"./ActiveShapeUtils-BuoidUZn.js";import"./isPlainObject-BR2GQDLn.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DdyxrGVo.js";import"./Trapezoid-G-FN5Gcg.js";import"./Sector-DgCnGScK.js";import"./Symbols-KXE8aVcl.js";import"./symbol-CDbbQw2g.js";import"./step-DpdY8Awj.js";import"./Curve-CvT7tHbE.js";import"./CartesianAxis-CFnaMpqS.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-DNzlmXmU.js";import"./uniqBy-CqSCdlOS.js";import"./iteratee-Cf9bYLPC.js";function E(){const r=s(),e=g(),o=h();return r==null||o==null||e==null?null:t.createElement(t.Fragment,null,t.createElement(i,{width:r.left,height:e,labels:{background:"Left",horizontal:"useMargin.left"}}),t.createElement(i,{width:r.right,x:o-r.right,height:e,labels:{background:"Right",horizontal:"useMargin.right"}}),t.createElement(i,{width:o,height:r.top,labels:{background:"Top",vertical:"useMargin.top"}}),t.createElement(i,{width:o,height:r.bottom,y:e-r.bottom,labels:{background:"Bottom",vertical:"useMargin.bottom"}}))}const wt={title:"API/hooks/useMargin",component:s,parameters:{docs:{description:{component:"This story demonstrates the use of the `useMargin` hook to read chart margin in a responsive container."}}}},a={name:"useMargin",render:r=>t.createElement(l,{width:r.width,height:r.height},t.createElement(c,{data:d,margin:r.margin},t.createElement(u,{dataKey:"pv"}),t.createElement(f,{dataKey:"name"}),t.createElement(M,null),t.createElement(b,null),t.createElement(E,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var m,n,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
