import{R as t}from"./iframe-J6essBJs.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-Ou9wZ7uM.js";import{R as l}from"./zIndexSlice-BsmeZsA8.js";import{C as x}from"./ComposedChart-Bs7sztQ5.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BUbxm_XB.js";import{L as a}from"./Line-Ct90HqVK.js";import{X as c}from"./XAxis-Oxu4uJGF.js";import{T as g}from"./Tooltip-C1-jMy0E.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-B0dQjUYN.js";import"./get-CjriyByo.js";import"./Label-DrwYb9eR.js";import"./Text-Ik43AMmT.js";import"./ZIndexLayer-CqPJfsaa.js";import"./index-BfoAYr9-.js";import"./index-B048aLjq.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DoWbS56a.js";import"./throttle-rB4iKGhW.js";import"./axisSelectors-COh-2QwC.js";import"./diverging-mCWeQZGc.js";import"./CartesianAxis-BlggDoMg.js";import"./Layer-ePHruQv_.js";import"./types-B8ASDW8U.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CxD0Hqd-.js";import"./index-CDhxvRQi.js";import"./index-B6b_sXBt.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CQZiUgoa.js";import"./index-CrSQFTfs.js";import"./fillDefinitions-DxPSgWUP.js";import"./CartesianChart-89WXJ_-l.js";import"./chartDataContext-BzXVBn_L.js";import"./CategoricalChart-BsPicsjO.js";import"./dataEntryStyles-BOxNMiFO.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D7oaCIG9.js";import"./useAnimationId-TXNHUPXz.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CpyR9gHD.js";import"./tooltipContext-DSBQQpWt.js";import"./ErrorBarContext-BsKM5vJT.js";import"./activeStyles-Bv4vkUPt.js";import"./SetGraphicalItem-DrwlXMoh.js";import"./getZIndexFromUnknown-B_FQ6YGb.js";import"./useEffectiveDataKey-XIQJdOoE.js";import"./omit-BLhRN2pu.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-Jh2oIQpE.js";import"./Curve-BL_nBUj1.js";import"./step-B4vSzXfO.js";import"./path-BBMZd4YL.js";import"./ActivePoints-C9YqKELU.js";import"./Dot-CUXpspz7.js";import"./Symbols-DkB_uy8_.js";import"./symbol-CVLBGIRz.js";import"./useElementOffset-CGfgSTTk.js";import"./uniqBy-W156VtsH.js";import"./iteratee-DWpXed5n.js";import"./Cross-DNXGbAQ8.js";import"./Sector-ClYZ4T35.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
