import{R as t}from"./iframe-DPsVQxbE.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BS8G-HFw.js";import{R as l}from"./zIndexSlice-1brzNbqc.js";import{C as x}from"./ComposedChart-DGN6ie7I.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DoXsTAuM.js";import{L as a}from"./Line-CWQOFj66.js";import{X as c}from"./XAxis-CYt1-RxN.js";import{T as g}from"./Tooltip-BlDZy0rG.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-D5qEkVje.js";import"./Layer-DGWGYgzk.js";import"./resolveDefaultProps-BIwKMjhn.js";import"./Text-B4JB7zPj.js";import"./DOMUtils-D6NwHzOL.js";import"./isWellBehavedNumber-Chc7VT9N.js";import"./Label-C2Rhcs8s.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-MqiRX2rl.js";import"./index-B1wCn-3B.js";import"./index-B_Y-xmpq.js";import"./types-ColFKgNS.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CC_kknQZ.js";import"./throttle-Cj8wAsiz.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-BCXiW-f1.js";import"./index-DB0est9g.js";import"./index-CYr1DPeq.js";import"./axisSelectors-CEp7-2uA.js";import"./d3-scale-BNrinBxy.js";import"./CartesianChart-DMOmnFKA.js";import"./chartDataContext-Cc6AxfML.js";import"./CategoricalChart-Bd2BlG5y.js";import"./tooltipContext-JSmrFWXh.js";import"./AnimatedItems-BlseN1Dx.js";import"./useAnimationId-CtVxLpdf.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BYpMekmC.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-iUHBQUNz.js";import"./RegisterGraphicalItemId-MGM9At2R.js";import"./ErrorBarContext-B2jO-XEn.js";import"./GraphicalItemClipPath-Dj3im7iZ.js";import"./SetGraphicalItem-CNwLGNNY.js";import"./getZIndexFromUnknown-Pv3L6gc-.js";import"./graphicalItemSelectors-CnK9mn1U.js";import"./Curve-DtEeL5Gu.js";import"./step-BU8nTjqD.js";import"./path-DyVhHtw_.js";import"./ActivePoints-qcduKxyw.js";import"./Dot-COXcIf5D.js";import"./getRadiusAndStrokeWidthFromDot-f0ZiEHIa.js";import"./useElementOffset-d53krvrq.js";import"./uniqBy-DsIVeImw.js";import"./iteratee-CvNQaPV0.js";import"./Cross-j0ZUM9sw.js";import"./Sector-CKL9xBrw.js";const Yt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const vt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,vt as __namedExportsOrder,Yt as default};
