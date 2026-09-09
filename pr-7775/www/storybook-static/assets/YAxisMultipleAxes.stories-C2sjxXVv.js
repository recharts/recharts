import{R as t}from"./iframe-Gdd3jtsk.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-Di2w_laQ.js";import{R as l}from"./zIndexSlice-CSZDPlYV.js";import{C as x}from"./ComposedChart-wOVymvQS.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BeBClCqv.js";import{L as a}from"./Line-BsY-LYne.js";import{X as c}from"./XAxis-CfRxe5fa.js";import{T as g}from"./Tooltip-D3vTDUsY.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DL60lMB9.js";import"./Text-vzNtnCvi.js";import"./resolveDefaultProps-BAx7A2d0.js";import"./DOMUtils-DsTGrs8B.js";import"./isWellBehavedNumber-dcNjbQjU.js";import"./useId-DBiLJeK_.js";import"./useBackwardsCompatibleTheme-vrrckkYj.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BONCUyCr.js";import"./index-OXuJkc0G.js";import"./index-BYdAkKa9.js";import"./RechartsWrapper-DHzy1vja.js";import"./axisSelectors-gB1Qysm6.js";import"./throttle-BmbkxDbb.js";import"./d3-scale-CuO1bYlf.js";import"./index-BA4wfNHy.js";import"./index-DLhl39MV.js";import"./renderedTicksSlice-Bnpylx8R.js";import"./index-D3-ryID0.js";import"./CartesianAxis-ZunbmCHs.js";import"./Layer-D1lMlbyy.js";import"./types-TRPks9BY.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-Ddy5lGq_.js";import"./chartDataContext-Cj_vDVUA.js";import"./CategoricalChart-Wstkm_N3.js";import"./AnimatedItems-BmvPvy1l.js";import"./useAnimationId-DI-q8E5L.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-4hOwKYjA.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Cb2VhDvv.js";import"./tooltipContext-BmzT63fq.js";import"./RegisterGraphicalItemId-BmqdRBnz.js";import"./ErrorBarContext-uChJYirb.js";import"./GraphicalItemClipPath-CxxXrJBj.js";import"./SetGraphicalItem-C6Ve9h1l.js";import"./getZIndexFromUnknown-Co3R5rHO.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-CVTQbG3C.js";import"./Curve-CY9DQNQA.js";import"./step-Tntu3fQG.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DdmI4xi2.js";import"./Dot-BEO0U3qq.js";import"./getRadiusAndStrokeWidthFromDot-Bfe6QX96.js";import"./useElementOffset-CC92A-6l.js";import"./uniqBy-q0Kkkim5.js";import"./iteratee-BtmQJOPf.js";import"./Cross-CxTlSs6o.js";import"./Sector-CfjvUCUr.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
