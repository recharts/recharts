import{R as t}from"./iframe-z45XlhiT.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-C3VQiLjy.js";import{R as l}from"./zIndexSlice-rByxwPq2.js";import{C as x}from"./ComposedChart-C_oOM-_x.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-JwezXhfG.js";import{L as a}from"./Line-BNg9pLDQ.js";import{X as c}from"./XAxis-yN0YOhJu.js";import{T as g}from"./Tooltip-BUIf__CH.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CmK6wYAn.js";import"./Text-D6fTfOcl.js";import"./resolveDefaultProps-D6R4bRBz.js";import"./pageBackground-BPRxB_Aw.js";import"./ZIndexLayer-DZatQUpK.js";import"./index-DhBnsQMm.js";import"./index-BjfNKgkQ.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CPTOQPk0.js";import"./throttle-trzEzJ5j.js";import"./axisSelectors-DZIpCEiW.js";import"./d3-scale-DBdfj2JL.js";import"./CartesianAxis-CzSQFzRC.js";import"./Layer-BkChjDHf.js";import"./types-DMhu4FvJ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DSoL8nN7.js";import"./index-wy90J4K3.js";import"./index-BLdN60al.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CkIduI85.js";import"./index-DMBUEogz.js";import"./CartesianChart-SMygzho_.js";import"./ZIndexPortal-BH0OvRqe.js";import"./CategoricalChart-BvjpxKzi.js";import"./LabelList-BXCYEXvh.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-H7M7KGkC.js";import"./useAnimationId-DASBPoZY.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-ChMdJ8i8.js";import"./tooltipContext-Cn2jAoG1.js";import"./dataEntryStyles-CahaEVij.js";import"./ErrorBarContext-C7sDKK_Q.js";import"./activeStyles-2Y8cHsw1.js";import"./SetGraphicalItem-DAGbOIuL.js";import"./getZIndexFromUnknown-fO0CIDwr.js";import"./useEffectiveDataKey-Dw2L82h2.js";import"./omit-OloxmYwW.js";import"./isArguments-yB-y1yaH.js";import"./Curve-DeIAn4Qv.js";import"./step-xmYWYAoT.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DXpk42VJ.js";import"./Dot-C9aR3nF8.js";import"./Symbols-DOwNTV9x.js";import"./symbol-DbSGDWfT.js";import"./getRadiusAndStrokeWidthFromDot-Pw7eF4Cu.js";import"./useElementOffset-Dw7KsQZo.js";import"./uniqBy-SRHayfFD.js";import"./iteratee-BTmoFKFa.js";import"./Cross-PnqcH-0w.js";import"./Sector-VonBssaU.js";const Lt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
