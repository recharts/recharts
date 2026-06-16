import{R as t}from"./iframe-C_T02oQn.js";import{g as c}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-DVckGNEz.js";import{a as d}from"./Coordinate-geWwP0Ct.js";import{S as i}from"./ScatterChart-CZSpF8TC.js";import{R as g}from"./zIndexSlice-PaMIo_4H.js";import{X as S}from"./XAxis-9hDWnVEM.js";import{Y as h}from"./YAxis-CAA9Sn25.js";import{S as A}from"./Scatter-DlPG0dvs.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B6sFF1OD.js";import"./index-C8_JgXbr.js";import"./index-D8uzW4ZU.js";import"./index-Dlc1g4gM.js";import"./index-Ca6EOx6F.js";import"./immer-B6lblpQa.js";import"./get-C7erGA50.js";import"./renderedTicksSlice-CaJKKs-e.js";import"./axisSelectors-BhG2tLgr.js";import"./d3-scale-BkdgfgBA.js";import"./string-B6fdYHAA.js";import"./resolveDefaultProps-m_js62KJ.js";import"./isWellBehavedNumber-BCiXswn1.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BDn-adSN.js";import"./chartDataContext-BpZSWeLp.js";import"./CategoricalChart-DJkiCneY.js";import"./CartesianAxis-Du2JQot0.js";import"./Layer-DjmjZ8nK.js";import"./Text-BPMY0rSA.js";import"./DOMUtils-D0fMC5uZ.js";import"./Label-PISAROHv.js";import"./ZIndexLayer-BEphblF2.js";import"./types-BgdJMLXg.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-BUXgV9u-.js";import"./useAnimationId-BP6MXfIJ.js";import"./Curve-YTaF5YAP.js";import"./step-DxTezoeO.js";import"./path-DyVhHtw_.js";import"./tooltipContext-Wy-EiK55.js";import"./Symbols-uE90l84i.js";import"./symbol-CvYDruQ3.js";import"./ActiveShapeUtils-CWkOqTvX.js";import"./RegisterGraphicalItemId-CLd-qaBQ.js";import"./ErrorBarContext-BlU25AOm.js";import"./GraphicalItemClipPath-hcKIGZeq.js";import"./SetGraphicalItem-CYOjbzSp.js";const ct={argTypes:m,component:i},r={name:"Simple",render:p=>{const{data:s,...n}=p;return t.createElement(g,{width:"100%",height:400},t.createElement(i,{...n},t.createElement(S,{dataKey:"x"}),t.createElement(h,{dataKey:"y"}),t.createElement(A,{data:s})))},args:{...c(m),data:d,margin:{top:0,right:0,bottom:0,left:0}}};var o,e,a;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'Simple',
  render: (args: Args) => {
    const {
      data,
      ...rest
    } = args;
    return <ResponsiveContainer width="100%" height={400}>
        <ScatterChart {...rest}>
          <XAxis dataKey="x" />
          <YAxis dataKey="y" />
          <Scatter data={data} />
        </ScatterChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(ScatterChartArgs),
    data: coordinateData,
    margin: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  }
}`,...(a=(e=r.parameters)==null?void 0:e.docs)==null?void 0:a.source}}};const dt=["API"];export{r as API,dt as __namedExportsOrder,ct as default};
