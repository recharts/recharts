import{R as t}from"./iframe-DlCdq56B.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-CiL6lsrt.js";import{R as l}from"./zIndexSlice-AxtVyY3Z.js";import{C as x}from"./ComposedChart-D-HLNOcj.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CFvlKN2g.js";import{L as a}from"./Line-CG_-O_No.js";import{X as c}from"./XAxis-BSv-cfqy.js";import{T as g}from"./Tooltip-jQliVFVi.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DhxtC2yH.js";import"./Text-DCVc9tCi.js";import"./resolveDefaultProps-BUW76FaL.js";import"./ZIndexLayer-DoM1zDnE.js";import"./index-DRrdDGzH.js";import"./index-D0nmcM1A.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-B-SnaQvT.js";import"./throttle-DEcvUi6F.js";import"./axisSelectors-CSfGPpIK.js";import"./d3-scale-3Jo-Yey1.js";import"./CartesianAxis-gaRy0kAT.js";import"./Layer-DYaOGPQe.js";import"./types-CGD2CGOX.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-xGoci0dc.js";import"./index-Dl9VO4In.js";import"./index-CPJJsZF5.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-fp3cwEAp.js";import"./index-CVrMJXNG.js";import"./fillDefinitions-P9YSjlZq.js";import"./CartesianChart-DAQanSbx.js";import"./chartDataContext-BiLGYApi.js";import"./CategoricalChart-DEbdQdFq.js";import"./dataEntryStyles-BQcljHLn.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Bks-uWZg.js";import"./useAnimationId-DvgYyN8a.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BhCU4_aJ.js";import"./tooltipContext-DItjFBJq.js";import"./ErrorBarContext-C53AQX2l.js";import"./activeStyles-WuCpdruK.js";import"./SetGraphicalItem-DVkPEJIv.js";import"./getZIndexFromUnknown-Kou9TEwm.js";import"./useEffectiveDataKey-dLwdu-vi.js";import"./omit-DHFyvxhF.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-9hVd_OrB.js";import"./Curve-lp641HWe.js";import"./step-DukoPJ0d.js";import"./path-BBMZd4YL.js";import"./ActivePoints-Ve_riuMJ.js";import"./Dot-B5biZeEa.js";import"./Symbols-Dqo2PD8d.js";import"./symbol-BfVO91QA.js";import"./useElementOffset-D9xfe4ty.js";import"./uniqBy-7nQNTfGC.js";import"./iteratee-D1UWDese.js";import"./Cross-Clk77yjw.js";import"./Sector-CiLnt5Zg.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
