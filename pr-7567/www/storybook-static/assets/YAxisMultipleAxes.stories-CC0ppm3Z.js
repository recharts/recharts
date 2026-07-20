import{R as t}from"./iframe-C99kJ-sM.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CdUPhVFa.js";import{R as l}from"./zIndexSlice-C3R-krej.js";import{C as x}from"./ComposedChart-DWJvatn-.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-SBPKBlrx.js";import{L as a}from"./Line-Bs8-Fegi.js";import{X as c}from"./XAxis-DIG4p09Q.js";import{T as g}from"./Tooltip-BaPwyXfx.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-C7o0Dblf.js";import"./Layer-DA9YNkXX.js";import"./resolveDefaultProps-Cc9w7OOG.js";import"./Text-DJvXqMRS.js";import"./DOMUtils-DR1Kyd_s.js";import"./isWellBehavedNumber-DU5fy8xE.js";import"./Label-B5axae2p.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Cja0J2zA.js";import"./index-B6TMzpAA.js";import"./index-CUfn358W.js";import"./types-DQRiSjSa.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-C63jCstw.js";import"./throttle-TD-ujZZS.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-U1Sp_egH.js";import"./index-C5Vu0OFw.js";import"./index-D0yrKOFo.js";import"./axisSelectors-D_vl6hBR.js";import"./d3-scale-BK39mUYh.js";import"./CartesianChart-C_2fYW0K.js";import"./chartDataContext-Bt7guA5_.js";import"./CategoricalChart-Dzn25l1U.js";import"./tooltipContext-DEwjxoZd.js";import"./AnimatedItems-D-0ILzHR.js";import"./useAnimationId-DvmTFhVR.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CL3tFVAP.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BBZmkA4Q.js";import"./RegisterGraphicalItemId-BCeI4v7T.js";import"./ErrorBarContext-CujqDj5S.js";import"./GraphicalItemClipPath-BvRhFcbX.js";import"./SetGraphicalItem-DGSCvNHc.js";import"./getZIndexFromUnknown-C16vvGpA.js";import"./graphicalItemSelectors-CHBC6mVJ.js";import"./Curve-DiBuQ3yP.js";import"./step-D8AQ14_c.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BMi_QsBO.js";import"./Dot-BDIAoW-L.js";import"./getRadiusAndStrokeWidthFromDot-CycZh5GD.js";import"./useElementOffset-DU4filMB.js";import"./uniqBy-B76aatsv.js";import"./iteratee-BC4NiJFi.js";import"./Cross-BWIUPOvs.js";import"./Sector-CLa7LOxI.js";const Yt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const vt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,vt as __namedExportsOrder,Yt as default};
