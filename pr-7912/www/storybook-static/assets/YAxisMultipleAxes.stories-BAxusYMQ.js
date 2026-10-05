import{R as t}from"./iframe-zVk88q-r.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BU4R0oLg.js";import{R as l}from"./zIndexSlice-DfutBn7L.js";import{C as x}from"./ComposedChart-CLoKJB1N.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DfAi5BdA.js";import{L as a}from"./Line-cW_DbcN0.js";import{X as c}from"./XAxis-DfHugD0J.js";import{T as g}from"./Tooltip-yI4F6phI.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CrnAbRyD.js";import"./Text-Nx4ACQwF.js";import"./resolveDefaultProps-B_GPAkFH.js";import"./DOMUtils-Dnj4_Ujh.js";import"./isWellBehavedNumber-C-ZPk_Xp.js";import"./useId-BC8SsZ2L.js";import"./useBackwardsCompatibleTheme-BjS2fGJi.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-r6epNlFr.js";import"./index-DsALRTV8.js";import"./index-Bk0bK2TA.js";import"./RechartsWrapper-C0-bRbC3.js";import"./axisSelectors-CmXBEtTu.js";import"./throttle-BmkgAj5t.js";import"./d3-scale-CFGG9Jl0.js";import"./index-fUo0OINa.js";import"./index-DlbGxR67.js";import"./renderedTicksSlice-BX5u_Wlp.js";import"./index-C7LumEWu.js";import"./CartesianAxis-CfxKlxox.js";import"./Layer-lcnk2Jvi.js";import"./types-gJ-qKTie.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CaeWlYzw.js";import"./chartDataContext-2A6w0qLe.js";import"./CategoricalChart-DJLnAv9C.js";import"./AnimatedItems-CE9fFFYl.js";import"./useAnimationId-DztKFKRO.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-o8c6UGkH.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-a-OI7kZz.js";import"./tooltipContext-t_fGIXBw.js";import"./RegisterGraphicalItemId-DbfLY7XL.js";import"./ErrorBarContext-DAwElSG5.js";import"./GraphicalItemClipPath-BL0H_9p-.js";import"./SetGraphicalItem-1sdGamMS.js";import"./getZIndexFromUnknown-CEffNke9.js";import"./useGraphicalItemIdentity-D7Hr4JLm.js";import"./dataEntryStyles-D5I8d5IK.js";import"./Curve-CDtDqQyg.js";import"./step-CBXY0TZz.js";import"./path-DyVhHtw_.js";import"./ActivePoints-D0FJzWSP.js";import"./Dot-DByu-vHs.js";import"./getRadiusAndStrokeWidthFromDot-BohBFAZA.js";import"./useElementOffset-Dc53Yk5t.js";import"./uniqBy-54ckHNjc.js";import"./iteratee-CnMF74mw.js";import"./Cross-DBsBm5TM.js";import"./Sector-CaIcWj5Y.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
