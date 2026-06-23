import{R as t}from"./iframe-Bc8uafj_.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-TQ1T3gnX.js";import{R as l}from"./zIndexSlice-DgIKKnku.js";import{C as x}from"./ComposedChart-BaFcNv6t.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BApgxmCZ.js";import{L as a}from"./Line-C5bCj1pP.js";import{X as c}from"./XAxis-D3U7ZnRc.js";import{T as g}from"./Tooltip-C015rWVA.js";import"./preload-helper-Dp1pzeXC.js";import"./get-CoQ1aHe8.js";import"./CartesianAxis-DjGZfAuA.js";import"./Layer-BOwFFWNG.js";import"./resolveDefaultProps-D94aQw_7.js";import"./Text-BXzZhQXx.js";import"./DOMUtils-Dp92goZ8.js";import"./isWellBehavedNumber-CGMb3shs.js";import"./Label-3HS03WWg.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BEkWbSjN.js";import"./index-9l0gGEIz.js";import"./index-DbEmmVI0.js";import"./types-unK8WfaH.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CDLhDidm.js";import"./immer-DhRCiF9y.js";import"./RechartsWrapper-ENbvc07n.js";import"./index-C3D0VAho.js";import"./index-Dhuj-LWB.js";import"./axisSelectors-BV-5bajo.js";import"./d3-scale-CuCR1Aws.js";import"./CartesianChart-D-LYbang.js";import"./chartDataContext-w3WNE9w3.js";import"./CategoricalChart-DEq5So-g.js";import"./tooltipContext-DDVEvwZL.js";import"./AnimatedItems-CDgcpQiE.js";import"./useAnimationId-CUqgRxQq.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B_1O-YWH.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-H6mpGyBM.js";import"./RegisterGraphicalItemId-CKxQU2m7.js";import"./ErrorBarContext-BEm0gOJL.js";import"./GraphicalItemClipPath-DUHE7Dv_.js";import"./SetGraphicalItem-DFzenvxr.js";import"./getZIndexFromUnknown-C5koHWL4.js";import"./graphicalItemSelectors-D1B9Vbyd.js";import"./Curve-DiuauwRl.js";import"./step-B3z5Hoe6.js";import"./path-DyVhHtw_.js";import"./ActivePoints-Byxcert_.js";import"./Dot-Ch1zQlh_.js";import"./getRadiusAndStrokeWidthFromDot-DFKmST2Y.js";import"./useElementOffset-IpZ5186H.js";import"./uniqBy-B_P63sZB.js";import"./iteratee-NS3BASsA.js";import"./Cross-BSJlEbZW.js";import"./Sector-Bt3XtUh8.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
