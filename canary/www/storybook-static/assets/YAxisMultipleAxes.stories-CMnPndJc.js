import{R as t}from"./iframe-C0BhaIHx.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DxhSN3f3.js";import{R as l}from"./zIndexSlice-CDOt9hko.js";import{C as x}from"./ComposedChart-Mgrr1vAv.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CYldbXVE.js";import{L as a}from"./Line-BrGPisns.js";import{X as c}from"./XAxis-DW1roRyb.js";import{T as g}from"./Tooltip-ChFQw5Us.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BTrm9XD1.js";import"./Text-CsTjolj2.js";import"./resolveDefaultProps-DCmLA3K_.js";import"./DOMUtils-BbiNqhEu.js";import"./isWellBehavedNumber-D_-ia2T-.js";import"./useId-DVa-1am7.js";import"./useBackwardsCompatibleTheme-Bm34Q8-P.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-rpRhSNXU.js";import"./index-CHaO9dBD.js";import"./index-uoiqJzNo.js";import"./RechartsWrapper-BrzF7ifV.js";import"./axisSelectors-BjRn9Rmb.js";import"./throttle-_kaTGctA.js";import"./d3-scale-m2f7iS2A.js";import"./index-BOsMLxuu.js";import"./index-CxbCOQkV.js";import"./renderedTicksSlice--IxhvHeS.js";import"./index-BnJ9NTOO.js";import"./CartesianAxis-DAIP3l5S.js";import"./Layer-BVz81g-K.js";import"./types-09ibMXDf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-B1wZ3fTU.js";import"./chartDataContext-D3PRni2U.js";import"./CategoricalChart-F9gORHS1.js";import"./AnimatedItems-BkfPAPcH.js";import"./useAnimationId-DAQ_cacI.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-ChwjE7xo.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-B0KqHDN3.js";import"./tooltipContext-uJ4DQRI8.js";import"./RegisterGraphicalItemId-BZlrZWzc.js";import"./ErrorBarContext-0HaXxMlO.js";import"./GraphicalItemClipPath-puDtay2S.js";import"./SetGraphicalItem-0BPxCGJF.js";import"./getZIndexFromUnknown-CjyHsOIK.js";import"./useGraphicalItemIdentity-DRraOtTx.js";import"./Curve-BT8Th8L7.js";import"./step-D8qMIOsj.js";import"./path-DyVhHtw_.js";import"./ActivePoints-Cer-NR5E.js";import"./Dot-Bi7x9r9p.js";import"./getRadiusAndStrokeWidthFromDot-BS0aHfrl.js";import"./useElementOffset-3ZN4wc9L.js";import"./uniqBy-D0MFx9I4.js";import"./iteratee-C079nQ1K.js";import"./Cross-BqUJjMul.js";import"./Sector-Dd9164Y3.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
