import{R as t}from"./iframe-sVYf0T4K.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CNIo2SjU.js";import{R as l}from"./zIndexSlice-DCYn61_Z.js";import{C as x}from"./ComposedChart-79IdZ4r_.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CT4oIuK5.js";import{L as a}from"./Line-ChZJFWD1.js";import{X as c}from"./XAxis-DBp8xvXF.js";import{T as g}from"./Tooltip-lnOD4kE7.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DWNcL86V.js";import"./Text-BWcB5EFj.js";import"./resolveDefaultProps-BNjxkguA.js";import"./pageBackground-DIQ0WB3A.js";import"./useId-V8WWGbBi.js";import"./ZIndexLayer-BVANdKv1.js";import"./index-DiC6i9Zs.js";import"./index--6n540TN.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-BsaBqdPx.js";import"./throttle-B5u3GWWh.js";import"./dataEntryStyles-4CyLqaB1.js";import"./axisSelectors-DeiSy_-h.js";import"./d3-scale-CaVFs3zj.js";import"./CartesianAxis-BI1VsAr7.js";import"./Layer-BIjeoEg2.js";import"./types-ZHVwXJa3.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BPEsWmdR.js";import"./index-hsh9HVaA.js";import"./index-ByFnZ7XW.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-cX9KnfoQ.js";import"./index-BXr1355W.js";import"./CartesianChart-DjuWDgK1.js";import"./chartDataContext-Dkn-AagS.js";import"./CategoricalChart-BAqEzU7h.js";import"./activeStyles-BGq7qwld.js";import"./useAnimationId-D71D5MAL.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle--uO5acWR.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CcGGZZs1.js";import"./tooltipContext-CN3GbuoS.js";import"./RegisterGraphicalItemId-CPgTzLUz.js";import"./ErrorBarContext-BIENolIM.js";import"./SetGraphicalItem-BDTNcAra.js";import"./getZIndexFromUnknown-CkpFwhFm.js";import"./useEffectiveDataKey-TZEf5iHD.js";import"./omit-CGn4-LBM.js";import"./isArguments-yB-y1yaH.js";import"./Curve-DRJ9KjAo.js";import"./step-DuwXt4tv.js";import"./path-DyVhHtw_.js";import"./ActivePoints-qLv8n1bM.js";import"./Dot-CyGoxzEw.js";import"./Symbols-B9IhfDAO.js";import"./symbol-BnKq_a6Q.js";import"./getRadiusAndStrokeWidthFromDot-C9_Ol6X7.js";import"./useElementOffset-Mops_opC.js";import"./uniqBy-DE0GfQ2f.js";import"./iteratee-BQC4Cygg.js";import"./Cross-DbRi0_-s.js";import"./Sector-CUgX515f.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
