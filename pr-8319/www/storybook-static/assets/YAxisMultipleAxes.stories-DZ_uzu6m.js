import{R as t}from"./iframe-B9Tl-Ens.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-CjYRlTBq.js";import{R as l}from"./zIndexSlice-CeB5DPsb.js";import{C as x}from"./ComposedChart-BkpfzGMq.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-B-7CrVyt.js";import{L as a}from"./Line-DsiP8Uyr.js";import{X as c}from"./XAxis-DgmkF9Yy.js";import{T as g}from"./Tooltip-jUi0yI8j.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Dx7qzCwA.js";import"./get-CjriyByo.js";import"./Label-Dez-agGk.js";import"./Text-Bu0oCoIY.js";import"./ZIndexLayer-Ci5oHiVJ.js";import"./index-DuaVn5It.js";import"./index-DQWwV-s1.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-C83zEpXU.js";import"./throttle-dfeJw9jR.js";import"./axisSelectors-x8C92zXU.js";import"./diverging-Cl0QaiN4.js";import"./CartesianAxis-BYNQxUMc.js";import"./Layer-Bu8k813y.js";import"./types-BDfLdEx1.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BtRpF17f.js";import"./index-166nmvSm.js";import"./index-iYKKcn13.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DeTgaRib.js";import"./index-fTBi_u0-.js";import"./fillDefinitions-BDEW-tdf.js";import"./CartesianChart-BbmwDwWI.js";import"./chartDataContext-DkV3RH4w.js";import"./CategoricalChart-BLl8H6lt.js";import"./dataEntryStyles-DvmFQkM4.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BHPo4ax_.js";import"./useAnimationId-eoD8CiMN.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CP-Ler3I.js";import"./tooltipContext-BVEReTSw.js";import"./ErrorBarContext-BP3iz7Vb.js";import"./activeStyles-B1QGMcNg.js";import"./SetGraphicalItem-BRGOOFmX.js";import"./getZIndexFromUnknown-pCGGcqlB.js";import"./useEffectiveDataKey-BhVu78c2.js";import"./omit-rPwIGN_4.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-DojBXQgy.js";import"./Curve-pkk8Hz5i.js";import"./step-BuRhJuEF.js";import"./path-BBMZd4YL.js";import"./ActivePoints-D0ERAXFA.js";import"./Dot-DzsU10RZ.js";import"./Symbols-BkCPJOBN.js";import"./symbol-CcaxO5ZF.js";import"./useElementOffset-O98GivjF.js";import"./uniqBy-COJiZ3F4.js";import"./iteratee-6n8bYTkS.js";import"./Cross-CPeavNPd.js";import"./Sector-B3gJsk8n.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
