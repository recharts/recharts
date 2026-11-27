import{R as t}from"./iframe-BLIo_1nt.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-B-hKkgmv.js";import{R as l}from"./zIndexSlice-DC3TJ2KH.js";import{C as x}from"./ComposedChart-MrmH01T4.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-Bpd2Gawo.js";import{L as a}from"./Line-Op3Vm6R3.js";import{X as c}from"./XAxis-NUWW5fMr.js";import{T as g}from"./Tooltip-DrYX7zBw.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DBbSGEQz.js";import"./get-CjriyByo.js";import"./Label-CFregkfn.js";import"./Text-DGpe4WxS.js";import"./ZIndexLayer-BZ7iUhzZ.js";import"./index-X9B5BzRC.js";import"./index-DzqD25FH.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CTVIJxRd.js";import"./throttle-BVtqo_9X.js";import"./axisSelectors-zp31unE3.js";import"./diverging-0nS9y-pB.js";import"./CartesianAxis-CednQB0X.js";import"./Layer-BmO--khP.js";import"./types-C-m9Hr0T.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Bb6Mddqa.js";import"./index-CO4LKWIG.js";import"./index-BIvaYjey.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DHKT5KBC.js";import"./index-Cvsm1Tm8.js";import"./fillDefinitions-pQA0VntX.js";import"./CartesianChart-DiqGyEKX.js";import"./chartDataContext-CqIvcjot.js";import"./CategoricalChart-DIDmT5Om.js";import"./dataEntryStyles-B2sIlIGL.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D4nL3Ndu.js";import"./useAnimationId-BgYtx5DV.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-wxtxdEJ1.js";import"./tooltipContext-C8JMsOca.js";import"./ErrorBarContext-GHF_OtFg.js";import"./activeStyles-CwggIO5e.js";import"./SetGraphicalItem-DvFjNtUQ.js";import"./getZIndexFromUnknown-cnBSox7j.js";import"./useEffectiveDataKey-CLP9K8e-.js";import"./omit-BIFVMJ9u.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-DxsyiQVm.js";import"./Curve-BVD8Rbav.js";import"./step-LFYZ39d8.js";import"./path-BBMZd4YL.js";import"./ActivePoints-BBUouWIB.js";import"./Dot-B_Lpp7cN.js";import"./Symbols-DgGyp4Yg.js";import"./symbol-D8T0ODfo.js";import"./useElementOffset-VoZhZIkW.js";import"./uniqBy-D7cU4A4V.js";import"./iteratee-w-RXZ5GP.js";import"./Cross-B4AUhU5f.js";import"./Sector-B6-NlQbV.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
