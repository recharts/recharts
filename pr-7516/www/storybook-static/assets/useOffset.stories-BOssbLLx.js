import{R as t}from"./iframe-CqMmO9Xr.js";import{e as p}from"./CategoricalChart-D2FUAiwR.js";import{R as a}from"./zIndexSlice-DFZjSdbQ.js";import{C as s}from"./ComposedChart-uPkxZ6ZI.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as f}from"./Line-CB7u-l8s.js";import{X as d}from"./XAxis-D2oZKEvW.js";import{Y as h}from"./YAxis-saOkQHhA.js";import{L as g}from"./Legend-4VUwXk4m.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CnEYhKO1.js";import"./index-4Y0h8bRC.js";import"./index-DUkcUndf.js";import"./index-DM7XJZkc.js";import"./index-C7a4ZWQb.js";import"./throttle-QEuO__ZS.js";import"./get-Bd1LrVMt.js";import"./renderedTicksSlice-CRwA1chB.js";import"./axisSelectors-DNmvLHVP.js";import"./d3-scale-QPfz2uTg.js";import"./resolveDefaultProps-B4mfWg2L.js";import"./isWellBehavedNumber-BQfelr5r.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-9yjUQzO4.js";import"./chartDataContext-C_w1UWdz.js";import"./Layer-B_iZYaDE.js";import"./Curve-DqnHYjX3.js";import"./types-DVuTAt9Y.js";import"./step-CnWsiLlx.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CVpfsiGm.js";import"./Label-I1gAWal3.js";import"./Text-CEmf9w7F.js";import"./DOMUtils-Ds2cGO5I.js";import"./ZIndexLayer-pq6FNmg5.js";import"./useAnimationId-CUS7kjlN.js";import"./ActivePoints-Cv3N35qL.js";import"./Dot-DuJvVQ71.js";import"./RegisterGraphicalItemId-CKAuGKYu.js";import"./ErrorBarContext-BhL3whwn.js";import"./GraphicalItemClipPath-BKxNv1YA.js";import"./SetGraphicalItem-DZlHA3su.js";import"./getRadiusAndStrokeWidthFromDot-Ctxaag6G.js";import"./ActiveShapeUtils-B4C1Nqw7.js";import"./CartesianAxis-CazwgKuv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-DGe5NEHH.js";import"./symbol-BTAzmh16.js";import"./useElementOffset-DPAYmMQw.js";import"./uniqBy-D3CQlvr-.js";import"./iteratee-iX9KB4Pz.js";const dt={title:"API/hooks/useOffset",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `useOffset` hook to read chart offset in a responsive container."}}}},r={name:"useOffset",render:e=>t.createElement(a,{width:e.width,height:e.height},t.createElement(s,{data:n,margin:e.margin},t.createElement(f,{dataKey:"pv"}),t.createElement(d,{dataKey:"name"}),t.createElement(h,null),t.createElement(g,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120}}};var o,i,m;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'useOffset',
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
}`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ht=["UseOffset"];export{r as UseOffset,ht as __namedExportsOrder,dt as default};
