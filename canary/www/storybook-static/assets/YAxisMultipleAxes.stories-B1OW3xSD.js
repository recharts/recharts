import{R as t}from"./iframe-BLYaiTCo.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-ryWccSzT.js";import{R as l}from"./zIndexSlice-lQffsUG8.js";import{C as x}from"./ComposedChart-q7FEtfJu.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CvofeXM2.js";import{L as a}from"./Line-DaU6l3CY.js";import{X as c}from"./XAxis-B1NcdzKW.js";import{T as g}from"./Tooltip-wFSg0E6n.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C6fkE9tv.js";import"./CartesianAxis-D8ReKkO7.js";import"./Layer-Cjsn70fL.js";import"./resolveDefaultProps-DpWzBvps.js";import"./Text-OjYntAZR.js";import"./DOMUtils-CIYC9pgo.js";import"./isWellBehavedNumber-BqumoSwm.js";import"./Label-BDDWEbHy.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BDdQieuE.js";import"./index-DnQ-U2Qg.js";import"./index-BI_7Ub3B.js";import"./types-B8ff9nYs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-kJn42Rl8.js";import"./immer-ILyg-GW3.js";import"./RechartsWrapper-DuKK4DBL.js";import"./index-CCG5587O.js";import"./index-RDG97xsP.js";import"./axisSelectors-D6Dyr_Wd.js";import"./d3-scale-B2LK6XqV.js";import"./CartesianChart-C6NG5vyr.js";import"./chartDataContext-Bb8xEPvd.js";import"./CategoricalChart-CQ3ECWGQ.js";import"./tooltipContext-oF71F9U5.js";import"./AnimatedItems-LYPYqGuf.js";import"./useAnimationId-e0tJBS7c.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D-pvWCLO.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-B7KxHmGn.js";import"./RegisterGraphicalItemId-C8Ak7Vaq.js";import"./ErrorBarContext-B1uz4CKa.js";import"./GraphicalItemClipPath-D0PBT0ws.js";import"./SetGraphicalItem-DCGW6Zln.js";import"./getZIndexFromUnknown-BSzBOnuG.js";import"./graphicalItemSelectors-7Wfrp7_u.js";import"./Curve-DeQy-y-t.js";import"./step-BTBSj6ja.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BabG5O7K.js";import"./Dot-BrwJ_7NM.js";import"./getRadiusAndStrokeWidthFromDot-LiorCCqR.js";import"./useElementOffset-Cl_EM_xR.js";import"./uniqBy-DSvlr4Gg.js";import"./iteratee-7NILAXQu.js";import"./Cross-C7PiT0X4.js";import"./Sector-Ca5VXyj7.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Yt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Yt as __namedExportsOrder,Ct as default};
