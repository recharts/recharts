import{R as t}from"./iframe-B7hbNEXj.js";import{g as c}from"./utils-ePvtT4un.js";import{S as a}from"./ScatterChartArgs-DVckGNEz.js";import{a as d}from"./Coordinate-geWwP0Ct.js";import{S as i}from"./ScatterChart-D9njUBfb.js";import{R as g}from"./zIndexSlice-B7xQcNcG.js";import{X as S}from"./XAxis-DTRImo2J.js";import{Y as h}from"./YAxis-DYrUNm06.js";import{S as A}from"./Scatter-VkymEbEO.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-jiH_AYjt.js";import"./resolveDefaultProps-CZFMPmgx.js";import"./get-C2VjdU0L.js";import"./axisSelectors-MpDLX8pO.js";import"./throttle-BSjszxUH.js";import"./index-Dqn8czyj.js";import"./index-BYIthK0p.js";import"./isWellBehavedNumber-7V-rOBye.js";import"./d3-scale-BYK0PNRi.js";import"./index-yv8yhgLp.js";import"./index-BXYzHp_E.js";import"./renderedTicksSlice-CuhNidwY.js";import"./index-C8e3_gAU.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DfAXRIqb.js";import"./chartDataContext-BXIYwbQE.js";import"./CategoricalChart-yOdjtk4z.js";import"./CartesianAxis-CneZULGs.js";import"./Layer-osX5cZvY.js";import"./Text-DWuYBy5V.js";import"./DOMUtils-BhIaSreR.js";import"./useId-CxLZ9MIg.js";import"./useBackwardsCompatibleTheme-L1kNM3iV.js";import"./Label-lNQzMu7Z.js";import"./ZIndexLayer-jcXUwYN8.js";import"./types-C3ibKMTz.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-DhxUFxBy.js";import"./useAnimationId-BjhUfelV.js";import"./Curve-CUqyVekg.js";import"./step-5lhI3wtQ.js";import"./path-DyVhHtw_.js";import"./tooltipContext-9tFeNOQK.js";import"./Symbols-Ce4xYfXm.js";import"./symbol-CQ0q3eX5.js";import"./ActiveShapeUtils-Ds7YjhX_.js";import"./RegisterGraphicalItemId-Dm44HWfF.js";import"./ErrorBarContext-BQLnOb5r.js";import"./GraphicalItemClipPath-BL1Y6_ch.js";import"./SetGraphicalItem-DpZwQAUe.js";import"./useGraphicalItemIdentity-C6Z_BcTV.js";const ht={argTypes:a,component:i},r={name:"Simple",render:p=>{const{data:n,...s}=p;return t.createElement(g,{width:"100%",height:400},t.createElement(i,{...s},t.createElement(S,{dataKey:"x"}),t.createElement(h,{dataKey:"y"}),t.createElement(A,{data:n})))},args:{...c(a),data:d,margin:{top:0,right:0,bottom:0,left:0}}},At=["API"];var o,e,m;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
