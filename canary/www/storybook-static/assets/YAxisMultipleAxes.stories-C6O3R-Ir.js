import{R as t}from"./iframe-ZXtfb4yD.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CpZ4maZ2.js";import{R as l}from"./zIndexSlice-BYWdHlTe.js";import{C as x}from"./ComposedChart-C5IMSRfW.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DcJP8DZE.js";import{L as a}from"./Line-BY4VeKsv.js";import{X as c}from"./XAxis-DLWMZedb.js";import{T as g}from"./Tooltip-cOzwM1Wl.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-C_XzWtLw.js";import"./Text-DV_FynOi.js";import"./resolveDefaultProps-xIIdHmm9.js";import"./DOMUtils-C0C9d7iI.js";import"./isWellBehavedNumber-DxKoG7Ba.js";import"./useId-0Gl7JyMf.js";import"./useBackwardsCompatibleTheme-C4wl67U3.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Ck2jrevN.js";import"./index-SIPxA2ka.js";import"./index-Bo6RSdvh.js";import"./RechartsWrapper-DeOd3865.js";import"./axisSelectors-B-7UnAhK.js";import"./throttle-UQol_oMR.js";import"./d3-scale-CLk4WDw9.js";import"./index-BxR6IAN7.js";import"./index-CZ8YJbDi.js";import"./renderedTicksSlice-D1lcrg0m.js";import"./index-Bj13Gnlq.js";import"./CartesianAxis-DsWhwIZU.js";import"./Layer-BNcbfxWn.js";import"./types-D_Nat2yf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-yzowS7n9.js";import"./chartDataContext-Vgws8ib_.js";import"./CategoricalChart-DidrDbM3.js";import"./AnimatedItems-sQcK0Cnf.js";import"./useAnimationId-BzcgW_0X.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Bc1PlKQQ.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-C4fIJN7R.js";import"./tooltipContext-1PumGPBU.js";import"./RegisterGraphicalItemId-BLTTAUNU.js";import"./ErrorBarContext-CM-xdG0H.js";import"./GraphicalItemClipPath-Du8p1Oou.js";import"./SetGraphicalItem-QMczFyB9.js";import"./getZIndexFromUnknown-DBEGKWYw.js";import"./useGraphicalItemIdentity-DEuXq7FQ.js";import"./Curve-DVYTdeVn.js";import"./step-CUKBWZW0.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DR8A-WKS.js";import"./Dot-DNV1GHEu.js";import"./getRadiusAndStrokeWidthFromDot-B0p8dzOs.js";import"./useElementOffset-D-a4c_KO.js";import"./uniqBy-CHRSp9IT.js";import"./iteratee-CkKkD8L0.js";import"./Cross-DUw-sG1Q.js";import"./Sector-Bluxtbag.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
