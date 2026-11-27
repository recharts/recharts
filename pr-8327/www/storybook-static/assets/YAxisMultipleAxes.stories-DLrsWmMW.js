import{R as t}from"./iframe-2f2w1eP7.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-CAInNDnd.js";import{R as l}from"./zIndexSlice-CjJDCeK0.js";import{C as x}from"./ComposedChart-D2F9GDNP.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-Cya6G7Zq.js";import{L as a}from"./Line-5fH2CL9K.js";import{X as c}from"./XAxis-CJ4nXsTf.js";import{T as g}from"./Tooltip-Biadh1Xo.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CGl449JI.js";import"./get-CjriyByo.js";import"./Label-CxsWdT_n.js";import"./Text-Ch8rCVXH.js";import"./ZIndexLayer-UYyaz2px.js";import"./index-C9gJxZVs.js";import"./index-Ftdy-Ulz.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors--pE3aPXl.js";import"./throttle-b8Y6KxZo.js";import"./axisSelectors-D3RC08dV.js";import"./diverging-Cc08ccIM.js";import"./CartesianAxis-Bgf8P4J0.js";import"./Layer-BbIS_iGu.js";import"./types-DRiMB5bf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Bc2u_l9O.js";import"./index-6HopGisC.js";import"./index-CczUKsLU.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BnbJXMBG.js";import"./index-fhAHbGs4.js";import"./fillDefinitions-CQk55RgO.js";import"./CartesianChart-DpJaOFiF.js";import"./chartDataContext-D-ZzsBgN.js";import"./CategoricalChart-BX6OynRn.js";import"./dataEntryStyles-CX3wrxT3.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Chc6ZrLO.js";import"./useAnimationId-CyAJnZP0.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-C_e7Ka4v.js";import"./tooltipContext-B_97zIqW.js";import"./ErrorBarContext-BMvZMoH6.js";import"./activeStyles-fmqkmIUl.js";import"./SetGraphicalItem-12XTWwtV.js";import"./getZIndexFromUnknown-BLvlP2qi.js";import"./useEffectiveDataKey-BS5IJ5Is.js";import"./omit-Dh6ze5nf.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-AuV9g_SF.js";import"./Curve-mX17fPzt.js";import"./step-DiSsdMnX.js";import"./path-BBMZd4YL.js";import"./ActivePoints-Bv6CckHB.js";import"./Dot-BR-A3ViM.js";import"./Symbols-fsmg-V93.js";import"./symbol-CyxV486p.js";import"./useElementOffset-lvJWvhjj.js";import"./uniqBy-DGZQQqxr.js";import"./iteratee-DNN7vJ8e.js";import"./Cross-oZCxF5Bj.js";import"./Sector-CfJJDasX.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
