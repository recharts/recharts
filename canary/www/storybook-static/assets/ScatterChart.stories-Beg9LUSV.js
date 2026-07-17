import{R as t}from"./iframe-556vb-qw.js";import{g as c}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-DVckGNEz.js";import{a as d}from"./Coordinate-geWwP0Ct.js";import{S as i}from"./ScatterChart-BvcSHryY.js";import{R as g}from"./zIndexSlice-Dx_8tKSl.js";import{X as S}from"./XAxis-C8oxlX6U.js";import{Y as h}from"./YAxis-CUYZIBQF.js";import{S as A}from"./Scatter-CWhm41Wy.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-KC_7-tBU.js";import"./index-DQcKumtN.js";import"./index-BtPxInWz.js";import"./index-DiiXHLk0.js";import"./index-CiB0Io8X.js";import"./throttle-Bki2cXyV.js";import"./get-DJ3830uQ.js";import"./renderedTicksSlice-CfWaZqlF.js";import"./axisSelectors-BduM4NJa.js";import"./resolveDefaultProps-FVjcPzTE.js";import"./isWellBehavedNumber-Dc37N4M2.js";import"./d3-scale-D2li86P1.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-D8G919J3.js";import"./chartDataContext-Bs-zR_b9.js";import"./CategoricalChart-CcDvDLSk.js";import"./CartesianAxis-C3UFcQ97.js";import"./Layer-BTltl-Cn.js";import"./Text-UXI8_ZCT.js";import"./DOMUtils-B14va7zq.js";import"./Label-BaM1U3dt.js";import"./ZIndexLayer-BOwqliX9.js";import"./types-CA3u3vRt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-CxcoqNDa.js";import"./useAnimationId-ClUEd6We.js";import"./Curve-CQITscbT.js";import"./step-CFU3znK3.js";import"./path-DyVhHtw_.js";import"./tooltipContext-BlLTGOp5.js";import"./Symbols-DArUB4Tu.js";import"./symbol-BAz4A_vL.js";import"./ActiveShapeUtils-BLdFLviC.js";import"./RegisterGraphicalItemId-n-hAz8yp.js";import"./ErrorBarContext-DZjyWL-W.js";import"./GraphicalItemClipPath-CuuadlYj.js";import"./SetGraphicalItem-DRzPdsV9.js";const nt={argTypes:m,component:i},r={name:"Simple",render:p=>{const{data:s,...n}=p;return t.createElement(g,{width:"100%",height:400},t.createElement(i,{...n},t.createElement(S,{dataKey:"x"}),t.createElement(h,{dataKey:"y"}),t.createElement(A,{data:s})))},args:{...c(m),data:d,margin:{top:0,right:0,bottom:0,left:0}}};var o,e,a;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
