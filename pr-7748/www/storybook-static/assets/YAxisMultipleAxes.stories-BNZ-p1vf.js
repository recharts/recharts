import{R as t}from"./iframe-B5lEY8zD.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-B84b5tRH.js";import{R as l}from"./zIndexSlice-BgROAb6p.js";import{C as x}from"./ComposedChart-Bet3bhVW.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CFBmLyjf.js";import{L as a}from"./Line-UBoMUVJK.js";import{X as c}from"./XAxis-DFQPNyZu.js";import{T as g}from"./Tooltip-Bywq2Krs.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-BcoGvPAa.js";import"./Text-Bpx0HJU1.js";import"./resolveDefaultProps-Bw4esZyQ.js";import"./ZIndexLayer-BKjofHlF.js";import"./index-DOD6pO5N.js";import"./index-CrxBt4o0.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CnEvxLcF.js";import"./throttle-B3jfQssg.js";import"./axisSelectors-BghrQiEU.js";import"./d3-scale-Be2MBhun.js";import"./CartesianAxis-C5RmfnOa.js";import"./Layer-DvqCln2S.js";import"./types-DtlUuq-f.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BBBAmkst.js";import"./index-DK10suvB.js";import"./index-C_OJiFXB.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-Dry7ZWQ8.js";import"./index-DxvEKk7O.js";import"./fillDefinitions-BYW3BXfQ.js";import"./CartesianChart-BJrH5JsN.js";import"./chartDataContext-BJNaOkd4.js";import"./CategoricalChart-DELNesLI.js";import"./dataEntryStyles-XQ5o-AIv.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DrSOMoM_.js";import"./useAnimationId-BR63270P.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BtGosP0P.js";import"./tooltipContext-BuWKvB93.js";import"./ErrorBarContext-BW17ZVEc.js";import"./activeStyles-CCUgVOTa.js";import"./SetGraphicalItem-BlbgEltH.js";import"./getZIndexFromUnknown-CQW5aQcV.js";import"./useEffectiveDataKey-TbJa30kz.js";import"./omit-BVCEdaBF.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-DgSQ364K.js";import"./Curve-Be0fUfaD.js";import"./step-C6UNokWX.js";import"./path-BBMZd4YL.js";import"./ActivePoints-BD_17PNW.js";import"./Dot-qGe_2cJR.js";import"./Symbols-CpkCeDJ9.js";import"./symbol-CumbrPds.js";import"./useElementOffset-DI0jf-H9.js";import"./uniqBy-w7Bk0idQ.js";import"./iteratee-DlqZpNBR.js";import"./Cross-CuapKUiT.js";import"./Sector-pZI3lBm7.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
