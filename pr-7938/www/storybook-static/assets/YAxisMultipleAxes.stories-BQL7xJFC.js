import{R as t}from"./iframe-DuKrJ0zn.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DQojOnyt.js";import{R as l}from"./zIndexSlice-CLjLalaX.js";import{C as x}from"./ComposedChart-1NZsUFmO.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DpGj5URD.js";import{L as a}from"./Line-foXAM9pQ.js";import{X as c}from"./XAxis-DcN8Db4p.js";import{T as g}from"./Tooltip-DLU834K4.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-T3-RQcya.js";import"./Text-BsbcFYx2.js";import"./resolveDefaultProps-teTym_le.js";import"./DOMUtils-Bn1l__ER.js";import"./isWellBehavedNumber-C1SokatK.js";import"./useId-DlXJwOUw.js";import"./useBackwardsCompatibleTheme-BxDCx_m8.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-F_xMErBH.js";import"./index-UXVF2SDl.js";import"./index--f_yOVNJ.js";import"./RechartsWrapper-BEffPtCf.js";import"./axisSelectors-C-iDc9ZD.js";import"./throttle-DtzmWgqu.js";import"./d3-scale-DZyfBumm.js";import"./index-Bw0d1gq_.js";import"./index-CQPSgdXH.js";import"./renderedTicksSlice-DC-eZxTj.js";import"./index-BP-prfso.js";import"./CartesianAxis-KhOJh8Ny.js";import"./Layer-DzPACqXk.js";import"./types-C0puMKP8.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-Dmo_0Xna.js";import"./chartDataContext-UIg6E7lh.js";import"./CategoricalChart-C3GMMeRH.js";import"./AnimatedItems-UVqcjqe1.js";import"./useAnimationId-BEtuyajc.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Cfu-PHUN.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Ng0jEWa8.js";import"./tooltipContext-DygAeoe5.js";import"./dataEntryStyles-CQWLZIwm.js";import"./ErrorBarContext-DC_DRovh.js";import"./GraphicalItemClipPath-BH1_5J3a.js";import"./SetGraphicalItem-DHruVb1s.js";import"./getZIndexFromUnknown-iHXoYCaM.js";import"./useGraphicalItemIdentity-zknNX3FR.js";import"./Curve-C7E_1QuT.js";import"./step-CGQ88gSo.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DZ7JKpsC.js";import"./Dot-CnU97eIy.js";import"./getRadiusAndStrokeWidthFromDot-Dp-k2N1-.js";import"./useElementOffset-Be-W7NB-.js";import"./uniqBy-DyfRyEMq.js";import"./iteratee-CBPmjXP9.js";import"./Cross-kt9kRDla.js";import"./Sector-CUgFxB-0.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
