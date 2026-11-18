import{R as t}from"./iframe-CRBCr4I7.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-C5vFCns8.js";import{R as l}from"./zIndexSlice-C5HnNY9r.js";import{C as x}from"./ComposedChart-AEeY6CWp.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-e96AHD7s.js";import{L as a}from"./Line-Bk3eQLZy.js";import{X as c}from"./XAxis-4jTaFcnE.js";import{T as g}from"./Tooltip-DE0qGtkw.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CLJtKhiN.js";import"./Text-CzrZS4hs.js";import"./resolveDefaultProps-C-CjWl4M.js";import"./ZIndexLayer-ChuLKuaE.js";import"./index-DNywOopk.js";import"./index-CgJEBRA7.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-BXwH5847.js";import"./throttle-Bi7M9SHL.js";import"./axisSelectors-Cn24srzI.js";import"./d3-scale-BBFMZtoY.js";import"./CartesianAxis-Cnz0mea7.js";import"./Layer-DK4q3BXK.js";import"./types-BcVdsd1S.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Bcj92DQ0.js";import"./index-CYvH0a5R.js";import"./index-D8BMywLD.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-Csv9gEG8.js";import"./index-DOjsHhAo.js";import"./fillDefinitions-MhsyTwKb.js";import"./CartesianChart-DtrL87f_.js";import"./chartDataContext-Ds5ARDJg.js";import"./CategoricalChart-CIMwuqDL.js";import"./dataEntryStyles-BCu_-7t9.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BwKZkKAc.js";import"./useAnimationId-BEWOQrK8.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DkbYb7aY.js";import"./tooltipContext-BCV-IEpo.js";import"./ErrorBarContext-C9vHq9NB.js";import"./activeStyles-BGmObwWl.js";import"./SetGraphicalItem-CVR_yFh9.js";import"./getZIndexFromUnknown-BwoqauFi.js";import"./useEffectiveDataKey-Bv2ZRQEX.js";import"./omit-cftw3tuH.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-DSL_ZrdX.js";import"./Curve-L8TXrD0N.js";import"./step-CDOWbVN9.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BaVCT3KN.js";import"./Dot-BSp4p8j6.js";import"./Symbols-qyep14Vl.js";import"./symbol-dNn9HYSI.js";import"./useElementOffset-Dm_VZj6e.js";import"./uniqBy-B5_XcYmH.js";import"./iteratee-BFRZNziE.js";import"./Cross-DIfmxK3b.js";import"./Sector-MfTKhJkQ.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
