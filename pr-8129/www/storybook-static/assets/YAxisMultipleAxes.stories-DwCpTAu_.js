import{R as t}from"./iframe-CDpmIgQT.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-Ogt9or7H.js";import{R as l}from"./zIndexSlice-BfaxD0dh.js";import{C as x}from"./ComposedChart-BJALrnW1.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DR4D050-.js";import{L as a}from"./Line-0hIul04-.js";import{X as c}from"./XAxis-3XA4-bKe.js";import{T as g}from"./Tooltip-BT8KywYi.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-PB9tCobP.js";import"./Text-BSIquxO3.js";import"./resolveDefaultProps-ihnr6TPx.js";import"./DOMUtils-Cs7FGDH8.js";import"./pageBackground-JqsHu2De.js";import"./ZIndexLayer-DJsGHloM.js";import"./index-DbYSlzY7.js";import"./index-Bltp8D05.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-B_f6ZQwC.js";import"./throttle-aImz7VVk.js";import"./axisSelectors-CxEn2HHB.js";import"./d3-scale-D8Pupn_R.js";import"./CartesianAxis-f-wQfyV-.js";import"./Layer-mHCkFu2a.js";import"./types-C_7I-XQd.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CZP368BE.js";import"./index-DCFiKxFj.js";import"./index-zKAzIraE.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CVUl_Te9.js";import"./index-DtYOnMLm.js";import"./CartesianChart-DSMl8g4x.js";import"./ZIndexPortal-B9xw1t3t.js";import"./CategoricalChart-Bel6HtAa.js";import"./LabelList-IVU2RGL-.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D76RToCn.js";import"./fillDefinitions-os6E-iMi.js";import"./useAnimationId-LIn9B9pI.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CinHd9se.js";import"./tooltipContext-BuClDIkr.js";import"./dataEntryStyles-tenSUrif.js";import"./ErrorBarContext-Bqx6IufA.js";import"./activeStyles-BpeBFXJT.js";import"./SetGraphicalItem-BpXWLUsD.js";import"./getZIndexFromUnknown-BIyjUwkt.js";import"./useEffectiveDataKey-Dsusti8Y.js";import"./omit-C64e-Xwc.js";import"./isArguments-yB-y1yaH.js";import"./Curve-D7wdedao.js";import"./step-CbLfzlrV.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BB-NTxO3.js";import"./Dot-BEctbnXU.js";import"./Symbols-DArBJCV3.js";import"./symbol-MYiWw4z2.js";import"./getRadiusAndStrokeWidthFromDot-DBydaLHm.js";import"./useElementOffset-QH7GmGID.js";import"./uniqBy-DQsH6j_y.js";import"./iteratee-BSoVQiX1.js";import"./Cross-BFOt9lJd.js";import"./Sector-BFnJfpa_.js";const Wt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Xt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Xt as __namedExportsOrder,Wt as default};
