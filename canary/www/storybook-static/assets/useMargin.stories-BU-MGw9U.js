import{e as t}from"./iframe-B0S7Bw5r.js";import{S as i}from"./ChartSizeDimensions-C7fjLK0m.js";import{J as s,h as g,f as h,R as l}from"./arrayEqualityCheck-B6UHuCSW.js";import{C as c}from"./ComposedChart-DcRLOIWA.js";import{p as d}from"./Page-Cj8EiXz7.js";import{L as u}from"./Line-D68t4KMI.js";import{X as f}from"./XAxis-DiUkTxAp.js";import{Y as M}from"./YAxis-Cfh_dm5A.js";import{L as b}from"./Legend-Q88WEYIF.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-q1JLKZ97.js";import"./immer-evaWtkoc.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DcP5S-Eh.js";import"./index-DUOReC0q.js";import"./hooks-CcX3T7-M.js";import"./axisSelectors-6PiCImLD.js";import"./d3-scale-jq0pJJv9.js";import"./zIndexSlice-9UjK9UdZ.js";import"./renderedTicksSlice-BUt6rxsY.js";import"./CartesianChart-BMVLa6xS.js";import"./chartDataContext-DJdmDZoh.js";import"./CategoricalChart-C3QYPPHI.js";import"./Layer-Dc2WQE0F.js";import"./ReactUtils-X5Zc33o_.js";import"./Label-Sf__cS6l.js";import"./Text-BDzyoHwy.js";import"./DOMUtils-CppXT_dB.js";import"./ZIndexLayer-D8Z-QIey.js";import"./ActivePoints-zTeK-7RL.js";import"./Dot-DXEnHZYi.js";import"./types-DOzdXJDs.js";import"./RegisterGraphicalItemId-wXMOnM03.js";import"./ErrorBarContext-CJSJ027V.js";import"./GraphicalItemClipPath-CFnrI3NK.js";import"./SetGraphicalItem-BWO2MSFy.js";import"./useAnimationId-NZHn6B37.js";import"./getRadiusAndStrokeWidthFromDot-iWtNb3XX.js";import"./ActiveShapeUtils-BunL0KP8.js";import"./isPlainObject-Dg3LRGot.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-R6r6MP54.js";import"./Trapezoid-CwbraNO9.js";import"./Sector-CoxeQB-O.js";import"./Symbols-CYKSAWm0.js";import"./symbol-B-6h4y7x.js";import"./step-BpWwZl0O.js";import"./Curve-DEKI4hEN.js";import"./CartesianAxis-xLcMiLgB.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-z_Q4U8yI.js";import"./uniqBy-L7bCXYuO.js";import"./iteratee-BbOKiONH.js";function E(){const r=s(),e=g(),o=h();return r==null||o==null||e==null?null:t.createElement(t.Fragment,null,t.createElement(i,{width:r.left,height:e,labels:{background:"Left",horizontal:"useMargin.left"}}),t.createElement(i,{width:r.right,x:o-r.right,height:e,labels:{background:"Right",horizontal:"useMargin.right"}}),t.createElement(i,{width:o,height:r.top,labels:{background:"Top",vertical:"useMargin.top"}}),t.createElement(i,{width:o,height:r.bottom,y:e-r.bottom,labels:{background:"Bottom",vertical:"useMargin.bottom"}}))}const wt={title:"API/hooks/useMargin",component:s,parameters:{docs:{description:{component:"This story demonstrates the use of the `useMargin` hook to read chart margin in a responsive container."}}}},a={name:"useMargin",render:r=>t.createElement(l,{width:r.width,height:r.height},t.createElement(c,{data:d,margin:r.margin},t.createElement(u,{dataKey:"pv"}),t.createElement(f,{dataKey:"name"}),t.createElement(M,null),t.createElement(b,null),t.createElement(E,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var m,n,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
