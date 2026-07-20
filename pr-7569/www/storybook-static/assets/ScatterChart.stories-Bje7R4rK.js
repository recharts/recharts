import{R as t}from"./iframe-rlLReeiH.js";import{g as c}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-DVckGNEz.js";import{a as d}from"./Coordinate-geWwP0Ct.js";import{S as i}from"./ScatterChart-01Gy1_RT.js";import{R as g}from"./zIndexSlice-dET_x_8J.js";import{X as S}from"./XAxis-BANsvQjN.js";import{Y as h}from"./YAxis-BPC8NcBR.js";import{S as A}from"./Scatter-QZYVyV42.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-2Dg61vQO.js";import"./index-BOTGdiK-.js";import"./index-QXSF1qjq.js";import"./index-CKdVYzDL.js";import"./index-Bbfl3u8C.js";import"./throttle-7RYQhcti.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-D5uSNu5L.js";import"./axisSelectors-RWAxTq2z.js";import"./resolveDefaultProps-Df8vYP0G.js";import"./isWellBehavedNumber-BS7XWWNW.js";import"./d3-scale-kKXY2gAc.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-keWWrUD3.js";import"./chartDataContext-ylOfrWr_.js";import"./CategoricalChart-z2rCkgdR.js";import"./CartesianAxis-DB3D7e8-.js";import"./Layer-yUpNfqTk.js";import"./Text-Bv5QIM4O.js";import"./DOMUtils-DlxBAltB.js";import"./Label-D0R02xnC.js";import"./ZIndexLayer-s_cuGEJZ.js";import"./types-Dt7L5GFC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./AnimatedItems-DR-XZCrI.js";import"./useAnimationId-Dx24Y47b.js";import"./Curve-7HuuJXLM.js";import"./step-C_7J8XoD.js";import"./path-DyVhHtw_.js";import"./tooltipContext-C1weWIDV.js";import"./Symbols-C8uz2tbW.js";import"./symbol-B4A7mbxq.js";import"./ActiveShapeUtils-BqK4gs0R.js";import"./RegisterGraphicalItemId-CQs7WMwj.js";import"./ErrorBarContext-DLDAQNmT.js";import"./GraphicalItemClipPath-DSUy1vxD.js";import"./SetGraphicalItem-D7UC0AFj.js";const ct={argTypes:m,component:i},r={name:"Simple",render:p=>{const{data:s,...n}=p;return t.createElement(g,{width:"100%",height:400},t.createElement(i,{...n},t.createElement(S,{dataKey:"x"}),t.createElement(h,{dataKey:"y"}),t.createElement(A,{data:s})))},args:{...c(m),data:d,margin:{top:0,right:0,bottom:0,left:0}}};var o,e,a;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
