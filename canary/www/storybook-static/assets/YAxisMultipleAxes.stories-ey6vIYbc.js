import{R as t}from"./iframe-Bu5r_UoW.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-sL3yeYN7.js";import{R as l}from"./zIndexSlice-BoZi0EKL.js";import{C as x}from"./ComposedChart-CGLPX3yw.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CjChK6uM.js";import{L as a}from"./Line-CYcF1koO.js";import{X as c}from"./XAxis-CnJljd4s.js";import{T as g}from"./Tooltip-CWQk5OWh.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-0RpFXi-A.js";import"./Text-Whpl_RQm.js";import"./resolveDefaultProps-BDfy-Y9N.js";import"./ZIndexLayer-BpE6rRDX.js";import"./index-CP6mH--B.js";import"./index-DnT_Ya4A.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-n0CqqZCi.js";import"./throttle-BpoLTe0M.js";import"./axisSelectors-Bhk2XSO9.js";import"./d3-scale-DImarRMe.js";import"./CartesianAxis-DeK_gPGC.js";import"./Layer-DFVqeIzd.js";import"./types-Bn2H5HlC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CEkp7Ia_.js";import"./index-pIfafh94.js";import"./index-C9YbC-S9.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BqfNjaYX.js";import"./index-D8NerNAW.js";import"./fillDefinitions-BYA-kAp9.js";import"./CartesianChart-CmgmeyYa.js";import"./chartDataContext-epTHr0-d.js";import"./CategoricalChart-DkHDaSrl.js";import"./dataEntryStyles-C66iRC8T.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-M1V3Y4MR.js";import"./useAnimationId-BnIWNy46.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BGxbUkvX.js";import"./tooltipContext-DfROrrQb.js";import"./ErrorBarContext-C-78saLU.js";import"./activeStyles-8B2_TUAk.js";import"./SetGraphicalItem-CpMZVpWB.js";import"./getZIndexFromUnknown-DZMQ3R8e.js";import"./useEffectiveDataKey-BxhAq3wv.js";import"./omit-COdxDF2M.js";import"./isArguments-yB-y1yaH.js";import"./Curve-CsvMXB6L.js";import"./step-D2ytnSwm.js";import"./path-DyVhHtw_.js";import"./ActivePoints-elCSEGa9.js";import"./Dot-Bi1b_c85.js";import"./Symbols-Cn0dRiyA.js";import"./symbol-DRsT_y42.js";import"./getRadiusAndStrokeWidthFromDot-95VsLoAR.js";import"./useElementOffset-Cvj3h31Q.js";import"./uniqBy-CyQEgUk3.js";import"./iteratee-0LTiAB4q.js";import"./Cross-DTWz3HnI.js";import"./Sector-BzagyeT9.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
