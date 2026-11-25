import{R as t}from"./iframe-DUAuhaDC.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-D6BReFW5.js";import{R as l}from"./zIndexSlice-CUoIUvAK.js";import{C as x}from"./ComposedChart-veB2s4XE.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BGxI6Riz.js";import{L as a}from"./Line-W70Z0DZz.js";import{X as c}from"./XAxis-DmKgW9ez.js";import{T as g}from"./Tooltip-D9wU0lMf.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CQK470NC.js";import"./get-CjriyByo.js";import"./Label-BlZKxSKy.js";import"./Text-DT_5hWKb.js";import"./ZIndexLayer-CNcLZbQj.js";import"./index-CzgbXtSC.js";import"./index-DNOW0KLV.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DEWRKmXv.js";import"./throttle-C34y-YGF.js";import"./axisSelectors-DKypf8DU.js";import"./diverging-BzOzklff.js";import"./CartesianAxis-DlgnL8lU.js";import"./Layer-CfAsTpPf.js";import"./types-BR7AAoV4.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BdhAhPxn.js";import"./index-BgZAMOy1.js";import"./index-ClSqZzn2.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-C2YARZjw.js";import"./index-C-Ndc2us.js";import"./fillDefinitions-BiojjX3L.js";import"./CartesianChart-BVs3oRkR.js";import"./chartDataContext-DHU_iNNs.js";import"./CategoricalChart-ydkDuP1j.js";import"./dataEntryStyles-ChkH59oB.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CDSDw5vR.js";import"./useAnimationId-B4mDEWzj.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-B0DXFowQ.js";import"./tooltipContext-D3Fgt_MK.js";import"./ErrorBarContext-CEfM97ww.js";import"./activeStyles-joM0AtO_.js";import"./SetGraphicalItem-Oey6ebQm.js";import"./getZIndexFromUnknown-DTqv0Uhu.js";import"./useEffectiveDataKey-CqgqLaRX.js";import"./omit-zEWwmT1D.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-D_0qwyd0.js";import"./Curve-DZ4xVtop.js";import"./step-C7gBnBWw.js";import"./path-BBMZd4YL.js";import"./ActivePoints-V66Ltvnp.js";import"./Dot-BAVTGvfE.js";import"./Symbols-dKtAvw89.js";import"./symbol-L0CgFuJm.js";import"./useElementOffset-Ce5Z9USj.js";import"./uniqBy-BJtcRwMD.js";import"./iteratee-rFCL0i6s.js";import"./Cross-CCONpWDd.js";import"./Sector-D1NRM6xc.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
