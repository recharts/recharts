import{e as t}from"./iframe-CiMhD8Yi.js";import{S as i}from"./ChartSizeDimensions-0tNXvVd7.js";import{J as s,h as g,f as h,R as l}from"./arrayEqualityCheck-C4O-CzLw.js";import{C as c}from"./ComposedChart-XZpl6H0W.js";import{L as d}from"./Line-CMYBg4Xl.js";import{X as u}from"./XAxis-D-t29Sci.js";import{Y as f}from"./YAxis-BH2fpgYY.js";import{L as M}from"./Legend-BIi7A0Z0.js";import{p as b}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-B6aPzm2T.js";import"./immer-BJk0N9d3.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Ls9LAbQq.js";import"./index-CPsAC65v.js";import"./hooks-DSwKjRVl.js";import"./axisSelectors-B3rHRVnt.js";import"./d3-scale-DI-LuBEQ.js";import"./zIndexSlice-CiVq3vLn.js";import"./renderedTicksSlice-Bf1zdGqK.js";import"./CartesianChart-DO4e4HPA.js";import"./chartDataContext-DSmgJVpn.js";import"./CategoricalChart-BZ0q9dh3.js";import"./Layer-C8wFYCI6.js";import"./ReactUtils-DRjJkC3p.js";import"./Label-CI8CQ0nH.js";import"./Text-DqREd9W9.js";import"./DOMUtils-g-POG1C4.js";import"./ZIndexLayer-BkTc8o4k.js";import"./ActivePoints-CO0qgypy.js";import"./Dot-CyRHVoZw.js";import"./types-Dhvr5bGX.js";import"./RegisterGraphicalItemId-CiaBhgsv.js";import"./ErrorBarContext-La6ve25h.js";import"./GraphicalItemClipPath-BcJMjVwL.js";import"./SetGraphicalItem-CYrsSIGQ.js";import"./useAnimationId-BtEj36rQ.js";import"./getRadiusAndStrokeWidthFromDot-CpgyNr8P.js";import"./ActiveShapeUtils-SHiIggQV.js";import"./isPlainObject-B44yGdGL.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CDjbeOfv.js";import"./Trapezoid-D3spGrIN.js";import"./Sector-CizUgWtz.js";import"./Symbols-BFS1edpX.js";import"./symbol-DXdYs-sB.js";import"./step-CCWyWrm4.js";import"./Curve-HKI06HW2.js";import"./CartesianAxis-CW_epPWP.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-D2OZi3HS.js";import"./uniqBy-BAtehLqm.js";import"./iteratee-rXVvmz2W.js";function E(){const r=s(),e=g(),o=h();return r==null||o==null||e==null?null:t.createElement(t.Fragment,null,t.createElement(i,{width:r.left,height:e,labels:{background:"Left",horizontal:"useMargin.left"}}),t.createElement(i,{width:r.right,x:o-r.right,height:e,labels:{background:"Right",horizontal:"useMargin.right"}}),t.createElement(i,{width:o,height:r.top,labels:{background:"Top",vertical:"useMargin.top"}}),t.createElement(i,{width:o,height:r.bottom,y:e-r.bottom,labels:{background:"Bottom",vertical:"useMargin.bottom"}}))}const wt={title:"API/hooks/useMargin",component:s,parameters:{docs:{description:{component:"This story demonstrates the use of the `useMargin` hook to read chart margin in a responsive container."}}}},a={name:"useMargin",render:r=>t.createElement(l,{width:r.width,height:r.height},t.createElement(c,{data:b,margin:r.margin},t.createElement(d,{dataKey:"pv"}),t.createElement(u,{dataKey:"name"}),t.createElement(f,null),t.createElement(M,null),t.createElement(E,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var m,n,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
