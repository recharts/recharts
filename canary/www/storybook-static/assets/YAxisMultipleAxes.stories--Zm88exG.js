import{R as t}from"./iframe-D7yt-ZhS.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-C5MIsZgm.js";import{R as l}from"./zIndexSlice-B3_xMC6k.js";import{C as x}from"./ComposedChart-Bl4WegRH.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-Bz8odb4B.js";import{L as a}from"./Line-CuD-m0Re.js";import{X as c}from"./XAxis-dYNJxVBm.js";import{T as g}from"./Tooltip-BZvEkuly.js";import"./preload-helper-Dp1pzeXC.js";import"./get-Cebs6l6-.js";import"./CartesianAxis-CuPdOLrD.js";import"./Layer-B34T8oTs.js";import"./resolveDefaultProps-BUJk688E.js";import"./Text-DWwT0_EQ.js";import"./DOMUtils-DoEzEhWE.js";import"./isWellBehavedNumber-NaDCVAJY.js";import"./Label-C0p1CWe9.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BjlE0UF2.js";import"./index-CHXGCi4x.js";import"./index-nuP2vluJ.js";import"./types-CuLQosun.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DNerh-qI.js";import"./immer-HxqS16dW.js";import"./RechartsWrapper-CArYIH40.js";import"./index-CglBtasG.js";import"./index-8zJni8A2.js";import"./axisSelectors-CW8UYJLW.js";import"./d3-scale-BUBb-XjW.js";import"./string-B6fdYHAA.js";import"./CartesianChart-C6SOYYpl.js";import"./chartDataContext-_IqHUZU5.js";import"./CategoricalChart-CMCxIWsh.js";import"./tooltipContext-C7RfWuHE.js";import"./AnimatedItems-CUAQ84gk.js";import"./useAnimationId-gSm0_FsD.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-KnaRg_aq.js";import"./ActiveShapeUtils-C4okiOLS.js";import"./RegisterGraphicalItemId-Bj0awerq.js";import"./ErrorBarContext-BCc7VHSV.js";import"./GraphicalItemClipPath-CSwP3plz.js";import"./SetGraphicalItem-BFSgsIRt.js";import"./getZIndexFromUnknown-CYFadKVd.js";import"./graphicalItemSelectors-C0X08UDC.js";import"./Curve-DbP7_Dvx.js";import"./step-OtS6f_xO.js";import"./path-DyVhHtw_.js";import"./ActivePoints-KBOJcLZ_.js";import"./Dot-CAfCQdRP.js";import"./getRadiusAndStrokeWidthFromDot-BmHXs1fo.js";import"./useElementOffset-DEe0y9L2.js";import"./uniqBy-C2rlrQ-8.js";import"./iteratee-DZxnX6Pq.js";import"./Cross-DTyjdNNH.js";import"./Sector-4qI7YBii.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
