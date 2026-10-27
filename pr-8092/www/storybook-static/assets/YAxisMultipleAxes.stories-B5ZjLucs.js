import{R as t}from"./iframe-DloB-Tup.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-C2kKnKD5.js";import{R as l}from"./zIndexSlice-DkoSoypq.js";import{C as x}from"./ComposedChart-gu5T_l93.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BtPLVNqe.js";import{L as a}from"./Line-BakhYVyl.js";import{X as c}from"./XAxis-85tJ7DjB.js";import{T as g}from"./Tooltip-CVyBTsCT.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-BCZcSJT3.js";import"./Text-BM9EdhAp.js";import"./resolveDefaultProps-DXiVg1qQ.js";import"./pageBackground-uaKlEO31.js";import"./ZIndexLayer-bWANmXVo.js";import"./index-DV-zLmFt.js";import"./index-Bjn59J1w.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-BA-2pRlP.js";import"./throttle-DHxiFtgA.js";import"./dataEntryStyles-DO0_QeZe.js";import"./axisSelectors-5JufQAoG.js";import"./d3-scale-Cp_uhw02.js";import"./CartesianAxis-3ybsRmFq.js";import"./Layer-S6G7_nQD.js";import"./types-BVm9IbXw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-QBBzvaXk.js";import"./index-sAdADp0M.js";import"./index-BpHVs9OQ.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-C7KZ4AFC.js";import"./index-BpFDYg8A.js";import"./CartesianChart-juZJjY88.js";import"./ZIndexPortal-B99ywjs0.js";import"./CategoricalChart-BfiBF3Vo.js";import"./LabelList-B_3Vas12.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DT8WiWUe.js";import"./useAnimationId-B4JCM27x.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-O1dlG29g.js";import"./tooltipContext-FzzNO4aG.js";import"./RegisterGraphicalItemId-BdcH7fWn.js";import"./ErrorBarContext-CBYSVt7N.js";import"./activeStyles-B8TQJkxp.js";import"./SetGraphicalItem-lsA-IuJf.js";import"./getZIndexFromUnknown-BkAWXdMt.js";import"./useEffectiveDataKey-B7m-hO1Q.js";import"./omit-BH-HEWqG.js";import"./isArguments-yB-y1yaH.js";import"./Curve-Dw8-x6-u.js";import"./step-CNEatR3g.js";import"./path-DyVhHtw_.js";import"./ActivePoints-Baun6K6R.js";import"./Dot-CiBIq_Wk.js";import"./Symbols-OqBqpZTo.js";import"./symbol-D_Qfgjrw.js";import"./getRadiusAndStrokeWidthFromDot-ymvOuKSP.js";import"./useElementOffset-fPA8IkJo.js";import"./uniqBy-C9ysuPBd.js";import"./iteratee-C2C5pJva.js";import"./Cross-Dqr7MU5J.js";import"./Sector-CMUhvR-T.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
