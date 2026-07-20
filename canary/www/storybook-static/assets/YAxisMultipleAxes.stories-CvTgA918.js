import{R as t}from"./iframe-DXKzzws4.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-rHqCYw2v.js";import{R as l}from"./zIndexSlice-DMX8Hhzz.js";import{C as x}from"./ComposedChart-BiNfp5_o.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-D24PvtXl.js";import{L as a}from"./Line-CqA0P4v1.js";import{X as c}from"./XAxis-B7JoDVaz.js";import{T as g}from"./Tooltip-BgqWabVR.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-CVHxu40z.js";import"./Layer-C_ZH39cx.js";import"./resolveDefaultProps-BSNhK7r6.js";import"./Text-H0ump6nt.js";import"./DOMUtils-DglI10nq.js";import"./isWellBehavedNumber-C7AyK_9S.js";import"./Label-C30Q7qcI.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CMaU0WuF.js";import"./index-lFjFQb2-.js";import"./index-CL_M0WF6.js";import"./types-BceUICSF.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-egJwNk4f.js";import"./throttle-BD3oF8Du.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-CAtabfYs.js";import"./index-D033D4Zv.js";import"./index-Bg5IH0LC.js";import"./axisSelectors-v3JljGjn.js";import"./d3-scale-DYAtoVGZ.js";import"./CartesianChart-BbjVuMqC.js";import"./chartDataContext-CSoMwZ9z.js";import"./CategoricalChart-CAv3CBz7.js";import"./tooltipContext-9yQi8er7.js";import"./AnimatedItems-DnXQuXZD.js";import"./useAnimationId-DeOyrvrW.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DKjzEYBW.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-D95WmeDO.js";import"./RegisterGraphicalItemId-CW1tA6c4.js";import"./ErrorBarContext-CuLgZ_wX.js";import"./GraphicalItemClipPath-C72bnPxn.js";import"./SetGraphicalItem-CYGj1XVR.js";import"./getZIndexFromUnknown-COEcIiID.js";import"./graphicalItemSelectors-zlpQcDY3.js";import"./Curve-DmVGde8u.js";import"./step-BR5H3S21.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CSBiBk5C.js";import"./Dot-sf8y4IWV.js";import"./getRadiusAndStrokeWidthFromDot-BvNGRFfN.js";import"./useElementOffset-BqV11enm.js";import"./uniqBy-CUADLInF.js";import"./iteratee-CHkUkcds.js";import"./Cross-5OJntGQy.js";import"./Sector-G5hJhTYV.js";const Yt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
