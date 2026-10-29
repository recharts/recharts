import{R as t}from"./iframe-BfuPA7Y7.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BrNvBbuM.js";import{R as l}from"./zIndexSlice-B6sU7Rt1.js";import{C as x}from"./ComposedChart-CsUG1xb5.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-Dl8YlR6L.js";import{L as a}from"./Line-Cx7UbFJj.js";import{X as c}from"./XAxis-18ahIu4N.js";import{T as g}from"./Tooltip-x7VgMlg_.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-B5k-U_Yi.js";import"./Text-WUFue0UU.js";import"./resolveDefaultProps-SE0EJZ_b.js";import"./DOMUtils-C1ieIiQg.js";import"./ZIndexLayer-CSVoTSBk.js";import"./index-PwnnJGIT.js";import"./index-pibBQJc_.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CWu_M8g7.js";import"./throttle-Dc8hP4d4.js";import"./axisSelectors-Br11nK0T.js";import"./d3-scale-CjK5ImOh.js";import"./CartesianAxis-BUa2DE6b.js";import"./Layer-BWWgf-oi.js";import"./types-Di4mZIQP.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Bz-0OqRl.js";import"./index-DdvOS-Rc.js";import"./index-WmIsGj85.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-95Yf8UFb.js";import"./index-Bw4IjVJv.js";import"./fillDefinitions-BUo8WQ2M.js";import"./CartesianChart-Dt3os4bo.js";import"./ZIndexPortal-Bjqq_-_3.js";import"./CategoricalChart-BbC6nel8.js";import"./LabelList-DuFHEtzk.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-wfSbP1Fu.js";import"./useAnimationId-4ywEr4SP.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CJYZSdch.js";import"./tooltipContext-D0WwmcJ9.js";import"./dataEntryStyles-DawwN3gr.js";import"./ErrorBarContext-DQS0aRku.js";import"./activeStyles-fOeMVdxf.js";import"./SetGraphicalItem-B3dBsQBy.js";import"./getZIndexFromUnknown-CE8Y5Jym.js";import"./useEffectiveDataKey-Chd7xyV4.js";import"./omit-fAstOSNj.js";import"./isArguments-yB-y1yaH.js";import"./Curve-CE_2fXkD.js";import"./step-Cd-JWo6G.js";import"./path-DyVhHtw_.js";import"./ActivePoints-35kBP04l.js";import"./Dot-Clx--Joj.js";import"./Symbols-pnM7tnEZ.js";import"./symbol-DyOhgHTf.js";import"./getRadiusAndStrokeWidthFromDot-DI9dnlZ8.js";import"./useElementOffset-CXmUTCN6.js";import"./uniqBy-7WBcglc1.js";import"./iteratee-BCwjEBWk.js";import"./Cross-Cu86xmGq.js";import"./Sector-CJOaKkDv.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Wt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Wt as __namedExportsOrder,Tt as default};
