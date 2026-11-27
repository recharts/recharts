import{R as t}from"./iframe-KlB-4IG1.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-DfRBNhMM.js";import{R as l}from"./zIndexSlice-BVLPARW-.js";import{C as x}from"./ComposedChart-UXSSMqzW.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-UMdAqr_e.js";import{L as a}from"./Line-DthVYZE5.js";import{X as c}from"./XAxis-Ca5TUmhH.js";import{T as g}from"./Tooltip-DKTClIoH.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-RcNfk3jW.js";import"./get-CjriyByo.js";import"./Label-DqUMyvUu.js";import"./Text-Bpt3PNfo.js";import"./ZIndexLayer-DgEHrsgR.js";import"./index-CwL9CPkI.js";import"./index-DAOJlBpl.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DkMb5oL8.js";import"./throttle-DXJsY_uT.js";import"./axisSelectors-ThjGeQP_.js";import"./diverging-BgndSVNB.js";import"./CartesianAxis-CVzE0EQ3.js";import"./Layer-Cl7yX3if.js";import"./types-rdPmYL5R.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BREhx7Gk.js";import"./index-CX7x-S-w.js";import"./index-DNDuIT5t.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CD7r0FUc.js";import"./index-CUyiC2Ny.js";import"./fillDefinitions-Cx2SilO3.js";import"./CartesianChart-DYMMc77U.js";import"./chartDataContext-Dajtit_0.js";import"./CategoricalChart-DQDRiNPc.js";import"./dataEntryStyles-D-8l4rOK.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D5Mi37gB.js";import"./useAnimationId-C1lHvxQb.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DFwShdCc.js";import"./tooltipContext-BDdeL0xX.js";import"./ErrorBarContext-J4PcI6d4.js";import"./activeStyles-BijthCg6.js";import"./SetGraphicalItem-BaH0crAE.js";import"./getZIndexFromUnknown-BOGVVE3G.js";import"./useEffectiveDataKey-BXp8Go_I.js";import"./omit-DlKftEak.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-DjAs6uXs.js";import"./Curve-P8knzJBH.js";import"./step-CgkxMamK.js";import"./path-BBMZd4YL.js";import"./ActivePoints-iLZwRPS_.js";import"./Dot-CS5HZsDP.js";import"./Symbols-DP3kQoeZ.js";import"./symbol-Nq8AM552.js";import"./useElementOffset-H_h6LgYm.js";import"./uniqBy-BPtuw1V1.js";import"./iteratee-BNFWeZQu.js";import"./Cross-DAUSRMC6.js";import"./Sector-sZMkmdkn.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
