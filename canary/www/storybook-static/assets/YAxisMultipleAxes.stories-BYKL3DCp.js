import{R as t}from"./iframe-BU3iqhog.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-C4ehmAHw.js";import{R as l}from"./zIndexSlice-Cpd3Oi8q.js";import{C as x}from"./ComposedChart-CnlQVWiV.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DXWVXWP6.js";import{L as a}from"./Line-D5gRKdrp.js";import{X as c}from"./XAxis-DVT5C2oc.js";import{T as g}from"./Tooltip-1w1e9gly.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BEIJZAIQ.js";import"./Text-BrjMZ7T0.js";import"./resolveDefaultProps-4q4hBHNx.js";import"./DOMUtils-CiCEa87M.js";import"./isWellBehavedNumber-DTANvM1I.js";import"./useId-C4wpt1HA.js";import"./useBackwardsCompatibleTheme-BMMiVQGL.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D4v3Xv2l.js";import"./index-JOJ-brJb.js";import"./index-CKIb-o38.js";import"./RechartsWrapper-zJDpEykE.js";import"./axisSelectors-C9pjjfER.js";import"./throttle-Dtv6RWTH.js";import"./d3-scale-BBqyl05y.js";import"./index--oAu63xI.js";import"./index-BAJoWACv.js";import"./renderedTicksSlice-DJZNDnvY.js";import"./index-Crwgfq_Z.js";import"./CartesianAxis-DRURazzH.js";import"./Layer-BUBmv9mO.js";import"./types-Cp0AAwbW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-C9c1nVF1.js";import"./chartDataContext-DjOyYX_x.js";import"./CategoricalChart-B34ld9nC.js";import"./AnimatedItems-CSVnwEYt.js";import"./useAnimationId-BUaPZS0B.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-OOh_5Fv6.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DFQKKGa8.js";import"./tooltipContext-d08g8X00.js";import"./RegisterGraphicalItemId-DfUeUgid.js";import"./ErrorBarContext-qidGP01Z.js";import"./GraphicalItemClipPath-DoWFsAsl.js";import"./SetGraphicalItem-Da1y71gX.js";import"./getZIndexFromUnknown-r6eeLjIP.js";import"./useGraphicalItemIdentity-CTbnTQeV.js";import"./dataEntryStyles-CU22C1tk.js";import"./Curve-BSmazxDN.js";import"./step-uA4Kffey.js";import"./path-DyVhHtw_.js";import"./ActivePoints-Bkhj7n47.js";import"./Dot-C8c1IDgg.js";import"./getRadiusAndStrokeWidthFromDot-Dhw2197g.js";import"./useElementOffset-BuaCyz1B.js";import"./uniqBy-B0FmK-vV.js";import"./iteratee-Dq0J-PP4.js";import"./Cross-DPcIieT-.js";import"./Sector-Bk3HtvjQ.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
