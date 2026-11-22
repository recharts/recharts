import{R as t}from"./iframe-Ctz7IHW3.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-B3lARwfm.js";import{R as l}from"./zIndexSlice-BOhKAINV.js";import{C as x}from"./ComposedChart-B4J-boeJ.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DZKxygDq.js";import{L as a}from"./Line-DAx-7uu_.js";import{X as c}from"./XAxis-C7TfuOxC.js";import{T as g}from"./Tooltip-r3g93jn4.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-Cx25Byjk.js";import"./Text-d5sUAgwt.js";import"./resolveDefaultProps--WcksQI-.js";import"./ZIndexLayer-GawJhFHW.js";import"./index-Tzm4T3gC.js";import"./index-CP4Z1Y6_.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-2S85hvBv.js";import"./throttle-BK8aOUUW.js";import"./axisSelectors-CmsQwY11.js";import"./d3-scale-B7S8RTAk.js";import"./CartesianAxis-D2YA5lRA.js";import"./Layer-DwO5QDCB.js";import"./types-o_vm3YHF.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-zg3AzzRh.js";import"./index-D9m5BeGD.js";import"./index-DTCcovWx.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-B5-BQ43L.js";import"./index-D8taZNOk.js";import"./fillDefinitions-BjpebX6W.js";import"./CartesianChart-Dig5bGoH.js";import"./chartDataContext-CSFdu_tp.js";import"./CategoricalChart-pUCO11xA.js";import"./dataEntryStyles-DhE1x9oW.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BKam2C2s.js";import"./useAnimationId-CDmHN2F8.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CHF2XahU.js";import"./tooltipContext-DT4_kJxc.js";import"./ErrorBarContext-CWAd3_q9.js";import"./activeStyles-DYt1MbCF.js";import"./SetGraphicalItem-ZbovNH06.js";import"./getZIndexFromUnknown-emziqfMi.js";import"./useEffectiveDataKey-v8KMaUS0.js";import"./omit-CFl2-F-T.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-CcQspbXE.js";import"./Curve-BmO4aPRH.js";import"./step-CWzaq-TC.js";import"./path-BBMZd4YL.js";import"./ActivePoints-BEz7jJwJ.js";import"./Dot-Djhcp3TT.js";import"./Symbols-D3D7M8Jk.js";import"./symbol-B5JmXw1t.js";import"./useElementOffset-ByunqyrY.js";import"./uniqBy-bNtr2rug.js";import"./iteratee-DTnJTgMl.js";import"./Cross-BLSzdsqy.js";import"./Sector-DjfR3mh1.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
