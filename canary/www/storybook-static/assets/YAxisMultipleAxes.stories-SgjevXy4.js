import{R as t}from"./iframe-DFAuwNet.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-WC2qqL6y.js";import{R as l}from"./zIndexSlice-BwFDZpKd.js";import{C as x}from"./ComposedChart-q9x7DXH3.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BAPmjoQU.js";import{L as a}from"./Line-Ck4HwCGm.js";import{X as c}from"./XAxis-DCGzkxjE.js";import{T as g}from"./Tooltip-zZkLTzqk.js";import"./preload-helper-Dp1pzeXC.js";import"./get-Bfs700CB.js";import"./CartesianAxis-DrCLR5OG.js";import"./Layer-pSJwYJA9.js";import"./resolveDefaultProps-DvMn3fRK.js";import"./Text-D4VTZiA_.js";import"./DOMUtils-Cjgkd6jo.js";import"./isWellBehavedNumber-DOBIUQY2.js";import"./Label-BiYGQ8wu.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CzNUPV7f.js";import"./index-D5vqZcHk.js";import"./index-XHGddEUW.js";import"./types-CKCIF696.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-C1GYWdqG.js";import"./immer-D4TP_Tl0.js";import"./RechartsWrapper-B5EEfMW7.js";import"./index-Bdvp9zfN.js";import"./index-CzPHYk5P.js";import"./axisSelectors-rO5_sQtu.js";import"./d3-scale-Bflz5-05.js";import"./string-B6fdYHAA.js";import"./CartesianChart-DsW2iWMz.js";import"./chartDataContext-qOKnmm5w.js";import"./CategoricalChart-F9q04IPB.js";import"./tooltipContext-ClcTqTcr.js";import"./AnimatedItems-BG4KszHn.js";import"./useAnimationId-BPtcTRZO.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-VpINru7-.js";import"./ActiveShapeUtils-CrgbqME0.js";import"./RegisterGraphicalItemId-CzkMeR6l.js";import"./ErrorBarContext-BoGExbnB.js";import"./GraphicalItemClipPath-DXkB_bbX.js";import"./SetGraphicalItem-CYy4gzAa.js";import"./getZIndexFromUnknown-CgfT03cm.js";import"./graphicalItemSelectors-DvYTlKS4.js";import"./Curve-qtCfGxfc.js";import"./step-BT8dCn-b.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BsPL6iaG.js";import"./Dot-B8AKLV5l.js";import"./getRadiusAndStrokeWidthFromDot-rwyYVhSm.js";import"./useElementOffset-Cr66zOZa.js";import"./uniqBy-BxbvDsAq.js";import"./iteratee-BYBBNzGi.js";import"./Cross-DEUDd6Yc.js";import"./Sector-6Z0dG1em.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
