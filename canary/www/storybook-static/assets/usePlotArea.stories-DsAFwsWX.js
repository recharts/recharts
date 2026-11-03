import{R as t}from"./iframe-BquPZQZR.js";import{z as a}from"./RechartsWrapper-BOh7Al31.js";import{R as p}from"./zIndexSlice-DfoMGwwJ.js";import{C as n}from"./ComposedChart-FnXBnX6v.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-BUXIJhlS.js";import{X as l}from"./XAxis-B0NTBS_i.js";import{Y as h}from"./YAxis-DU99c4NY.js";import{L as c}from"./Legend-NxBULrUy.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-C1-PhdLj.js";import"./get-cF5BDHN6.js";import"./axisSelectors-Ra6SuVrn.js";import"./throttle-Ifciv68t.js";import"./index-BeXk3gq4.js";import"./index-CY_4egx2.js";import"./polarAxisSelectors-Bi2qo_WA.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-B2Z3tDr8.js";import"./index-BBIQOsY9.js";import"./index-DeLNFakb.js";import"./renderedTicksSlice-DkVmzd5W.js";import"./index-C389QzGe.js";import"./fillDefinitions-bKlUAuaq.js";import"./CartesianChart-DusmDSbk.js";import"./ZIndexPortal-ChcM8kac.js";import"./CategoricalChart-DY8SYWQ4.js";import"./Layer-DgCLyWmw.js";import"./Curve-DPOrxZAK.js";import"./types-HVxQrabK.js";import"./step-CUnUoUW9.js";import"./path-DyVhHtw_.js";import"./LabelList-c67UtHfn.js";import"./Label-QfyPAwEN.js";import"./Text-Cz9Qm4K-.js";import"./DOMUtils-Hop2FGiK.js";import"./ZIndexLayer-BKwk9Ckz.js";import"./ActivePoints-BzSHcWj6.js";import"./Dot-B5ySELDq.js";import"./activeStyles-7MX0jGA5.js";import"./useAnimationId-BAgUZZzE.js";import"./dataEntryStyles-DcYBdp4K.js";import"./Symbols-BOEhDLOF.js";import"./symbol-BytJGu2b.js";import"./ErrorBarContext-LEjhprcI.js";import"./SetGraphicalItem-DVTOJBGj.js";import"./getRadiusAndStrokeWidthFromDot-Dz2gbesP.js";import"./ActiveShapeUtils-B8wKgjG7.js";import"./useEffectiveDataKey-Dv0si8CY.js";import"./CartesianAxis-G--oVlcc.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-v0E65nTN.js";import"./uniqBy-Dp4AeUu6.js";import"./iteratee-CvxwxQ4E.js";import"./isArguments-yB-y1yaH.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as UsePlotArea,ft as __namedExportsOrder,At as default};
