import{R as t}from"./iframe-CMzJyxaT.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-fzMCOkqh.js";import{R as l}from"./zIndexSlice-Dud0JIgm.js";import{C as x}from"./ComposedChart-D637W0rC.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DZbtTm0K.js";import{L as a}from"./Line-Be4wWJHL.js";import{X as c}from"./XAxis-IIW9Jscf.js";import{T as g}from"./Tooltip-B4t-72_f.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-BnlLNWzo.js";import"./Text-RRbVz4t0.js";import"./resolveDefaultProps-D90TgEnc.js";import"./ZIndexLayer-D9_6vJMt.js";import"./index-CHmRWuG6.js";import"./index-CsXUOZ6h.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DrN1Djr4.js";import"./throttle-BTIGJM4c.js";import"./axisSelectors-Bq81Ao7M.js";import"./d3-scale-DRT9BUPN.js";import"./CartesianAxis-CqeHr0V2.js";import"./Layer-AKX63atr.js";import"./types-Dl8VwStK.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DM-R4GMo.js";import"./index-BuF3Ul7s.js";import"./index-Ihh44ZOg.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CfktXOMD.js";import"./index-CNV21azp.js";import"./fillDefinitions-BTSqEgwz.js";import"./CartesianChart-BO8uDP04.js";import"./chartDataContext-CDPuAaqS.js";import"./CategoricalChart-DPQZGg1m.js";import"./dataEntryStyles-bJA9yLxO.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CL2UaBeU.js";import"./useAnimationId-CAh3JWUx.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-q9dSSXz9.js";import"./tooltipContext-C2OQudlt.js";import"./ErrorBarContext-DaqV69Oh.js";import"./activeStyles-D3ZF14ZM.js";import"./SetGraphicalItem-DihoZDul.js";import"./getZIndexFromUnknown-Bu9TAlE3.js";import"./useEffectiveDataKey-DeMvidhj.js";import"./omit-2jZwnNDB.js";import"./isArguments-yB-y1yaH.js";import"./Curve-Be5_WgCt.js";import"./step-Bwzmrw1Q.js";import"./path-DyVhHtw_.js";import"./ActivePoints-C14hYzDD.js";import"./Dot-CJPE3X0k.js";import"./Symbols-d_VeINkv.js";import"./symbol-DKhDQ6iW.js";import"./getRadiusAndStrokeWidthFromDot-DeK2Mko4.js";import"./useElementOffset-BbjAediX.js";import"./uniqBy-BYP-xu74.js";import"./iteratee-DHrbjV55.js";import"./Cross-C0i8Q6it.js";import"./Sector-BjzMwCaG.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
