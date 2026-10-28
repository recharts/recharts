import{R as t}from"./iframe-Bvdgb1qV.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BeFwt-ht.js";import{R as l}from"./zIndexSlice-B01j9Vcs.js";import{C as x}from"./ComposedChart-Buy3_glc.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-Dn4NbgOm.js";import{L as a}from"./Line-Bq9HsgXM.js";import{X as c}from"./XAxis-D59h15hK.js";import{T as g}from"./Tooltip-D7ufEnAI.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DP6vSrfL.js";import"./Text-DPvkSF-G.js";import"./resolveDefaultProps-Dw9_y5mH.js";import"./pageBackground-Cb0q0UoB.js";import"./ZIndexLayer-uaQDwXWb.js";import"./index-CvLCmGiJ.js";import"./index-Cpva_oKK.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DEav2p-j.js";import"./throttle-BPyPQEAQ.js";import"./dataEntryStyles-BpvBRnn1.js";import"./axisSelectors-B7JYqxaB.js";import"./d3-scale-AQ3fTkSg.js";import"./CartesianAxis-qmdlREsz.js";import"./Layer-C-2DDjxl.js";import"./types-BLGnyPc9.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-9ekrV8Q5.js";import"./index-BnNH-Ow2.js";import"./index-ByMobiKc.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-Xt6mrXGV.js";import"./index-BIMpYUxR.js";import"./CartesianChart-D526lA3e.js";import"./ZIndexPortal-dwQ5L04t.js";import"./CategoricalChart-CuxUrQWu.js";import"./LabelList-BzPq7Pbp.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-N8aUytSm.js";import"./useAnimationId-t1eD8fzp.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-qHwMrvBD.js";import"./tooltipContext-Rzl4-Jch.js";import"./RegisterGraphicalItemId-Drj4gpzK.js";import"./ErrorBarContext-DdyA3erj.js";import"./activeStyles-D6UDaEYG.js";import"./SetGraphicalItem-CHhflLCy.js";import"./getZIndexFromUnknown-ClX14vNe.js";import"./useEffectiveDataKey-W79tWrXs.js";import"./omit-Bx-usdV-.js";import"./isArguments-yB-y1yaH.js";import"./Curve-DVUXJ3hw.js";import"./step-DfpUdPc6.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CspnecJX.js";import"./Dot-DtkvzlrW.js";import"./Symbols-BbBHtmua.js";import"./symbol-Bt3qNqsz.js";import"./getRadiusAndStrokeWidthFromDot-DNhfP8M9.js";import"./useElementOffset-D0AH9eMq.js";import"./uniqBy-AZ6L8AlC.js";import"./iteratee-BJJQ9tMD.js";import"./Cross-CSUJOjH7.js";import"./Sector-BbQhMLaT.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Wt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Wt as __namedExportsOrder,Tt as default};
