import{R as t}from"./iframe-DUrcY2US.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BFaz6XgS.js";import{R as l}from"./zIndexSlice-D23NNcc-.js";import{C as x}from"./ComposedChart-BFk3L6F0.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BMCbUDJ0.js";import{L as a}from"./Line-aGtxROI3.js";import{X as c}from"./XAxis-CVek6dQA.js";import{T as g}from"./Tooltip-qfmqJNg1.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-jsyQa0HM.js";import"./Layer-CYHvsOgc.js";import"./resolveDefaultProps-Bkhh-EU7.js";import"./Text-DMamusUo.js";import"./DOMUtils-B_GdkGLj.js";import"./isWellBehavedNumber-U-rEAUF7.js";import"./Label-Dq5ZDKy5.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-bKTnWuHr.js";import"./index-CZQ13dE7.js";import"./index-DfVYeqBk.js";import"./types-BMr8FEQl.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BAoXnBM4.js";import"./throttle-u55YHgne.js";import"./RechartsWrapper-FovoggR2.js";import"./index-CeyJFFE6.js";import"./index-CE9cEvcF.js";import"./axisSelectors-BmIoikMn.js";import"./d3-scale-CjT_6rZL.js";import"./CartesianChart-UL0Qt6Ls.js";import"./chartDataContext-BTSN0B0I.js";import"./CategoricalChart-BS_7Qovh.js";import"./tooltipContext-BLJE2Shd.js";import"./AnimatedItems-BfwNRs0j.js";import"./useAnimationId-DrcrHxjP.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D3ZfsELa.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DSfcbHhF.js";import"./RegisterGraphicalItemId-BwmS1f__.js";import"./ErrorBarContext-Dl94M6VN.js";import"./GraphicalItemClipPath-BTF9cLBi.js";import"./SetGraphicalItem-CXjv9Cz3.js";import"./getZIndexFromUnknown-CZirEzLE.js";import"./graphicalItemSelectors-pAvrXMwD.js";import"./Curve-CuMyGQ3o.js";import"./step-C_R_L_9o.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CxX0cO8w.js";import"./Dot-CQSe7hSi.js";import"./getRadiusAndStrokeWidthFromDot-CXn6OxOm.js";import"./useElementOffset-C0Oicg6-.js";import"./uniqBy-QPknp_js.js";import"./iteratee-Chr2aMTO.js";import"./Cross-KHTsshSa.js";import"./Sector-DwM6vwwA.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
