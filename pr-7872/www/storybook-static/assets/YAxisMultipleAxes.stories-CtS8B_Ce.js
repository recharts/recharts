import{R as t}from"./iframe-C_uZmGJ0.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CCpz6f2F.js";import{R as l}from"./zIndexSlice-DLwc6L6K.js";import{C as x}from"./ComposedChart-Bj6W4vsF.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-Df0K6-nv.js";import{L as a}from"./Line-5Ky_uooe.js";import{X as c}from"./XAxis-YZBSNmPV.js";import{T as g}from"./Tooltip-DArtwkDV.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-fJXJ83zZ.js";import"./Text-gzTYclIX.js";import"./resolveDefaultProps-qk1iWAfg.js";import"./DOMUtils-D581TnDq.js";import"./isWellBehavedNumber-bflz4OY5.js";import"./useId-CAahTF3z.js";import"./useBackwardsCompatibleTheme-Dcj-aUF4.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-WWept0wS.js";import"./index-BPNGFjKX.js";import"./index-C_Xrr1JY.js";import"./RechartsWrapper-CXap3oDx.js";import"./axisSelectors-Bynx2pvt.js";import"./throttle-ssm5i5NQ.js";import"./d3-scale-qCFWvZmx.js";import"./index-i5xBuxs4.js";import"./index-D4BdbP-V.js";import"./renderedTicksSlice-DdBaQZqr.js";import"./index-DmhH5Xz3.js";import"./CartesianAxis-Dw4Yg42W.js";import"./Layer-FqzZic0p.js";import"./types-mc5h_EFw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-RcuLD4DP.js";import"./chartDataContext-DAujoSs5.js";import"./CategoricalChart-BSnQBJZ3.js";import"./AnimatedItems-Bdmry8Nm.js";import"./useAnimationId-DVpik13A.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-H3ZsFvAX.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DegrRRKp.js";import"./tooltipContext-DF8jhdSm.js";import"./RegisterGraphicalItemId-BuMk-4uG.js";import"./ErrorBarContext-CukgZUAO.js";import"./GraphicalItemClipPath-CZ-MeeIA.js";import"./SetGraphicalItem-CizKrbKK.js";import"./getZIndexFromUnknown-DI5RnXYK.js";import"./useGraphicalItemIdentity-BVAmN--h.js";import"./dataEntryStyles-DgsaIY_H.js";import"./Curve-DrCVQ1z_.js";import"./step-d36cIwmk.js";import"./path-DyVhHtw_.js";import"./ActivePoints-C2NAg-mW.js";import"./Dot-BxKfnRiv.js";import"./getRadiusAndStrokeWidthFromDot-Cu-dtnOu.js";import"./useElementOffset-C3oK5LdM.js";import"./uniqBy-CEi0ISro.js";import"./iteratee-QMsHInH6.js";import"./Cross-C64Lza6I.js";import"./Sector-CiZtVsMq.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Lt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Lt as __namedExportsOrder,Rt as default};
