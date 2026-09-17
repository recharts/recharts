import{R as t}from"./iframe-DqSUlz6e.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DegTMzbt.js";import{R as l}from"./zIndexSlice-DtAX5jMh.js";import{C as x}from"./ComposedChart-j0xuhBF1.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BTYRpRZj.js";import{L as a}from"./Line-Dnsu9Jwi.js";import{X as c}from"./XAxis-DmD7UEym.js";import{T as g}from"./Tooltip-Dn2nlbp1.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-COTXmSNC.js";import"./Text-rxtWTnFK.js";import"./resolveDefaultProps-CwPSCmmx.js";import"./DOMUtils-BO-LSrQT.js";import"./isWellBehavedNumber-DsplX-23.js";import"./useId-DIxfitZT.js";import"./useBackwardsCompatibleTheme-Cpo7LNnn.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-w7X3Qx8i.js";import"./index-CvBr5MD5.js";import"./index-Dw4JWeKW.js";import"./RechartsWrapper-B0IxRf2C.js";import"./axisSelectors-Bh_wIpJu.js";import"./throttle-DHy4hNYv.js";import"./d3-scale-CkMKmC-4.js";import"./index-BuJIoyr5.js";import"./index-7NBQQOYh.js";import"./renderedTicksSlice-Iw1xe9hi.js";import"./index-GNQmxyz-.js";import"./CartesianAxis-BPJ_bm1Z.js";import"./Layer-CcVS5xmO.js";import"./types-BK6ZMP2B.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-BZt0ttBq.js";import"./chartDataContext-DLE2_VFr.js";import"./CategoricalChart-Chjdlx8c.js";import"./AnimatedItems-DZn2nJaS.js";import"./useAnimationId-B7qxPui8.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C5vSLqhQ.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-D4bP4Qte.js";import"./tooltipContext-DVKBLdRP.js";import"./RegisterGraphicalItemId-GuyP8w5W.js";import"./ErrorBarContext-C2faiS6t.js";import"./GraphicalItemClipPath-CXwxXFyI.js";import"./SetGraphicalItem-BNDeXFGY.js";import"./getZIndexFromUnknown-B1qMJt2L.js";import"./useGraphicalItemIdentity-P2fDicxj.js";import"./Curve-XYmMSxrQ.js";import"./step-C_sGtyz6.js";import"./path-DyVhHtw_.js";import"./ActivePoints-QMBiBXLX.js";import"./Dot-BfFUZLy_.js";import"./getRadiusAndStrokeWidthFromDot-HVfHJii_.js";import"./useElementOffset-CJw6FlW4.js";import"./uniqBy-BqET5rKO.js";import"./iteratee-rBmKTZZO.js";import"./Cross-BZSuUUY5.js";import"./Sector-Ww3FvxMs.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
