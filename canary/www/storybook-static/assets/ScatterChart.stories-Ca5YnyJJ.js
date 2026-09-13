import{R as t}from"./iframe-D3DZ11bG.js";import{g as c}from"./utils-ePvtT4un.js";import{S as a}from"./ScatterChartArgs-DVckGNEz.js";import{a as d}from"./Coordinate-geWwP0Ct.js";import{S as i}from"./ScatterChart-s3i3edI4.js";import{R as g}from"./zIndexSlice-koFSVmIS.js";import{X as S}from"./XAxis-BAFnXrYz.js";import{Y as h}from"./YAxis-BVoshuZP.js";import{S as A}from"./Scatter-DBduEF-T.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-2mvRmank.js";import"./resolveDefaultProps-BrEHrPl8.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BkLxkidb.js";import"./throttle-DvSgxNGl.js";import"./index-DAXiWeRu.js";import"./index-DCVZlAXE.js";import"./isWellBehavedNumber-DgENaxxs.js";import"./d3-scale-7R73k4zX.js";import"./index-DunVsAad.js";import"./index-B2DufawG.js";import"./renderedTicksSlice-Z6YIazxJ.js";import"./index-DCmUTN9n.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Cp3-TDst.js";import"./chartDataContext-D1-Rpxku.js";import"./CategoricalChart-I8UNjAYq.js";import"./CartesianAxis-CFVJgng7.js";import"./Layer-CwzWBsuX.js";import"./Text-C7ib1IN2.js";import"./DOMUtils-oxRtXime.js";import"./useId-CgLLCsym.js";import"./useBackwardsCompatibleTheme-s53ki85_.js";import"./Label-Bbim0zl5.js";import"./ZIndexLayer-DQIxNGdf.js";import"./types-D0iIZkpY.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-pWsx1jF-.js";import"./useAnimationId-CJPwsDgU.js";import"./Curve-CA5Po7Op.js";import"./step-rY0xOYgJ.js";import"./path-DyVhHtw_.js";import"./tooltipContext-DkdLhzjm.js";import"./Symbols-BmiRNSoU.js";import"./symbol-ewDroYQf.js";import"./ActiveShapeUtils-B-ZLq9Vo.js";import"./RegisterGraphicalItemId-BuIVKkOb.js";import"./ErrorBarContext-DowgzNp1.js";import"./GraphicalItemClipPath-B4npPoNm.js";import"./SetGraphicalItem-DA1q5iTH.js";import"./useGraphicalItemIdentity-B9okNIr3.js";const ht={argTypes:a,component:i},r={name:"Simple",render:p=>{const{data:n,...s}=p;return t.createElement(g,{width:"100%",height:400},t.createElement(i,{...s},t.createElement(S,{dataKey:"x"}),t.createElement(h,{dataKey:"y"}),t.createElement(A,{data:n})))},args:{...c(a),data:d,margin:{top:0,right:0,bottom:0,left:0}}},At=["API"];var o,e,m;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
