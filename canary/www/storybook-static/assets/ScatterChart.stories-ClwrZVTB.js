import{R as t}from"./iframe-ZSAsyeui.js";import{g as c}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{a as d}from"./Coordinate-geWwP0Ct.js";import{S as i}from"./ScatterChart-BrCLpQlg.js";import{R as g}from"./zIndexSlice-Dv-5_8A6.js";import{X as S}from"./XAxis-CE4c8ci4.js";import{Y as h}from"./YAxis-89VrmUc2.js";import{S as A}from"./Scatter-CfuPwJHW.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BzidFlVd.js";import"./resolveDefaultProps-CzYlkvqW.js";import"./get-cF5BDHN6.js";import"./axisSelectors-B8o8U7qV.js";import"./throttle-D-BJc2jV.js";import"./index-OvyM_4Sm.js";import"./index-DjKI25gJ.js";import"./polarAxisSelectors-BqI7JiW5.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CC-JJjQv.js";import"./index-uqJ6YOvZ.js";import"./index-zauSQ6TS.js";import"./renderedTicksSlice-CWxjmG2R.js";import"./index-DD-2LlvS.js";import"./CartesianChart-CMZp9es4.js";import"./ZIndexPortal-CvnMM87Z.js";import"./CategoricalChart-D-416rq6.js";import"./CartesianAxis-BLajEobP.js";import"./Layer-DRoxmpYI.js";import"./Text-BRlBLGWa.js";import"./pageBackground-BD4buOa5.js";import"./ZIndexLayer-C2WKPlYv.js";import"./Label-ooeO0hBy.js";import"./types-DmKiIpv6.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-Xwc-TPit.js";import"./activeStyles-BfRigOWz.js";import"./useAnimationId-DVzTYwao.js";import"./dataEntryStyles-D8AFB-Xx.js";import"./Curve-Czqktp7G.js";import"./step-agpXYCOV.js";import"./path-DyVhHtw_.js";import"./tooltipContext-BErzQm8t.js";import"./Symbols-fzhinMEB.js";import"./symbol-fTzakvJ7.js";import"./ActiveShapeUtils-PjK4neH_.js";import"./ErrorBarContext-Cg5WWOob.js";import"./SetGraphicalItem-BULml3ZG.js";import"./useEffectiveDataKey-DWBa4tvD.js";const gt={argTypes:m,component:i},r={name:"Simple",render:p=>{const{data:n,...s}=p;return t.createElement(g,{width:"100%",height:400},t.createElement(i,{...s},t.createElement(S,{dataKey:"x"}),t.createElement(h,{dataKey:"y"}),t.createElement(A,{data:n})))},args:{...c(m),data:d,margin:{top:0,right:0,bottom:0,left:0}}},St=["API"];var o,e,a;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(a=(e=r.parameters)==null?void 0:e.docs)==null?void 0:a.source}}};export{r as API,St as __namedExportsOrder,gt as default};
