import{R as t}from"./iframe-ZSAsyeui.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-89VrmUc2.js";import{R as l}from"./zIndexSlice-Dv-5_8A6.js";import{C as x}from"./ComposedChart-D3WKujQY.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-Chc0x6Xf.js";import{L as a}from"./Line-DtZqeDqI.js";import{X as c}from"./XAxis-CE4c8ci4.js";import{T as g}from"./Tooltip-BD-lHZ6w.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-ooeO0hBy.js";import"./Text-BRlBLGWa.js";import"./resolveDefaultProps-CzYlkvqW.js";import"./pageBackground-BD4buOa5.js";import"./ZIndexLayer-C2WKPlYv.js";import"./index-OvyM_4Sm.js";import"./index-DjKI25gJ.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-BqI7JiW5.js";import"./throttle-D-BJc2jV.js";import"./axisSelectors-B8o8U7qV.js";import"./d3-scale-CC-JJjQv.js";import"./CartesianAxis-BLajEobP.js";import"./Layer-DRoxmpYI.js";import"./types-DmKiIpv6.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CWxjmG2R.js";import"./index-uqJ6YOvZ.js";import"./index-zauSQ6TS.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BzidFlVd.js";import"./index-DD-2LlvS.js";import"./CartesianChart-CMZp9es4.js";import"./ZIndexPortal-CvnMM87Z.js";import"./CategoricalChart-D-416rq6.js";import"./LabelList-Xwc-TPit.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Buh2szsq.js";import"./useAnimationId-DVzTYwao.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-PjK4neH_.js";import"./tooltipContext-BErzQm8t.js";import"./dataEntryStyles-D8AFB-Xx.js";import"./ErrorBarContext-Cg5WWOob.js";import"./activeStyles-BfRigOWz.js";import"./SetGraphicalItem-BULml3ZG.js";import"./getZIndexFromUnknown-B_8wLt4W.js";import"./useEffectiveDataKey-DWBa4tvD.js";import"./omit-CcrkJRlh.js";import"./isArguments-yB-y1yaH.js";import"./Curve-Czqktp7G.js";import"./step-agpXYCOV.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BfGk3pVb.js";import"./Dot-BEWDPMal.js";import"./Symbols-fzhinMEB.js";import"./symbol-fTzakvJ7.js";import"./getRadiusAndStrokeWidthFromDot-RjCFhzne.js";import"./useElementOffset-BLZ2FwPy.js";import"./uniqBy-CsraS7fO.js";import"./iteratee-BRq8WylV.js";import"./Cross-CbPqnaha.js";import"./Sector-5mywfZ-i.js";const Lt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Tt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Tt as __namedExportsOrder,Lt as default};
