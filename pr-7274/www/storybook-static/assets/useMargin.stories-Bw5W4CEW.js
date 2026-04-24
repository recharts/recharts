import{e as t}from"./iframe-BRqvrPpX.js";import{S as i}from"./ChartSizeDimensions-DojjfuX5.js";import{J as s,h as g,f as h,R as l}from"./arrayEqualityCheck-DDSezW49.js";import{C as c}from"./ComposedChart-CsblHqYu.js";import{p as d}from"./Page-Cj8EiXz7.js";import{L as u}from"./Line-PCc0ofdp.js";import{X as f}from"./XAxis-DZXsqqUs.js";import{Y as M}from"./YAxis-BG6xpwEo.js";import{L as b}from"./Legend-CO7eLr6U.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-C4ONjF6w.js";import"./immer-DXV4etqU.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DbCr_zla.js";import"./index-DUtVgLrP.js";import"./hooks-rzyNGUcJ.js";import"./axisSelectors-DItQVmXo.js";import"./d3-scale-BRJXbGMx.js";import"./zIndexSlice-DNL_rR3e.js";import"./renderedTicksSlice-rp2kTmjY.js";import"./CartesianChart-BrkX4WEt.js";import"./chartDataContext-nwhDY5FS.js";import"./CategoricalChart-CODQ6PLu.js";import"./Layer-KJ5xksxy.js";import"./ReactUtils-BAJ1kPIP.js";import"./Label-_Khr6uJ_.js";import"./Text-c5kux5xS.js";import"./DOMUtils-GlaEK2cB.js";import"./ZIndexLayer-Cc4doPfJ.js";import"./ActivePoints--bg5w8iT.js";import"./Dot-Db-uTVSA.js";import"./types-2nLFc4aE.js";import"./RegisterGraphicalItemId-RZfbywjl.js";import"./ErrorBarContext-AIawQg9l.js";import"./GraphicalItemClipPath-oDzU52PH.js";import"./SetGraphicalItem-BAyig2Fq.js";import"./useAnimationId-CvzXleYE.js";import"./getRadiusAndStrokeWidthFromDot-BeKpyACI.js";import"./ActiveShapeUtils-67P3d0pQ.js";import"./isPlainObject-CvjZW2FN.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B8ooKzu7.js";import"./Trapezoid-DFAAHI7b.js";import"./Sector-j7LTfnuF.js";import"./Symbols-D1A9jCkI.js";import"./symbol-Df8Q0jur.js";import"./step-G_hwVzeG.js";import"./Curve-CtnWwKXB.js";import"./CartesianAxis-DUees9I8.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-D9jY7QTj.js";import"./uniqBy-Dyp2GQOB.js";import"./iteratee-Csv6-nMU.js";function E(){const r=s(),e=g(),o=h();return r==null||o==null||e==null?null:t.createElement(t.Fragment,null,t.createElement(i,{width:r.left,height:e,labels:{background:"Left",horizontal:"useMargin.left"}}),t.createElement(i,{width:r.right,x:o-r.right,height:e,labels:{background:"Right",horizontal:"useMargin.right"}}),t.createElement(i,{width:o,height:r.top,labels:{background:"Top",vertical:"useMargin.top"}}),t.createElement(i,{width:o,height:r.bottom,y:e-r.bottom,labels:{background:"Bottom",vertical:"useMargin.bottom"}}))}const wt={title:"API/hooks/useMargin",component:s,parameters:{docs:{description:{component:"This story demonstrates the use of the `useMargin` hook to read chart margin in a responsive container."}}}},a={name:"useMargin",render:r=>t.createElement(l,{width:r.width,height:r.height},t.createElement(c,{data:d,margin:r.margin},t.createElement(u,{dataKey:"pv"}),t.createElement(f,{dataKey:"name"}),t.createElement(M,null),t.createElement(b,null),t.createElement(E,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var m,n,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
