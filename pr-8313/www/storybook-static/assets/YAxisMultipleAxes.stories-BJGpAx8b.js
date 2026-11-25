import{R as t}from"./iframe-Bpzk9XpD.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-h8NK-7C6.js";import{R as l}from"./zIndexSlice-CybCXANO.js";import{C as x}from"./ComposedChart-OJyIgW0F.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BfXwiROK.js";import{L as a}from"./Line-Ct_StldJ.js";import{X as c}from"./XAxis-BP9q3ZDK.js";import{T as g}from"./Tooltip-Ba2oQn2v.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-C16rW2Tl.js";import"./get-CjriyByo.js";import"./Label-eMApu8Ae.js";import"./Text-Dqm35yMi.js";import"./ZIndexLayer-BSjRPeG2.js";import"./index-C_7DmI7l.js";import"./index-CBNlQ8jB.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-C0HjJPCE.js";import"./throttle-BPowKzWT.js";import"./axisSelectors-BX6dGTcL.js";import"./diverging-NmCyEWmm.js";import"./CartesianAxis-DyKfTr_o.js";import"./Layer-DCNhrIPV.js";import"./types-BjOl9SGN.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-B8rXaB1P.js";import"./index-BoH8mfei.js";import"./index-Da9OH9g8.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DlW5DJbf.js";import"./index-DUebFUoz.js";import"./fillDefinitions-DV8KR0hl.js";import"./CartesianChart-v26TVdj4.js";import"./chartDataContext-DZdZASYb.js";import"./CategoricalChart-CZJOPWNu.js";import"./dataEntryStyles-CqhA2T9I.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-6Dmq4B9R.js";import"./useAnimationId-B2Y87b6z.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Px2nMQKl.js";import"./tooltipContext-D0ANBb_b.js";import"./ErrorBarContext-CEm3_QIT.js";import"./activeStyles-Dvq2y-2D.js";import"./SetGraphicalItem-BO8cE8zs.js";import"./getZIndexFromUnknown-b2quTXB_.js";import"./useEffectiveDataKey-Cem866lm.js";import"./omit-DcYFru-w.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-BTTYYDZG.js";import"./Curve-D_Dl1lOS.js";import"./step-D-E4uKVH.js";import"./path-BBMZd4YL.js";import"./ActivePoints-DF_bXbZk.js";import"./Dot-Dm4VIYOH.js";import"./Symbols-Bw3SJeUU.js";import"./symbol-Ce4tZNho.js";import"./useElementOffset-DUi4H2Fd.js";import"./uniqBy-DJXoe2B2.js";import"./iteratee-nuQs-o3F.js";import"./Cross-eYJNosTd.js";import"./Sector-CeulT84m.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
