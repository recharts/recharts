import{e as t}from"./iframe-BCIyDy2y.js";import{S as i}from"./ChartSizeDimensions-DA9WuIbb.js";import{J as s,h as g,f as h,R as l}from"./arrayEqualityCheck-Cf245WJn.js";import{C as c}from"./ComposedChart-DJx0gT3B.js";import{p as d}from"./Page-Cj8EiXz7.js";import{L as u}from"./Line-RgI7W7Nt.js";import{X as f}from"./XAxis-DV5Xkww9.js";import{Y as M}from"./YAxis-CnRlmuzM.js";import{L as b}from"./Legend-oU0cZFoo.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-lVM9sbuz.js";import"./immer-C2RICBwb.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Bdd2O_oM.js";import"./index-CtknXjDa.js";import"./hooks-BTsBRBHp.js";import"./axisSelectors-yCT-Higf.js";import"./d3-scale-CI4AiR3w.js";import"./zIndexSlice-DSrTTGma.js";import"./renderedTicksSlice-Cz2vx4zM.js";import"./CartesianChart-DrswP_Ob.js";import"./chartDataContext-CXwTcmro.js";import"./CategoricalChart-up_sq5JM.js";import"./Layer-BI55N2-G.js";import"./ReactUtils-xGOtO2-g.js";import"./Label-BLeLqCLV.js";import"./Text-DkhCuMky.js";import"./DOMUtils-BAzLlmnO.js";import"./ZIndexLayer-OXXPiSY6.js";import"./ActivePoints-DNcriVBd.js";import"./Dot-D1QG05Rg.js";import"./types-lt17_KuZ.js";import"./RegisterGraphicalItemId-UqraLzmZ.js";import"./ErrorBarContext-BoyyOct_.js";import"./GraphicalItemClipPath-DTR4rFg9.js";import"./SetGraphicalItem-D1XFyIIN.js";import"./useAnimationId-BkfXIhqW.js";import"./getRadiusAndStrokeWidthFromDot-Cn2oGl7V.js";import"./ActiveShapeUtils-jGAWG3IP.js";import"./isPlainObject-whMXKUZx.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-SMe0MBtT.js";import"./Trapezoid-RcGRNOCe.js";import"./Sector-Ck7ah4lL.js";import"./Symbols-BB8IGNYJ.js";import"./symbol-BWsdZnbp.js";import"./step-C8nuQph-.js";import"./Curve-CewalY2f.js";import"./CartesianAxis-DQMQkFuk.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-G1RjUq0A.js";import"./uniqBy-CMyGBwYl.js";import"./iteratee-CPlqxnf-.js";function E(){const r=s(),e=g(),o=h();return r==null||o==null||e==null?null:t.createElement(t.Fragment,null,t.createElement(i,{width:r.left,height:e,labels:{background:"Left",horizontal:"useMargin.left"}}),t.createElement(i,{width:r.right,x:o-r.right,height:e,labels:{background:"Right",horizontal:"useMargin.right"}}),t.createElement(i,{width:o,height:r.top,labels:{background:"Top",vertical:"useMargin.top"}}),t.createElement(i,{width:o,height:r.bottom,y:e-r.bottom,labels:{background:"Bottom",vertical:"useMargin.bottom"}}))}const wt={title:"API/hooks/useMargin",component:s,parameters:{docs:{description:{component:"This story demonstrates the use of the `useMargin` hook to read chart margin in a responsive container."}}}},a={name:"useMargin",render:r=>t.createElement(l,{width:r.width,height:r.height},t.createElement(c,{data:d,margin:r.margin},t.createElement(u,{dataKey:"pv"}),t.createElement(f,{dataKey:"name"}),t.createElement(M,null),t.createElement(b,null),t.createElement(E,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var m,n,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
