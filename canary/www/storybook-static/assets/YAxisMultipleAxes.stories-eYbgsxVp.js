import{R as t}from"./iframe-DLBrGVIL.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-BYVuK0Yz.js";import{R as l}from"./zIndexSlice-D04f94zz.js";import{C as x}from"./ComposedChart-B19GUyoN.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DeiK9zHA.js";import{L as a}from"./Line-Dp11xR-K.js";import{X as c}from"./XAxis-CeLc4bEQ.js";import{T as g}from"./Tooltip-D6tNJons.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DCNaX0Un.js";import"./get-CjriyByo.js";import"./Label-B42eZj7W.js";import"./Text-3dSBCvrE.js";import"./ZIndexLayer-R8fInGM9.js";import"./index-B7CtExx5.js";import"./index-DQTJ-3mG.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-5dY8QunD.js";import"./throttle-Csq4RHLA.js";import"./axisSelectors-e5FgB8sH.js";import"./d3-scale-B7f23rgt.js";import"./CartesianAxis-DwNRBXKt.js";import"./Layer-fmxJ3YOZ.js";import"./types-Bhx-lAgy.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-C3k9zhPb.js";import"./index-wzkov3Za.js";import"./index-C5Iik6-v.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CQD9R6Ch.js";import"./index-71o-Y0_J.js";import"./fillDefinitions-3l2D0OPm.js";import"./CartesianChart-DqjyD4mn.js";import"./chartDataContext-Xl7iaHZA.js";import"./CategoricalChart-D7HNeFeV.js";import"./dataEntryStyles-C-aMudj3.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BfcJPzvH.js";import"./useAnimationId-UzUbsW_e.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BggRH-Y1.js";import"./tooltipContext-I57Z2J2k.js";import"./ErrorBarContext-5vBRFIsn.js";import"./activeStyles-DixW-39S.js";import"./SetGraphicalItem-mnwtfu-X.js";import"./getZIndexFromUnknown-DInNQp8a.js";import"./useEffectiveDataKey-CzXzkxYB.js";import"./omit-VFDAEpqp.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-XT9ud7Ex.js";import"./Curve-COZ7WQ5e.js";import"./step-Rw1feLL3.js";import"./path-BBMZd4YL.js";import"./ActivePoints-9q7wkDTC.js";import"./Dot-DOIYCHL9.js";import"./Symbols-CwwyfWDy.js";import"./symbol-CTUGUG7K.js";import"./useElementOffset-CivVGgp9.js";import"./uniqBy-ConzCxl5.js";import"./iteratee-BL4ehpYl.js";import"./Cross-DEEEtc7e.js";import"./Sector-CHWFKDEu.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
