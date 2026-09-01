import{R as t}from"./iframe-eCr2-59Z.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-Cuh1Lbu7.js";import{R as l}from"./zIndexSlice-CD7Nzmbk.js";import{C as x}from"./ComposedChart-BRMyWNIf.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-Vawahebg.js";import{L as a}from"./Line-C0J7S93P.js";import{X as c}from"./XAxis-BeuO0xzQ.js";import{T as g}from"./Tooltip-Nk-JtxEK.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-Dt0yALiM.js";import"./Text-Dt8yoLTw.js";import"./resolveDefaultProps-CLrpEwf5.js";import"./DOMUtils-CvaVkNT1.js";import"./isWellBehavedNumber-BX5cDItw.js";import"./useId-wEfkqppv.js";import"./useBackwardsCompatibleTheme-chYhM6Hr.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-t0OZMtls.js";import"./index-DlVaZeCX.js";import"./index-CDbn5IN3.js";import"./RechartsWrapper-DoeZcTzK.js";import"./axisSelectors-XgUrcrj-.js";import"./throttle-CHiOBW5g.js";import"./d3-scale-DSuKdHKR.js";import"./index-D2uCi-Qk.js";import"./index-CyK8wlGY.js";import"./renderedTicksSlice-BlPrZ01d.js";import"./index-BuNBM-8V.js";import"./CartesianAxis-DM1SJqww.js";import"./Layer-B9Pm5ax2.js";import"./types-CkIcctJW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DC1yVdgS.js";import"./chartDataContext-BNVmIje_.js";import"./CategoricalChart-w4Nfi_R8.js";import"./AnimatedItems-ObasoevI.js";import"./useAnimationId-BzRkh0x1.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BNHBAKh_.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-9F7-N6Ps.js";import"./tooltipContext-Dnwvkrjr.js";import"./RegisterGraphicalItemId-C5jGdxAH.js";import"./ErrorBarContext-CMzXWbdm.js";import"./GraphicalItemClipPath-C8yNHMes.js";import"./SetGraphicalItem-zq2UkTvM.js";import"./getZIndexFromUnknown-DVf1nWag.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-Dvk0pZo8.js";import"./Curve-_JaX0enx.js";import"./step-DPSpBZpB.js";import"./path-DyVhHtw_.js";import"./ActivePoints-Cr5YS-RN.js";import"./Dot-C_rZA8Hd.js";import"./getRadiusAndStrokeWidthFromDot-BYtBcAc6.js";import"./useElementOffset-MEJhTGNO.js";import"./uniqBy-U4NYpMNG.js";import"./iteratee-iLRiaLVh.js";import"./Cross-BfzXoIjE.js";import"./Sector-CE_l6vGe.js";const Rt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(n)};var m,s,p;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(s=e.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const Lt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Lt as __namedExportsOrder,Rt as default};
