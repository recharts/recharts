import{R as t}from"./iframe-C_T02oQn.js";import{u as a}from"./CategoricalChart-DJkiCneY.js";import{R as p}from"./zIndexSlice-PaMIo_4H.js";import{C as s}from"./ComposedChart-D2veWJ82.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-Bkm0IHhG.js";import{X as l}from"./XAxis-9hDWnVEM.js";import{Y as h}from"./YAxis-CAA9Sn25.js";import{L as c}from"./Legend-BSh8bNuS.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B6sFF1OD.js";import"./index-C8_JgXbr.js";import"./index-D8uzW4ZU.js";import"./index-Dlc1g4gM.js";import"./index-Ca6EOx6F.js";import"./immer-B6lblpQa.js";import"./get-C7erGA50.js";import"./renderedTicksSlice-CaJKKs-e.js";import"./axisSelectors-BhG2tLgr.js";import"./d3-scale-BkdgfgBA.js";import"./string-B6fdYHAA.js";import"./resolveDefaultProps-m_js62KJ.js";import"./isWellBehavedNumber-BCiXswn1.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BDn-adSN.js";import"./chartDataContext-BpZSWeLp.js";import"./Layer-DjmjZ8nK.js";import"./Curve-YTaF5YAP.js";import"./types-BgdJMLXg.js";import"./step-DxTezoeO.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BUXgV9u-.js";import"./Label-PISAROHv.js";import"./Text-BPMY0rSA.js";import"./DOMUtils-D0fMC5uZ.js";import"./ZIndexLayer-BEphblF2.js";import"./useAnimationId-BP6MXfIJ.js";import"./ActivePoints-wYW31SoX.js";import"./Dot-BqWNwI4e.js";import"./RegisterGraphicalItemId-CLd-qaBQ.js";import"./ErrorBarContext-BlU25AOm.js";import"./GraphicalItemClipPath-hcKIGZeq.js";import"./SetGraphicalItem-CYOjbzSp.js";import"./getRadiusAndStrokeWidthFromDot-BgRiSanx.js";import"./ActiveShapeUtils-CWkOqTvX.js";import"./CartesianAxis-Du2JQot0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Symbols-uE90l84i.js";import"./symbol-CvYDruQ3.js";import"./useElementOffset-DhbYobY7.js";import"./uniqBy-CWJ7W0V1.js";import"./iteratee-CidJxIEL.js";const ht={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ct=["UsePlotArea"];export{e as UsePlotArea,ct as __namedExportsOrder,ht as default};
