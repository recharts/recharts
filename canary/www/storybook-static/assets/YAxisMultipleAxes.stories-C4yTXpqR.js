import{R as t}from"./iframe-CKDPSKer.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-aBoPLQiN.js";import{R as l}from"./zIndexSlice-BPEXBnkz.js";import{C as x}from"./ComposedChart-BRk5rLm3.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-dsf1sJWy.js";import{L as a}from"./Line-CTXdPCxP.js";import{X as c}from"./XAxis-A_9Io6kM.js";import{T as g}from"./Tooltip-u3y7hq8k.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-dc-yhDIk.js";import"./Text-C2JOwhg7.js";import"./resolveDefaultProps-BHhxWlvh.js";import"./DOMUtils-YKVjc3tQ.js";import"./isWellBehavedNumber-B7M1fd8R.js";import"./useId-Ci63Vlud.js";import"./useBackwardsCompatibleTheme-CrbUBK8p.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-U3HIU8rZ.js";import"./index-b8m7PcKP.js";import"./index-BCb8LTpu.js";import"./RechartsWrapper-DXJuSLgb.js";import"./axisSelectors-BCmNu8mb.js";import"./throttle-BxISGQ-D.js";import"./d3-scale-b7USrreT.js";import"./index-Yn8E1RQt.js";import"./index-YNG8abLs.js";import"./renderedTicksSlice-D_KOvBCE.js";import"./index-CdVjfuR9.js";import"./CartesianAxis-CjGSghd8.js";import"./Layer-B33l4zSF.js";import"./types-CtnAz4fT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-8JudaFqK.js";import"./chartDataContext-BPq1GFdD.js";import"./CategoricalChart-C1cfNrgi.js";import"./AnimatedItems-DQZ1vYlx.js";import"./useAnimationId-BJ5AGKlq.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B5okrLSf.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Wg41V-yZ.js";import"./tooltipContext-BG1A-VRG.js";import"./RegisterGraphicalItemId-DPP3dtMc.js";import"./ErrorBarContext-DUmIK13m.js";import"./GraphicalItemClipPath-CwqjQ5yI.js";import"./SetGraphicalItem-oK4eoPFb.js";import"./getZIndexFromUnknown-Bg3Y29-C.js";import"./useGraphicalItemIdentity-SlGiSA9D.js";import"./Curve-Blt-RSy4.js";import"./step-Bgemofkp.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BaQ565al.js";import"./Dot-BHyvQM3b.js";import"./getRadiusAndStrokeWidthFromDot-jgRF4YSW.js";import"./useElementOffset-D8p3AvLo.js";import"./uniqBy-DYmmQrZx.js";import"./iteratee-DK5B7GVX.js";import"./Cross-Ef96OJiJ.js";import"./Sector-C0kNvO3e.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
