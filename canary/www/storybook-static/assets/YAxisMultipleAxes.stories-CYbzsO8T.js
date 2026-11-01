import{R as t}from"./iframe-BoZGnJw3.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DWoSckNu.js";import{R as l}from"./zIndexSlice-a6rFVYjz.js";import{C as x}from"./ComposedChart-BoAZL9SR.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-vXcyloz8.js";import{L as a}from"./Line-LdQMhgoS.js";import{X as c}from"./XAxis-DaJlL1eX.js";import{T as g}from"./Tooltip-DhGU5kZR.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-hjfvRRRs.js";import"./Text-Cs6Ml33D.js";import"./resolveDefaultProps-D8QzFlGf.js";import"./DOMUtils-BLzuTGwo.js";import"./ZIndexLayer-D6tdIhXp.js";import"./index-WbIhOddD.js";import"./index-XXsuRe2m.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DFgK4OY0.js";import"./throttle-DtDTnxHB.js";import"./axisSelectors-D380Rkbk.js";import"./d3-scale-CiyCJ5ON.js";import"./CartesianAxis-LiXL0IDn.js";import"./Layer-DWrdDLVq.js";import"./types-VJa2wa64.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BtiSzaGq.js";import"./index-CTKnxowE.js";import"./index-D9DvxSgb.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-WWWx-rVQ.js";import"./index-Bzl_gDx-.js";import"./fillDefinitions-OcelR7By.js";import"./CartesianChart-6fSva3n5.js";import"./ZIndexPortal-KFQo0SKW.js";import"./CategoricalChart-C5KKs8ZF.js";import"./LabelList-DN0FQ104.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BsU8vkw-.js";import"./useAnimationId-DhSaM75t.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-9rzgq6Y4.js";import"./tooltipContext-Ca1Lk8rd.js";import"./dataEntryStyles-BZaOAKnN.js";import"./ErrorBarContext-BWsLX-Zn.js";import"./activeStyles-B-PjepTA.js";import"./SetGraphicalItem-8abau_IG.js";import"./getZIndexFromUnknown-Nn6KDw3p.js";import"./useEffectiveDataKey-D7W7vL8E.js";import"./omit-b-A36VPk.js";import"./isArguments-yB-y1yaH.js";import"./Curve-Cwz00roS.js";import"./step-DM17TeVN.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DFbmabNT.js";import"./Dot-DvyXLuZB.js";import"./Symbols-DeYNYvA0.js";import"./symbol-P9MXa4Nc.js";import"./getRadiusAndStrokeWidthFromDot-CXVA2gr-.js";import"./useElementOffset-hC9xa8NL.js";import"./uniqBy-bj0x6NYX.js";import"./iteratee-CAiBVgkS.js";import"./Cross-ByuzzSNM.js";import"./Sector-K4mmjUu1.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Wt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Wt as __namedExportsOrder,Tt as default};
