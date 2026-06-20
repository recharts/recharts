import{R as t}from"./iframe-DhLiHYA9.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-lwpN76oK.js";import{R as l}from"./zIndexSlice-0EuGNLI-.js";import{C as x}from"./ComposedChart-CGZKvMzU.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CA-MVV53.js";import{L as a}from"./Line-CUQX2rtT.js";import{X as c}from"./XAxis-BpfFXf4g.js";import{T as g}from"./Tooltip-N3umdugN.js";import"./preload-helper-Dp1pzeXC.js";import"./get-BqOTE_u_.js";import"./CartesianAxis-dYZ4VxrX.js";import"./Layer-DglRvEKa.js";import"./resolveDefaultProps-CBPzFJH6.js";import"./Text-D4hUpX6-.js";import"./DOMUtils-BQBCpy3J.js";import"./isWellBehavedNumber-BNidD9Ks.js";import"./Label-Cv4QmxCb.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CvBhZ60T.js";import"./index-NG-Tdzng.js";import"./index-BeAu05Eb.js";import"./types-CH1fGuRR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-B1LCQJVr.js";import"./immer-T8RsDcjn.js";import"./RechartsWrapper-CvYHcQFm.js";import"./index-xOxo7x3f.js";import"./index-DKmBjdDb.js";import"./axisSelectors-DL47bbYB.js";import"./d3-scale-B_WyWKG3.js";import"./CartesianChart-BdXEaLDP.js";import"./chartDataContext-Bcb5nIkO.js";import"./CategoricalChart-CN-mt1-6.js";import"./tooltipContext-DJo_2VKA.js";import"./AnimatedItems-C2gGUiAe.js";import"./useAnimationId-PUY_wn7H.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Bk9D_f7f.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CPYzaIXa.js";import"./RegisterGraphicalItemId-BJxK6F3S.js";import"./ErrorBarContext-BjQaCHVv.js";import"./GraphicalItemClipPath-Bu7CM1zV.js";import"./SetGraphicalItem-t7MzgWgu.js";import"./getZIndexFromUnknown-ZGbtEsX-.js";import"./graphicalItemSelectors-BUjTqtHs.js";import"./Curve-rXpWLPqx.js";import"./step-DzpE9YVj.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CK5L63lz.js";import"./Dot-pp5BV2FH.js";import"./getRadiusAndStrokeWidthFromDot-DKfDk9su.js";import"./useElementOffset-fe1mw0WL.js";import"./uniqBy-BN7HPTpI.js";import"./iteratee-BBagmPW9.js";import"./Cross-CyCVJVF4.js";import"./Sector-DlqSWAUI.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
