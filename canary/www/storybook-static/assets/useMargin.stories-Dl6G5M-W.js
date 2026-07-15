import{R as r}from"./iframe-BcyvxDDm.js";import{z as a,R as p}from"./zIndexSlice-CjqwPb4I.js";import{C as s}from"./ComposedChart-C6Y2kg6Z.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as g}from"./Line-BnwOZ2r5.js";import{X as d}from"./XAxis-hKqegIsy.js";import{Y as h}from"./YAxis-DWNExzo5.js";import{L as c}from"./Legend-4H4K0yTj.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Da4mYIun.js";import"./index-BbDVdbFr.js";import"./index-DylQUhO9.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-DYK2TugC.js";import"./isWellBehavedNumber-DT8eXGOZ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BKq7sB4k.js";import"./index-VYrkeph1.js";import"./index-CmO5XTPj.js";import"./renderedTicksSlice-C78J9WJd.js";import"./axisSelectors-Ft8qoIRM.js";import"./d3-scale-CuOcyn8C.js";import"./CartesianChart-Dy4JzN_k.js";import"./chartDataContext-q6A5cODj.js";import"./CategoricalChart-CjQdcPEp.js";import"./Layer-BbNzeSuC.js";import"./Curve-Cd8N0Bzf.js";import"./types-BRN82dlo.js";import"./step-VnJCxhpn.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-C_84PZuB.js";import"./Label-DKWc-r2Z.js";import"./Text-DHboH0PZ.js";import"./DOMUtils-BbuOOwxk.js";import"./ZIndexLayer-O4JEDRQM.js";import"./useAnimationId-UCivMRaV.js";import"./ActivePoints-8g9VJ2oC.js";import"./Dot-33A0Szh_.js";import"./RegisterGraphicalItemId-MfcacHn_.js";import"./ErrorBarContext-Bo7tXsWd.js";import"./GraphicalItemClipPath-gcf9l3Dr.js";import"./SetGraphicalItem-NfXYYfkR.js";import"./getRadiusAndStrokeWidthFromDot-C-lZV2mT.js";import"./ActiveShapeUtils-CAO4oJEH.js";import"./CartesianAxis-X-wBC9Mi.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-xmwrzh0l.js";import"./symbol-mg0Qyk3e.js";import"./useElementOffset-BgpGSJ6K.js";import"./uniqBy-Dl_hAjLn.js";import"./iteratee-Danss_sE.js";const dr={title:"API/hooks/useMargin",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `useMargin` hook to read chart margin in a responsive container."}}}},t={name:"useMargin",render:e=>r.createElement(p,{width:e.width,height:e.height},r.createElement(s,{data:n,margin:e.margin},r.createElement(g,{dataKey:"pv"}),r.createElement(d,{dataKey:"name"}),r.createElement(h,null),r.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var o,i,m;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'useMargin',
  render: (args: Args) => {
    return <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin}>
          <Line dataKey="pv" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const hr=["UseMargin"];export{t as UseMargin,hr as __namedExportsOrder,dr as default};
