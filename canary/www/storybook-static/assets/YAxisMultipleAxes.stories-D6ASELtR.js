import{R as t}from"./iframe-yFUZOAXo.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-Bm1MK_pl.js";import{R as l}from"./zIndexSlice-gBXHaIY6.js";import{C as x}from"./ComposedChart-CLIGRHzc.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-bVQJzEbq.js";import{L as a}from"./Line-DBwfQOxZ.js";import{X as c}from"./XAxis-VuWV4oHL.js";import{T as g}from"./Tooltip-kufh7Sgn.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-B2yJhwFE.js";import"./get-CjriyByo.js";import"./Label-C38PHRGq.js";import"./Text-gRe7KF5h.js";import"./ZIndexLayer-BFOdALhB.js";import"./index-CHzPnfIT.js";import"./index-5xbZMWg1.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CFbKEyZ8.js";import"./redux-toolkit.esm-D_pQmptz.js";import"./axisSelectors-EZDSIF5u.js";import"./diverging-BRWdQdSe.js";import"./CartesianAxis-Cl0edJ8g.js";import"./Layer-DccvzxoJ.js";import"./types-DUCsLnxG.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CilCeieo.js";import"./index-PETS0UhS.js";import"./index-BK6Ilp-H.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-Bghi6ZRK.js";import"./index-CtXM72i0.js";import"./fillDefinitions-IzAh6C3K.js";import"./CartesianChart-C-z-JDjQ.js";import"./chartDataContext-BbJwl4x7.js";import"./CategoricalChart-D9q-ZVsT.js";import"./dataEntryStyles-D7kCW6zO.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Btd8NkER.js";import"./useAnimationId-JmfqkQro.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CycVwTKF.js";import"./tooltipContext-BBA8ygrX.js";import"./ErrorBarContext-Bka5ymRE.js";import"./activeStyles-DarVPLRL.js";import"./SetGraphicalItem-ClWcTtiF.js";import"./getZIndexFromUnknown-BOAwtTcw.js";import"./useEffectiveDataKey-DPchhFnV.js";import"./omit-BqtapwUM.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-a_asEMsX.js";import"./Curve-YzirgrH8.js";import"./step-BqjoQNYS.js";import"./path-BBMZd4YL.js";import"./ActivePoints-EuxxAYs7.js";import"./Dot-BxahtCeT.js";import"./Symbols-BNaTe5h-.js";import"./symbol-qTHekaJz.js";import"./getUniqPayload-DAvcTrd6.js";import"./uniqBy-DOg5MgEB.js";import"./iteratee-BGJ_B21x.js";import"./Cross-qaIs1wuS.js";import"./Sector-Bh9Zkm4g.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
