import{R as t}from"./iframe-BfLA0-xE.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BCvzYcvQ.js";import{R as l}from"./zIndexSlice-CxHl2f9g.js";import{C as x}from"./ComposedChart-Bx2fTno4.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-Cl-Lo5Rp.js";import{L as a}from"./Line-BoI2xV5j.js";import{X as c}from"./XAxis-WPatnG2H.js";import{T as g}from"./Tooltip-Btjpelxl.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-KTqJ5zS0.js";import"./Text-ClB8EwPj.js";import"./resolveDefaultProps-DtsxpH35.js";import"./DOMUtils-AQyyON10.js";import"./isWellBehavedNumber-D8uyT4tB.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-t--MbcyW.js";import"./index-B543iUM5.js";import"./index-BW364ill.js";import"./RechartsWrapper-BAR0yTLB.js";import"./index-BjcF9KIO.js";import"./index-Ua2Ph-JY.js";import"./throttle-B4u_I-fq.js";import"./renderedTicksSlice-CGglt0-o.js";import"./axisSelectors-k3PcgN9v.js";import"./d3-scale-d2-bssiM.js";import"./CartesianAxis-C347muns.js";import"./Layer-D2dAv-AD.js";import"./types-CMVKXdeT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-BFvPG-1n.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-BkXNVBYX.js";import"./chartDataContext-CGwkpgmd.js";import"./CategoricalChart-Y3X7k6Lu.js";import"./tooltipContext-6iBApvE7.js";import"./AnimatedItems-27DP4DZS.js";import"./useAnimationId-Uu44n6G0.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CJAi1gPv.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DGNTXBhg.js";import"./RegisterGraphicalItemId-E0HC7VAQ.js";import"./ErrorBarContext-CpZDTVtA.js";import"./GraphicalItemClipPath-Cw3vhXUK.js";import"./SetGraphicalItem-DquyLFCZ.js";import"./getZIndexFromUnknown-Bo5w_uCr.js";import"./graphicalItemSelectors-BLLskjKC.js";import"./Curve-BA6tKfOd.js";import"./step-V7C6Dr8u.js";import"./path-DyVhHtw_.js";import"./ActivePoints-paS1xZt9.js";import"./Dot-BEY7sYgl.js";import"./getRadiusAndStrokeWidthFromDot-je8BEofk.js";import"./useElementOffset-cUYp3EBW.js";import"./uniqBy-B3gL9YDt.js";import"./iteratee-cDLRKSLL.js";import"./Cross-DNC6Puay.js";import"./Sector-Cu3c-EO-.js";const vt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Kt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Kt as __namedExportsOrder,vt as default};
