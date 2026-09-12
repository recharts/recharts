import{R as t}from"./iframe-B7hbNEXj.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DYrUNm06.js";import{R as l}from"./zIndexSlice-B7xQcNcG.js";import{C as x}from"./ComposedChart-CBHvobIY.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-ULGlxAu0.js";import{L as a}from"./Line-DjZkWb4y.js";import{X as c}from"./XAxis-DTRImo2J.js";import{T as g}from"./Tooltip-DW4lutut.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-lNQzMu7Z.js";import"./Text-DWuYBy5V.js";import"./resolveDefaultProps-CZFMPmgx.js";import"./DOMUtils-BhIaSreR.js";import"./isWellBehavedNumber-7V-rOBye.js";import"./useId-CxLZ9MIg.js";import"./useBackwardsCompatibleTheme-L1kNM3iV.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-jcXUwYN8.js";import"./index-Dqn8czyj.js";import"./index-BYIthK0p.js";import"./RechartsWrapper-jiH_AYjt.js";import"./axisSelectors-MpDLX8pO.js";import"./throttle-BSjszxUH.js";import"./d3-scale-BYK0PNRi.js";import"./index-yv8yhgLp.js";import"./index-BXYzHp_E.js";import"./renderedTicksSlice-CuhNidwY.js";import"./index-C8e3_gAU.js";import"./CartesianAxis-CneZULGs.js";import"./Layer-osX5cZvY.js";import"./types-C3ibKMTz.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DfAXRIqb.js";import"./chartDataContext-BXIYwbQE.js";import"./CategoricalChart-yOdjtk4z.js";import"./AnimatedItems-DhxUFxBy.js";import"./useAnimationId-BjhUfelV.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DXA3Y7lF.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Ds7YjhX_.js";import"./tooltipContext-9tFeNOQK.js";import"./RegisterGraphicalItemId-Dm44HWfF.js";import"./ErrorBarContext-BQLnOb5r.js";import"./GraphicalItemClipPath-BL1Y6_ch.js";import"./SetGraphicalItem-DpZwQAUe.js";import"./getZIndexFromUnknown-CNARRbM9.js";import"./useGraphicalItemIdentity-C6Z_BcTV.js";import"./Curve-CUqyVekg.js";import"./step-5lhI3wtQ.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BbyHcAce.js";import"./Dot-ArvJ9HsL.js";import"./getRadiusAndStrokeWidthFromDot-9G5pAfIZ.js";import"./useElementOffset-w7QmJN4M.js";import"./uniqBy-D7tqJ0kr.js";import"./iteratee-CMD1iHwZ.js";import"./Cross-kZvf2QnA.js";import"./Sector-DGiQIbbB.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
