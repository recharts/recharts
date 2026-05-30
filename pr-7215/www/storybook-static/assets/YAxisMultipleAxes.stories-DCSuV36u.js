import{c as t}from"./iframe-D2N5XcPI.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-BOjzt3yv.js";import{g as l}from"./zIndexSlice-RoIFDUUO.js";import{C as x}from"./ComposedChart-Blurisz3.js";import{p as c}from"./Page-DPte-9pC.js";import{B as o}from"./Bar-BzleUxkz.js";import{L as a}from"./Line-CeIcMNSX.js";import{X as A}from"./XAxis-CXIGR-DS.js";import{T as g}from"./Tooltip-ia8rN-UI.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DEEjpUoM.js";import"./CartesianAxis-By2KL9D2.js";import"./Layer-BVkY8iZh.js";import"./resolveDefaultProps-Bi-9DeEE.js";import"./Text-S_HdFT4_.js";import"./DOMUtils-i2_cO7II.js";import"./isWellBehavedNumber-TNE8-lTU.js";import"./Label-Cnng5bNL.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-C0bDYuES.js";import"./index-DnYw-Xim.js";import"./index-B5AuwgDI.js";import"./types-O2bCi3CM.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-uobIs_9Z.js";import"./immer-DD2jh41l.js";import"./RechartsWrapper-CuZS2kGu.js";import"./index-mVudWXdT.js";import"./index-BhCsKlJc.js";import"./axisSelectors-CRrbvK-r.js";import"./d3-scale-BsFKuCR3.js";import"./string-yHBgcFlJ.js";import"./CartesianChart-1QuMF_W-.js";import"./chartDataContext-CC_X3BVp.js";import"./CategoricalChart-BLp4HgeB.js";import"./tooltipContext-iUA5xi4R.js";import"./AnimatedItems-BoZ9ojjB.js";import"./useAnimationId-DqQ-6Bs7.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BhEukgum.js";import"./ActiveShapeUtils-hlQp3kXL.js";import"./RegisterGraphicalItemId-B3-aUvfY.js";import"./ErrorBarContext-AJvViA7S.js";import"./GraphicalItemClipPath-C443LB5B.js";import"./SetGraphicalItem-Bb7tRa3R.js";import"./getZIndexFromUnknown-8QqgClJz.js";import"./graphicalItemSelectors-CEu_GPOk.js";import"./Curve-QwKIY61o.js";import"./step-CVnlc3Ua.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DlrEajwU.js";import"./Dot-CsqPwlDd.js";import"./getRadiusAndStrokeWidthFromDot-DOJOfu6K.js";import"./useElementOffset-3-y_yS5D.js";import"./uniqBy-COBWCQTb.js";import"./iteratee-DQH7eBbd.js";import"./Cross-BRROJ2Jl.js";import"./Sector-CCh5_Yh6.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:c},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(A,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
