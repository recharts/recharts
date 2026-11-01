import{R as t}from"./iframe-CcMBsn7a.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BnF9M7Oe.js";import{R as l}from"./zIndexSlice-DFRlFrsj.js";import{C as x}from"./ComposedChart-DZIz87wm.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-Djl7boDS.js";import{L as a}from"./Line-CsN0isYC.js";import{X as c}from"./XAxis-Dcud2AjR.js";import{T as g}from"./Tooltip-B3Mrs5p-.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-M1IGuJE8.js";import"./Text-Dz_XqFLj.js";import"./resolveDefaultProps-C_I-9eVr.js";import"./DOMUtils-DHsAC8dS.js";import"./ZIndexLayer-BQYqJ9ai.js";import"./index-BSB29nKH.js";import"./index-SlWo1Crq.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DoAcr0yY.js";import"./throttle-LNv5qelv.js";import"./axisSelectors-CpYzXpFY.js";import"./d3-scale-DgNN2Fjk.js";import"./CartesianAxis-Dr7Ti05X.js";import"./Layer-CeaFY6L3.js";import"./types-6qK0DF3w.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BvTPYPK6.js";import"./index-CdPGreQS.js";import"./index-CVuW9U_Y.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-C5Uizgqh.js";import"./index-DNvfWRuY.js";import"./fillDefinitions-Cn95lAWR.js";import"./CartesianChart-GrqiJAJ3.js";import"./ZIndexPortal-CBXOiKa0.js";import"./CategoricalChart-BZVQkMIT.js";import"./LabelList-BOiHk-iP.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BJTdQbL8.js";import"./useAnimationId-BiyhMFfV.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Ce6BVgWv.js";import"./tooltipContext-4MmzbFvB.js";import"./dataEntryStyles-Bttpss0z.js";import"./ErrorBarContext-B0K3ejq2.js";import"./activeStyles-CkIUhE4Y.js";import"./SetGraphicalItem-D39u22t5.js";import"./getZIndexFromUnknown-Bo3A1RnC.js";import"./useEffectiveDataKey-C8oLMiMN.js";import"./omit-XgeoO07C.js";import"./isArguments-yB-y1yaH.js";import"./Curve-CgTOK48B.js";import"./step-Dj8K5zlQ.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BpaOU93T.js";import"./Dot-DnefNcpX.js";import"./Symbols-BeP2l-ue.js";import"./symbol-ZVm563IN.js";import"./getRadiusAndStrokeWidthFromDot-DGeLWXaD.js";import"./useElementOffset-CIR_VWXQ.js";import"./uniqBy-Cq9UYuC_.js";import"./iteratee-CPdK2ALT.js";import"./Cross-DUG9Ikbh.js";import"./Sector-5AB5GNHW.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
