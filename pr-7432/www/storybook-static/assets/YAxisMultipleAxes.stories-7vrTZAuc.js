import{R as t}from"./iframe-BAIqIWNA.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-Bm2PYPOq.js";import{R as l}from"./zIndexSlice-CH0jeNcq.js";import{C as x}from"./ComposedChart-Hcr-ILe-.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-B6VjE44L.js";import{L as a}from"./Line-Bq1IM0A9.js";import{X as c}from"./XAxis-BESD5mtP.js";import{T as g}from"./Tooltip-BP6t96w5.js";import"./preload-helper-Dp1pzeXC.js";import"./get-BRwdZQjD.js";import"./CartesianAxis-C8GWRYR8.js";import"./Layer-B1lMYI05.js";import"./resolveDefaultProps-i7ykL5qD.js";import"./Text-zDVT9NAV.js";import"./DOMUtils-DVLfSCIT.js";import"./isWellBehavedNumber-CNdP1Ytp.js";import"./Label-Bax8HmP7.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-_81h3bN-.js";import"./index-DEPXziQr.js";import"./index-8mm5rYzH.js";import"./types-CesEI09P.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BzbX13g0.js";import"./throttle-RdvYAJ7W.js";import"./RechartsWrapper-C_-Hq-nw.js";import"./index-toxz65-Z.js";import"./index-CyrXrpRf.js";import"./axisSelectors-DSdgiRZF.js";import"./d3-scale-XjdmCel8.js";import"./CartesianChart-rcoBq7rb.js";import"./chartDataContext-B9E6qJUl.js";import"./CategoricalChart-2sY7x5Tz.js";import"./tooltipContext-DGLSg2Ug.js";import"./AnimatedItems-C-tOmxqX.js";import"./useAnimationId-BLdV4NOG.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BcFE5tg_.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Cmphxx7v.js";import"./RegisterGraphicalItemId-D75UFrcW.js";import"./ErrorBarContext-kr74OQbY.js";import"./GraphicalItemClipPath-hNmJpUVR.js";import"./SetGraphicalItem-CgGxkUt7.js";import"./getZIndexFromUnknown-BSd0fS_L.js";import"./graphicalItemSelectors-C-Ixjzq9.js";import"./Curve-DkPKhJGD.js";import"./step-BUpdG0kT.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CRPdmnzs.js";import"./Dot-BHbC6SWf.js";import"./getRadiusAndStrokeWidthFromDot-B3GO9P3F.js";import"./useElementOffset-Y89N9bd1.js";import"./uniqBy-CLC5nVUH.js";import"./iteratee-D4GVextx.js";import"./Cross-CBjNFZem.js";import"./Sector-Bm_uS1EM.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
