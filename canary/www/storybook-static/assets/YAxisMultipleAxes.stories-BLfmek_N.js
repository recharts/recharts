import{R as t}from"./iframe-CywB74O-.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-BQxfFMOH.js";import{R as l}from"./zIndexSlice-CuZ12U6x.js";import{C as x}from"./ComposedChart-DnMaCTiC.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DGXFxGfD.js";import{L as a}from"./Line-CuUolajC.js";import{X as c}from"./XAxis-BnyIc3dE.js";import{T as g}from"./Tooltip-TyNHZ99B.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DQEyyaka.js";import"./Text-D8_iVJPC.js";import"./resolveDefaultProps-Gc3kbVEc.js";import"./ZIndexLayer-CHuGvNnR.js";import"./index-B71Ze7LN.js";import"./index-DBD4vW62.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CHx-smd7.js";import"./throttle-Cdx6aCwi.js";import"./axisSelectors-BlSjRH8p.js";import"./d3-scale-B6sMKT8T.js";import"./CartesianAxis-BkY9x357.js";import"./Layer-BeaWmaSV.js";import"./types-DUxXs5Ud.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-s1l-mRnQ.js";import"./index-DPjYOBE8.js";import"./index-CmTmClEE.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DNXYBwim.js";import"./index-DwB73Oyx.js";import"./fillDefinitions-CMU9craw.js";import"./CartesianChart-CiFd4vci.js";import"./chartDataContext-C42Xk_ee.js";import"./CategoricalChart-CByovhBV.js";import"./dataEntryStyles-BnKQuw5H.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-qMfUeqmL.js";import"./useAnimationId-DiaU742M.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DRieSTBH.js";import"./tooltipContext-DdYXMl4W.js";import"./ErrorBarContext-BRsViJuO.js";import"./activeStyles-yKq-qtiq.js";import"./SetGraphicalItem-CWyrJmam.js";import"./getZIndexFromUnknown-CNUsSco3.js";import"./useEffectiveDataKey-CjiZk5NG.js";import"./omit-CvZhW0Fm.js";import"./isArguments-yB-y1yaH.js";import"./Curve-BR2e6dhB.js";import"./step-DvAd1GMT.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CULdSp3M.js";import"./Dot-CZ266pMm.js";import"./Symbols-CkA0fnmK.js";import"./symbol-Bymi0eF-.js";import"./getRadiusAndStrokeWidthFromDot-Dx2mkX1A.js";import"./useElementOffset-DGFvSoKL.js";import"./uniqBy-lBBs8O3F.js";import"./iteratee-Dqbbdx6l.js";import"./Cross-BarD34_9.js";import"./Sector-C2YaCYBx.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
