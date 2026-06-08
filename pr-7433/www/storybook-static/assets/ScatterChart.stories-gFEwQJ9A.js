import{R as t}from"./iframe-CT_on4dN.js";import{g as c}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-DVckGNEz.js";import{a as d}from"./Coordinate-geWwP0Ct.js";import{S as i}from"./ScatterChart-CXndXPes.js";import{R as g}from"./zIndexSlice-9YwY2T6T.js";import{X as S}from"./XAxis-DM4CuZe_.js";import{Y as h}from"./YAxis-C8PhcMfF.js";import{S as A}from"./Scatter-DI89ef3d.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C-4qOiYS.js";import"./index-B37YLZmy.js";import"./index-BLrAz-7b.js";import"./index-gBOeA-qD.js";import"./index-DQkieKcs.js";import"./immer-MMHbxa5P.js";import"./get-DAlxn1Zj.js";import"./renderedTicksSlice-Bp1Fmq8H.js";import"./axisSelectors-CiriuU2L.js";import"./d3-scale-B0V457C8.js";import"./string-B6fdYHAA.js";import"./resolveDefaultProps-Ngbi67w9.js";import"./isWellBehavedNumber-DcXfDBUW.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-CPDAsd82.js";import"./chartDataContext-BNQnQ5VT.js";import"./CategoricalChart-BJTL86x_.js";import"./CartesianAxis-Dqr_Wojb.js";import"./Layer-BDukNzPA.js";import"./Text-CMIOZbxn.js";import"./DOMUtils-CLh3lutj.js";import"./Label-DK-X0Mes.js";import"./ZIndexLayer-BBvvwP5n.js";import"./types-BSLS2Rfw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-B___w46g.js";import"./useAnimationId-DfgP8Qzr.js";import"./Curve-D3g77UHX.js";import"./step-D6LclrFL.js";import"./path-DyVhHtw_.js";import"./tooltipContext-C9oYA6ww.js";import"./Symbols-DXCrjgw-.js";import"./symbol-Cr5BIINB.js";import"./ActiveShapeUtils-7HjO8Td_.js";import"./RegisterGraphicalItemId-aTaFmyQg.js";import"./ErrorBarContext-BWZYzIr8.js";import"./GraphicalItemClipPath-BI7LHR9E.js";import"./SetGraphicalItem-Cgc_8Ru0.js";const ct={argTypes:m,component:i},r={name:"Simple",render:p=>{const{data:s,...n}=p;return t.createElement(g,{width:"100%",height:400},t.createElement(i,{...n},t.createElement(S,{dataKey:"x"}),t.createElement(h,{dataKey:"y"}),t.createElement(A,{data:s})))},args:{...c(m),data:d,margin:{top:0,right:0,bottom:0,left:0}}};var o,e,a;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
