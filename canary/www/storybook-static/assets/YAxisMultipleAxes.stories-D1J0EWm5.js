import{R as t}from"./iframe-CGMPGT_Z.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-ph0fLQn1.js";import{R as l}from"./zIndexSlice-BwRFWyAI.js";import{C as x}from"./ComposedChart-DdDYeqHZ.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-bKUrY91T.js";import{L as a}from"./Line-DkMyEWjM.js";import{X as c}from"./XAxis-DbuLqOFS.js";import{T as g}from"./Tooltip-VL4D0Geu.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-BCblnQ7e.js";import"./Text-DLnj5LmN.js";import"./resolveDefaultProps-05Xj8Dk4.js";import"./ZIndexLayer-9BCkhjyY.js";import"./index-DVV9xQIw.js";import"./index-BFunbtNY.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-BIscasf0.js";import"./throttle-eL-EEQ3_.js";import"./axisSelectors-nBPX2Xba.js";import"./d3-scale-DhJmdG6x.js";import"./CartesianAxis-B1TiLRwW.js";import"./Layer-BT_Vpx95.js";import"./types-BG6mJK46.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-h35w6byl.js";import"./index-Cc9Sc31K.js";import"./index-JIsP8NnX.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DQJBpYXH.js";import"./index-ClDVUaDb.js";import"./fillDefinitions-J_g-z9QL.js";import"./CartesianChart-BQtC3GTu.js";import"./chartDataContext-Be9WERVf.js";import"./CategoricalChart-CNkpe0ib.js";import"./dataEntryStyles-mfmNhCBT.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CLE0n3dQ.js";import"./useAnimationId-BO_xR5GW.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-C3kE7Ldm.js";import"./tooltipContext-BfxZXmmN.js";import"./ErrorBarContext-BlCnepik.js";import"./activeStyles-Dr2Cpwdi.js";import"./SetGraphicalItem-x_4gBiT9.js";import"./getZIndexFromUnknown-CQbFYYal.js";import"./useEffectiveDataKey-BosH_tQ0.js";import"./omit-jkCuCE8o.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-2C3aWHdg.js";import"./Curve-B6JD92Z8.js";import"./step-C3GvXaRE.js";import"./path-BBMZd4YL.js";import"./ActivePoints-BPzkwPAB.js";import"./Dot-BgWcOT9t.js";import"./Symbols-CySejNnI.js";import"./symbol-X4EmnsFS.js";import"./useElementOffset-CgxUiewk.js";import"./uniqBy-Dmo8Jc_P.js";import"./iteratee-D1qU_gcL.js";import"./Cross-BcQf_zas.js";import"./Sector-DRB_9UVA.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
