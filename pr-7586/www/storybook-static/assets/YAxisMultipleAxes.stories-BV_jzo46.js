import{R as t}from"./iframe-Bj-yQnc2.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-Bs6EndY5.js";import{R as l}from"./zIndexSlice-DO4y32gA.js";import{C as x}from"./ComposedChart-BMfVAHVi.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CaXxE_pb.js";import{L as a}from"./Line-DVqKkASG.js";import{X as c}from"./XAxis-XI4N_gb4.js";import{T as g}from"./Tooltip-DzJ5ZKak.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-Dfz3FhFq.js";import"./Layer-BLp5IiBu.js";import"./resolveDefaultProps-7WXWf9aL.js";import"./Text-RzD6k6DF.js";import"./DOMUtils-DVhKp59x.js";import"./isWellBehavedNumber-A843S5PG.js";import"./Label-Cm9vMlt2.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CZNNIEzh.js";import"./index-CXIrlcaX.js";import"./index-C2KJTwEF.js";import"./types-YXwkeCBT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CagdShEY.js";import"./throttle-CZQMCJbJ.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-BjwBN1rR.js";import"./index-npMcpUBc.js";import"./index-CUdhCrp9.js";import"./axisSelectors-DPyctkFQ.js";import"./d3-scale-rY2RSZRS.js";import"./CartesianChart-lhfYoKGZ.js";import"./chartDataContext-CFjDBvvT.js";import"./CategoricalChart-CavyJHAU.js";import"./tooltipContext-5h72lmDe.js";import"./AnimatedItems-DUyUCCX0.js";import"./useAnimationId-Yo_b-bos.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D4kIWx5v.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BoActjfk.js";import"./RegisterGraphicalItemId-DueteZ3j.js";import"./ErrorBarContext-ft-NJLsc.js";import"./GraphicalItemClipPath-B-sHbKa-.js";import"./SetGraphicalItem-DWNEhJuv.js";import"./getZIndexFromUnknown-BbLveRBG.js";import"./graphicalItemSelectors-DrBqiWoN.js";import"./Curve-CeWd9qmA.js";import"./step-C2Z_nim4.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BIrCi9Or.js";import"./Dot-B130eiz7.js";import"./getRadiusAndStrokeWidthFromDot-BwxuSyAu.js";import"./useElementOffset-DuhsEaES.js";import"./uniqBy-C6ba-9WF.js";import"./iteratee-CVYjgau1.js";import"./Cross-CzBQbfZ3.js";import"./Sector-2PtdjaaC.js";const Yt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
