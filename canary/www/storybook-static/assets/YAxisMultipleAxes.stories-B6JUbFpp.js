import{R as t}from"./iframe-2TbE3qYT.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-DJiyoeoo.js";import{R as l}from"./zIndexSlice-CDl_l-89.js";import{C as x}from"./ComposedChart-Dv9sDNdE.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-C8xZzeNd.js";import{L as a}from"./Line-C0MGKIx5.js";import{X as c}from"./XAxis-J5474B1k.js";import{T as g}from"./Tooltip-DhqtrPJ9.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CmNgnsrp.js";import"./get-CjriyByo.js";import"./Label-BqpWbzgg.js";import"./Text-BBu6qFds.js";import"./ZIndexLayer-CZh1ghPv.js";import"./index-zPMeTUky.js";import"./index-CF9MDp9v.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-BVGWIciz.js";import"./throttle-AC4zKKET.js";import"./axisSelectors-BRsQeeHB.js";import"./diverging-gVDFTlHt.js";import"./CartesianAxis-DY1zMkgy.js";import"./Layer-7DEP56Bj.js";import"./types-Dx30sS-2.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-hzdTS8Zy.js";import"./index-vCQ15aHt.js";import"./index-DZAwbT7O.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DSdhDIUK.js";import"./index-Cp7R3dKQ.js";import"./fillDefinitions-DTcu8a6k.js";import"./CartesianChart-Doi0i7F0.js";import"./chartDataContext-zU1PANlW.js";import"./CategoricalChart-BlCkd7eS.js";import"./dataEntryStyles-T1g5qPBF.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DnludKWy.js";import"./useAnimationId-D_GZEFYT.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Bsp6lbzE.js";import"./tooltipContext-StFilsvp.js";import"./ErrorBarContext-D7D-MJNc.js";import"./activeStyles-Rm_R6i1P.js";import"./SetGraphicalItem-Dl3lwAU1.js";import"./getZIndexFromUnknown-DUto4dfY.js";import"./useEffectiveDataKey-CWpkrBwa.js";import"./omit-C5W9il06.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-DrA60Arr.js";import"./Curve-Z7vcnGYC.js";import"./step-DFCmv64b.js";import"./path-BBMZd4YL.js";import"./ActivePoints-D8FfETBR.js";import"./Dot-_rUk0L2M.js";import"./Symbols-BqG7sYmQ.js";import"./symbol-CUR1FaxD.js";import"./useElementOffset-D9QIVvZV.js";import"./uniqBy-B9J3txXo.js";import"./iteratee-BLZOulYj.js";import"./Cross-DBCSj7Wj.js";import"./Sector-dUg13oG9.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
