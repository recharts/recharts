import{R as t}from"./iframe-i00IWHKS.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-GmTTpsne.js";import{R as l}from"./zIndexSlice-CSTmF3GT.js";import{C as x}from"./ComposedChart-CYmWoyp6.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-B9oXQd8E.js";import{L as a}from"./Line-CdspcwSK.js";import{X as c}from"./XAxis-BA_nHJl6.js";import{T as g}from"./Tooltip-Dl1AigS9.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-C4qEKDUL.js";import"./Text-CB-MiyEA.js";import"./resolveDefaultProps-BglOfK6k.js";import"./pageBackground-e_M9BLsj.js";import"./ZIndexLayer-C49fDhwr.js";import"./index-CbwirX63.js";import"./index-CPuGrPsk.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-krKyM9nF.js";import"./throttle-VVsSQFBk.js";import"./axisSelectors-CrzJ0No2.js";import"./d3-scale-fdx5emX3.js";import"./CartesianAxis-EZZmQ9Qc.js";import"./Layer-DmbMEBZx.js";import"./types-BWYuSzJG.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DZPzUM4n.js";import"./index-Cdxh422T.js";import"./index-CocutCkO.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-HLZ5nOEz.js";import"./index-Cpb1euZl.js";import"./CartesianChart-cAT52TQ5.js";import"./ZIndexPortal-DfOIGQM0.js";import"./CategoricalChart-CvwnoS-7.js";import"./LabelList-C1CnC_KK.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BPmgsHsk.js";import"./useAnimationId-COvKagcg.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CYbFkl4W.js";import"./tooltipContext-DNhcr-uc.js";import"./dataEntryStyles-BgF2g0Ub.js";import"./ErrorBarContext-DjefL6kX.js";import"./activeStyles-DhZp3R57.js";import"./SetGraphicalItem-Cn81nTMh.js";import"./getZIndexFromUnknown-YHqU1bKG.js";import"./useEffectiveDataKey-Cy_6W0Je.js";import"./omit-Cb5vh7qN.js";import"./isArguments-yB-y1yaH.js";import"./Curve-hlUyfFhF.js";import"./step-fjQhdc2y.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CbH5u3fp.js";import"./Dot-kJUEeAuC.js";import"./Symbols-DazPmVzQ.js";import"./symbol-BISg9N3x.js";import"./getRadiusAndStrokeWidthFromDot-Ce2t7rlw.js";import"./useElementOffset-Df6LRa99.js";import"./uniqBy-3FD8HgkX.js";import"./iteratee-B5sUlY-H.js";import"./Cross-CMaQneCB.js";import"./Sector-CesvKHcg.js";const Lt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Tt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Tt as __namedExportsOrder,Lt as default};
