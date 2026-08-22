import{R as t}from"./iframe-BX5cRibr.js";import{u as a}from"./CategoricalChart-DuHEcs_Z.js";import{R as p}from"./zIndexSlice-AZuYl_vp.js";import{C as s}from"./ComposedChart-ySsto5-f.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-Ble_dEe_.js";import{X as l}from"./XAxis-DwJ67tbd.js";import{Y as h}from"./YAxis-LHNvPj5J.js";import{L as c}from"./Legend-Bh7zufuS.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BWIRq1qS.js";import"./index-D7b-sRGH.js";import"./index-Dw3bOTki.js";import"./index-DPKEyt0t.js";import"./index-CcyvhUmM.js";import"./throttle-zmqWqRK4.js";import"./get-C2VjdU0L.js";import"./axisSelectors-TKieRxLR.js";import"./resolveDefaultProps-mM3kvg0l.js";import"./isWellBehavedNumber-DBNW0jLE.js";import"./d3-scale-Bo5r3xwl.js";import"./renderedTicksSlice-CMTI5nMK.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Dy3LaLed.js";import"./chartDataContext-BTnhTp6W.js";import"./Layer-W_QEwym4.js";import"./Curve-DB2Kv5XX.js";import"./types-DbQE6sDs.js";import"./step-DSSF95ZQ.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Cm8c3RW5.js";import"./Label-DaxsWVsm.js";import"./Text-LzAq1gnt.js";import"./DOMUtils-BjdsXn98.js";import"./useId-DmJJcbw8.js";import"./useBackwardsCompatibleTheme-D4QNjc2r.js";import"./ZIndexLayer-5Nxk2bOM.js";import"./useAnimationId-CcWR-JA_.js";import"./ActivePoints-C2sJ7ejP.js";import"./Dot-BmK-BBdb.js";import"./RegisterGraphicalItemId-Bm8N3XnH.js";import"./ErrorBarContext-Bxp-Dx_a.js";import"./GraphicalItemClipPath-T4Qnp2Cr.js";import"./SetGraphicalItem-D_SsxP0N.js";import"./getRadiusAndStrokeWidthFromDot-CTcI3Era.js";import"./ActiveShapeUtils-Dci8zubi.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-C0ASpg_d.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-8Y55TEi-.js";import"./symbol-DJtjK0so.js";import"./useElementOffset-B2muHLId.js";import"./uniqBy-CUPPr5RE.js";import"./iteratee-C-A_FkJM.js";const ut={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
