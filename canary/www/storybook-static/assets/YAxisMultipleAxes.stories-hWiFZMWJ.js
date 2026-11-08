import{R as t}from"./iframe-Cn8BbXdc.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-CvKMQQHY.js";import{R as l}from"./zIndexSlice-Cplo4OJz.js";import{C as x}from"./ComposedChart-COauRXZ_.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-qhbqxOwN.js";import{L as a}from"./Line-B2HjGTuQ.js";import{X as c}from"./XAxis-OdkIm8mG.js";import{T as g}from"./Tooltip-Bw31npbB.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-BMteoko4.js";import"./Text-C0NLdB6_.js";import"./resolveDefaultProps-Dx-UV5kK.js";import"./ZIndexLayer-CPj3ZDvt.js";import"./index-Vt5NnRCL.js";import"./index-r2FQlKmQ.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-Dlr2J2lS.js";import"./throttle-BbuJxkpw.js";import"./axisSelectors-Cb1wJ0Tf.js";import"./d3-scale-BDIN99PH.js";import"./CartesianAxis-CrDF4n3X.js";import"./Layer-B5iMOq_s.js";import"./types-7A15NfYp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CBPyHODM.js";import"./index-CIAdjncW.js";import"./index-apP2Ny11.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CCqZUt6C.js";import"./index-CkmJfaR7.js";import"./fillDefinitions-Dqk1J0Zs.js";import"./CartesianChart-Cu7ICiUo.js";import"./chartDataContext-CsFOc9VE.js";import"./CategoricalChart-D66OJrIZ.js";import"./dataEntryStyles-fXcaT9lZ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DSJXIYeh.js";import"./useAnimationId-BQvfHsDD.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Dlfc7hut.js";import"./tooltipContext-BE-7S2XF.js";import"./ErrorBarContext-zwHjEd7p.js";import"./activeStyles-DvMk-MBL.js";import"./SetGraphicalItem-7Fal13Qm.js";import"./getZIndexFromUnknown-Cj4eVme7.js";import"./useEffectiveDataKey-D8YFmfQj.js";import"./omit-nMd1Jn9K.js";import"./isArguments-yB-y1yaH.js";import"./Curve-DPXO0w3v.js";import"./step-CpKrc_Vd.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CvLcmOKu.js";import"./Dot-DHIPOa_F.js";import"./Symbols-V0KMXGx3.js";import"./symbol-B1AYOCFp.js";import"./getRadiusAndStrokeWidthFromDot-CQo2Z7L1.js";import"./useElementOffset-BZTAY-ym.js";import"./uniqBy-BDioFPwN.js";import"./iteratee-Bi5Bqc-D.js";import"./Cross-cZpc8_bO.js";import"./Sector-Lq1kEL0B.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
