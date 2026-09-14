import{R as t}from"./iframe-29nHamCu.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-bbUKYKRn.js";import{R as l}from"./zIndexSlice-CZafadFX.js";import{C as x}from"./ComposedChart-DXLvIz9U.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BEwgL4gT.js";import{L as a}from"./Line-mWe9WFJd.js";import{X as c}from"./XAxis-cHqDX1J9.js";import{T as g}from"./Tooltip-CJLUo3Ro.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BEXPduDP.js";import"./Text-CjGTSUlm.js";import"./resolveDefaultProps-BjAFj7Tx.js";import"./DOMUtils-77SlA1GE.js";import"./isWellBehavedNumber-DyxIwD8w.js";import"./useId-D5dycxfw.js";import"./useBackwardsCompatibleTheme-DOdaTjfK.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DAa-R99d.js";import"./index-B7e8weS_.js";import"./index-C0L5A02v.js";import"./RechartsWrapper-BavJbx8L.js";import"./axisSelectors-DXKrHL3Y.js";import"./throttle-BMJYFYDy.js";import"./d3-scale-hLJByxX9.js";import"./index-pQY_ysof.js";import"./index-wUuIvtYb.js";import"./renderedTicksSlice-Dofh94RU.js";import"./index-Dx-xeLKA.js";import"./CartesianAxis-BV_FsFXh.js";import"./Layer-DIXDf-ah.js";import"./types-DxO-1x0s.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-1Z_jkdOD.js";import"./chartDataContext-CCKAe3q7.js";import"./CategoricalChart-Vufmz-V6.js";import"./AnimatedItems-Cl8F531s.js";import"./useAnimationId-BJ08w86T.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-VhVaxtJC.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DXdVOUCI.js";import"./tooltipContext-B1ggJUWB.js";import"./RegisterGraphicalItemId-C0MFc77r.js";import"./ErrorBarContext-D_EVW9Tx.js";import"./GraphicalItemClipPath-BHF9lgk1.js";import"./SetGraphicalItem-CPEqj7GM.js";import"./getZIndexFromUnknown-B2y4Cw_c.js";import"./useGraphicalItemIdentity-BP_5vAW2.js";import"./Curve-DsdcX6-6.js";import"./step-ChOhxi7M.js";import"./path-DyVhHtw_.js";import"./ActivePoints-f_S-wuyy.js";import"./Dot-CkgSbF-F.js";import"./getRadiusAndStrokeWidthFromDot-BqfwXveZ.js";import"./useElementOffset-C_qkeve9.js";import"./uniqBy-0tUOZnmc.js";import"./iteratee-BFs8MK2-.js";import"./Cross-CRs1SJSA.js";import"./Sector-B2R7qc-h.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Rt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Rt as __namedExportsOrder,Mt as default};
