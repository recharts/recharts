import{R as t}from"./iframe-BuTq1GDI.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CWQHnkYU.js";import{R as l}from"./zIndexSlice-nFeNXjL9.js";import{C as x}from"./ComposedChart-DnSJfh-P.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CZIcjIp7.js";import{L as a}from"./Line-Cnlbc_ep.js";import{X as c}from"./XAxis-DP0H9aj2.js";import{T as g}from"./Tooltip-7n03uYPm.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DQJj2wvU.js";import"./Text-CBEIE7g5.js";import"./resolveDefaultProps-BvjC40ji.js";import"./pageBackground-BebQB_1W.js";import"./useId-haS85Qmm.js";import"./ZIndexLayer-eqYDQc0b.js";import"./index-BVmeVX9a.js";import"./index-C37pRckm.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DrJ1eC5o.js";import"./throttle-Bg_wxbeM.js";import"./dataEntryStyles-Cr3Y7I5g.js";import"./axisSelectors-C8SZQKCy.js";import"./d3-scale-B-VNUnVY.js";import"./CartesianAxis-DubJAr-q.js";import"./Layer-BRqC8U5C.js";import"./types-CybiymHT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BeHs1Q1W.js";import"./index-CEj4l4tR.js";import"./index-Uz7QCUjK.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-tdUtbdK0.js";import"./index-CvYG7xEe.js";import"./CartesianChart-BC3FDidD.js";import"./chartDataContext-DlVD7MBP.js";import"./CategoricalChart-DnThaA0e.js";import"./activeStyles-CQul6riI.js";import"./useAnimationId-PmZ8IQYc.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-nbayO8Mj.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-6CQyjc5t.js";import"./tooltipContext-DQPd87t6.js";import"./RegisterGraphicalItemId-DoGvUQF1.js";import"./ErrorBarContext-DxkrfkAD.js";import"./SetGraphicalItem-B6ig3Thz.js";import"./getZIndexFromUnknown-Bk9fUZU7.js";import"./useEffectiveDataKey-BAtZCpA-.js";import"./omit-CRLPKLD5.js";import"./isArguments-yB-y1yaH.js";import"./Curve-C8MCRMFW.js";import"./step-0wDi7QEY.js";import"./path-DyVhHtw_.js";import"./ActivePoints-D-jCEXzk.js";import"./Dot-DXKfrrZj.js";import"./Symbols-B1k2vOqr.js";import"./symbol-HuKWM0tX.js";import"./getRadiusAndStrokeWidthFromDot-B4lTyA66.js";import"./useElementOffset-F7lpUKWy.js";import"./uniqBy-DEYzcYqJ.js";import"./iteratee-BH09cOPg.js";import"./Cross-CQ0Io6Gh.js";import"./Sector-D1ZRqP5K.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
