import{R as t}from"./iframe-BAw0s5ot.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-o1QSu-GR.js";import{R as l}from"./zIndexSlice-BeH27P2U.js";import{C as x}from"./ComposedChart-DteFOQlI.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BlCgf9gI.js";import{L as a}from"./Line-DjWgsN1g.js";import{X as c}from"./XAxis-DLc6krzc.js";import{T as g}from"./Tooltip-C9JqWq_X.js";import"./preload-helper-Dp1pzeXC.js";import"./get-CSAr6kNF.js";import"./CartesianAxis-BP8vTRJY.js";import"./Layer-CnD0sOVo.js";import"./resolveDefaultProps-BuFdbqch.js";import"./Text-CHY17Wwg.js";import"./DOMUtils-DRw43MBp.js";import"./isWellBehavedNumber-9WEl6uBx.js";import"./Label-RqhE4qn6.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-B6NdRg2s.js";import"./index-CjVdCyN5.js";import"./index-BK18-1Z2.js";import"./types-3486df9G.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-lnlzRSDk.js";import"./throttle-CMKSqw9i.js";import"./RechartsWrapper-Bttwz4rr.js";import"./index-B1DwQ2Om.js";import"./index-46sIyfq_.js";import"./axisSelectors-CrQ5YVkn.js";import"./d3-scale-8J52VcxR.js";import"./CartesianChart-qH9nTYaZ.js";import"./chartDataContext-Bg-IfXwk.js";import"./CategoricalChart-BcYU7xxq.js";import"./tooltipContext-BRlTPB2G.js";import"./AnimatedItems-DKynRxAN.js";import"./useAnimationId-D83gTctj.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BKTeT_Dl.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DPtxPHYL.js";import"./RegisterGraphicalItemId-BYWDLggr.js";import"./ErrorBarContext-B9tnwNW4.js";import"./GraphicalItemClipPath-CFCGDJ4D.js";import"./SetGraphicalItem-BtUL3que.js";import"./getZIndexFromUnknown-DutFrb7v.js";import"./graphicalItemSelectors-jSDhtP4D.js";import"./Curve-DDP5uwdK.js";import"./step-BMQa1wmq.js";import"./path-DyVhHtw_.js";import"./ActivePoints-x13vM-lM.js";import"./Dot-DM8ASB1e.js";import"./getRadiusAndStrokeWidthFromDot-Dj6bNAvM.js";import"./useElementOffset-BFqwe0iW.js";import"./uniqBy-dt3axYWo.js";import"./iteratee-E5lawuru.js";import"./Cross-4E-QbQ6H.js";import"./Sector-CxvJl0Zv.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)};var m,s,n;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Yt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Yt as __namedExportsOrder,Ct as default};
