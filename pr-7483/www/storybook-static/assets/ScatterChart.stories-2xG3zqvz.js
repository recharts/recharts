import{R as t}from"./iframe-DghEAMN6.js";import{g as c}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-DVckGNEz.js";import{a as d}from"./Coordinate-geWwP0Ct.js";import{S as i}from"./ScatterChart-DnW70dSY.js";import{R as g}from"./zIndexSlice-DZVgvaAB.js";import{X as S}from"./XAxis-BmVtlHU0.js";import{Y as h}from"./YAxis-S3ValhBK.js";import{S as A}from"./Scatter-DFi5rUFd.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper--epX0hHz.js";import"./index-CHxwPLCw.js";import"./index-FvypkAhj.js";import"./index-DwTkm5Gc.js";import"./index-BNbzKJUN.js";import"./immer-Dzr4hzbh.js";import"./get-OeFwIBZb.js";import"./renderedTicksSlice-xCX0SP0o.js";import"./axisSelectors-Cx52Tyf1.js";import"./d3-scale-CUSv4nyH.js";import"./resolveDefaultProps-DtqwpnL6.js";import"./isWellBehavedNumber-2WeEbslz.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-B2gIIl6u.js";import"./chartDataContext-DmtHMzxl.js";import"./CategoricalChart-mficH34_.js";import"./CartesianAxis-BBXp2oHY.js";import"./Layer-4aUlzdTp.js";import"./Text-3TARh6pc.js";import"./DOMUtils-Qs3kgbuH.js";import"./Label-5l5u0djs.js";import"./ZIndexLayer-DDP5Eu2k.js";import"./types-Beb7Z0cf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-ChrydhAM.js";import"./useAnimationId-bXkDgMGB.js";import"./Curve-AO8nrk2K.js";import"./step-mxE-OcC-.js";import"./path-DyVhHtw_.js";import"./tooltipContext-cbdZeGhH.js";import"./Symbols-DCW_1DOh.js";import"./symbol-kK5tHu0k.js";import"./ActiveShapeUtils-_OCeFGs0.js";import"./RegisterGraphicalItemId-BH9Fw2h1.js";import"./ErrorBarContext-CWlVXcpe.js";import"./GraphicalItemClipPath-B_ue0lJA.js";import"./SetGraphicalItem-DyRJQvTd.js";const nt={argTypes:m,component:i},r={name:"Simple",render:p=>{const{data:s,...n}=p;return t.createElement(g,{width:"100%",height:400},t.createElement(i,{...n},t.createElement(S,{dataKey:"x"}),t.createElement(h,{dataKey:"y"}),t.createElement(A,{data:s})))},args:{...c(m),data:d,margin:{top:0,right:0,bottom:0,left:0}}};var o,e,a;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(a=(e=r.parameters)==null?void 0:e.docs)==null?void 0:a.source}}};const ct=["API"];export{r as API,ct as __namedExportsOrder,nt as default};
