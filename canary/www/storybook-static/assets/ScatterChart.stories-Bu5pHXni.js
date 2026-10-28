import{R as t}from"./iframe-BXyks5nv.js";import{g as c}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{a as d}from"./Coordinate-geWwP0Ct.js";import{S as i}from"./ScatterChart-DTiCv6iU.js";import{R as g}from"./zIndexSlice-DGicPDgx.js";import{X as S}from"./XAxis-CgBDJfd7.js";import{Y as h}from"./YAxis-8vdoPbT3.js";import{S as A}from"./Scatter-CQp0tDpC.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-ybz91CxZ.js";import"./resolveDefaultProps-t9RGNc5u.js";import"./get-cF5BDHN6.js";import"./axisSelectors-58u8_YZx.js";import"./throttle-BMtt0Eqt.js";import"./index-Brvwee9M.js";import"./index-W4KahICV.js";import"./polarAxisSelectors-DMqgJFL7.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BgObkVdI.js";import"./index-DYE61kxi.js";import"./index-CNe8-YXd.js";import"./renderedTicksSlice-kjkWbf2b.js";import"./index-Ci615jxM.js";import"./CartesianChart-BvGgkH75.js";import"./ZIndexPortal-97xDukRB.js";import"./CategoricalChart-BARINQPN.js";import"./CartesianAxis-BC_l_0hm.js";import"./Layer-x02rJScX.js";import"./Text-DpKdLlQu.js";import"./pageBackground-ButgTNwE.js";import"./ZIndexLayer-aWdCgojo.js";import"./Label-DVoMofK2.js";import"./types-DxlZCjsw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-BWqHNOr4.js";import"./activeStyles-CF_8K1QH.js";import"./useAnimationId-DXaogzGC.js";import"./dataEntryStyles-stu4dp7O.js";import"./Curve-vaJ426Dg.js";import"./step-C3BUyQnl.js";import"./path-DyVhHtw_.js";import"./tooltipContext-JspXPy5S.js";import"./Symbols-B41tlq-V.js";import"./symbol-CQEHnXxm.js";import"./ActiveShapeUtils-D6rYuavq.js";import"./ErrorBarContext-B3eXKAAe.js";import"./SetGraphicalItem-CyPK3B5U.js";import"./useEffectiveDataKey-BzrOPzFS.js";const gt={argTypes:m,component:i},r={name:"Simple",render:p=>{const{data:n,...s}=p;return t.createElement(g,{width:"100%",height:400},t.createElement(i,{...s},t.createElement(S,{dataKey:"x"}),t.createElement(h,{dataKey:"y"}),t.createElement(A,{data:n})))},args:{...c(m),data:d,margin:{top:0,right:0,bottom:0,left:0}}},St=["API"];var o,e,a;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
