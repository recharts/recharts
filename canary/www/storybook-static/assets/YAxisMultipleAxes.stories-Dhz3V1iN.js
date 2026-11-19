import{R as t}from"./iframe-Cr4SLAPG.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-CY62iJg-.js";import{R as l}from"./zIndexSlice-DyLLhom_.js";import{C as x}from"./ComposedChart-fx4m_TFy.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-Tb9OLyEI.js";import{L as a}from"./Line-DD5o7CZ0.js";import{X as c}from"./XAxis-B99-G5ow.js";import{T as g}from"./Tooltip-CsROmNti.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-iIhWQC5W.js";import"./Text-BBE8dgLe.js";import"./resolveDefaultProps-CAE-kTw-.js";import"./ZIndexLayer-B4fE1k7j.js";import"./index-BnL3zeBq.js";import"./index-BdbAlbMj.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-Cu_1wigM.js";import"./throttle-m67LhZgN.js";import"./axisSelectors-DrKqMaOQ.js";import"./d3-scale-WAvM56kv.js";import"./CartesianAxis-Ds5qTBHM.js";import"./Layer-CWQ0f2zH.js";import"./types-B6oZtPsa.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-tk5Ux2sx.js";import"./index-kvmeuQQ0.js";import"./index-COeoIdkq.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BMMPlSoi.js";import"./index-CjAQIOvx.js";import"./fillDefinitions-DOSp8ZTg.js";import"./CartesianChart-DLnqZjzO.js";import"./chartDataContext-Cv9hYa4A.js";import"./CategoricalChart-DQSQjBRM.js";import"./dataEntryStyles-IfVv-8UK.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-PLu_R94q.js";import"./useAnimationId-kAVaPV6O.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Mg3OqtQ-.js";import"./tooltipContext-Dwc5DzUh.js";import"./ErrorBarContext-6e7pSH1e.js";import"./activeStyles-aUydRVRE.js";import"./SetGraphicalItem-C9um0bAO.js";import"./getZIndexFromUnknown-DlBRJe4T.js";import"./useEffectiveDataKey-CUJehQI3.js";import"./omit-D750KmtC.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-D9aaECN7.js";import"./Curve-DJrcdmOM.js";import"./step-B4BPIBfx.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DnQ4FUYw.js";import"./Dot-BK-ZVoey.js";import"./Symbols-B0X99Sro.js";import"./symbol-HG06wgQN.js";import"./useElementOffset-CHpDveFz.js";import"./uniqBy-BO6YYRyn.js";import"./iteratee-DQY9n11K.js";import"./Cross-CQya_HrI.js";import"./Sector-Deoj3i-T.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
