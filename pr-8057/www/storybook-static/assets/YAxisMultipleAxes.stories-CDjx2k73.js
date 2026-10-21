import{R as t}from"./iframe-DTHZbTt-.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-D2uAEQ_1.js";import{R as l}from"./zIndexSlice-CwvyUZAf.js";import{C as x}from"./ComposedChart-BGyl5BrV.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CCoLMQ7B.js";import{L as a}from"./Line-BAiXLkVa.js";import{X as c}from"./XAxis-DNNXvE0w.js";import{T as g}from"./Tooltip-DFQWj3xk.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-0KYVoNB4.js";import"./Text-D1xR-i1r.js";import"./resolveDefaultProps-kDJk6VzV.js";import"./pageBackground-D-Popr0j.js";import"./isWellBehavedNumber-Bozcvyc-.js";import"./useId-BWpg6He6.js";import"./useBackwardsCompatibleTheme-Cm_dQqJG.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer--bHJC1rV.js";import"./index-Fy1PXU7Z.js";import"./index-Daz8taF-.js";import"./axisSelectors-BOmHsD9v.js";import"./throttle-_YZWlOkj.js";import"./d3-scale-BmJqysRF.js";import"./CartesianAxis-Ck9hBcPI.js";import"./Layer-DW8M9VQm.js";import"./types-DfO2mLHa.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-D7ZIJ8O6.js";import"./index-DguN7IkA.js";import"./index-CIOmtNBi.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BEg2HwJ0.js";import"./index-CrHWP68A.js";import"./CartesianChart-CFx76W2A.js";import"./chartDataContext-HhXd6bIQ.js";import"./CategoricalChart-BuK74uML.js";import"./activeStyles-C3naVa7V.js";import"./useAnimationId-Dfuq3lyA.js";import"./dataEntryStyles-DkIuZeQk.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DcH2ra7A.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CMR5ure_.js";import"./tooltipContext-CTVECIpw.js";import"./ErrorBarContext-BnuvGJQ5.js";import"./GraphicalItemClipPath-EAO5wM-I.js";import"./SetGraphicalItem-SNY8eCLu.js";import"./getZIndexFromUnknown-DT3X5VoN.js";import"./useEffectiveDataKey-5jqQvgZD.js";import"./omit-CQ1xPNua.js";import"./isArguments-yB-y1yaH.js";import"./Curve-BFSDmDlA.js";import"./step-BNxJFgbJ.js";import"./path-DyVhHtw_.js";import"./ActivePoints-XYXWcFmf.js";import"./Dot-BoMbzqSu.js";import"./getRadiusAndStrokeWidthFromDot-BBjNZ8_1.js";import"./useElementOffset-BXtH78i8.js";import"./uniqBy-CKgXEfs_.js";import"./iteratee-CTtZA5q0.js";import"./Cross-D9Dtg2wU.js";import"./Sector-yWkVt4zI.js";const Lt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Tt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Tt as __namedExportsOrder,Lt as default};
