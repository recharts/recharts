import{R as t}from"./iframe-CA6cNkus.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-CFfqmSxu.js";import{R as l}from"./zIndexSlice-O14BPpZi.js";import{C as x}from"./ComposedChart-D-kg5Bmb.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BxGRO0Xo.js";import{L as a}from"./Line-o5rstLhB.js";import{X as c}from"./XAxis-C-xfE_6F.js";import{T as g}from"./Tooltip-CqtcjeX_.js";import"./preload-helper-Dp1pzeXC.js";import"./get-CFJz0ojL.js";import"./CartesianAxis-Bnc9pIGx.js";import"./Layer-D-oRDXko.js";import"./resolveDefaultProps-C9L5vbOj.js";import"./Text-NUcA7Wwc.js";import"./DOMUtils-BVqsAse9.js";import"./isWellBehavedNumber-BkzajOOq.js";import"./Label-B1-Zgg5t.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-L_zBn_oX.js";import"./index-CfaPbByM.js";import"./index-DbciZ0iE.js";import"./types-BSXU9Oqu.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DwJ0KlHq.js";import"./immer-Dmy9GJDo.js";import"./RechartsWrapper-BrfCX34J.js";import"./index-DQmIhdua.js";import"./index-PI3smBoN.js";import"./axisSelectors-BqSveJ2d.js";import"./d3-scale-C6_zgknL.js";import"./CartesianChart-B9pQBHyJ.js";import"./chartDataContext-D73bINqU.js";import"./CategoricalChart-D2WxsK_0.js";import"./tooltipContext-B8e44Ric.js";import"./AnimatedItems-B54-TdNS.js";import"./useAnimationId-b25y8QfL.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-7u_GUvK2.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DCmnuM_G.js";import"./RegisterGraphicalItemId-pJmMrti4.js";import"./ErrorBarContext-arfdjlYp.js";import"./GraphicalItemClipPath-B1gJnBar.js";import"./SetGraphicalItem-BUx_zIn8.js";import"./getZIndexFromUnknown-c778BFGd.js";import"./graphicalItemSelectors-BC60pa2o.js";import"./Curve-DAXRhNFX.js";import"./step-QPa8K90E.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DaJcax4p.js";import"./Dot-CZ4GTYkF.js";import"./getRadiusAndStrokeWidthFromDot-BwfCKTiN.js";import"./useElementOffset-rnxS_oDH.js";import"./uniqBy-Clt69WpW.js";import"./iteratee-C8N0Znrl.js";import"./Cross-B4IxIp7C.js";import"./Sector-B7X01eOW.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
