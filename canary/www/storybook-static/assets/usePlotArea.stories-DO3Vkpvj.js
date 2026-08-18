import{R as t}from"./iframe-CLMMwevR.js";import{u as a}from"./CategoricalChart-C94CRL_w.js";import{R as p}from"./zIndexSlice-C07rknep.js";import{C as s}from"./ComposedChart-pYiK9Scc.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-clh9u8Fq.js";import{X as l}from"./XAxis-DkO77iT7.js";import{Y as h}from"./YAxis-Cs8CAcTx.js";import{L as c}from"./Legend-BqxvSdh-.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BZjp8UCv.js";import"./index-DXBvk1ZI.js";import"./index-fePXAV8a.js";import"./index-iZ7_9Rw4.js";import"./index-DTmItnBv.js";import"./throttle--WJjmRve.js";import"./get-C2VjdU0L.js";import"./axisSelectors-Bue48vwC.js";import"./resolveDefaultProps-C-YHYhRk.js";import"./isWellBehavedNumber-DSl6gFKS.js";import"./d3-scale-DOlcECPa.js";import"./renderedTicksSlice-wRkzPU5z.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Q0nxu5Mh.js";import"./chartDataContext-CTT-NX_B.js";import"./Layer-Cu_Jods-.js";import"./Curve-CxAOzKab.js";import"./types-BzNgNoqU.js";import"./step-DNzx8Vvb.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BI16k_x1.js";import"./Label-BtFWigtA.js";import"./Text-CiZ_8rvc.js";import"./DOMUtils-Cj7lsnlo.js";import"./useBackwardsCompatibleTheme-DuadFd-n.js";import"./ZIndexLayer-DMkUVhQg.js";import"./useAnimationId-B3zwLWVY.js";import"./ActivePoints-BK5BwbKA.js";import"./Dot-BvfeX907.js";import"./RegisterGraphicalItemId-DbsNOx6w.js";import"./ErrorBarContext-Bh7QEhRH.js";import"./GraphicalItemClipPath-Cx1IovYW.js";import"./SetGraphicalItem-CkM_d3EZ.js";import"./getRadiusAndStrokeWidthFromDot-Ddm_ys4J.js";import"./ActiveShapeUtils-CIArBYiS.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-DUmQAHmM.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-U0YZNd6R.js";import"./symbol-DOolnNi0.js";import"./useElementOffset-0ZnUPhxq.js";import"./uniqBy-EzYVTFGO.js";import"./iteratee-DMZj6OWx.js";const gt={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'usePlotAreaExample',
  render: (args: Args) => {
    return <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin} style={args.style}>
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
    },
    style: {
      border: '1px solid #ccc'
    }
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ut=["UsePlotArea"];export{e as UsePlotArea,ut as __namedExportsOrder,gt as default};
