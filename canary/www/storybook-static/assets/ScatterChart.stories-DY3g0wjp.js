import{R as t}from"./iframe-DzO9JHZD.js";import{g as c}from"./utils-ePvtT4un.js";import{S as a}from"./ScatterChartArgs-BpaDSsyX.js";import{a as d}from"./Coordinate-geWwP0Ct.js";import{S as i}from"./ScatterChart-3uXqE1Cq.js";import{R as g}from"./zIndexSlice-wXMOrHSA.js";import{X as S}from"./XAxis-s5CUDx62.js";import{Y as h}from"./YAxis-DLr6Fu7l.js";import{S as A}from"./Scatter-CaK0VUT8.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DFXgxjJb.js";import"./resolveDefaultProps-B5PLlTs_.js";import"./get-C2VjdU0L.js";import"./axisSelectors-Bktw6xhv.js";import"./throttle-_6vD_mzO.js";import"./index-D6SCMRFc.js";import"./index-DBwiuZT2.js";import"./isWellBehavedNumber-F-o7IHqi.js";import"./d3-scale-BhZPhAmj.js";import"./index-HY8blrlW.js";import"./index-vlcan66w.js";import"./renderedTicksSlice-B6tapBnR.js";import"./index-DN5zS5di.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-aILzJ3W8.js";import"./chartDataContext-CW-xn50P.js";import"./CategoricalChart-BMeJEgn8.js";import"./CartesianAxis-ITKfZFUK.js";import"./Layer-CnogDsGN.js";import"./Text-CkTBNTFx.js";import"./DOMUtils-CiXbDn_A.js";import"./useId-BB5zPEe_.js";import"./useBackwardsCompatibleTheme-DXGk--5K.js";import"./Label-CKmL6Jnj.js";import"./ZIndexLayer-CYttbcyg.js";import"./types-Br-ctfN4.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-najEeKMC.js";import"./useAnimationId-CV7fiXfg.js";import"./Curve-Bq9mijgP.js";import"./step-CTH6I-yX.js";import"./path-DyVhHtw_.js";import"./tooltipContext-C5VMrJL3.js";import"./Symbols-CJonzrIX.js";import"./symbol-H9TNNdPC.js";import"./ActiveShapeUtils-CDs2CvAD.js";import"./RegisterGraphicalItemId-DbTCddMf.js";import"./ErrorBarContext-DhSDR9CQ.js";import"./GraphicalItemClipPath-DycxALBl.js";import"./SetGraphicalItem-CLQaaH2S.js";import"./useGraphicalItemIdentity-CpX4qTkI.js";const ht={argTypes:a,component:i},r={name:"Simple",render:p=>{const{data:n,...s}=p;return t.createElement(g,{width:"100%",height:400},t.createElement(i,{...s},t.createElement(S,{dataKey:"x"}),t.createElement(h,{dataKey:"y"}),t.createElement(A,{data:n})))},args:{...c(a),data:d,margin:{top:0,right:0,bottom:0,left:0}}},At=["API"];var o,e,m;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
