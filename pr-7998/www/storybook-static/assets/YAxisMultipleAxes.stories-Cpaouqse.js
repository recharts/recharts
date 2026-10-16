import{R as t}from"./iframe--2AVw2Ig.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-B_xGwaHy.js";import{R as l}from"./zIndexSlice-DY-KmnMj.js";import{C as x}from"./ComposedChart-DU0EoCKc.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BDsE2Mn8.js";import{L as a}from"./Line-_Cuhdt7D.js";import{X as c}from"./XAxis-DR36Dp_O.js";import{T as g}from"./Tooltip-D8Knn-sQ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DUHcPYlD.js";import"./Text-Hvkjn3b4.js";import"./resolveDefaultProps-B29QL1c4.js";import"./pageBackground-DkdcD7r5.js";import"./isWellBehavedNumber-BCwXwBOh.js";import"./useId-CUoDw_aI.js";import"./useBackwardsCompatibleTheme-CKvuuYac.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-KCSLP8mG.js";import"./index-rGVVlfKz.js";import"./index-CbZkT_u5.js";import"./axisSelectors-CDUrw1Me.js";import"./throttle-BaGyyE0T.js";import"./d3-scale-CuVmq_8Z.js";import"./CartesianAxis-khS1fmQe.js";import"./Layer-eIGZDbY8.js";import"./types-DZjr1JEr.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-ViCmPO8v.js";import"./index-BTmio8NJ.js";import"./index-_nleLnFM.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-EJRMqcbQ.js";import"./index-DVblcXeN.js";import"./CartesianChart-DwfabjuB.js";import"./chartDataContext-BsjWdA7j.js";import"./CategoricalChart-D1mzQ8Dl.js";import"./activeStyles-CzHB9dwV.js";import"./useAnimationId-CHJ3Zhtv.js";import"./dataEntryStyles-DeEjeZX4.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CQO9mUlA.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Cos36bQq.js";import"./tooltipContext-CYIEGwaO.js";import"./ErrorBarContext-CPUPPNIF.js";import"./GraphicalItemClipPath-DBN3vY8J.js";import"./SetGraphicalItem-CFoIf7JL.js";import"./getZIndexFromUnknown-30UZOBzt.js";import"./useEffectiveDataKey-mwtlbWZk.js";import"./Curve-DnLexwZ8.js";import"./step-CCcO8MdV.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BD1pKs86.js";import"./Dot-D-Ut_Ero.js";import"./getRadiusAndStrokeWidthFromDot-D3N_jfqh.js";import"./useElementOffset-C3tMcbQq.js";import"./uniqBy-BT1kOl9J.js";import"./iteratee-BUnf2Li6.js";import"./Cross-DBhkKTPh.js";import"./Sector-D9_TvkfH.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Rt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <article style={{
      display: 'flex',
      flexDirection: 'column'
    }}>
        <div style={{
        width: '100%'
      }}>
          <ResponsiveContainer width="100%" height={500}>
            <ComposedChart data={pageData}>
              <Bar dataKey="pv" fill="red" yAxisId="right" />
              <Bar dataKey="uv" fill="red" yAxisId="right-mirror" />
              <Line dataKey="amt" fill="green" yAxisId="left" />
              <Line dataKey="amt" fill="green" yAxisId="left-mirror" />

              <XAxis padding={{
              left: 50,
              right: 50
            }} dataKey="name" scale="band" />
              <YAxis {...args} yAxisId="left" orientation="left" domain={['dataMin-20', 'dataMax']} />
              <YAxis {...args} yAxisId="left-mirror" orientation="left" mirror tickCount={8} />
              <YAxis {...args} yAxisId="right" orientation="right" domain={['dataMin-20', 'dataMax']} />
              <YAxis {...args} yAxisId="right-mirror" orientation="right" mirror tickCount={20} />

              <Tooltip />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
        <h4>
          {\`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element\`}
        </h4>
      </article>;
  },
  args: getStoryArgsFromArgsTypesObject(YAxisArgs)
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Rt as __namedExportsOrder,Mt as default};
