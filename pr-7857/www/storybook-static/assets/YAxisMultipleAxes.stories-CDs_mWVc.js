import{R as t}from"./iframe-Dj8Z6PrK.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CqPgB4kL.js";import{R as l}from"./zIndexSlice-Dis8kkjQ.js";import{C as x}from"./ComposedChart-CNA_xZ2H.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DvY7evuB.js";import{L as a}from"./Line-CRAh7N0O.js";import{X as c}from"./XAxis-CLQEk-FG.js";import{T as g}from"./Tooltip-4kfCVcdq.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BbvgfVci.js";import"./Text-c1trxvgH.js";import"./resolveDefaultProps-B-9SHASA.js";import"./DOMUtils-Bp6mSslK.js";import"./isWellBehavedNumber-BxyDY2ba.js";import"./useId-mH59anzj.js";import"./useBackwardsCompatibleTheme-BW-Eyyrw.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DjnDFneh.js";import"./index-Bx3PqqYW.js";import"./index-CA6chf5t.js";import"./RechartsWrapper-XYW6BA6T.js";import"./axisSelectors-B4pFlXeA.js";import"./throttle-CKdcDnHb.js";import"./d3-scale-1D4CewQG.js";import"./index-BBXX-7T2.js";import"./index-BMZ0mV9M.js";import"./renderedTicksSlice-zGdO_NAv.js";import"./index-MAP75uR-.js";import"./CartesianAxis-C_t42adW.js";import"./Layer-BAM8ommd.js";import"./types-CIgkXEGC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-pWv6R1U2.js";import"./chartDataContext-DnNc1DHN.js";import"./CategoricalChart-B9MwHwt-.js";import"./AnimatedItems-0rSS-oCT.js";import"./useAnimationId-DORt3e-J.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle--VBhlI6J.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-tGmUUFtW.js";import"./tooltipContext-DfeuGQT_.js";import"./RegisterGraphicalItemId-B_hXYrSH.js";import"./ErrorBarContext-D5I-eLzk.js";import"./GraphicalItemClipPath-WRfkTQaB.js";import"./SetGraphicalItem-vQHk7qeP.js";import"./getZIndexFromUnknown-BHeQQAxr.js";import"./useGraphicalItemIdentity-WP1DKWAp.js";import"./Curve-m98fbF0c.js";import"./step-ncsjPZ4b.js";import"./path-DyVhHtw_.js";import"./ActivePoints-Bg_cfUBG.js";import"./Dot-M4-D-D3c.js";import"./getRadiusAndStrokeWidthFromDot-iWXc3UEX.js";import"./useElementOffset-CEBQPOfc.js";import"./uniqBy-CN11yF73.js";import"./iteratee-CSiy3jc8.js";import"./Cross-BEWH4yZn.js";import"./Sector-B39pprSn.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
