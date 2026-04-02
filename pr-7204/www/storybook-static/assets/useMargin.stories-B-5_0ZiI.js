import{e as t}from"./iframe-DMXQsXpg.js";import{S as i}from"./ChartSizeDimensions-DEoCz00F.js";import{J as s,h as g,f as h,R as l}from"./arrayEqualityCheck-DpCaYOUy.js";import{C as c}from"./ComposedChart-C_9L2kYo.js";import{p as d}from"./Page-Cj8EiXz7.js";import{L as u}from"./Line-NeLidJ-e.js";import{X as f}from"./XAxis-BHFgUjmQ.js";import{Y as M}from"./YAxis-Do7NKWVh.js";import{L as b}from"./Legend-D_SgAZLC.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BsNYhyCK.js";import"./immer-B5TQSQqr.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-ChN5mZ6F.js";import"./index-DZj5OYW4.js";import"./hooks-C4vpoiWQ.js";import"./axisSelectors-X23Vd1nJ.js";import"./d3-scale-Bobv8k5F.js";import"./zIndexSlice-Dh14LjCV.js";import"./renderedTicksSlice-BIIBkKaJ.js";import"./CartesianChart-C5uIkm2y.js";import"./chartDataContext-B6GLUasA.js";import"./CategoricalChart-DG_cN0Ky.js";import"./Layer-CsEtKw3I.js";import"./ReactUtils-L5lhC8e-.js";import"./Label-Bs69Id3P.js";import"./Text-DQkAUreQ.js";import"./DOMUtils-DhuzsS5O.js";import"./ZIndexLayer-DFpiev-3.js";import"./ActivePoints-DFVFlhAU.js";import"./Dot-CxhIYeV3.js";import"./types-B0XKp7Ez.js";import"./RegisterGraphicalItemId-oMcfFNkt.js";import"./ErrorBarContext-Bl-5rk6P.js";import"./GraphicalItemClipPath-D6CWKVU-.js";import"./SetGraphicalItem-Cl2qZBgg.js";import"./useAnimationId-VTFMqu0p.js";import"./getRadiusAndStrokeWidthFromDot-ng_fUBoa.js";import"./ActiveShapeUtils-CvI69Krw.js";import"./isPlainObject-BMubJZbB.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B4fRgx4g.js";import"./Trapezoid-BZvlrAVr.js";import"./Sector-CxL9w9hl.js";import"./Symbols-CEd2p-EY.js";import"./symbol-Dzsckc01.js";import"./step-H2086VjI.js";import"./Curve-GkC_ASL4.js";import"./CartesianAxis-VGpTBjEt.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-Bp1AeIZH.js";import"./uniqBy-DYyTxial.js";import"./iteratee-BAEyg1_s.js";function E(){const r=s(),e=g(),o=h();return r==null||o==null||e==null?null:t.createElement(t.Fragment,null,t.createElement(i,{width:r.left,height:e,labels:{background:"Left",horizontal:"useMargin.left"}}),t.createElement(i,{width:r.right,x:o-r.right,height:e,labels:{background:"Right",horizontal:"useMargin.right"}}),t.createElement(i,{width:o,height:r.top,labels:{background:"Top",vertical:"useMargin.top"}}),t.createElement(i,{width:o,height:r.bottom,y:e-r.bottom,labels:{background:"Bottom",vertical:"useMargin.bottom"}}))}const wt={title:"API/hooks/useMargin",component:s,parameters:{docs:{description:{component:"This story demonstrates the use of the `useMargin` hook to read chart margin in a responsive container."}}}},a={name:"useMargin",render:r=>t.createElement(l,{width:r.width,height:r.height},t.createElement(c,{data:d,margin:r.margin},t.createElement(u,{dataKey:"pv"}),t.createElement(f,{dataKey:"name"}),t.createElement(M,null),t.createElement(b,null),t.createElement(E,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var m,n,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
