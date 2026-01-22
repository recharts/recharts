import{e as t}from"./iframe-Bnj2hik-.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CNrfi_Sb.js";import{Y as r}from"./YAxis-D5VnaMC1.js";import{R as l}from"./arrayEqualityCheck-CvUuuvKy.js";import{C as x}from"./ComposedChart-DOtfomr9.js";import{B as o}from"./Bar-BGYYIrpH.js";import{L as a}from"./Line-D9lTYQ4h.js";import{X as c}from"./XAxis-DOcRfQ-w.js";import{T as A}from"./Tooltip-5z-9ouH6.js";import{R as g}from"./RechartsHookInspector-C_AeFs2E.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CPe3qGY9.js";import"./CartesianAxis-5Ck476fs.js";import"./Layer-CTa4OydD.js";import"./Text-CZ97J0qN.js";import"./DOMUtils-JoNXkoCv.js";import"./Label-CGAHaC0Q.js";import"./PolarUtils-DdS5KPsI.js";import"./ZIndexLayer-AOmKG0iq.js";import"./zIndexSlice-CXHmHRtI.js";import"./types-BDwtxhLH.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-Bya6Ssf9.js";import"./axisSelectors-DFI1wFeY.js";import"./RechartsWrapper-B0Rp0hND.js";import"./CartesianChart-D6wdmsep.js";import"./chartDataContext-DBEZcAkK.js";import"./CategoricalChart-6PDUcg0C.js";import"./tooltipContext-C91HkTF6.js";import"./ReactUtils-Df0RtsJl.js";import"./ActiveShapeUtils--kZjLfXB.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BBR3U7HU.js";import"./useAnimationId-APU2l9w6.js";import"./Trapezoid-CztQNmuh.js";import"./Sector-DCA192jN.js";import"./Symbols-DhIIpi5f.js";import"./Curve-DmusCa7H.js";import"./RegisterGraphicalItemId-DiJF1Hfp.js";import"./ErrorBarContext-D6agTjiV.js";import"./GraphicalItemClipPath-UbaOhT8l.js";import"./SetGraphicalItem-DzQbpKu1.js";import"./getZIndexFromUnknown-DgEcoVbo.js";import"./graphicalItemSelectors-8BfZnAMo.js";import"./ActivePoints-Zh-g-ty0.js";import"./Dot-pJFhyCMJ.js";import"./getRadiusAndStrokeWidthFromDot-DrD-zBLL.js";import"./useElementOffset-Cs4N1beZ.js";import"./iteratee-hXzJyvq3.js";import"./Cross-g1_l6O_A.js";import"./index-BXTK0ASf.js";import"./ChartSizeDimensions-fd2MIhjM.js";import"./OffsetShower-h-8uohRc.js";import"./PlotAreaShower-BfrbL-Yz.js";const ut={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)};var m,s,n;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
              <RechartsHookInspector />
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
}`,...(n=(s=i.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const It=["WithLeftAndRightAxes"];export{i as WithLeftAndRightAxes,It as __namedExportsOrder,ut as default};
