import{R as t}from"./iframe-BkOwE2GN.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-hX7zZE17.js";import{R as l}from"./zIndexSlice-Chy-hne0.js";import{C as x}from"./ComposedChart-BhRq4U8z.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CwOgKBHC.js";import{L as a}from"./Line-DaHUMkwJ.js";import{X as c}from"./XAxis-0fckSjiA.js";import{T as g}from"./Tooltip-LK18Qy9U.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-NLCauKH2.js";import"./get-CjriyByo.js";import"./Label-y4X5dBPS.js";import"./Text-DYjefSTk.js";import"./ZIndexLayer-dRwAMNuu.js";import"./index-CH1j1Fpi.js";import"./index-ByxKcjsQ.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-BvSTSSsq.js";import"./throttle-DAc5l_dD.js";import"./axisSelectors-DGKEku6n.js";import"./diverging-CTw2DMEK.js";import"./CartesianAxis-DEhg_nUI.js";import"./Layer-CnUstnfJ.js";import"./types-CoO4ONhi.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Dl3anyA4.js";import"./index-DLZbiRz5.js";import"./index-B_P6uzST.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CXzR8xrS.js";import"./index-nwTT5isQ.js";import"./fillDefinitions-l_67yLXZ.js";import"./CartesianChart-CPFxyOEU.js";import"./chartDataContext-DkGjRnrU.js";import"./CategoricalChart-6jzkaSCX.js";import"./dataEntryStyles-R9P1sHzA.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-jQhwNsi0.js";import"./useAnimationId-DWRfsMZ5.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BE3bg2lY.js";import"./tooltipContext-DlfBTk9y.js";import"./ErrorBarContext-BuIxRivK.js";import"./activeStyles-fROkMw-p.js";import"./SetGraphicalItem-BSi-Voc1.js";import"./getZIndexFromUnknown-BGzvUspL.js";import"./useEffectiveDataKey-BySMHkBi.js";import"./omit-3dRxX8ce.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-CE4sWQuP.js";import"./Curve-DGsLLJww.js";import"./step-XUgRcOx_.js";import"./path-BBMZd4YL.js";import"./ActivePoints-zmYc3mi0.js";import"./Dot-bUm5BNK-.js";import"./Symbols-B-s6UWez.js";import"./symbol-zbMM1gn6.js";import"./useElementOffset-C2OMNI73.js";import"./uniqBy-CEEShQv_.js";import"./iteratee-CcBPK2XM.js";import"./Cross-Dbp1ZLfh.js";import"./Sector-DVdFrkkX.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
