import{R as t}from"./iframe-BZ8dVzH9.js";import{g as c}from"./utils-ePvtT4un.js";import{S as a}from"./ScatterChartArgs-BpaDSsyX.js";import{a as d}from"./Coordinate-geWwP0Ct.js";import{S as i}from"./ScatterChart-BPx6B0Ei.js";import{R as g}from"./zIndexSlice-alAuneH8.js";import{X as S}from"./XAxis-CnHMXMmb.js";import{Y as h}from"./YAxis-sJ36Ww1v.js";import{S as A}from"./Scatter-CbGExFUM.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BUL_ZWsP.js";import"./resolveDefaultProps-DGRkN7my.js";import"./get-C2VjdU0L.js";import"./axisSelectors-Bf9eJXot.js";import"./throttle-Gvesfo2A.js";import"./index-BG6e4aCS.js";import"./index-05PttkMT.js";import"./isWellBehavedNumber-DuT8v1eR.js";import"./d3-scale-BqJh_GJr.js";import"./index-Bh_WxC72.js";import"./index-TQNe-Pfx.js";import"./renderedTicksSlice-CdbAedzg.js";import"./index-1GZEZdCR.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CPDbtls9.js";import"./chartDataContext-Dooqfk1y.js";import"./CategoricalChart-wlCT99n2.js";import"./CartesianAxis-ZGFemc86.js";import"./Layer-DFGb6VX8.js";import"./Text-Sov8IyzM.js";import"./DOMUtils-B5j94FrC.js";import"./useId-Cmc9xIYY.js";import"./useBackwardsCompatibleTheme-mp8lDntE.js";import"./Label-D8Xv73in.js";import"./ZIndexLayer-By4t7zGO.js";import"./types-JZ66y424.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-DFtjNgrp.js";import"./useAnimationId-CAROHwad.js";import"./Curve-GkKc5FU6.js";import"./step-BzQ2FL9y.js";import"./path-DyVhHtw_.js";import"./tooltipContext-hs5giZdZ.js";import"./Symbols-C0TFMyrU.js";import"./symbol-qUdoioFN.js";import"./ActiveShapeUtils-DjhXDsDC.js";import"./RegisterGraphicalItemId-DjZaW0U6.js";import"./ErrorBarContext-Bbbe3Bh6.js";import"./GraphicalItemClipPath-Bqlh9UVi.js";import"./SetGraphicalItem-C_OKi3Rd.js";import"./useGraphicalItemIdentity-DrldTHyX.js";const ht={argTypes:a,component:i},r={name:"Simple",render:p=>{const{data:n,...s}=p;return t.createElement(g,{width:"100%",height:400},t.createElement(i,{...s},t.createElement(S,{dataKey:"x"}),t.createElement(h,{dataKey:"y"}),t.createElement(A,{data:n})))},args:{...c(a),data:d,margin:{top:0,right:0,bottom:0,left:0}}},At=["API"];var o,e,m;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(e=r.parameters)==null?void 0:e.docs)==null?void 0:m.source}}};export{r as API,At as __namedExportsOrder,ht as default};
