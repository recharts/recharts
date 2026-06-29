import{R as t}from"./iframe-QVKxPJQm.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-D2swP-TV.js";import{R as l}from"./zIndexSlice-G0DC-c-K.js";import{C as x}from"./ComposedChart-D6hBWYm7.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-D2KgqMyW.js";import{L as a}from"./Line-P2ZNjFCX.js";import{X as c}from"./XAxis-C2HS1FtJ.js";import{T as g}from"./Tooltip-DJxRTBUk.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DLMFwiXu.js";import"./CartesianAxis-DF6IixyN.js";import"./Layer-Bc0oacyD.js";import"./resolveDefaultProps-CEVaC25K.js";import"./Text-BQy0Q-oS.js";import"./DOMUtils-D8ZqFxMD.js";import"./isWellBehavedNumber-JryOpPT2.js";import"./Label-IjZcZSlh.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CNHQW8Kz.js";import"./index-C30tpYub.js";import"./index-BlfChkir.js";import"./types-DQssRkrH.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BovhzHMl.js";import"./immer-edRA0-Yp.js";import"./RechartsWrapper-C-HdUf1N.js";import"./index-CIkXYV9A.js";import"./index-D4ODfY0z.js";import"./axisSelectors-C3vt1wN5.js";import"./d3-scale-CGteqX7a.js";import"./CartesianChart-KcupAlfP.js";import"./chartDataContext-zcaQUTsU.js";import"./CategoricalChart-CeUMrFdM.js";import"./tooltipContext-BMDq1ZNk.js";import"./AnimatedItems--IUYJkxx.js";import"./useAnimationId-BUf_qCat.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BBAzwt0m.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Dv5zSjSn.js";import"./RegisterGraphicalItemId-DJWNxqfN.js";import"./ErrorBarContext-CGBznjIg.js";import"./GraphicalItemClipPath-cpuBGhtV.js";import"./SetGraphicalItem-mX53cDIp.js";import"./getZIndexFromUnknown-D3n2ofgM.js";import"./graphicalItemSelectors-CvQeNwQF.js";import"./Curve-7I9MiX70.js";import"./step-Bask81UI.js";import"./path-DyVhHtw_.js";import"./ActivePoints-QMqqqiKi.js";import"./Dot-1qgdhznt.js";import"./getRadiusAndStrokeWidthFromDot-4L8nwbWx.js";import"./useElementOffset-DWwojRwA.js";import"./uniqBy-f_3dXFuE.js";import"./iteratee-BmhOMioJ.js";import"./Cross-C4Qn6tVJ.js";import"./Sector-BP2pJ8-s.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
