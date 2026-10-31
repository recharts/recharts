import{R as t}from"./iframe-BcoARvhY.js";import{z as a}from"./RechartsWrapper-Cwmh20d2.js";import{R as p}from"./zIndexSlice-Cap7bOGW.js";import{C as n}from"./ComposedChart-Dw_41cnT.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-DWyUakfU.js";import{X as l}from"./XAxis-CW4XRUun.js";import{Y as h}from"./YAxis-BR79w2P2.js";import{L as c}from"./Legend-aU5mImzU.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DgaC_Lp9.js";import"./get-cF5BDHN6.js";import"./axisSelectors-CF6rFxXt.js";import"./throttle-DozmwBSC.js";import"./index-DVE_dPhD.js";import"./index-BIq0I_KS.js";import"./polarAxisSelectors-C4L0U3vA.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BLsEuD7O.js";import"./index-SzPYUv7o.js";import"./index-DvX40RdG.js";import"./renderedTicksSlice-Dsox9MKA.js";import"./index-BhqvlJ2k.js";import"./fillDefinitions-D74AVg8N.js";import"./CartesianChart-C4x2bsCb.js";import"./ZIndexPortal-CGHsRqD4.js";import"./CategoricalChart-DUIKL0FO.js";import"./Layer-BMBcyrHw.js";import"./Curve-hSwQe_mn.js";import"./types-CjeLalhs.js";import"./step-BV4gh9k1.js";import"./path-DyVhHtw_.js";import"./LabelList-DqQuwlzD.js";import"./Label-Db4oLrbv.js";import"./Text-DEB5NFXE.js";import"./DOMUtils-BwQh9Mln.js";import"./ZIndexLayer-e5VNMC6H.js";import"./ActivePoints-qZlMEdOF.js";import"./Dot-CeoPT2zv.js";import"./activeStyles-Bdk5Xw9p.js";import"./useAnimationId-DZvEuqRY.js";import"./dataEntryStyles-oli1U5SG.js";import"./Symbols-DvLknyR9.js";import"./symbol-D2mHl5_S.js";import"./ErrorBarContext-BGCJ_sZx.js";import"./SetGraphicalItem-D7kHQmaa.js";import"./getRadiusAndStrokeWidthFromDot-DIgm2Flo.js";import"./ActiveShapeUtils-CvEqRJU-.js";import"./useEffectiveDataKey-1O9VfdX1.js";import"./CartesianAxis-Dfmzj1DX.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./useElementOffset-KsdSYS8B.js";import"./uniqBy-CzEHPKx1.js";import"./iteratee-CEqHQ8un.js";import"./isArguments-yB-y1yaH.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
