import{R as t}from"./iframe-BC-aHfbH.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-7iDdsVaV.js";import{R as l}from"./zIndexSlice-ALhwVSt9.js";import{C as x}from"./ComposedChart-DeGO-OTb.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BwOghHn2.js";import{L as a}from"./Line-DxnNynrS.js";import{X as c}from"./XAxis-q4A2d4Zb.js";import{T as g}from"./Tooltip-C3biscPT.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-Dza1R5dY.js";import"./Text-DARS5OxC.js";import"./resolveDefaultProps-4x113t0l.js";import"./pageBackground-Dg-zxncN.js";import"./ZIndexLayer-PUdKiesE.js";import"./index-B-RSdHgQ.js";import"./index-Dvj4AXX_.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DEKrNeLt.js";import"./throttle-a7-GQed4.js";import"./dataEntryStyles-xanZasRf.js";import"./axisSelectors-D-qF4r4u.js";import"./d3-scale-BzoWDajH.js";import"./CartesianAxis-CunRUAHg.js";import"./Layer-C9TfFY4n.js";import"./types-CqRAzbay.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-C3P53zmh.js";import"./index-ByUj-B7C.js";import"./index-C7cb-ZYS.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-B9wYdCxx.js";import"./index-BCHOiCIM.js";import"./CartesianChart-CLm_Ee8q.js";import"./ZIndexPortal-BGbnB8Y2.js";import"./CategoricalChart--pFm79aa.js";import"./LabelList-BVv1SXpb.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-FJmdRxpu.js";import"./useAnimationId-Dd0TyqHP.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DJ-tBBEV.js";import"./tooltipContext-DFMpmYDz.js";import"./RegisterGraphicalItemId-BsiO5PX-.js";import"./ErrorBarContext-C6fbu3f2.js";import"./activeStyles-1D-OxyIQ.js";import"./SetGraphicalItem-B0IeAy6L.js";import"./getZIndexFromUnknown-CG9rV2QH.js";import"./useEffectiveDataKey-CqM8v6g-.js";import"./omit-DU8aGmDd.js";import"./isArguments-yB-y1yaH.js";import"./Curve-C_X7-rik.js";import"./step-C9BhyMMw.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CYbwYUVg.js";import"./Dot-DCOyOMOq.js";import"./Symbols-BzxAfvdI.js";import"./symbol-DmUuFZcN.js";import"./getRadiusAndStrokeWidthFromDot-B9BWJY7Y.js";import"./useElementOffset-CkUyr6Xi.js";import"./uniqBy-BX-k5AJw.js";import"./iteratee-BGB8LHfi.js";import"./Cross-CO7DiNyk.js";import"./Sector-Ce4H6Qmp.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
