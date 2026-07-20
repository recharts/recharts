import{R as t}from"./iframe-3EJ0a-7l.js";import{g as c}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-DVckGNEz.js";import{a as d}from"./Coordinate-geWwP0Ct.js";import{S as i}from"./ScatterChart-CvmGpEYS.js";import{R as g}from"./zIndexSlice-c2FXiYNl.js";import{X as S}from"./XAxis-C3QGe7ZQ.js";import{Y as h}from"./YAxis-DWgMRUiY.js";import{S as A}from"./Scatter-Dzr6C64v.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Bn0d5D9a.js";import"./index-BjSUzMQ4.js";import"./index-tuDXSbu0.js";import"./index-0T8Ohuwb.js";import"./index-Bew5wRIt.js";import"./throttle-CPX4UzZG.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-gv74no8c.js";import"./axisSelectors-Bmyn61pB.js";import"./resolveDefaultProps-BuDtgz7X.js";import"./isWellBehavedNumber-BhkIWxYY.js";import"./d3-scale-iKC8386d.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-BDgOOMut.js";import"./chartDataContext-D6a_Yhjw.js";import"./CategoricalChart-CxrO1b6T.js";import"./CartesianAxis-Bfa5m128.js";import"./Layer-DpkyIzcZ.js";import"./Text-Tcv7e8Zm.js";import"./DOMUtils-DXgkUmDa.js";import"./Label-C0w-bdKA.js";import"./ZIndexLayer-DNvDkown.js";import"./types-CU0G9DUW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./AnimatedItems-_aFnnDci.js";import"./useAnimationId-BfMO6PtV.js";import"./Curve-BO7dzXGY.js";import"./step-oroBBTM2.js";import"./path-DyVhHtw_.js";import"./tooltipContext-DYh9IZNi.js";import"./Symbols-BSONYbmQ.js";import"./symbol-C2xiebrn.js";import"./ActiveShapeUtils-Cy1FCqFR.js";import"./RegisterGraphicalItemId-DGaDllRs.js";import"./ErrorBarContext-BbLTkDCO.js";import"./GraphicalItemClipPath-BH3HlCRV.js";import"./SetGraphicalItem-BJF2lEB0.js";const ct={argTypes:m,component:i},r={name:"Simple",render:p=>{const{data:s,...n}=p;return t.createElement(g,{width:"100%",height:400},t.createElement(i,{...n},t.createElement(S,{dataKey:"x"}),t.createElement(h,{dataKey:"y"}),t.createElement(A,{data:s})))},args:{...c(m),data:d,margin:{top:0,right:0,bottom:0,left:0}}};var o,e,a;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
