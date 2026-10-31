import{R as t}from"./iframe-COxqCazb.js";import{g as c}from"./utils-ePvtT4un.js";import{S as a}from"./ScatterChartArgs-BpaDSsyX.js";import{a as d}from"./Coordinate-geWwP0Ct.js";import{S as i}from"./ScatterChart-DM7xj3Pq.js";import{R as g}from"./zIndexSlice-B4X5qRzI.js";import{X as S}from"./XAxis-DQrBzVHK.js";import{Y as h}from"./YAxis-ZsGxmqjy.js";import{S as A}from"./Scatter-oZmG0xJE.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-MgEDcD8h.js";import"./resolveDefaultProps-yMt3tC3j.js";import"./get-cF5BDHN6.js";import"./axisSelectors-uSjAZrah.js";import"./throttle-D4LJPOuI.js";import"./index-CmlNloJu.js";import"./index-BFPgWdWH.js";import"./polarAxisSelectors-a1oAG-SZ.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-D8xTnIof.js";import"./index-BQ5RDrN3.js";import"./index-BymcG2zO.js";import"./renderedTicksSlice-CPgi-eJ3.js";import"./index-BE8xWht0.js";import"./CartesianChart-lA_wA_-C.js";import"./ZIndexPortal-B9PAyW6q.js";import"./CategoricalChart-C0aYCun5.js";import"./CartesianAxis-CjYDk6nf.js";import"./Layer-D2zViLNQ.js";import"./Text-C4rvSXOn.js";import"./DOMUtils-BLBk64WL.js";import"./pageBackground-zdIyeBG0.js";import"./ZIndexLayer-cSzqGwkX.js";import"./Label-BiNM6_QG.js";import"./types-3E7AO6tV.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-DLxGydTH.js";import"./activeStyles-Dz5dwfdA.js";import"./useAnimationId-CI1eTN6X.js";import"./dataEntryStyles-DJkgxm7x.js";import"./fillDefinitions-HVISG19w.js";import"./Curve-C7Cjm8FO.js";import"./step-CbCZbxFO.js";import"./path-DyVhHtw_.js";import"./tooltipContext-Cm1PQ1zm.js";import"./Symbols-pJe31Clp.js";import"./symbol-DFh_91jg.js";import"./ActiveShapeUtils-DhrWvn7z.js";import"./ErrorBarContext-CSA0hXTc.js";import"./SetGraphicalItem-DfnH2C1-.js";import"./useEffectiveDataKey-DbCVmzAC.js";const ht={argTypes:a,component:i},r={name:"Simple",render:p=>{const{data:n,...s}=p;return t.createElement(g,{width:"100%",height:400},t.createElement(i,{...s},t.createElement(S,{dataKey:"x"}),t.createElement(h,{dataKey:"y"}),t.createElement(A,{data:n})))},args:{...c(a),data:d,margin:{top:0,right:0,bottom:0,left:0}}},At=["API"];var o,e,m;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
