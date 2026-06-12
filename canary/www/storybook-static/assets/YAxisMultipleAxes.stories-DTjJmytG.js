import{R as t}from"./iframe-Y7LdsWUd.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-NkmeWl3a.js";import{R as l}from"./zIndexSlice-g6buOjPK.js";import{C as x}from"./ComposedChart-ByCfqa9r.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-5vL1EUfm.js";import{L as a}from"./Line-BAxmXSR0.js";import{X as c}from"./XAxis-BEn1qEwo.js";import{T as g}from"./Tooltip-Cng7Ygo_.js";import"./preload-helper-Dp1pzeXC.js";import"./get-Bl7iuY_G.js";import"./CartesianAxis-1pwFs9AH.js";import"./Layer-CYliWRnL.js";import"./resolveDefaultProps-EYxijulG.js";import"./Text-c0cVIonZ.js";import"./DOMUtils-CMyDK0NY.js";import"./isWellBehavedNumber-D670Qdyl.js";import"./Label-B9hAjr1E.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-0MAyxgOl.js";import"./index-Bl2KzI3D.js";import"./index-BqhFnWN1.js";import"./types-D3i7dddg.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-_dHdD9iU.js";import"./immer-CTHxJNnh.js";import"./RechartsWrapper-Bz-cSrDT.js";import"./index-468XY5rC.js";import"./index-D9y4Xpfg.js";import"./axisSelectors-BKqrOX2w.js";import"./d3-scale-D0YrMM7V.js";import"./string-B6fdYHAA.js";import"./CartesianChart-DUAWwhpK.js";import"./chartDataContext-DK8YFcnh.js";import"./CategoricalChart-BHdb9DL7.js";import"./tooltipContext-BCXV1TFr.js";import"./AnimatedItems-BfJAUGfB.js";import"./useAnimationId-BlokCSh_.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DJ2W9D_9.js";import"./ActiveShapeUtils-OWHYk5VD.js";import"./RegisterGraphicalItemId-5Onr2PDk.js";import"./ErrorBarContext-D6wkc7ti.js";import"./GraphicalItemClipPath-BBsC6IJX.js";import"./SetGraphicalItem-rvXq_PhO.js";import"./getZIndexFromUnknown-BqJYfi6g.js";import"./graphicalItemSelectors-CgsEhyPw.js";import"./Curve-Bl41E8Lc.js";import"./step-Dw52zkwm.js";import"./path-DyVhHtw_.js";import"./ActivePoints-a2kVi7nQ.js";import"./Dot-CVhodtQ4.js";import"./getRadiusAndStrokeWidthFromDot-BgmRcAea.js";import"./useElementOffset-BkAfi0ht.js";import"./uniqBy-PH-f1KA8.js";import"./iteratee-S0C_aG4j.js";import"./Cross-BKF9cuwV.js";import"./Sector-C69Sioi8.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
