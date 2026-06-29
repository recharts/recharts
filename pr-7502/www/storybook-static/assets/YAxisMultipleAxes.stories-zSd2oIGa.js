import{R as t}from"./iframe-Xn2MpEZO.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-CAfubk2b.js";import{R as l}from"./zIndexSlice-Ci7uKtqk.js";import{C as x}from"./ComposedChart-B-mMwZkB.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-LXwcAE0e.js";import{L as a}from"./Line-mdDjoSBv.js";import{X as c}from"./XAxis-BfvOUMD4.js";import{T as g}from"./Tooltip-ZVdfnJ5l.js";import"./preload-helper-Dp1pzeXC.js";import"./get-a5GlobPr.js";import"./CartesianAxis-Ci5XT6aX.js";import"./Layer-DSBtIc_n.js";import"./resolveDefaultProps-ComQIB2r.js";import"./Text-DhiURvp0.js";import"./DOMUtils-C9OtDZJT.js";import"./isWellBehavedNumber-ikHr81yL.js";import"./Label-Drk02YPI.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-rkhqqfVD.js";import"./index-B9rMLYis.js";import"./index-BJjZAGkk.js";import"./types-BkUFHbYz.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DHtwTgZF.js";import"./immer-Df9E9w07.js";import"./RechartsWrapper-BxUke-Wy.js";import"./index-DCEv34s7.js";import"./index-BFHb-0iX.js";import"./axisSelectors-N1yg_9bS.js";import"./d3-scale-BhQeBFLV.js";import"./CartesianChart-qVEZ4DBv.js";import"./chartDataContext-CdM4lEIq.js";import"./CategoricalChart-BYw4mGkG.js";import"./tooltipContext-BGI5JWMg.js";import"./AnimatedItems-AezG2GF8.js";import"./useAnimationId-Dddlhxb8.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BNtGtL1T.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DjKDdlLp.js";import"./RegisterGraphicalItemId-CGNP0Yo_.js";import"./ErrorBarContext-C0h6VuZc.js";import"./GraphicalItemClipPath-Cc8lCQ6R.js";import"./SetGraphicalItem-97hX8Iat.js";import"./getZIndexFromUnknown-C4ETOTVk.js";import"./graphicalItemSelectors-IpQzZ0vj.js";import"./Curve-DX9_0-tw.js";import"./step-DkdplZJs.js";import"./path-DyVhHtw_.js";import"./ActivePoints-Du0eECBh.js";import"./Dot-BgDetyZ9.js";import"./getRadiusAndStrokeWidthFromDot-CWaP50r6.js";import"./useElementOffset-Byrz6AYu.js";import"./uniqBy-BTijv5vR.js";import"./iteratee-kQQ-_etq.js";import"./Cross-BxiQs5Fm.js";import"./Sector-C3_M6Ao2.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
