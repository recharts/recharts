import{R as t}from"./iframe-Bd_RatVP.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-KJSd-Ivi.js";import{R as l}from"./zIndexSlice-Bs3cmT56.js";import{C as x}from"./ComposedChart-C0J2irJb.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CxdHlLTG.js";import{L as a}from"./Line-ChcwwI6C.js";import{X as c}from"./XAxis-CxMafso2.js";import{T as g}from"./Tooltip-DhtMBVBn.js";import"./preload-helper-Dp1pzeXC.js";import"./get-D2eywazJ.js";import"./CartesianAxis-DYnLL5ki.js";import"./Layer-CSKVUvgL.js";import"./resolveDefaultProps-CDT2X36A.js";import"./Text-CID6qmBG.js";import"./DOMUtils-BvIcVirU.js";import"./isWellBehavedNumber-vEzZ_uBL.js";import"./Label-_LaAHgCb.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CW5Q6iO0.js";import"./index-DuMhoHLg.js";import"./index-AIDQn2zy.js";import"./types-B_YM2FYy.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BaNjR9ZK.js";import"./immer-K2Jr_glw.js";import"./RechartsWrapper-DoiYSoxN.js";import"./index-CtCj_c9U.js";import"./index-KgYFzznq.js";import"./axisSelectors-iePK0TpX.js";import"./d3-scale-8NOk75ft.js";import"./string-B6fdYHAA.js";import"./CartesianChart-BgWder66.js";import"./chartDataContext-2ZBdxPuo.js";import"./CategoricalChart-B7ZdZ9dp.js";import"./tooltipContext-B1X7LxIq.js";import"./AnimatedItems-CTN3MMrY.js";import"./useAnimationId-WD2dkHdB.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BiRALYrC.js";import"./ActiveShapeUtils-CKHNZG0U.js";import"./RegisterGraphicalItemId-CSpPBahn.js";import"./ErrorBarContext-CXGw6SKK.js";import"./GraphicalItemClipPath-CqhiUh0n.js";import"./SetGraphicalItem-CCPPdaQB.js";import"./getZIndexFromUnknown-DSNtHs0J.js";import"./graphicalItemSelectors-B_3X-Q6o.js";import"./Curve-BKajUmGn.js";import"./step-D0gWFOvv.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BJ3mN3TL.js";import"./Dot-BDk1ts5p.js";import"./getRadiusAndStrokeWidthFromDot-CrS1vnPP.js";import"./useElementOffset-BeZVN4uM.js";import"./uniqBy-ROVpOYmf.js";import"./iteratee-CZJ3xSSv.js";import"./Cross-BDN9EJ3q.js";import"./Sector-DcsfkYNL.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
