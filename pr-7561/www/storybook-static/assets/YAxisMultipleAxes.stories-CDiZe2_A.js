import{R as t}from"./iframe-wiglGnBh.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BqO3yae8.js";import{R as l}from"./zIndexSlice-DGL63V4L.js";import{C as x}from"./ComposedChart-BkMMlDzm.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BKvwhZwD.js";import{L as a}from"./Line-9lFzyWlx.js";import{X as c}from"./XAxis-DcNyXe69.js";import{T as g}from"./Tooltip-CHvNNyUg.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-CUoTvBNy.js";import"./Layer-nH5sm9p4.js";import"./resolveDefaultProps-BM8NmOex.js";import"./Text-BTuAOKpf.js";import"./DOMUtils-LT1AML3l.js";import"./isWellBehavedNumber-DsqaaTNJ.js";import"./Label-B3PbOJvm.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-jQgtLS9e.js";import"./index-Mz84GrVY.js";import"./index-s4-LlFgK.js";import"./types-BoamgyWM.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BYFI-WHt.js";import"./throttle-BMNVPqSq.js";import"./RechartsWrapper-5SoXlYEo.js";import"./index-WWLocB5H.js";import"./index-1ZP6iUpr.js";import"./axisSelectors-BaS0q6Il.js";import"./d3-scale-Bn4UFc1s.js";import"./CartesianChart-Us5vBUdh.js";import"./chartDataContext-JmkVpeXS.js";import"./CategoricalChart-D2_16EkL.js";import"./tooltipContext-B3aJiH8d.js";import"./AnimatedItems-B9y47QYM.js";import"./useAnimationId-2tqnpEoJ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Bid_fSIj.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-C95mhFam.js";import"./RegisterGraphicalItemId-BK4vqvvE.js";import"./ErrorBarContext-BdKRNCre.js";import"./GraphicalItemClipPath-RZ6a2McD.js";import"./SetGraphicalItem-BXbX8E7N.js";import"./getZIndexFromUnknown-mU-DoNtJ.js";import"./graphicalItemSelectors-BaQ9FtQD.js";import"./Curve-BWqxyQw0.js";import"./step-eMzlrjiD.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DHpr5egm.js";import"./Dot-BqBjCBos.js";import"./getRadiusAndStrokeWidthFromDot-DbINMjnd.js";import"./useElementOffset-D_K1pLUb.js";import"./uniqBy-DMsRc3l-.js";import"./iteratee-D4MnoddV.js";import"./Cross-DLj_PIJa.js";import"./Sector-BQxZVz0K.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)};var m,s,n;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Yt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Yt as __namedExportsOrder,Ct as default};
