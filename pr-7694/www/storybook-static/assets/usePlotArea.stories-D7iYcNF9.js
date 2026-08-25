import{R as t}from"./iframe-CkYMKdj_.js";import{u as a}from"./CategoricalChart-ceXzvbTP.js";import{R as p}from"./zIndexSlice-BYtB_o4a.js";import{C as s}from"./ComposedChart-aFeYXy0e.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-D2h0ufrn.js";import{X as l}from"./XAxis-C0aJOre-.js";import{Y as h}from"./YAxis-U8fHQD44.js";import{L as c}from"./Legend-JWH7LkBR.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-nO0TmJ-v.js";import"./index-E2SMYanO.js";import"./index-DL62tWXC.js";import"./index-C3dUdvXE.js";import"./index-DXIKdrQ_.js";import"./throttle-BoLMdPdD.js";import"./get-C2VjdU0L.js";import"./axisSelectors-C8zY5_Jl.js";import"./resolveDefaultProps-Cash8-Wc.js";import"./isWellBehavedNumber-D3nu-dTg.js";import"./d3-scale-DbX3n6Vg.js";import"./renderedTicksSlice-BQ9kQeWp.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CFe3I3j0.js";import"./chartDataContext-B1d2oGRw.js";import"./Layer-DM-j75FJ.js";import"./Curve-BKPB57y0.js";import"./types-lWnA8D12.js";import"./step-CVVw7_T2.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DOwp1bhS.js";import"./Label-nwXUgC1e.js";import"./Text-DLxJgi7q.js";import"./DOMUtils-CRMwsydF.js";import"./useId-vngItXwU.js";import"./useBackwardsCompatibleTheme-BDT9ZxVM.js";import"./ZIndexLayer-CYcyrDOa.js";import"./useAnimationId-BMO_95FO.js";import"./ActivePoints-SNTIAa6X.js";import"./Dot-DTKTIC4o.js";import"./RegisterGraphicalItemId-xAUQoTNg.js";import"./ErrorBarContext-sYCQPlFx.js";import"./GraphicalItemClipPath-65lu28GO.js";import"./SetGraphicalItem-BDY3wpRw.js";import"./getRadiusAndStrokeWidthFromDot-B4vOHjlt.js";import"./ActiveShapeUtils-DdvFeJee.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-CwqvTQH4.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BU2IqvHD.js";import"./symbol-ClBpnaaq.js";import"./useElementOffset-Dp-ixcz-.js";import"./uniqBy-ae7h2v4h.js";import"./iteratee-wG1Ynzn8.js";const ut={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const At=["UsePlotArea"];export{e as UsePlotArea,At as __namedExportsOrder,ut as default};
