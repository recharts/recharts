import{R as t}from"./iframe-CLtR9-MI.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-D2WqE3kW.js";import{R as l}from"./zIndexSlice-DAD-nkNa.js";import{C as x}from"./ComposedChart-B1Fivz02.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CinKssDb.js";import{L as a}from"./Line-oRa3yORT.js";import{X as c}from"./XAxis-6BQkQ0ss.js";import{T as g}from"./Tooltip-CsVYMHIy.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BpbNna-S.js";import"./Text-CwyJl8Qf.js";import"./resolveDefaultProps-D6TYxzEx.js";import"./DOMUtils-B1EmNrIU.js";import"./isWellBehavedNumber-B9qntTjY.js";import"./useId-BN1Du40N.js";import"./useBackwardsCompatibleTheme-BJ7QBrpH.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D5Qq2-j2.js";import"./index-u5MFF0A2.js";import"./index-5pSzTMen.js";import"./RechartsWrapper-BboqGkG2.js";import"./axisSelectors-B01i0yXb.js";import"./throttle-DKa3BIxu.js";import"./d3-scale-B1XD5c5K.js";import"./index-BaHi7qAw.js";import"./index-CZdIlyb1.js";import"./renderedTicksSlice-BY7YJYCI.js";import"./index-CjAhAOwM.js";import"./CartesianAxis-BeUj4LrW.js";import"./Layer-DSwUEhDY.js";import"./types-_UL_m5mX.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-BnmKHbJT.js";import"./chartDataContext-Dhs0xlHM.js";import"./CategoricalChart-DJouQuZu.js";import"./AnimatedItems-NFxue0WW.js";import"./useAnimationId-CKjPSYvA.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DkICwgVP.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CKYNeMt6.js";import"./tooltipContext-JpJhju1r.js";import"./RegisterGraphicalItemId-fH2hJ8mR.js";import"./ErrorBarContext-DJq7p9Zk.js";import"./GraphicalItemClipPath-1HJc_HKi.js";import"./SetGraphicalItem-Ty2V-l5e.js";import"./getZIndexFromUnknown-DX--_Gyg.js";import"./useGraphicalItemIdentity-CogcmOBq.js";import"./Curve-B_ohmPvH.js";import"./step-BArTcWqE.js";import"./path-DyVhHtw_.js";import"./ActivePoints-LWQ74ttv.js";import"./Dot-Cg_oxTyJ.js";import"./getRadiusAndStrokeWidthFromDot-DNgkSIfr.js";import"./useElementOffset-BFvCNgns.js";import"./uniqBy-BXE4YbrE.js";import"./iteratee-DJf2_w-w.js";import"./Cross-C5OQK69h.js";import"./Sector-DWsBRtQH.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
