import{R as t}from"./iframe-yjkt2IH9.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DCAA5tHI.js";import{R as l}from"./zIndexSlice-DBLHpMzC.js";import{C as x}from"./ComposedChart-BoyqtaUh.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-D6OTNo3l.js";import{L as a}from"./Line-C6R7zilS.js";import{X as c}from"./XAxis-BmTXySuf.js";import{T as g}from"./Tooltip-CJ03Z8zE.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DNJm325E.js";import"./Text-DGqsL-zN.js";import"./resolveDefaultProps-C1hVLYYK.js";import"./DOMUtils-Cld05Rut.js";import"./isWellBehavedNumber-DxZkGz0e.js";import"./useId-DlJSbOEb.js";import"./useBackwardsCompatibleTheme-D9TCWuL1.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-akraxgUp.js";import"./index-BRngxrU7.js";import"./index-CV8Eusxy.js";import"./RechartsWrapper-DXGMrlZO.js";import"./axisSelectors-Jt8yF-QI.js";import"./throttle-DNcBTn_q.js";import"./d3-scale-nv5WZ-MU.js";import"./index-PsDnrYhU.js";import"./index-BvMKJHsM.js";import"./renderedTicksSlice-CrS6eWPX.js";import"./index-BQpCoukA.js";import"./CartesianAxis-B6MEtpsI.js";import"./Layer-DkCnbteg.js";import"./types-cDH95ogz.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-B1g09AHb.js";import"./chartDataContext-B80RtjhA.js";import"./CategoricalChart-CKH0Hy4l.js";import"./AnimatedItems-DOXtHAOp.js";import"./useAnimationId-CMvFcnUz.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-w3oMEOnu.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CUarEX30.js";import"./tooltipContext-D1A0fqXQ.js";import"./RegisterGraphicalItemId-Dy2Y8QPA.js";import"./ErrorBarContext-CCR7Bc51.js";import"./GraphicalItemClipPath-CrsQrVv0.js";import"./SetGraphicalItem-C0bV6rYE.js";import"./getZIndexFromUnknown-BM-I02bN.js";import"./useGraphicalItemIdentity-C3_xntvz.js";import"./Curve-CkZxc2JO.js";import"./step-DDqhC4ci.js";import"./path-DyVhHtw_.js";import"./ActivePoints-D4dpp1py.js";import"./Dot-DjkzHWoo.js";import"./getRadiusAndStrokeWidthFromDot-CGTWwDkJ.js";import"./useElementOffset-BuUcmoJ7.js";import"./uniqBy-DzHnGdpm.js";import"./iteratee-Bytpq0NN.js";import"./Cross-BQjK_Sjj.js";import"./Sector-fswU8txp.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Rt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Rt as __namedExportsOrder,Mt as default};
