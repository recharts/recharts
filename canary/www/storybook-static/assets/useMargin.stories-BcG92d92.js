import{e as t}from"./iframe-BDbjAAY0.js";import{S as i}from"./ChartSizeDimensions-DpPbcXoW.js";import{J as s,h as g,f as h,R as l}from"./arrayEqualityCheck-DJY85fxA.js";import{C as c}from"./ComposedChart-DUpW5Dqy.js";import{p as d}from"./Page-Cj8EiXz7.js";import{L as u}from"./Line-B--5SyW6.js";import{X as f}from"./XAxis-DCFLoNQ-.js";import{Y as M}from"./YAxis-DaSpqUSS.js";import{L as b}from"./Legend-Im_K60lv.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-D-Zx47ck.js";import"./immer-3ylQEXI_.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Gh-MCRwt.js";import"./index-BhpTR8oZ.js";import"./hooks-C0v4GivV.js";import"./axisSelectors-DbWMAUln.js";import"./d3-scale-BNnaBGak.js";import"./zIndexSlice-CHJt3ZwD.js";import"./renderedTicksSlice-CKF1aMX1.js";import"./CartesianChart-CLKXkeKc.js";import"./chartDataContext-BKhnDKi8.js";import"./CategoricalChart-DHzD4_v9.js";import"./Layer-ChHYMtjc.js";import"./ReactUtils-BoM_s_He.js";import"./Label-CjqdpviA.js";import"./Text-BIZLV0ge.js";import"./DOMUtils-BrS2Cx0f.js";import"./ZIndexLayer-DzwMAaCJ.js";import"./ActivePoints-ChWVh6u7.js";import"./Dot-CKhpqWMa.js";import"./types-rcyNgq1E.js";import"./RegisterGraphicalItemId-C7xusUhZ.js";import"./ErrorBarContext-CdZbKyaL.js";import"./GraphicalItemClipPath-DAX0DDhK.js";import"./SetGraphicalItem-BNU0IRAh.js";import"./useAnimationId--rOGa3cY.js";import"./getRadiusAndStrokeWidthFromDot-DcUffzmW.js";import"./ActiveShapeUtils-NUFnhrmW.js";import"./isPlainObject-BaMZfXSR.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D6qTYq9W.js";import"./Trapezoid-DbFTD1xK.js";import"./Sector-Bpj1QdoM.js";import"./Symbols-DjgjaJLS.js";import"./symbol-CPmvNDGT.js";import"./step-EtEDGKHl.js";import"./Curve-0uMvsclI.js";import"./CartesianAxis-Cy9ephC4.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-BHa8bfm0.js";import"./uniqBy-BZHv82xD.js";import"./iteratee-CvEtAFnI.js";function E(){const r=s(),e=g(),o=h();return r==null||o==null||e==null?null:t.createElement(t.Fragment,null,t.createElement(i,{width:r.left,height:e,labels:{background:"Left",horizontal:"useMargin.left"}}),t.createElement(i,{width:r.right,x:o-r.right,height:e,labels:{background:"Right",horizontal:"useMargin.right"}}),t.createElement(i,{width:o,height:r.top,labels:{background:"Top",vertical:"useMargin.top"}}),t.createElement(i,{width:o,height:r.bottom,y:e-r.bottom,labels:{background:"Bottom",vertical:"useMargin.bottom"}}))}const wt={title:"API/hooks/useMargin",component:s,parameters:{docs:{description:{component:"This story demonstrates the use of the `useMargin` hook to read chart margin in a responsive container."}}}},a={name:"useMargin",render:r=>t.createElement(l,{width:r.width,height:r.height},t.createElement(c,{data:d,margin:r.margin},t.createElement(u,{dataKey:"pv"}),t.createElement(f,{dataKey:"name"}),t.createElement(M,null),t.createElement(b,null),t.createElement(E,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var m,n,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
