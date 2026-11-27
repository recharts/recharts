import{R as t}from"./iframe-C6tckEdC.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-rcBaqYZ7.js";import{R as l}from"./zIndexSlice-BRbRDCdD.js";import{C as x}from"./ComposedChart-5VVWJpva.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-COzrNdIA.js";import{L as a}from"./Line-DkURyhs0.js";import{X as c}from"./XAxis-DzYRQrky.js";import{T as g}from"./Tooltip-DW-STvZa.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CSiVUs4x.js";import"./get-CjriyByo.js";import"./Label-DaLGTh2V.js";import"./Text-Wncpajm_.js";import"./ZIndexLayer-Duaj4w7a.js";import"./index-BzKVLmVc.js";import"./index-BR0KP3KE.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-BP0xU-X7.js";import"./throttle-CU3FfpOW.js";import"./axisSelectors-BaS600qd.js";import"./diverging-cNizIXDy.js";import"./CartesianAxis-HAEOo14B.js";import"./Layer-CZ4BpJHW.js";import"./types-DkdMor4N.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-gvMRVXAc.js";import"./index-DKLWww0Z.js";import"./index-DvK4dXF2.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-0oVlPs_v.js";import"./index-Cqbhonwj.js";import"./fillDefinitions-D_qwa_ZF.js";import"./CartesianChart-Cl401OCs.js";import"./chartDataContext-BIkRUcpA.js";import"./CategoricalChart-BQKW_s0C.js";import"./dataEntryStyles-DEosnEmo.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-J0TAD1ax.js";import"./useAnimationId-Cexbjbj0.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Cs4PiFBm.js";import"./tooltipContext-BhjHZJqr.js";import"./ErrorBarContext-CFH2x5Ed.js";import"./activeStyles-Cw05xMjp.js";import"./SetGraphicalItem-L9dOpy2C.js";import"./getZIndexFromUnknown-CH5Vk0MN.js";import"./useEffectiveDataKey-C_xG5lbB.js";import"./omit-BcHc5x07.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-vxIF-amO.js";import"./Curve-hlfhz3O_.js";import"./step-BdRt_Kf3.js";import"./path-BBMZd4YL.js";import"./ActivePoints-BDUd4tjN.js";import"./Dot-Byjprri8.js";import"./Symbols-BA4WcXcY.js";import"./symbol-CGpiEals.js";import"./useElementOffset-ox168otc.js";import"./uniqBy-BwUTEk2q.js";import"./iteratee-Chh9ZJty.js";import"./Cross-tRfOgfn5.js";import"./Sector-aU80y0T4.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
