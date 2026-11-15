import{R as t}from"./iframe-B2PzCMaw.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-B5nmPwid.js";import{R as l}from"./zIndexSlice-D2yQeuEI.js";import{C as x}from"./ComposedChart-AFpPZ6lH.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-D6BQdt1d.js";import{L as a}from"./Line-BuZqDult.js";import{X as c}from"./XAxis-hYV9QQyh.js";import{T as g}from"./Tooltip-Bvvf1V81.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-dW2fYkfR.js";import"./Text-587hVFVv.js";import"./resolveDefaultProps-DhYGu3Pl.js";import"./ZIndexLayer-P8eiWDF3.js";import"./index-BhJHCUKu.js";import"./index-DBXzZd1T.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-fU1kcxI4.js";import"./throttle-DjegI8Tm.js";import"./axisSelectors-jPkZuWdd.js";import"./d3-scale-BTQYnDFg.js";import"./CartesianAxis-p63YhqCL.js";import"./Layer-qWAN0MNZ.js";import"./types-BQ9HRUUW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CHYqXqJx.js";import"./index-CU8WBM5i.js";import"./index-DS5yNlDY.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-hk-Vj6y4.js";import"./index-KnJExrJ_.js";import"./fillDefinitions-85fgVbiv.js";import"./CartesianChart-g3SkQicD.js";import"./chartDataContext-CqAbLC2U.js";import"./CategoricalChart-Pw3GxjZO.js";import"./dataEntryStyles-BUMHKDbc.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B8youXH0.js";import"./useAnimationId-C33gpbVv.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Ch3_ahrz.js";import"./tooltipContext-Bni7e3Yx.js";import"./ErrorBarContext-BWeZxt5m.js";import"./activeStyles-dbWrPfDr.js";import"./SetGraphicalItem-BYuG84UQ.js";import"./getZIndexFromUnknown-CXjAgzw5.js";import"./useEffectiveDataKey-DQekwkZ0.js";import"./omit-DAUBzm3b.js";import"./isArguments-yB-y1yaH.js";import"./Curve-36hHeCTa.js";import"./step-BzcUBi6T.js";import"./path-DyVhHtw_.js";import"./ActivePoints-z0ZX6SBd.js";import"./Dot-QX5dxkLv.js";import"./Symbols-BR81WChd.js";import"./symbol-Yo8Gegd9.js";import"./getRadiusAndStrokeWidthFromDot-CBoQ2zXz.js";import"./useElementOffset-DEcx2xhj.js";import"./uniqBy-DGDne-O9.js";import"./iteratee-BOVTI74Q.js";import"./Cross-RcwJWn4R.js";import"./Sector-D7Q7W1P9.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
