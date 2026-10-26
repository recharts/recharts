import{R as t}from"./iframe-DPP4Tdri.js";import{g as c}from"./utils-ePvtT4un.js";import{S as a}from"./ScatterChartArgs-BpaDSsyX.js";import{a as d}from"./Coordinate-geWwP0Ct.js";import{S as i}from"./ScatterChart-Dvup4xq6.js";import{R as g}from"./zIndexSlice-Bty8FlsF.js";import{X as S}from"./XAxis-BpxUBGxx.js";import{Y as h}from"./YAxis-Ce7IYC8C.js";import{S as A}from"./Scatter-DPBF9iNT.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Dc5A4Gsl.js";import"./resolveDefaultProps-Cm9tdCQy.js";import"./get-cF5BDHN6.js";import"./axisSelectors-D5c_jQLf.js";import"./throttle-vvUvRomY.js";import"./index-DVADikfE.js";import"./index-De7017Q2.js";import"./polarAxisSelectors-CClqMsSX.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DzX31dlW.js";import"./index-Cb0QOEvK.js";import"./index-CTYPR5t0.js";import"./renderedTicksSlice-B_g7wt05.js";import"./index-C1bARSgS.js";import"./CartesianChart-_cTASiWq.js";import"./chartDataContext-BX3Xv7t3.js";import"./CategoricalChart-CkLeLS7-.js";import"./CartesianAxis-Cw8YZYZ1.js";import"./Layer-wOFD4jm5.js";import"./Text-BtmpD8Z5.js";import"./pageBackground-km40Fien.js";import"./useId-Ddybgx-i.js";import"./ZIndexLayer-Blh-9Ce2.js";import"./Label-VwhFHh0o.js";import"./dataEntryStyles-CptsKKQm.js";import"./types-nPujXrb0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./activeStyles-Czb_VVwe.js";import"./useAnimationId-CRGpdxWH.js";import"./Curve-B2UCYZoR.js";import"./step-3axEj_2-.js";import"./path-DyVhHtw_.js";import"./tooltipContext-BbQ3hIxk.js";import"./Symbols-DAUL1Z82.js";import"./symbol-CyE3iFmu.js";import"./ActiveShapeUtils-BRfAaZtt.js";import"./RegisterGraphicalItemId-C_PEUR1P.js";import"./ErrorBarContext-DA7VKoxZ.js";import"./SetGraphicalItem-me1Dq43s.js";import"./useEffectiveDataKey-CPqFi3kZ.js";const St={argTypes:a,component:i},r={name:"Simple",render:p=>{const{data:n,...s}=p;return t.createElement(g,{width:"100%",height:400},t.createElement(i,{...s},t.createElement(S,{dataKey:"x"}),t.createElement(h,{dataKey:"y"}),t.createElement(A,{data:n})))},args:{...c(a),data:d,margin:{top:0,right:0,bottom:0,left:0}}},ht=["API"];var o,e,m;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(e=r.parameters)==null?void 0:e.docs)==null?void 0:m.source}}};export{r as API,ht as __namedExportsOrder,St as default};
