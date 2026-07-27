import{R as t}from"./iframe-CLpUHFUx.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-2SAbeq8Q.js";import{R as l}from"./zIndexSlice-ih_i1g5t.js";import{C as x}from"./ComposedChart-7luAuAhp.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CiSioiM0.js";import{L as a}from"./Line-CDweeEof.js";import{X as c}from"./XAxis-DQukB1wG.js";import{T as g}from"./Tooltip-CvbcNZGz.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-Dv_zGlnO.js";import"./Layer-3AQvPOBc.js";import"./resolveDefaultProps-DTakvVP9.js";import"./Text-CSq4IeED.js";import"./DOMUtils-D-nz1rzx.js";import"./isWellBehavedNumber-CHss1wLf.js";import"./Label-Cri2SigJ.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DoU1T_G7.js";import"./index-CvxUcRs5.js";import"./index-DaW4Sl48.js";import"./types-BtWOZotP.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CuCo3UJj.js";import"./throttle-CLd1kjXB.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-VhXLtIU3.js";import"./index-BQRTjV6n.js";import"./index-BWENVgmR.js";import"./axisSelectors-DcdgEKfW.js";import"./d3-scale-BxXYUMYM.js";import"./CartesianChart-BoKvv8NW.js";import"./chartDataContext-BXtd66MC.js";import"./CategoricalChart-D4oV83W1.js";import"./tooltipContext-DgmfgwCZ.js";import"./AnimatedItems-BvAtBQX7.js";import"./useAnimationId-NKiMzI6a.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-5xIBVaz8.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BoZWmQGY.js";import"./RegisterGraphicalItemId-D5SJC0o6.js";import"./ErrorBarContext-DOU6usMR.js";import"./GraphicalItemClipPath-BJ5GEIwI.js";import"./SetGraphicalItem-DL6fPXwP.js";import"./getZIndexFromUnknown-G8eXIbqR.js";import"./graphicalItemSelectors-DkqTdS0-.js";import"./Curve-DZJekjpR.js";import"./step-_f2gFda3.js";import"./path-DyVhHtw_.js";import"./ActivePoints-B2iIRtsT.js";import"./Dot-rjCZu1cP.js";import"./getRadiusAndStrokeWidthFromDot-b1AZaPVX.js";import"./useElementOffset-4nhhdQM-.js";import"./uniqBy-BL16Mnd5.js";import"./iteratee-DMRQCYyf.js";import"./Cross-CYjhPBjl.js";import"./Sector-B8SGIxUc.js";const Yt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
