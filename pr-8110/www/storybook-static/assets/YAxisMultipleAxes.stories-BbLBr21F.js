import{R as t}from"./iframe-CUml5YCN.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CGT5tGsT.js";import{R as l}from"./zIndexSlice-Duug8EOo.js";import{C as x}from"./ComposedChart-bDo5B3j8.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-W3g4LJoB.js";import{L as a}from"./Line-HXIUzKg7.js";import{X as c}from"./XAxis-DS-AJg-5.js";import{T as g}from"./Tooltip-DnZ-jfwM.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-Co-nrknN.js";import"./Text-C-J7rFVH.js";import"./resolveDefaultProps-bEvLqOBJ.js";import"./DOMUtils-BO2yqkFt.js";import"./ZIndexLayer-BY73hU8m.js";import"./index-AklA9_0y.js";import"./index-DLBpPTx4.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DMpK1CYb.js";import"./throttle-00pBoixS.js";import"./axisSelectors-B2HI9EL2.js";import"./d3-scale-CEanJ2qJ.js";import"./CartesianAxis-BVj8a-va.js";import"./Layer-BUAUs1E0.js";import"./types-BdRO-t6j.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BxDeHuoS.js";import"./index-BI0kgcsn.js";import"./index-Bs8UXAbZ.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-jAZSY4Pq.js";import"./index-a6VaArhG.js";import"./CartesianChart-BkZTrO_H.js";import"./ZIndexPortal-C_VlO0o9.js";import"./CategoricalChart-BvHPlluA.js";import"./LabelList-1BV2-5OM.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Ayj5uTYD.js";import"./useAnimationId-CTU-teyX.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DWo-vRVn.js";import"./tooltipContext-Bogx-4r_.js";import"./dataEntryStyles-DqljzTne.js";import"./ErrorBarContext-Bo1VUNfm.js";import"./activeStyles-DSIZcOzy.js";import"./SetGraphicalItem-IwBxHE7j.js";import"./getZIndexFromUnknown-CxF_xcLQ.js";import"./useEffectiveDataKey-11clGpT5.js";import"./FillDefinition-DVWLhRTd.js";import"./omit-DgWjCywH.js";import"./isArguments-yB-y1yaH.js";import"./Curve-MMF3Mq57.js";import"./step-CbD7Fw7p.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DmxPU0dU.js";import"./Dot-Bb0NnVdB.js";import"./Symbols-IX5_Qg4V.js";import"./symbol-Ft1metgp.js";import"./getRadiusAndStrokeWidthFromDot-B5I8H9q6.js";import"./useElementOffset-CYLtSqO9.js";import"./uniqBy-wScc6s2S.js";import"./iteratee-BSvw-Q2D.js";import"./Cross-boGLgjf_.js";import"./Sector-B3hFZlEZ.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
