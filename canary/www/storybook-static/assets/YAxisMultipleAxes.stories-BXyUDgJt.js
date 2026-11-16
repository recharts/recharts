import{R as t}from"./iframe-KWoDlvv0.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-BpsL_9nJ.js";import{R as l}from"./zIndexSlice-D6_TQa48.js";import{C as x}from"./ComposedChart-BNaAIAHQ.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DY0Bjdnb.js";import{L as a}from"./Line-CoYDa0ns.js";import{X as c}from"./XAxis-Dha5DL-7.js";import{T as g}from"./Tooltip-DyIqXAOf.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-BPcs5PEB.js";import"./Text-DoeJcgDd.js";import"./resolveDefaultProps-fIhDXQnx.js";import"./ZIndexLayer-UqbdP99s.js";import"./index-Li49Ujhl.js";import"./index-D_eG4QRf.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-8HEoWBh0.js";import"./throttle-BvqCZ8Vh.js";import"./axisSelectors-CV2At8Yo.js";import"./d3-scale-oWIqdaah.js";import"./CartesianAxis-CyfkCIs2.js";import"./Layer-waQQT3dP.js";import"./types-DGnljtoN.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-C40hju2e.js";import"./index-BfCybvCF.js";import"./index-CCYlIY-z.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-Cd2ytf7V.js";import"./index-Dv3wNeKm.js";import"./fillDefinitions-BahzxKfc.js";import"./CartesianChart-D1x7M7Ji.js";import"./chartDataContext-CRRlgIpa.js";import"./CategoricalChart-539yhc35.js";import"./dataEntryStyles-B50QbiA3.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-9Jhf_J89.js";import"./useAnimationId-Dr1qu-UX.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-C8mQk9io.js";import"./tooltipContext-Bi_UGuPS.js";import"./ErrorBarContext-B7AiZePC.js";import"./activeStyles-DdJ_j3KP.js";import"./SetGraphicalItem-C36UrnCq.js";import"./getZIndexFromUnknown-U06pGQX_.js";import"./useEffectiveDataKey-Dnh6CHxJ.js";import"./omit-DgXFX6KH.js";import"./isArguments-yB-y1yaH.js";import"./Curve-B7-98jub.js";import"./step-e6HwNXpN.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DgWtUVYM.js";import"./Dot-8l7EA-ok.js";import"./Symbols-etFAQ42y.js";import"./symbol-DnM84iFX.js";import"./getRadiusAndStrokeWidthFromDot-CjrqjHcw.js";import"./useElementOffset-1JyRc5h3.js";import"./uniqBy-CbPnR-9p.js";import"./iteratee-DIz1rWLv.js";import"./Cross-XnGezxgG.js";import"./Sector-sU6YNYVD.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
