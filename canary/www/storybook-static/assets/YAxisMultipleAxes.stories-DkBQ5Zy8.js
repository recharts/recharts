import{R as t}from"./iframe-IxvRXYOM.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-31y7ZHQJ.js";import{R as l}from"./zIndexSlice-Dia8XTL2.js";import{C as x}from"./ComposedChart-BzuXDUIC.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-GE9jlpxl.js";import{L as a}from"./Line-BaG6CBFi.js";import{X as c}from"./XAxis-R0eKTQQ1.js";import{T as g}from"./Tooltip-9KuCdUcm.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DYJa0Pce.js";import"./Text-VVpkyRHU.js";import"./resolveDefaultProps-C8gKTQR0.js";import"./DOMUtils-7IYxeTO_.js";import"./isWellBehavedNumber-1PbkiApc.js";import"./useId-BCDrS8Ec.js";import"./useBackwardsCompatibleTheme-niu8PbB-.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D3BGhz3Z.js";import"./index-BXDqCn7f.js";import"./index-D34-i1nc.js";import"./RechartsWrapper-DouzT1Jm.js";import"./axisSelectors-CsegCW8b.js";import"./throttle-DoVSkdKP.js";import"./d3-scale-FVb6w9iL.js";import"./index-BFt1Ny-W.js";import"./index-WdtNPuBq.js";import"./renderedTicksSlice-CchY5W_H.js";import"./index-C1qZei_h.js";import"./CartesianAxis-BJBAf6Tc.js";import"./Layer-DXPk_QPv.js";import"./types-D8hPxmLy.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-D4DhIf-5.js";import"./chartDataContext-DPXilm1s.js";import"./CategoricalChart-CGmBQpoA.js";import"./AnimatedItems-DJiaeq4S.js";import"./useAnimationId-B5Gku1OT.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Bpb36EBT.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BrhiJYt9.js";import"./tooltipContext-BkUVOB8k.js";import"./RegisterGraphicalItemId-CCZFRoFR.js";import"./ErrorBarContext-C1aHHTJh.js";import"./GraphicalItemClipPath-B3n8HZ3n.js";import"./SetGraphicalItem-CU9UT-3r.js";import"./getZIndexFromUnknown-Ck7VT_S0.js";import"./useGraphicalItemIdentity-U0g776Bm.js";import"./Curve-B1Tl1par.js";import"./step-C5uaOgJB.js";import"./path-DyVhHtw_.js";import"./ActivePoints-lXhg7PyY.js";import"./Dot-Ckx8C-Ql.js";import"./getRadiusAndStrokeWidthFromDot-B0LLmdQO.js";import"./useElementOffset-Ck-qsnV8.js";import"./uniqBy-9Zym-iBR.js";import"./iteratee-CRMfd8M7.js";import"./Cross-DOBLdcqU.js";import"./Sector-DVYh-31O.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
