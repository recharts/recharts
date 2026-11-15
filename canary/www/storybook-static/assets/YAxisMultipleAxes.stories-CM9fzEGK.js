import{R as t}from"./iframe-c26JqrsL.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-BMAl-ilQ.js";import{R as l}from"./zIndexSlice-BkUYlJsZ.js";import{C as x}from"./ComposedChart-CWYwg474.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BGzbbbjV.js";import{L as a}from"./Line-CCpKAg6f.js";import{X as c}from"./XAxis-DutmNx-o.js";import{T as g}from"./Tooltip-C74uwVO5.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-U_zx5ZhA.js";import"./Text-DrKUoP8L.js";import"./resolveDefaultProps-YkjEKeW8.js";import"./ZIndexLayer-B-r7bl4K.js";import"./index-CUwFsdn8.js";import"./index-mm1LjFas.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-NvwmetH_.js";import"./throttle-B2IvKwW-.js";import"./axisSelectors-Dy58hWsd.js";import"./d3-scale-DWhFNlvg.js";import"./CartesianAxis-CwL4X3Li.js";import"./Layer-vJvTy9Ku.js";import"./types-BkHyLjnw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DchxVsWm.js";import"./index-vwxbY9MG.js";import"./index-DaW3zNl9.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-C0_ZnG3M.js";import"./index-CUrdsACp.js";import"./fillDefinitions-OkciRhhD.js";import"./CartesianChart-CNu4n4dr.js";import"./chartDataContext-KJrM16zP.js";import"./CategoricalChart-DQ-Epfo-.js";import"./dataEntryStyles-NUuyBQzn.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C6L3NnBU.js";import"./useAnimationId-s58nu9Pz.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DUAkL6fN.js";import"./tooltipContext-6Dtp9k6E.js";import"./ErrorBarContext-Cck_FQwt.js";import"./activeStyles-CxWIOF49.js";import"./SetGraphicalItem-Bf7rIr_j.js";import"./getZIndexFromUnknown-BdHfMcqR.js";import"./useEffectiveDataKey-BT6_jhIX.js";import"./omit-Cq0l5oTr.js";import"./isArguments-yB-y1yaH.js";import"./Curve-XxFxrIWP.js";import"./step-CELEtsjP.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CT1fm5gU.js";import"./Dot-BhI3xlfW.js";import"./Symbols-BvzuXAby.js";import"./symbol-DAgH9-Fu.js";import"./getRadiusAndStrokeWidthFromDot-DaLi06Yy.js";import"./useElementOffset-BmKkIlsV.js";import"./uniqBy-CpoKnfjS.js";import"./iteratee-DEQ9rNns.js";import"./Cross-CtwUkA5D.js";import"./Sector-zTgxjB-0.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
