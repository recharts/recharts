import{R as t}from"./iframe-vkuvwsVK.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BRsD9NZr.js";import{R as l}from"./zIndexSlice-Dv-4_3RD.js";import{C as x}from"./ComposedChart-DmKeLxy2.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-Ckk9VP7w.js";import{L as a}from"./Line-CP5o0VFe.js";import{X as c}from"./XAxis-CpNjxui_.js";import{T as g}from"./Tooltip-M8YEfCnF.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-MPhkREO_.js";import"./Text-Bzv8HE1I.js";import"./resolveDefaultProps-B-kKD-dq.js";import"./DOMUtils-Bw-pfRF7.js";import"./isWellBehavedNumber-CEhn0nxL.js";import"./useId-CkK6agKe.js";import"./useBackwardsCompatibleTheme-DDVT5RRa.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Ds3zCArg.js";import"./index-D41S2RZq.js";import"./index-Chk0yUZO.js";import"./RechartsWrapper-BGV5QqYH.js";import"./axisSelectors-BTwgcDWt.js";import"./throttle-BLHvZaft.js";import"./d3-scale-5XjKmDSJ.js";import"./index-_iLGw6z5.js";import"./index-CowJ9bbH.js";import"./renderedTicksSlice-CkUsoCJX.js";import"./index-BegFXIYu.js";import"./CartesianAxis-DxB0GpiS.js";import"./Layer-Bi6vQt34.js";import"./types-BvD7j9i8.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-C28eI56R.js";import"./chartDataContext-D8moszCG.js";import"./CategoricalChart-C__CUkoq.js";import"./AnimatedItems-DBPnILuv.js";import"./useAnimationId-DDynUN7k.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-9gytVjHV.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BdYG65ei.js";import"./tooltipContext-Bfm0RNgr.js";import"./RegisterGraphicalItemId-BNZMo2JA.js";import"./ErrorBarContext-BiVVJplW.js";import"./GraphicalItemClipPath-B9JB0AOy.js";import"./SetGraphicalItem-CZfOWNG9.js";import"./getZIndexFromUnknown-BGv5R9Ga.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-BddmKJGm.js";import"./Curve-Dio-qnL1.js";import"./step-BXgLPagR.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BpGdn-ZL.js";import"./Dot-DDw4Jjdd.js";import"./getRadiusAndStrokeWidthFromDot-CXXRrtxr.js";import"./useElementOffset-C3uG_kWl.js";import"./uniqBy-Dq3TlbF7.js";import"./iteratee-Da6DrtKw.js";import"./Cross-BPIIlaLH.js";import"./Sector-DMXrhCec.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
