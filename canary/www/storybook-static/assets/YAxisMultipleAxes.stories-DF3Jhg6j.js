import{R as t}from"./iframe-CAwz8uN7.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-CXb4tru9.js";import{R as l}from"./zIndexSlice-TMbeSoaw.js";import{C as x}from"./ComposedChart-DEKm5Gk_.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-B896n764.js";import{L as a}from"./Line-C7Pmhg54.js";import{X as c}from"./XAxis-DaHA7aw5.js";import{T as g}from"./Tooltip-ZJbItvbk.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CdS579rS.js";import"./Text-B8IGolEi.js";import"./resolveDefaultProps-DMIb7SBs.js";import"./ZIndexLayer-BXCDLr1d.js";import"./index-DgXSxR_f.js";import"./index-Bzw5OmaH.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-Cc_qYj6o.js";import"./throttle-DghoigHv.js";import"./axisSelectors-CpwbL3Oz.js";import"./d3-scale-CIIJy1t9.js";import"./CartesianAxis-VsizMTED.js";import"./Layer-LEH2Le6G.js";import"./types-BWdHpl7S.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-GqHDAcQt.js";import"./index-Bn6lI9jh.js";import"./index-DXtXm7rl.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-Dxg_wm9v.js";import"./index-D4t20APB.js";import"./fillDefinitions-CB-_Qdnq.js";import"./CartesianChart-Cfm778D2.js";import"./chartDataContext-BqdYE3y4.js";import"./CategoricalChart-BV8BHimy.js";import"./dataEntryStyles-BvT9zs0X.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-COjWgFDq.js";import"./useAnimationId-p8KP1za0.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CWtt7knh.js";import"./tooltipContext-DCKEuyvz.js";import"./ErrorBarContext-Qh2D0zyI.js";import"./activeStyles-WxNZ0DKg.js";import"./SetGraphicalItem-BpveB_1U.js";import"./getZIndexFromUnknown-CDpbDaFt.js";import"./useEffectiveDataKey-DBkqmySO.js";import"./omit-DX6t1PET.js";import"./isArguments-yB-y1yaH.js";import"./Curve-S9C-Z9CI.js";import"./step-D__pRIvp.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CVXTLllc.js";import"./Dot-CLdEzait.js";import"./Symbols-B_L6SHWg.js";import"./symbol-EvKS_tYy.js";import"./getRadiusAndStrokeWidthFromDot-E1a8C94b.js";import"./useElementOffset-DlbUgjzV.js";import"./uniqBy-D-DUMfVG.js";import"./iteratee-BAcU7c4m.js";import"./Cross-Bj4UTGDm.js";import"./Sector-DiqzRaDU.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
