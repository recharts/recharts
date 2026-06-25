import{R as t}from"./iframe-Bwb61Kb3.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-CFeDU12P.js";import{R as l}from"./zIndexSlice-D31yQesP.js";import{C as x}from"./ComposedChart-BS2K9hhM.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-C9qBkTRy.js";import{L as a}from"./Line-C4AjvgS0.js";import{X as c}from"./XAxis-CSW3SlTU.js";import{T as g}from"./Tooltip-CsFTpfYi.js";import"./preload-helper-Dp1pzeXC.js";import"./get-Cnvgfe2T.js";import"./CartesianAxis-BPlmGRVp.js";import"./Layer-Ci9WruQM.js";import"./resolveDefaultProps-BSJiJTDh.js";import"./Text-DNg8TFYr.js";import"./DOMUtils-ChqDP5B4.js";import"./isWellBehavedNumber-BUfCnJUB.js";import"./Label-C3p-lZQP.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Djnma_X0.js";import"./index-u4qnc4RM.js";import"./index-DHxQl28E.js";import"./types-Bi-bjjeC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DltxEF0x.js";import"./immer-_NZCx9ap.js";import"./RechartsWrapper-BmkLmt4T.js";import"./index-VoBgttoT.js";import"./index-CQ8V2YYj.js";import"./axisSelectors-C6KxvASB.js";import"./d3-scale-jv5Gnb2-.js";import"./CartesianChart-BNE4fepl.js";import"./chartDataContext-D41xMC5d.js";import"./CategoricalChart-BUwoY-M8.js";import"./tooltipContext-DjXrxuIo.js";import"./AnimatedItems-4rj5S85S.js";import"./useAnimationId-h0tb0wwo.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CMlDVrj7.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-ZkpQ4WD_.js";import"./RegisterGraphicalItemId-BzHAnQiR.js";import"./ErrorBarContext-CyOyQ4I7.js";import"./GraphicalItemClipPath-CxkydB3y.js";import"./SetGraphicalItem-BRIRFn2y.js";import"./getZIndexFromUnknown-zcnBuJfC.js";import"./graphicalItemSelectors-hamdw4Lr.js";import"./Curve-BGl8TuYV.js";import"./step-CnKejACU.js";import"./path-DyVhHtw_.js";import"./ActivePoints-oLE2SAgh.js";import"./Dot-Bt6enifh.js";import"./getRadiusAndStrokeWidthFromDot-CF1gEAgf.js";import"./useElementOffset-ux3wQbfq.js";import"./uniqBy-CdjoT2zh.js";import"./iteratee-BFWaDkBd.js";import"./Cross-BaVkOzj0.js";import"./Sector-CQFUYPvT.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
