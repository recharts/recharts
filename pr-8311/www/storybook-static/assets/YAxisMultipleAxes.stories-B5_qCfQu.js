import{R as t}from"./iframe-DC5T2GCj.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-lqkl3rqG.js";import{R as l}from"./zIndexSlice-DOsx9V2z.js";import{C as x}from"./ComposedChart-Dc1csNHW.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DQal1fGy.js";import{L as a}from"./Line-BIGVkZPR.js";import{X as c}from"./XAxis-CfQ_9fqW.js";import{T as g}from"./Tooltip-BbYwG4_Y.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-gSxbvbxj.js";import"./get-CjriyByo.js";import"./Label-CWyu9wCB.js";import"./Text-agvS8xSD.js";import"./ZIndexLayer-CauVCDM2.js";import"./index-CxhZ_jtS.js";import"./index-CuovNQzi.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-ftiVMEmb.js";import"./throttle-CU56JRf7.js";import"./axisSelectors-B_BJB7t0.js";import"./d3-scale-Ccs_pA9m.js";import"./CartesianAxis-Ldc9waKq.js";import"./Layer-CPK-7NIh.js";import"./types-Bpysv2Pn.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-B-kM46TD.js";import"./index-BzBudmwv.js";import"./index-Dg66RVOT.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DYjSRCa_.js";import"./index-BFdMDMd2.js";import"./fillDefinitions-Bx7rUJI2.js";import"./CartesianChart-7SPsAfcZ.js";import"./chartDataContext-BhVo_C4q.js";import"./CategoricalChart-BjWBv8hx.js";import"./dataEntryStyles-D7lSN93x.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Hs6i8eyj.js";import"./useAnimationId-Do3keAzT.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-09R3ENuC.js";import"./tooltipContext-C_AWyPJu.js";import"./ErrorBarContext-CTMeRt95.js";import"./activeStyles-CBtGMRGE.js";import"./SetGraphicalItem-CgeoKwAC.js";import"./getZIndexFromUnknown-Cx-eK8b6.js";import"./useEffectiveDataKey-CuDgyJop.js";import"./omit-BLqlonnX.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-DZMpjyXl.js";import"./Curve-xzcOD2X_.js";import"./step-dKzEEUk_.js";import"./path-BBMZd4YL.js";import"./ActivePoints-BGltZVX5.js";import"./Dot-BnGpEvHu.js";import"./Symbols-B7vEIcCD.js";import"./symbol-CpvxzB9V.js";import"./useElementOffset-DxkPxrTP.js";import"./uniqBy-Bq4o6iFV.js";import"./iteratee-CTGqF3Gd.js";import"./Cross-CcCgIRqV.js";import"./Sector-BbNcubvX.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
