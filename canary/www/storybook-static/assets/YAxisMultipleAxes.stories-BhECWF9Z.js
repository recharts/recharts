import{R as t}from"./iframe-B1Ov3CkI.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-CKqezMqR.js";import{R as l}from"./zIndexSlice-BZ09-fF4.js";import{C as x}from"./ComposedChart-Dd5cIYd9.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-Bd7briHj.js";import{L as a}from"./Line-D6fDEx2j.js";import{X as c}from"./XAxis-B8awpm7u.js";import{T as g}from"./Tooltip-cJI8ulaq.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DD8YxEOL.js";import"./Text-B3OKn0GK.js";import"./resolveDefaultProps-DWDtOW2Y.js";import"./ZIndexLayer-DQABw9Zs.js";import"./index-BZUg4nA9.js";import"./index-CKnkfWPE.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-BnryocK3.js";import"./throttle-CU4m2LyG.js";import"./axisSelectors-CwNUFUW3.js";import"./d3-scale-BRiCZA2b.js";import"./CartesianAxis-CqVMCZWw.js";import"./Layer-DAwsvvog.js";import"./types-ynn-_gFH.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-7kuLifM3.js";import"./index-DD4HlTuM.js";import"./index-DoKEjPdp.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CArKZuEM.js";import"./index-BMXSO3re.js";import"./fillDefinitions-C3NO0Lw1.js";import"./CartesianChart-ClQxKu1o.js";import"./chartDataContext-fgeg9aho.js";import"./CategoricalChart-C2LUjjE6.js";import"./dataEntryStyles-lld3ulFL.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B3p2_n3w.js";import"./useAnimationId-DhG5SB-S.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BnGsUnBG.js";import"./tooltipContext-DmwNEoHL.js";import"./ErrorBarContext-CrvdUc7x.js";import"./activeStyles-D0wpO0Mw.js";import"./SetGraphicalItem-BOBKYCI5.js";import"./getZIndexFromUnknown-BWHNFfxa.js";import"./useEffectiveDataKey-DPX-1gIx.js";import"./omit-CWGZ1oMh.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-BJHYFlOo.js";import"./Curve-D-bNq0v5.js";import"./step-B516R2zU.js";import"./path-BBMZd4YL.js";import"./ActivePoints-egHLZy2G.js";import"./Dot-CLqz5fjj.js";import"./Symbols-D3aq_3ym.js";import"./symbol-fFs6B4hu.js";import"./useElementOffset-D5jbWozH.js";import"./uniqBy-CuCMSFr0.js";import"./iteratee-D4VRlXRY.js";import"./Cross-0Rf112BE.js";import"./Sector-BB_mWH5U.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
