import{R as t}from"./iframe-BCtefvpd.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-CXAPbw5z.js";import{R as l}from"./zIndexSlice-DLtTjfC4.js";import{C as x}from"./ComposedChart-B-FcUFTM.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-D4Vx9-GH.js";import{L as a}from"./Line-DA0OD4w1.js";import{X as c}from"./XAxis-DRnpS9Qy.js";import{T as g}from"./Tooltip-DUz44eR_.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DFMRZS9d.js";import"./CartesianAxis-CgS78KcM.js";import"./Layer-sJOcNnwh.js";import"./resolveDefaultProps-CVGnLM0G.js";import"./Text-BeTx0pmM.js";import"./DOMUtils-BhG_b4P2.js";import"./isWellBehavedNumber-OR7M83Gu.js";import"./Label-CC74cj4o.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DEcD4grM.js";import"./index-DA3zv02Q.js";import"./index-BqWWOLm7.js";import"./types-Cdi5Da9N.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-kBir8HDa.js";import"./immer-DIhiteEo.js";import"./RechartsWrapper-Cp9N8_Bk.js";import"./index-BcefENIv.js";import"./index-C3JFnZZi.js";import"./axisSelectors-DOKBLmJM.js";import"./d3-scale-CVyajGd1.js";import"./string-B6fdYHAA.js";import"./CartesianChart-COa7p1e9.js";import"./chartDataContext-qlylvQc9.js";import"./CategoricalChart-B2VvTH4v.js";import"./tooltipContext-D86cnIru.js";import"./AnimatedItems-C8IovmVa.js";import"./useAnimationId-Bcchcs5m.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-LhiWNSwp.js";import"./ActiveShapeUtils-4S977V9W.js";import"./RegisterGraphicalItemId-6mFWr6Iy.js";import"./ErrorBarContext-Cvn2xdUy.js";import"./GraphicalItemClipPath-B0sf68Y7.js";import"./SetGraphicalItem-DFYwZ-xH.js";import"./getZIndexFromUnknown-DzLokJsa.js";import"./graphicalItemSelectors-CDWfuhcE.js";import"./Curve-Du81AbUE.js";import"./step-trh3ABoh.js";import"./path-DyVhHtw_.js";import"./ActivePoints-B96wLJJz.js";import"./Dot-B9o-wKF1.js";import"./getRadiusAndStrokeWidthFromDot-w6-BSgwG.js";import"./useElementOffset-wN2BygXD.js";import"./uniqBy-Cj5mgadw.js";import"./iteratee-BlUr9JAT.js";import"./Cross-De22kgZF.js";import"./Sector-BL5iQ8kE.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
