import{R as t}from"./iframe-BYNQK8LM.js";import{e as p}from"./RechartsWrapper-Di3THVkM.js";import{R as a}from"./zIndexSlice-CnKvPC-T.js";import{C as n}from"./ComposedChart-CliK5bO3.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-Bz6FXF4d.js";import{X as l}from"./XAxis-CBcIWiwv.js";import{Y as h}from"./YAxis-CHFcgGbi.js";import{L as c}from"./Legend-BksFtpyC.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-e-zsAsB1.js";import"./get-cF5BDHN6.js";import"./axisSelectors-f_hhqOEQ.js";import"./throttle-DlEVZZqo.js";import"./index-PSgPxbx_.js";import"./index-C0msNLyf.js";import"./isWellBehavedNumber-BZZV9Me7.js";import"./d3-scale-D4yBTTO3.js";import"./index-Cg_72k7E.js";import"./index-CsXf8i4B.js";import"./renderedTicksSlice-D3c5wsjJ.js";import"./index-C5WITlKt.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-C_kwKDBD.js";import"./chartDataContext-clQVsdi0.js";import"./CategoricalChart-CJdqn6cX.js";import"./Layer-CWziNCLd.js";import"./Curve-CjpgSr7n.js";import"./types-8Tp7AoeZ.js";import"./step-CHupxKkt.js";import"./path-DyVhHtw_.js";import"./activeStyles-CDuvBT6X.js";import"./Label--8HpHVT6.js";import"./Text-uEN8Pqjn.js";import"./pageBackground-ezRX3My0.js";import"./useId-Dpi4gaCB.js";import"./useBackwardsCompatibleTheme-Dydi4_BE.js";import"./ZIndexLayer-DnQxIb9c.js";import"./useAnimationId-BA2hTS6j.js";import"./dataEntryStyles-BhOKhuEL.js";import"./ActivePoints-Cvp-MGqu.js";import"./Dot-Dz9YgpZb.js";import"./ErrorBarContext-ymRWszCz.js";import"./GraphicalItemClipPath-BzYQ5qPw.js";import"./SetGraphicalItem-C56xRO9a.js";import"./getRadiusAndStrokeWidthFromDot-B9dFz0h2.js";import"./ActiveShapeUtils-CozVnlhs.js";import"./useEffectiveDataKey-Cq2dQ4RC.js";import"./CartesianAxis-DHgd3hOW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-DryRVk5L.js";import"./symbol-CDBfvHL7.js";import"./useElementOffset-Dn-sBbsw.js";import"./uniqBy-CHpNcSg2.js";import"./iteratee-CAw-gtof.js";import"./isArguments-yB-y1yaH.js";const ft={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(a,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},yt=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as UsePlotArea,yt as __namedExportsOrder,ft as default};
