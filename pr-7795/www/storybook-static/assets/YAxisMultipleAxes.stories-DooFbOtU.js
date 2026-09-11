import{R as t}from"./iframe-C3lSaTFw.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CGdCh3qj.js";import{R as l}from"./zIndexSlice-CVjGcfFW.js";import{C as x}from"./ComposedChart-ByMiL3yy.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-ClwUFC8D.js";import{L as a}from"./Line-DICJfQJU.js";import{X as c}from"./XAxis-MYsgX6vB.js";import{T as g}from"./Tooltip-BHn0weJ7.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DRjcihT7.js";import"./Text-H-IPTcTj.js";import"./resolveDefaultProps-Cy9S0LxM.js";import"./DOMUtils-DW6zNYNN.js";import"./isWellBehavedNumber-tLnZyTMG.js";import"./useId-ByxRmCjV.js";import"./useBackwardsCompatibleTheme-BMLwE0D6.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BIuAiCXb.js";import"./index-8Y4ihDcT.js";import"./index-CyFP1eEz.js";import"./RechartsWrapper-CM9ySMEh.js";import"./axisSelectors-BkcaIfMI.js";import"./throttle-BAVesAqd.js";import"./d3-scale-3ZX1sJwh.js";import"./index-Dt3obc0C.js";import"./index-BruKCsOi.js";import"./renderedTicksSlice-BCrJLlNF.js";import"./index-CCHBt1wf.js";import"./CartesianAxis-BQ-frZs4.js";import"./Layer-DCoygAxl.js";import"./types-BmaDYfeO.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-66zTmp_E.js";import"./chartDataContext-8kJMOLTT.js";import"./CategoricalChart-PbT_m_Z4.js";import"./AnimatedItems-BIU8Piw-.js";import"./useAnimationId-Dtjg15yn.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D8U833xr.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Dqjt7W9Y.js";import"./tooltipContext-D_PIy0yL.js";import"./RegisterGraphicalItemId-C6IEzR7X.js";import"./ErrorBarContext-urOk63oK.js";import"./GraphicalItemClipPath-CWU7eMW9.js";import"./SetGraphicalItem-BLqiLXhC.js";import"./getZIndexFromUnknown-C2MPDSv4.js";import"./useGraphicalItemIdentity-B93Md1_E.js";import"./Curve-D4S8erUE.js";import"./step-DxtN-o39.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CS5Q6FEx.js";import"./Dot-zciZMpDM.js";import"./getRadiusAndStrokeWidthFromDot-p4PngwyL.js";import"./useElementOffset-Cal3qYIU.js";import"./uniqBy-CNbis68a.js";import"./iteratee-BZbHMMPe.js";import"./Cross-DScjI0XA.js";import"./Sector-CF33ET3b.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
