import{R as t}from"./iframe-B07BHG7b.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-9CqKZvPs.js";import{R as l}from"./zIndexSlice-DMtdtU0H.js";import{C as x}from"./ComposedChart-VKrjcxhK.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-B4NDHbmR.js";import{L as a}from"./Line-Coltmmom.js";import{X as c}from"./XAxis-CkRNVIdA.js";import{T as g}from"./Tooltip-CAXW-LF_.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DT0SDRud.js";import"./Text-CNYJT0YU.js";import"./resolveDefaultProps-BRBRD9Wj.js";import"./DOMUtils-BYXyET0J.js";import"./isWellBehavedNumber-BwS8-SkC.js";import"./useId-DpSDwQO_.js";import"./useBackwardsCompatibleTheme-BSstlxbW.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BWiNey_Z.js";import"./index-C_4gdDDP.js";import"./index-OowKJhbY.js";import"./RechartsWrapper-CbwTx7DF.js";import"./axisSelectors-Nr5xjaNb.js";import"./throttle-DTIoaHkO.js";import"./d3-scale-C1HygQvU.js";import"./index-CnnKafP5.js";import"./index-Ch334nIE.js";import"./renderedTicksSlice-D6Y0A1v8.js";import"./index-Cay4G1Oz.js";import"./CartesianAxis-Bwpf-6f1.js";import"./Layer-DGsDthuj.js";import"./types-BfpKaUoc.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DjafEMNG.js";import"./chartDataContext-L5OvEFVH.js";import"./CategoricalChart-Dsa2Qc1B.js";import"./AnimatedItems-BPQiX0OY.js";import"./useAnimationId-D8wc_hUQ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Cjft6Teu.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DunyI-30.js";import"./tooltipContext-BBZjV5n1.js";import"./RegisterGraphicalItemId-r8grTaJr.js";import"./ErrorBarContext-CkRF2jvy.js";import"./GraphicalItemClipPath-CDDJymit.js";import"./SetGraphicalItem-CN2Fj3zB.js";import"./getZIndexFromUnknown-DAhB2MIj.js";import"./useGraphicalItemIdentity-BewjVzSI.js";import"./dataEntryStyles-CR7_WxBG.js";import"./Curve-Co_OugcN.js";import"./step-EbjsK9_B.js";import"./path-DyVhHtw_.js";import"./ActivePoints-qVEGkbRi.js";import"./Dot-D5b4Rj0p.js";import"./getRadiusAndStrokeWidthFromDot-CWtkFiVw.js";import"./useElementOffset-DyYSc7X1.js";import"./uniqBy-DWkLQ8w4.js";import"./iteratee-BtatVMfB.js";import"./Cross-kSYU8t6D.js";import"./Sector-CRPMF3S_.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
