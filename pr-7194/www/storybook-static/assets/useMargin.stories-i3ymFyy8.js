import{e as t}from"./iframe-C4ae8FtK.js";import{S as i}from"./ChartSizeDimensions-DrJNk4HA.js";import{J as s,h as g,f as h,R as l}from"./arrayEqualityCheck-lfrA5Bq2.js";import{C as c}from"./ComposedChart-ZcgyiIbi.js";import{p as d}from"./Page-Cj8EiXz7.js";import{L as u}from"./Line-B3yovMU-.js";import{X as f}from"./XAxis-D-4HgMe7.js";import{Y as M}from"./YAxis-BwAcKPAC.js";import{L as b}from"./Legend-BdA3SfnJ.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CeAK8DLj.js";import"./immer-JFltD55q.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-tTigpQ5n.js";import"./index-BAPPw7tY.js";import"./hooks-CXUA9yEr.js";import"./axisSelectors-DobMcDEZ.js";import"./d3-scale-Bqdags1w.js";import"./zIndexSlice-CgotL-NA.js";import"./renderedTicksSlice-Cj9ny3Ly.js";import"./CartesianChart-DasFBtUo.js";import"./chartDataContext-DPN8Z90E.js";import"./CategoricalChart-D917O6MX.js";import"./Layer-N4FzZ7QF.js";import"./ReactUtils-DyI5Xl8b.js";import"./Label-DBvzFRUp.js";import"./Text-CIi3nsya.js";import"./DOMUtils-Ds2y4XHZ.js";import"./ZIndexLayer-Cm0MOpfC.js";import"./ActivePoints-uVv69XEr.js";import"./Dot-RR5mO9JR.js";import"./types-C9HDIMgp.js";import"./RegisterGraphicalItemId-CypQFo50.js";import"./ErrorBarContext-BJJjhQzu.js";import"./GraphicalItemClipPath-DrPrMemX.js";import"./SetGraphicalItem-C5fi9q2Q.js";import"./useAnimationId-DYnPgr1F.js";import"./getRadiusAndStrokeWidthFromDot-D5WZgZMm.js";import"./ActiveShapeUtils-CpUyToQw.js";import"./isPlainObject-NFlPGfOx.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-36uwRJjR.js";import"./Trapezoid-PDWBfkS4.js";import"./Sector-CiJRQ-kP.js";import"./Symbols-CuAJ11rV.js";import"./symbol-BxTsEubx.js";import"./step-ycAKK8HO.js";import"./Curve-DBFjwflq.js";import"./CartesianAxis-2J4hk8WJ.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-CieEfFFN.js";import"./uniqBy-CvZhzRu8.js";import"./iteratee-BegIMKsU.js";function E(){const r=s(),e=g(),o=h();return r==null||o==null||e==null?null:t.createElement(t.Fragment,null,t.createElement(i,{width:r.left,height:e,labels:{background:"Left",horizontal:"useMargin.left"}}),t.createElement(i,{width:r.right,x:o-r.right,height:e,labels:{background:"Right",horizontal:"useMargin.right"}}),t.createElement(i,{width:o,height:r.top,labels:{background:"Top",vertical:"useMargin.top"}}),t.createElement(i,{width:o,height:r.bottom,y:e-r.bottom,labels:{background:"Bottom",vertical:"useMargin.bottom"}}))}const wt={title:"API/hooks/useMargin",component:s,parameters:{docs:{description:{component:"This story demonstrates the use of the `useMargin` hook to read chart margin in a responsive container."}}}},a={name:"useMargin",render:r=>t.createElement(l,{width:r.width,height:r.height},t.createElement(c,{data:d,margin:r.margin},t.createElement(u,{dataKey:"pv"}),t.createElement(f,{dataKey:"name"}),t.createElement(M,null),t.createElement(b,null),t.createElement(E,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var m,n,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
