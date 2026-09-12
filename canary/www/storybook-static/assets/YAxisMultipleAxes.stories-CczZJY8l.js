import{R as t}from"./iframe-a8fM-7Cj.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DeFLWHEC.js";import{R as l}from"./zIndexSlice-B7KswQd6.js";import{C as x}from"./ComposedChart-BjiltZm-.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-o_Py0yUF.js";import{L as a}from"./Line-CfiMME7R.js";import{X as c}from"./XAxis-CiRF9J92.js";import{T as g}from"./Tooltip-DWLIYdcR.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-KdQX6hx3.js";import"./Text-Bo9ttyFU.js";import"./resolveDefaultProps-DlXKv9jT.js";import"./DOMUtils-BvC4n3H8.js";import"./isWellBehavedNumber-B_g3PQrc.js";import"./useId-B5k2uM1L.js";import"./useBackwardsCompatibleTheme-CU11_u_K.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CUUoNHQJ.js";import"./index-BUD2jY61.js";import"./index-PFQMrolk.js";import"./RechartsWrapper-DeMmS_JM.js";import"./axisSelectors-DVs_A9Pl.js";import"./throttle-CaMuYXI0.js";import"./d3-scale-wNdoB6Dl.js";import"./index-Ke9S5-gf.js";import"./index-DRs5RvY7.js";import"./renderedTicksSlice-cjaWCzPx.js";import"./index-ZucSeVLn.js";import"./CartesianAxis-CtttCErg.js";import"./Layer-XxWBFlRD.js";import"./types-DyUzdvoN.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DyOnhzMI.js";import"./chartDataContext-CMDG0z7K.js";import"./CategoricalChart-DQpuQH-u.js";import"./AnimatedItems-CVA7Axrg.js";import"./useAnimationId-DPUxtvyW.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C2srlOyO.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-0G9qNMVr.js";import"./tooltipContext-Cd6HUqrT.js";import"./RegisterGraphicalItemId-DUAbfK1e.js";import"./ErrorBarContext-DMuZxb5G.js";import"./GraphicalItemClipPath-D12XFDsM.js";import"./SetGraphicalItem-DMaklldD.js";import"./getZIndexFromUnknown-DrGPmpT6.js";import"./useGraphicalItemIdentity-BpSFuYBx.js";import"./Curve-BopOTfmu.js";import"./step-BGrDxD_7.js";import"./path-DyVhHtw_.js";import"./ActivePoints-B8Jb8oVa.js";import"./Dot-DMPbfCPa.js";import"./getRadiusAndStrokeWidthFromDot-C7Tnz6V8.js";import"./useElementOffset-BGrjDRT_.js";import"./uniqBy-KCT6LaRN.js";import"./iteratee-DuzqjsWc.js";import"./Cross-B68UPwPf.js";import"./Sector-CccBQHbB.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Rt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Rt as __namedExportsOrder,Mt as default};
