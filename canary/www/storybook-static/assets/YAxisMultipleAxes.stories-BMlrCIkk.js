import{R as t}from"./iframe-DHiXiYOt.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CSlSkAf_.js";import{R as l}from"./zIndexSlice-K2mOff9O.js";import{C as x}from"./ComposedChart-q17tGP41.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-Ba51PmND.js";import{L as a}from"./Line-DwxSpxuq.js";import{X as c}from"./XAxis-D6ROrCNU.js";import{T as g}from"./Tooltip-CUOeBo8F.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-Gr9qDnB4.js";import"./Text-BC_B-bRG.js";import"./resolveDefaultProps-CZL46Cig.js";import"./pageBackground-D2gDVXk4.js";import"./useId-C22RmVdj.js";import"./ZIndexLayer-DeVgP8h4.js";import"./index-Zkovv_Mu.js";import"./index-D_YreF5U.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CfAL7aRK.js";import"./throttle-9IxKLS84.js";import"./dataEntryStyles-CfpC7ekH.js";import"./axisSelectors-BDB90zwk.js";import"./d3-scale-mRNKtGCI.js";import"./CartesianAxis-BSNVQcOz.js";import"./Layer-DJ7NPFY5.js";import"./types-rgikEiEV.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Bih8KR78.js";import"./index-8ZsYbMQX.js";import"./index-coRvk7yp.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CRTUKx29.js";import"./index-CvPWQYz_.js";import"./CartesianChart-OeiKzUqX.js";import"./chartDataContext-NYE-dDPb.js";import"./CategoricalChart-Ddy3kJ44.js";import"./activeStyles-CUDvtf42.js";import"./useAnimationId-Ca9jA2_m.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Cnk8SPPS.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CHG_GvWA.js";import"./tooltipContext-D_8qLvLa.js";import"./RegisterGraphicalItemId-BCzoSTNC.js";import"./ErrorBarContext-CZu1Y3hj.js";import"./SetGraphicalItem-BBSXIdI5.js";import"./getZIndexFromUnknown-BDHhJLHc.js";import"./useEffectiveDataKey-Gb-Ai2uq.js";import"./omit-ktetNWuD.js";import"./isArguments-yB-y1yaH.js";import"./Curve-D9Rxfik5.js";import"./step-Bo1xvdEx.js";import"./path-DyVhHtw_.js";import"./ActivePoints-4PNB8ast.js";import"./Dot-BAUuju1I.js";import"./Symbols-CWw_TPA_.js";import"./symbol-BqJAsPmG.js";import"./getRadiusAndStrokeWidthFromDot-CmFu8Xh3.js";import"./useElementOffset-BB2XL7B2.js";import"./uniqBy-Cs-chbgd.js";import"./iteratee-Cq8SxEsF.js";import"./Cross-CU1Tgcnz.js";import"./Sector-DX2LvG5K.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
