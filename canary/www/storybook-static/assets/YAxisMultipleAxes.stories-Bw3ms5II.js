import{R as t}from"./iframe-Bw423yT3.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-OVaFJ7CI.js";import{R as l}from"./zIndexSlice-C0Ur0qQv.js";import{C as x}from"./ComposedChart-Cz46LnAr.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-KrOtFTVD.js";import{L as a}from"./Line-BMKWlib2.js";import{X as c}from"./XAxis-DoB4s5YX.js";import{T as g}from"./Tooltip-Be8nokA1.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CDuT1dKE.js";import"./Text-C_UyMP2R.js";import"./resolveDefaultProps-DecYMRDs.js";import"./DOMUtils-B-o7bCMD.js";import"./isWellBehavedNumber-Bhsok9Kl.js";import"./useId-DVN36WJe.js";import"./useBackwardsCompatibleTheme-BiX6i8Ds.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BMLxUbw3.js";import"./index-CSmn3lR3.js";import"./index-Cmb77t22.js";import"./RechartsWrapper-Bq4pCedS.js";import"./index-DY-6WoYl.js";import"./index-Dzxogdh4.js";import"./throttle-DoQ6jmeU.js";import"./axisSelectors-DvFF09lq.js";import"./d3-scale-B6w1DC_B.js";import"./renderedTicksSlice-C7gnJRFb.js";import"./CartesianAxis-Crdg7aw6.js";import"./Layer-D4oXIaGo.js";import"./types-Ds-DwS6F.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-KYAmso8l.js";import"./chartDataContext-ChmL2TgJ.js";import"./CategoricalChart-BFEAf3EH.js";import"./AnimatedItems-hYYLyghD.js";import"./useAnimationId-Ys0eqrlL.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B-9AixLW.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DXmjz54Y.js";import"./tooltipContext-DCAYRXV5.js";import"./RegisterGraphicalItemId-C_cjgYuq.js";import"./ErrorBarContext-BUSWNFOb.js";import"./GraphicalItemClipPath-C6OEajox.js";import"./SetGraphicalItem-OiZoorhv.js";import"./getZIndexFromUnknown-BT_u-srI.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DR5-8UeR.js";import"./Curve-ROVFdQ-G.js";import"./step-BJpmgVSO.js";import"./path-DyVhHtw_.js";import"./ActivePoints-Di-vyWVm.js";import"./Dot-BzofvkeI.js";import"./getRadiusAndStrokeWidthFromDot-BZS_5G6a.js";import"./useElementOffset-ChV6ndkv.js";import"./uniqBy-DXUX_vZx.js";import"./iteratee-CM1mNqCJ.js";import"./Cross-B0QGpBVq.js";import"./Sector-Dk7MJm7o.js";const Mt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
}`,...(p=(s=e.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const Rt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Rt as __namedExportsOrder,Mt as default};
