import{R as t}from"./iframe-Czgh02fE.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-B9WbRmEP.js";import{R as l}from"./zIndexSlice-Do8f9YWK.js";import{C as x}from"./ComposedChart-B0gx7MIp.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CRFjqQWs.js";import{L as a}from"./Line-BEYssJ_8.js";import{X as c}from"./XAxis-C2Mn3Na8.js";import{T as g}from"./Tooltip-Cd1ARCyE.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-4BEQg_vH.js";import"./Text-CR_8UZPv.js";import"./resolveDefaultProps-D61FhKsp.js";import"./DOMUtils-CFgNHwO1.js";import"./isWellBehavedNumber-BenVrlkW.js";import"./useBackwardsCompatibleTheme-CqikxVTG.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-s-28Q74q.js";import"./index-BzAJTpLC.js";import"./index-BnAmj1WN.js";import"./RechartsWrapper-DIxKKW90.js";import"./index-BjeOf0Dt.js";import"./index-B1amEOit.js";import"./throttle-D1C4cigO.js";import"./axisSelectors-H5jwzs9R.js";import"./d3-scale-DjzQ61DY.js";import"./renderedTicksSlice-DljNETqX.js";import"./CartesianAxis-B4k6OJQ9.js";import"./Layer-zCmZcP2I.js";import"./types-BOqsceM0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-BAydra3V.js";import"./chartDataContext-9fwvPw2D.js";import"./CategoricalChart-BgAf9cWH.js";import"./tooltipContext-C0yzXkCH.js";import"./AnimatedItems-DQ5WKLo7.js";import"./useAnimationId-CBLxCaT-.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BuJcrudB.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DxWOnmm2.js";import"./RegisterGraphicalItemId-_1lxrS6Z.js";import"./ErrorBarContext-Cjm5t7eM.js";import"./GraphicalItemClipPath-BFEL_l8x.js";import"./SetGraphicalItem-BSCJBMvO.js";import"./getZIndexFromUnknown-DfquZxHs.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-v_kQR1u7.js";import"./Curve--OBRtabt.js";import"./step-BjIepLza.js";import"./path-DyVhHtw_.js";import"./ActivePoints-D5lyHxm4.js";import"./Dot-BPNUB50S.js";import"./getRadiusAndStrokeWidthFromDot-DSA1Map0.js";import"./useElementOffset-cCtdJ_2d.js";import"./uniqBy-DH6vkAOH.js";import"./iteratee-dtD612zi.js";import"./Cross-bL23mcd1.js";import"./Sector-Dbvha4hq.js";const Kt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)};var m,s,n;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Mt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Mt as __namedExportsOrder,Kt as default};
