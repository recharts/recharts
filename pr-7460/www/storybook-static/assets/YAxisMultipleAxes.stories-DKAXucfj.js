import{R as t}from"./iframe-sORstnao.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-B0nIj3Rm.js";import{R as l}from"./zIndexSlice-D4nSzQXG.js";import{C as x}from"./ComposedChart-BlA17Ulf.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-C19qIgJ_.js";import{L as a}from"./Line-B4Nxznnp.js";import{X as c}from"./XAxis-CLx5zWj1.js";import{T as g}from"./Tooltip-Bo23RdJr.js";import"./preload-helper-Dp1pzeXC.js";import"./get-41kC8iMv.js";import"./CartesianAxis-B64g0dZi.js";import"./Layer--egwL1wz.js";import"./resolveDefaultProps-CiA9punn.js";import"./Text-CnvPdDEF.js";import"./DOMUtils-fq1NzIyR.js";import"./isWellBehavedNumber-BMV6Q8kx.js";import"./Label-SYMy3G3-.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BEh4PufB.js";import"./index-BHPpgMD3.js";import"./index-D72u634P.js";import"./types-iWkEMmGL.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DnIB2gDY.js";import"./immer-6f0a2Itz.js";import"./RechartsWrapper-D1LnNbdI.js";import"./index-TsoCApfs.js";import"./index-C6ss-rRK.js";import"./axisSelectors-Cn-VKMDy.js";import"./d3-scale-D2bjBGPq.js";import"./string-B6fdYHAA.js";import"./CartesianChart-D2sGcfAi.js";import"./chartDataContext-3qQmZcQj.js";import"./CategoricalChart-CxG8s20W.js";import"./tooltipContext-BpQxds4m.js";import"./AnimatedItems-CV70jau4.js";import"./useAnimationId-Dc5RekzQ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CIsVQIpM.js";import"./ActiveShapeUtils-C6v-Gqt7.js";import"./RegisterGraphicalItemId-CV0Blp2K.js";import"./ErrorBarContext-DTHknnLU.js";import"./GraphicalItemClipPath-B7hrgjyT.js";import"./SetGraphicalItem-BWtqlZ1x.js";import"./getZIndexFromUnknown-DTs_PeDG.js";import"./graphicalItemSelectors-p9K9EyDa.js";import"./Curve-DN6qrrBJ.js";import"./step-BwuKoovG.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DgX9BosL.js";import"./Dot-EjXLgxI9.js";import"./getRadiusAndStrokeWidthFromDot-Ce5hKttK.js";import"./useElementOffset-BI2zHJkS.js";import"./uniqBy-DZcIVEUd.js";import"./iteratee-CLUUH9ga.js";import"./Cross-BjZK5vKu.js";import"./Sector-Da8ZKB8T.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
