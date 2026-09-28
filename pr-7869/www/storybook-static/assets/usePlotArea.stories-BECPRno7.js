import{R as t}from"./iframe-w_s9Pd89.js";import{j as a}from"./RechartsWrapper-Ddpcm_Bi.js";import{R as p}from"./zIndexSlice-it-eJu8g.js";import{C as n}from"./ComposedChart-DhweWezK.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-Cz9iuHIb.js";import{X as l}from"./XAxis-vfiIl3GE.js";import{Y as h}from"./YAxis-CCoq1LN0.js";import{L as c}from"./Legend-DhdJ6L8r.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-6WLroyVF.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BCLDkErh.js";import"./throttle-CTOajQ3R.js";import"./index-BpnKJ17e.js";import"./index-C_RIjmQF.js";import"./isWellBehavedNumber-Dd6bWbIs.js";import"./d3-scale-CNw_APXm.js";import"./index-DXNGRRuP.js";import"./index-JMX4B72w.js";import"./renderedTicksSlice-rrZYFmVg.js";import"./index-ZJJtOEb6.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DHQ6NGvH.js";import"./chartDataContext-2knnLAcK.js";import"./CategoricalChart--3BVlkMW.js";import"./Layer-3ye4UFiI.js";import"./Curve-DX6i7y1N.js";import"./types-o4OSUUn5.js";import"./step-BOR9D5VT.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DvmQd7Rs.js";import"./Label-hJtR_DxY.js";import"./Text-JLeCEDp8.js";import"./DOMUtils-BAN9qVyI.js";import"./useId-BHCtlGO9.js";import"./useBackwardsCompatibleTheme-o--ajDl9.js";import"./ZIndexLayer-29vxzJUo.js";import"./useAnimationId-CYLXREv3.js";import"./ActivePoints-CQqYot6E.js";import"./Dot-9MVoPrmB.js";import"./RegisterGraphicalItemId-BROviYY7.js";import"./ErrorBarContext-DSm_oAUC.js";import"./GraphicalItemClipPath-DbdrEo0q.js";import"./SetGraphicalItem-B0AS2kak.js";import"./getRadiusAndStrokeWidthFromDot-BE8QNtys.js";import"./ActiveShapeUtils-CcbjFIOc.js";import"./useGraphicalItemIdentity-D2kK-yFr.js";import"./CartesianAxis-Dt-9RID0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-BGi2ToIP.js";import"./symbol-N9Qfttlc.js";import"./useElementOffset-CYFoVs6J.js";import"./uniqBy-CtwcYJv4.js";import"./iteratee-Czd3Xbj-.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
