import{R as t}from"./iframe-D_UL8fjK.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-Dd6vSYjv.js";import{R as l}from"./zIndexSlice-B8f2hTRD.js";import{C as x}from"./ComposedChart-CDUUKafl.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-v6D2yd4P.js";import{L as a}from"./Line-DkjoUMo4.js";import{X as c}from"./XAxis-CazN9wRX.js";import{T as g}from"./Tooltip-DXoBql9S.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-efHFABNJ.js";import"./Text-bynAhtfX.js";import"./resolveDefaultProps-Byb1qXS0.js";import"./DOMUtils-y3mUx3tY.js";import"./isWellBehavedNumber-iC5WXlxZ.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CzKUyCGh.js";import"./index-DNxkBCVe.js";import"./index-h-g40TxG.js";import"./RechartsWrapper-DnUEvc6-.js";import"./index-DmYZtYvi.js";import"./index-Bs4KGwv6.js";import"./throttle-EbH1y2w7.js";import"./axisSelectors-BNsSlswM.js";import"./d3-scale-5WraxJWy.js";import"./renderedTicksSlice-DZH5dqFY.js";import"./CartesianAxis-BrHAq2Nx.js";import"./Layer-DErQ8LWn.js";import"./types-D8jMk9wl.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-DF-Xzw8d.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-C-1LzzB9.js";import"./chartDataContext-BZOn_6n4.js";import"./CategoricalChart-CtOYQTRo.js";import"./tooltipContext-C6DZzLkn.js";import"./AnimatedItems-ZBM6OyTb.js";import"./useAnimationId-1dDzdKc5.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Bpl55SbL.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-JCOSF6Qb.js";import"./RegisterGraphicalItemId-CO_dSij1.js";import"./ErrorBarContext-MTEcEnWo.js";import"./graphicalItemIdentity-DUedU3Gi.js";import"./SetGraphicalItem-Bv1waFvM.js";import"./getZIndexFromUnknown-DzPyoXdE.js";import"./graphicalItemSelectors-DSFRQ2mt.js";import"./Curve-VdPw19wo.js";import"./step-DBWLHasU.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BrIz1_y9.js";import"./Dot-CPC6zP8q.js";import"./getRadiusAndStrokeWidthFromDot-DmFKBFPd.js";import"./useElementOffset-He-jtgi_.js";import"./uniqBy-C-e68djf.js";import"./iteratee-CqgkHJdQ.js";import"./Cross-Q8gPv05a.js";import"./Sector-D48s0Dkz.js";const vt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
