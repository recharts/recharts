import{e as t}from"./iframe-Duu2ePP2.js";import{S as i}from"./ChartSizeDimensions-D23mYDM8.js";import{J as s,h as g,f as h,R as l}from"./arrayEqualityCheck-B-cAi4kL.js";import{C as c}from"./ComposedChart-BGGpT0on.js";import{p as d}from"./Page-Cj8EiXz7.js";import{L as u}from"./Line-Dbauye43.js";import{X as f}from"./XAxis-DAA3n7LQ.js";import{Y as M}from"./YAxis-DKXddmVj.js";import{L as b}from"./Legend-smB8ffG_.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BWiIM3v1.js";import"./immer-ON4fWNwQ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DeZsisyl.js";import"./index-BGitJN2W.js";import"./hooks-dkH0FbaO.js";import"./axisSelectors-RH6y-AiZ.js";import"./d3-scale-yxZwMUWq.js";import"./zIndexSlice-DggUfY4w.js";import"./renderedTicksSlice-Dokw_GUk.js";import"./CartesianChart-D1uig-eX.js";import"./chartDataContext-Z4x7BNXW.js";import"./CategoricalChart-7RYTnCI7.js";import"./Layer-BOJMxATb.js";import"./ReactUtils-4qgrEQeH.js";import"./Label-Bn1yjK4M.js";import"./Text-Cd4yjmCr.js";import"./DOMUtils-3aQ33ho0.js";import"./ZIndexLayer-BJKI90nF.js";import"./ActivePoints-DBsGuqVa.js";import"./Dot-BT4SKcl1.js";import"./types-DgKzbqf0.js";import"./RegisterGraphicalItemId-CR36P_VL.js";import"./ErrorBarContext-q9vP8J6E.js";import"./GraphicalItemClipPath-Bnp8k_2K.js";import"./SetGraphicalItem-BK48IdmH.js";import"./useAnimationId-B0y91bCS.js";import"./getRadiusAndStrokeWidthFromDot-BA08heCI.js";import"./ActiveShapeUtils-rsSi-jmT.js";import"./isPlainObject-YfZdirFW.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CChRXwuW.js";import"./Trapezoid-CfCidBHT.js";import"./Sector-Bqlpq4fQ.js";import"./Symbols-BvwbX7uA.js";import"./symbol-BIpvV-Z0.js";import"./step-CeBqx2xf.js";import"./Curve-C4aJqTD7.js";import"./CartesianAxis-0Lljxc4r.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-DbwX6Ink.js";import"./uniqBy-C2SKejLS.js";import"./iteratee-BIM71ygM.js";function E(){const r=s(),e=g(),o=h();return r==null||o==null||e==null?null:t.createElement(t.Fragment,null,t.createElement(i,{width:r.left,height:e,labels:{background:"Left",horizontal:"useMargin.left"}}),t.createElement(i,{width:r.right,x:o-r.right,height:e,labels:{background:"Right",horizontal:"useMargin.right"}}),t.createElement(i,{width:o,height:r.top,labels:{background:"Top",vertical:"useMargin.top"}}),t.createElement(i,{width:o,height:r.bottom,y:e-r.bottom,labels:{background:"Bottom",vertical:"useMargin.bottom"}}))}const wt={title:"API/hooks/useMargin",component:s,parameters:{docs:{description:{component:"This story demonstrates the use of the `useMargin` hook to read chart margin in a responsive container."}}}},a={name:"useMargin",render:r=>t.createElement(l,{width:r.width,height:r.height},t.createElement(c,{data:d,margin:r.margin},t.createElement(u,{dataKey:"pv"}),t.createElement(f,{dataKey:"name"}),t.createElement(M,null),t.createElement(b,null),t.createElement(E,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var m,n,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
