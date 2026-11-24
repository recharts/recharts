import{R as t}from"./iframe-Cg_iar9N.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-D6x7oYcH.js";import{R as l}from"./zIndexSlice-BjUOfyjh.js";import{C as x}from"./ComposedChart-BFCZD_8N.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DFJwXaP_.js";import{L as a}from"./Line-D_Ww1q7V.js";import{X as c}from"./XAxis-CGc4hdT9.js";import{T as g}from"./Tooltip-m2cQU-qg.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DTSDaMdx.js";import"./get-CjriyByo.js";import"./Label-BJnLd782.js";import"./Text-B2P7H0Ri.js";import"./ZIndexLayer-CSE-z-0P.js";import"./index-7C4ywAbx.js";import"./index-CwdEjpHW.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-B1d4qlCW.js";import"./throttle-BblIHJT1.js";import"./axisSelectors-CZOBtonL.js";import"./d3-scale-DPBNOBhz.js";import"./CartesianAxis-DOu6asA8.js";import"./Layer-Bzrsb6mZ.js";import"./types-ltSKN6AB.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CLd9gyLd.js";import"./index-VP3OIQj6.js";import"./index-jWuQwiwF.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-C7ImdcI0.js";import"./index-V_wxvl63.js";import"./fillDefinitions-DSB60PQ6.js";import"./CartesianChart-B4msnQ_2.js";import"./chartDataContext-BigsU9AL.js";import"./CategoricalChart-CPdnXejQ.js";import"./dataEntryStyles-CxwfrkTv.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C_eYXhuf.js";import"./useAnimationId-9EHB1qr6.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CsQyYPRe.js";import"./tooltipContext-DvVRje4i.js";import"./ErrorBarContext-CGI8-gVI.js";import"./activeStyles-BGKrSIuv.js";import"./SetGraphicalItem-B4YPaENS.js";import"./getZIndexFromUnknown-Cei6wpWn.js";import"./useEffectiveDataKey-Cs5zYK5x.js";import"./omit-CBv3Naky.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-DxfCADw-.js";import"./Curve-CPf1VG57.js";import"./step-DiiLfVQZ.js";import"./path-BBMZd4YL.js";import"./ActivePoints-b69yWwyo.js";import"./Dot-BA3Hs1sQ.js";import"./Symbols-HGWe4NLb.js";import"./symbol-BYuJahfe.js";import"./useElementOffset-hhsDlGuK.js";import"./uniqBy-DOt34CrH.js";import"./iteratee-DBE5xjg2.js";import"./Cross-JN070_fL.js";import"./Sector-BaDDZluv.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
