import{R as t}from"./iframe-CDSer5wk.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DN7TNoMj.js";import{R as l}from"./zIndexSlice-B-lpBScO.js";import{C as x}from"./ComposedChart-b_m8lhmT.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-B2cdH9M1.js";import{L as a}from"./Line-DsDCihMT.js";import{X as c}from"./XAxis-CLZ8_tLg.js";import{T as g}from"./Tooltip-ChMVK4dW.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CDfUkOd_.js";import"./Text-B-qlIjrY.js";import"./resolveDefaultProps-DTBx4E7L.js";import"./DOMUtils-COEpD6x9.js";import"./isWellBehavedNumber-Cbiw2L0f.js";import"./useId-SR9QF0F6.js";import"./useBackwardsCompatibleTheme-zogGwhJH.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BGJbwrqn.js";import"./index-Mdu1MT_Q.js";import"./index-DPnG0BF_.js";import"./RechartsWrapper-CkjZ8sdT.js";import"./axisSelectors-DSp6qoYe.js";import"./throttle-fnP7_niv.js";import"./d3-scale-BNdPRZbv.js";import"./index-DV1Q8ly1.js";import"./index-SPPJq_2I.js";import"./renderedTicksSlice-Nk82yORn.js";import"./index-DbUyrogr.js";import"./CartesianAxis-DnSeAvbN.js";import"./Layer-BlrsPtdk.js";import"./types-DCfhmQQy.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-B7gL7VFT.js";import"./chartDataContext-SSvdGu54.js";import"./CategoricalChart-BazdXmMB.js";import"./AnimatedItems-C7ScRxUV.js";import"./useAnimationId-DsIt1eY5.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B9-QabtY.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BNDheO9x.js";import"./tooltipContext-BWklhKSb.js";import"./RegisterGraphicalItemId-BtK15Bh8.js";import"./ErrorBarContext-DAmUJr4k.js";import"./GraphicalItemClipPath-DlXs2ztm.js";import"./SetGraphicalItem-b1y0Bklu.js";import"./getZIndexFromUnknown-s7HsEvWj.js";import"./useGraphicalItemIdentity-DX00RNhI.js";import"./dataEntryStyles-st-w92pF.js";import"./Curve-BrORdZJH.js";import"./step-BIecx5Me.js";import"./path-DyVhHtw_.js";import"./ActivePoints-6u2iLucI.js";import"./Dot-7OP2vIm4.js";import"./getRadiusAndStrokeWidthFromDot-Bb_SzVF_.js";import"./useElementOffset-pulofrmD.js";import"./uniqBy-BRQZPpXV.js";import"./iteratee-CIlfEQ2h.js";import"./Cross-Pyb3jZOM.js";import"./Sector-CKKxshLs.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
