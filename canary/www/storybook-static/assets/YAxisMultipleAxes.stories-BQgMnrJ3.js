import{R as t}from"./iframe-CpH4jn8g.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-D5kjy0nv.js";import{R as l}from"./zIndexSlice-CMsbRcVo.js";import{C as x}from"./ComposedChart-DZX4aRXt.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-B_M6vUB_.js";import{L as a}from"./Line-CTejxpOS.js";import{X as c}from"./XAxis-BqLLe0Cs.js";import{T as g}from"./Tooltip-2Sgew7i7.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DfDzGUS7.js";import"./CartesianAxis-lejBVVP2.js";import"./Layer-CpyyR4fH.js";import"./resolveDefaultProps-DGN954Kv.js";import"./Text-DxL0BXFO.js";import"./DOMUtils-BSMSB0a3.js";import"./isWellBehavedNumber-6OhSnnoK.js";import"./Label-BID2wGRS.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-FLcdyCMW.js";import"./index--z9jIKZg.js";import"./index-wpdvZnuB.js";import"./types-CDIAbI3v.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-D-wmUWoC.js";import"./immer-C21IJxSF.js";import"./RechartsWrapper-TUYhIbD6.js";import"./index-B6von4ou.js";import"./index-CB2lo7iV.js";import"./axisSelectors-Bq_vtAr0.js";import"./d3-scale-hekr18xW.js";import"./CartesianChart-BW_KV3Uo.js";import"./chartDataContext-CNUo9Q_N.js";import"./CategoricalChart-CJCbZaD2.js";import"./tooltipContext-CHsPQpje.js";import"./AnimatedItems-BjSZm7AL.js";import"./useAnimationId-DOUqN62f.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BETJzIFT.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DtM6eKjz.js";import"./RegisterGraphicalItemId-BwHF-Xvv.js";import"./ErrorBarContext-DQcN79r3.js";import"./GraphicalItemClipPath-CjdnX9P0.js";import"./SetGraphicalItem-BKY8M4LB.js";import"./getZIndexFromUnknown-Bv7SaV46.js";import"./graphicalItemSelectors-DfedSnqi.js";import"./Curve-2uMIoq2i.js";import"./step-COWbUyG4.js";import"./path-DyVhHtw_.js";import"./ActivePoints-9ROC9Lt_.js";import"./Dot-CxmB6f2U.js";import"./getRadiusAndStrokeWidthFromDot-BpydaN9S.js";import"./useElementOffset-FeBedyZd.js";import"./uniqBy-DybamGh7.js";import"./iteratee-D0Q2blRW.js";import"./Cross-Ci8qvtCb.js";import"./Sector-iVL0Cpd1.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
