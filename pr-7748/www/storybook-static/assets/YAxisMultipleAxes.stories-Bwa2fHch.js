import{R as t}from"./iframe-BRuR_Aem.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-CTNE1Ach.js";import{R as l}from"./zIndexSlice-Bj7VXWF6.js";import{C as x}from"./ComposedChart-BfbWwovc.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CB33Zn9r.js";import{L as a}from"./Line-CIteCgCI.js";import{X as c}from"./XAxis-DkgTjfQy.js";import{T as g}from"./Tooltip-2H6ucb75.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-BRU8Jowp.js";import"./Text-DCSoJ6K5.js";import"./resolveDefaultProps-CB_4huk8.js";import"./ZIndexLayer-BW9AtQ0o.js";import"./index-Znq_MKKU.js";import"./index-S2_wvhlN.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DF3qQGPW.js";import"./throttle-Bze-tpN5.js";import"./axisSelectors-vJ_QG27E.js";import"./d3-scale-D-1jLUlb.js";import"./CartesianAxis-khCvplyM.js";import"./Layer-DH8vqzA_.js";import"./types-LyIymARE.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CuUE0Rg9.js";import"./index-EeleNYI7.js";import"./index-MJdD-hjQ.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-Bn4G8r7u.js";import"./index-DsnM3Ye-.js";import"./fillDefinitions-Dqk7JYY7.js";import"./CartesianChart-DUDwKsIR.js";import"./chartDataContext-Mr4wo4TR.js";import"./CategoricalChart-COCgmgkq.js";import"./dataEntryStyles-D3durKHg.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CuBia6p2.js";import"./useAnimationId-CqnKfWIo.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-ByuL4hdp.js";import"./tooltipContext-QS9D-yjw.js";import"./ErrorBarContext-BSmlh0M0.js";import"./activeStyles-ddHtcBjm.js";import"./SetGraphicalItem-hKkfdUSl.js";import"./getZIndexFromUnknown-V73OkGI2.js";import"./useEffectiveDataKey-CJ_E1q2F.js";import"./omit-Dwhz06lk.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-COuDjPMk.js";import"./Curve-2VjViydv.js";import"./step-DSV5xix0.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DjHxL6MU.js";import"./Dot-BB75ixWu.js";import"./Symbols-TJS8yyiq.js";import"./symbol-DRudrdJt.js";import"./useElementOffset-CzKiCd-F.js";import"./uniqBy-CMkG7L-l.js";import"./iteratee-Bz7ftEAa.js";import"./Cross-CkVNICVe.js";import"./Sector-BsBqkmXy.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Lt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Lt as __namedExportsOrder,Rt as default};
