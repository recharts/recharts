import{R as t}from"./iframe-B0md2XL3.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-Dak2FPR9.js";import{R as l}from"./zIndexSlice-DA0iP-6p.js";import{C as x}from"./ComposedChart-CunuTAo6.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BZBdz_4C.js";import{L as a}from"./Line-Dwcg0Xhw.js";import{X as c}from"./XAxis-DLCMfyHC.js";import{T as g}from"./Tooltip-C1QwgOny.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-B4OtwMWB.js";import"./Text-iaFwzHQc.js";import"./resolveDefaultProps-DYFy43g1.js";import"./DOMUtils-BnN7LMKo.js";import"./ZIndexLayer-n48hyeCj.js";import"./index-B6b7n9vZ.js";import"./index-CoDrYRaw.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-EKUmLX1r.js";import"./throttle-Bg4_NSFj.js";import"./axisSelectors-CGXaSNKn.js";import"./d3-scale-uqFZU7-w.js";import"./CartesianAxis-ib9y6Jw_.js";import"./Layer-CEcbE5Mj.js";import"./types-k-hf9hch.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CmqrGULL.js";import"./index-B1ySaIl-.js";import"./index-GRpTxPRT.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CWXf9YtC.js";import"./index-CPY9oK3E.js";import"./fillDefinitions-3Vzegl5l.js";import"./CartesianChart-8QvfRZzW.js";import"./ZIndexPortal-CrQK9kpR.js";import"./CategoricalChart-niTwkvl-.js";import"./LabelList-CC8uMe5u.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DtE2sp0d.js";import"./useAnimationId-OzV8hXkE.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DacyCGB1.js";import"./tooltipContext-9K8_RuoB.js";import"./dataEntryStyles-QaPc2U0F.js";import"./ErrorBarContext-CrVPyI6s.js";import"./activeStyles-CvpZ-3cp.js";import"./SetGraphicalItem-fxalM_Sw.js";import"./getZIndexFromUnknown-DsG5JjyG.js";import"./useEffectiveDataKey-B6E0gPoB.js";import"./omit-Do7fl70z.js";import"./isArguments-yB-y1yaH.js";import"./Curve-s1Q-eWha.js";import"./step-B9w_ahFS.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CQgXp3HY.js";import"./Dot-BK9EjXwp.js";import"./Symbols-D_2SQKur.js";import"./symbol-CSqYEM7h.js";import"./getRadiusAndStrokeWidthFromDot-Dy9C3gHL.js";import"./useElementOffset-DFimtnCZ.js";import"./uniqBy-BlUnuxiL.js";import"./iteratee-C8WNKkID.js";import"./Cross-DSFwnFYd.js";import"./Sector-DpuCM0BB.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
