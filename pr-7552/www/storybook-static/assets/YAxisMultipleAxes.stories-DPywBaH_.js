import{R as t}from"./iframe-w7qCbIlq.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CwFi80nS.js";import{R as l}from"./zIndexSlice-BtZQ5xih.js";import{C as x}from"./ComposedChart-DOApFncK.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DTuG0nq4.js";import{L as a}from"./Line-BlbeS46W.js";import{X as c}from"./XAxis-8n0ix597.js";import{T as g}from"./Tooltip-BL-JtHNM.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-CT_UcdRd.js";import"./Layer-C8MJqdtw.js";import"./resolveDefaultProps-BXXLLFZs.js";import"./Text-Bii4Z9SU.js";import"./DOMUtils-BHtgPnwB.js";import"./isWellBehavedNumber-BLtoVg4o.js";import"./Label-Bwto3iA9.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BipLpo9Z.js";import"./index-BmGe_VQx.js";import"./index-BBIhqOXx.js";import"./types-0ytIGtz9.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-TeAVrZEF.js";import"./throttle-KQ-EWGZj.js";import"./RechartsWrapper-CJCCLnSy.js";import"./index-Ddi-T72V.js";import"./index-C1u3rFhR.js";import"./axisSelectors-DudJ2V7b.js";import"./d3-scale-DHyfTYAT.js";import"./CartesianChart-BbPcQF_v.js";import"./chartDataContext-d_tiIYhw.js";import"./CategoricalChart-C5vKFxAI.js";import"./tooltipContext-Z567agl9.js";import"./AnimatedItems-DtqXu7a9.js";import"./useAnimationId-BLBs87N6.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BBGlMB0K.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-pA3gak5X.js";import"./RegisterGraphicalItemId-BMqZVFge.js";import"./ErrorBarContext-Ddig5LAI.js";import"./GraphicalItemClipPath-CJg2XcFN.js";import"./SetGraphicalItem-CaM-dNjz.js";import"./getZIndexFromUnknown-BS8fWFXI.js";import"./graphicalItemSelectors-CyWml0qF.js";import"./Curve-858tLF7S.js";import"./step-BY4MZZhT.js";import"./path-DyVhHtw_.js";import"./ActivePoints-MWBllTj-.js";import"./Dot-DqpKuKrG.js";import"./getRadiusAndStrokeWidthFromDot-Bj2pWrUE.js";import"./useElementOffset-BPAlyBBz.js";import"./uniqBy-D4kbD2sN.js";import"./iteratee-kNxDFHiu.js";import"./Cross-BHsCGUhH.js";import"./Sector-B7EdsSzn.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
