import{R as t}from"./iframe-DEVQjgtg.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-DNUJzVJY.js";import{R as l}from"./zIndexSlice-DfK8JSFq.js";import{C as x}from"./ComposedChart-CkNI_L7v.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-C4UysR5s.js";import{L as a}from"./Line-DIzt92wi.js";import{X as c}from"./XAxis-BW3rW0v-.js";import{T as g}from"./Tooltip-BsOHq51C.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CwoRT4vA.js";import"./get-CjriyByo.js";import"./Label-CuMp2cQz.js";import"./Text-B9Mi7Fii.js";import"./ZIndexLayer-FMAzY6FJ.js";import"./index-Cpcs4tmX.js";import"./index-C95LL0D7.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DOgnXW1S.js";import"./throttle-icp-MZ_z.js";import"./axisSelectors-t3BvEa3q.js";import"./diverging-Co6YNHM_.js";import"./CartesianAxis-CPxmijCh.js";import"./Layer-Cr563h4j.js";import"./types-B0JGDzFy.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-2D_h0Nlg.js";import"./index-fXrCovV3.js";import"./index-TVJDl2u2.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CfFuT0mb.js";import"./index-Cxp_oZwY.js";import"./fillDefinitions-D1YpghSP.js";import"./CartesianChart-pH5TOmhe.js";import"./chartDataContext-DImnS5HH.js";import"./CategoricalChart-BtHLUBe9.js";import"./dataEntryStyles-DAcHMSZ1.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BvNq4YWD.js";import"./useAnimationId-CMFy88eN.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DqT038Y8.js";import"./tooltipContext-czqY8cLu.js";import"./ErrorBarContext-D5jMJqSB.js";import"./activeStyles-D4aY95Js.js";import"./SetGraphicalItem-CsW3luzS.js";import"./getZIndexFromUnknown-BZIIFNNy.js";import"./useEffectiveDataKey-Cx2ptCsW.js";import"./omit-BoAzSUIq.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-g6-mSPtW.js";import"./Curve-a_jcRLJ0.js";import"./step-CpcYtbS4.js";import"./path-BBMZd4YL.js";import"./ActivePoints-Dpho8RxE.js";import"./Dot-p_BgihRi.js";import"./Symbols-CuwdJXxk.js";import"./symbol-Dp50t1em.js";import"./useElementOffset-M02b1bSW.js";import"./uniqBy-RXDCBnIw.js";import"./iteratee-69chSGWI.js";import"./Cross-C_0Oj-h0.js";import"./Sector-B86o0IXH.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
