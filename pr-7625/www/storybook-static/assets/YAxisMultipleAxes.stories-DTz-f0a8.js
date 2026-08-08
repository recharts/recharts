import{R as t}from"./iframe-3VVC0EYx.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CQsWrDlS.js";import{R as l}from"./zIndexSlice-C9c9QQWy.js";import{C as x}from"./ComposedChart-BSwVfM9_.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-Bdq339D-.js";import{L as a}from"./Line-CPqvnRUF.js";import{X as c}from"./XAxis-b3cnYQsk.js";import{T as g}from"./Tooltip-Be1HZ_vQ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-B_1XKNb_.js";import"./Text-DxD-h55l.js";import"./resolveDefaultProps-DJCePyCz.js";import"./DOMUtils-jlGUgeWT.js";import"./isWellBehavedNumber-D8cUYDpZ.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DAQTkU_L.js";import"./index-dUhqMgMz.js";import"./index-C9Se9_4o.js";import"./RechartsWrapper-Cu7UZSGV.js";import"./index-D9g8mJB5.js";import"./index-CufvXBKU.js";import"./throttle-CNUd1gZq.js";import"./axisSelectors-B7dqcVa4.js";import"./d3-scale-CshH80dj.js";import"./renderedTicksSlice-D0fiht4g.js";import"./CartesianAxis-DBlrGcdR.js";import"./Layer-BVcdrpr1.js";import"./types-Bwo4GPNk.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-5aynFYgW.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-B55un86Y.js";import"./chartDataContext-ylnzbaG8.js";import"./CategoricalChart-DbawHDOk.js";import"./tooltipContext-BmF5ax4I.js";import"./AnimatedItems-BDqZZjDt.js";import"./useAnimationId-D9vHT7-j.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DGTf0ga1.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BH_C9PRa.js";import"./RegisterGraphicalItemId-CNwWR-CS.js";import"./ErrorBarContext-B62Uz1n4.js";import"./GraphicalItemClipPath-t0-9VWN4.js";import"./SetGraphicalItem-C2V0lGXl.js";import"./getZIndexFromUnknown-C6DxJRbI.js";import"./graphicalItemSelectors-UFpF-OvU.js";import"./Curve-BpqmVEGV.js";import"./step-JaBbtSkB.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BpwW4_4p.js";import"./Dot-DAIotGMm.js";import"./getRadiusAndStrokeWidthFromDot-BuIM6rGB.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./useElementOffset-Cu87sVLj.js";import"./uniqBy-DrTOg_85.js";import"./iteratee-DVGMM3Q6.js";import"./Cross-BlbAAcaI.js";import"./Sector-0FWNGdlH.js";const Kt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
