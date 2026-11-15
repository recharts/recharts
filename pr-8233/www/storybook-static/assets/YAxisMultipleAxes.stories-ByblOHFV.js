import{R as t}from"./iframe-C_daZv7l.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-DVc3O9Qy.js";import{R as l}from"./zIndexSlice-Dlp28lA6.js";import{C as x}from"./ComposedChart-bOkTSI7z.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-Dof3eC-w.js";import{L as a}from"./Line-IPpA0euf.js";import{X as c}from"./XAxis-zsBA2PQk.js";import{T as g}from"./Tooltip-DfKGamje.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DbTfJXbl.js";import"./Text-DFRkhFZm.js";import"./resolveDefaultProps-CWP-gMuW.js";import"./ZIndexLayer-CwM562V-.js";import"./index-7cXIOsrg.js";import"./index-D1CrGIf7.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CT8xWjbN.js";import"./throttle-BHZ2wlOs.js";import"./axisSelectors-BlfT440m.js";import"./d3-scale-Dz0Pmj0c.js";import"./CartesianAxis-CWZlckQG.js";import"./Layer-WPlXRukA.js";import"./types-BRKFz9xC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CyloxQ1c.js";import"./index-CJJC3II6.js";import"./index-DBxUtF6C.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CgMr-Xnd.js";import"./index-CEW7yT3i.js";import"./fillDefinitions-BNbyE3VE.js";import"./CartesianChart-a1M-eJU5.js";import"./chartDataContext-D1D0-RnX.js";import"./CategoricalChart-D48joeLJ.js";import"./dataEntryStyles-BrtwCCRb.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BqgZTLn6.js";import"./useAnimationId-BeVDdEFy.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DH0fW0Mt.js";import"./tooltipContext-CpWkqvzS.js";import"./ErrorBarContext-Cc5g1M1Q.js";import"./activeStyles-DqPxAQkX.js";import"./SetGraphicalItem-C7RTXSJB.js";import"./getZIndexFromUnknown-BWn-VTVn.js";import"./useEffectiveDataKey-CLct0de8.js";import"./omit-Dc5z_Oun.js";import"./isArguments-yB-y1yaH.js";import"./Curve-DDXeNIWC.js";import"./step-CfMQYX2G.js";import"./path-DyVhHtw_.js";import"./ActivePoints-Hq6VNZIp.js";import"./Dot-BjcrnH2C.js";import"./Symbols-3hlYR6yc.js";import"./symbol-C8mAwliN.js";import"./getRadiusAndStrokeWidthFromDot-DS_16ujn.js";import"./useElementOffset-Dy4wSkY8.js";import"./uniqBy-DXIPSdGO.js";import"./iteratee-Bz-Pka1B.js";import"./Cross-DXbdezvi.js";import"./Sector-BHmivm3A.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
