import{R as t}from"./iframe-BkEvAth1.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DLVoYarI.js";import{R as l}from"./zIndexSlice-nf1W2Gc-.js";import{C as x}from"./ComposedChart-DoYpCRnR.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DWRK7KGu.js";import{L as a}from"./Line-BktN_626.js";import{X as c}from"./XAxis-RdR0TVxW.js";import{T as g}from"./Tooltip-CCPcn5n7.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-C6aq5sgc.js";import"./Text-BZ3mS1RC.js";import"./resolveDefaultProps-0lxOPE_6.js";import"./DOMUtils-BcdnRDzA.js";import"./isWellBehavedNumber-CFPi8ujN.js";import"./useId-C4p8DCEP.js";import"./useBackwardsCompatibleTheme-C9UXAGCH.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CV-ewbAJ.js";import"./index-WgwKlZAp.js";import"./index-DEguUzrn.js";import"./RechartsWrapper-BQMoxy31.js";import"./axisSelectors-Tv8O7Qi2.js";import"./throttle-D101QSOu.js";import"./d3-scale-CLBHc1rG.js";import"./index-B8WpKNcF.js";import"./index-BRKc8NTQ.js";import"./renderedTicksSlice-DA-CVNBV.js";import"./index-BKOJ-Qmj.js";import"./CartesianAxis-BTQZoIY0.js";import"./Layer-B86MwzYN.js";import"./types-CCpLRaHh.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-ByLTz-Wk.js";import"./chartDataContext-DQU-1klM.js";import"./CategoricalChart-CFWcsDQS.js";import"./AnimatedItems-DAE7yXHk.js";import"./useAnimationId-BXkgTCLA.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CPSx8OX_.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-l5lysgay.js";import"./tooltipContext-DSWceIOC.js";import"./RegisterGraphicalItemId-7FSphn26.js";import"./ErrorBarContext-TeZDWbxG.js";import"./GraphicalItemClipPath-B-LRUwBU.js";import"./SetGraphicalItem-CKJc8ABb.js";import"./getZIndexFromUnknown-vhCcbLMS.js";import"./useGraphicalItemIdentity-C648VAOs.js";import"./Curve-oC0QJw4U.js";import"./step-2sMLUC-_.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BpS_UUeT.js";import"./Dot-DqgMg3tu.js";import"./getRadiusAndStrokeWidthFromDot-DpGWIpus.js";import"./useElementOffset-CNOTyxbq.js";import"./uniqBy-vII-2Sju.js";import"./iteratee-V58mN6Z0.js";import"./Cross-DXgccHZ6.js";import"./Sector-DevSgsmv.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
