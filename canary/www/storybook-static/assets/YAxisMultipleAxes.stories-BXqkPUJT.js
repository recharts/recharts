import{R as t}from"./iframe-CRWpOW02.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DHYidPrE.js";import{R as l}from"./zIndexSlice-BeAe48-I.js";import{C as x}from"./ComposedChart-CnCPKGvA.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BAP2Py6-.js";import{L as a}from"./Line-Ci7qyRY8.js";import{X as c}from"./XAxis-D1dQPR-6.js";import{T as g}from"./Tooltip-BgvFandc.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-C0mxneHa.js";import"./Text-159WNhne.js";import"./resolveDefaultProps-BGJ-s5wM.js";import"./pageBackground-CeS3kx1x.js";import"./isWellBehavedNumber-DnvCGmEU.js";import"./useId-ECIur30B.js";import"./useBackwardsCompatibleTheme-4poegSRB.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CE46bnfu.js";import"./index-CqqjX4mb.js";import"./index-BtZZPVlj.js";import"./axisSelectors-CEaTU0uL.js";import"./throttle-CYPAZ-oY.js";import"./d3-scale-d-dAzt7l.js";import"./CartesianAxis-BjJPyt3G.js";import"./Layer-CNbUO4cy.js";import"./types-VHH142lq.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-D6XZoNOx.js";import"./index-Br2LofN0.js";import"./index-D_MdTA2d.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-BIU9TwkO.js";import"./index-CqBbZHkF.js";import"./CartesianChart-BKIvGl2K.js";import"./chartDataContext-BIcAjQe6.js";import"./CategoricalChart-DHoPXZtk.js";import"./activeStyles-qMzt72fn.js";import"./useAnimationId-D92beKJG.js";import"./dataEntryStyles-BglHhD-H.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-5Ov4WxTU.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CJ3uGwKk.js";import"./tooltipContext-CRdtwP7J.js";import"./ErrorBarContext-Bq-5TM9D.js";import"./GraphicalItemClipPath-Baz6IWCm.js";import"./SetGraphicalItem-CHlvRlHN.js";import"./getZIndexFromUnknown-D0lnl5dW.js";import"./useEffectiveDataKey-BpgvrKzX.js";import"./Curve-DSopOTRT.js";import"./step-VbmBsaRU.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CSFa2gcu.js";import"./Dot-CX4mMU05.js";import"./getRadiusAndStrokeWidthFromDot-Cla7tf7Y.js";import"./useElementOffset-B4u2V-V0.js";import"./uniqBy-hsCh7ews.js";import"./iteratee-B8ts1Ce8.js";import"./Cross-Du1xWbjF.js";import"./Sector-WsHTbLWJ.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
