import{R as t}from"./iframe-BjoWmD_2.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DcA2RCuj.js";import{R as l}from"./zIndexSlice-QxL2_XNr.js";import{C as x}from"./ComposedChart-CfdRjNXn.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-Ctulz8Zr.js";import{L as a}from"./Line-CzyvQYUG.js";import{X as c}from"./XAxis-D-7vKTCU.js";import{T as g}from"./Tooltip-GIBef5dA.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-Cqr17CGT.js";import"./Text-DoJy0Hms.js";import"./resolveDefaultProps-CRUAWeqy.js";import"./pageBackground-B2WnjK3P.js";import"./isWellBehavedNumber-BxmTrUsM.js";import"./useId-CxEr69Iu.js";import"./useBackwardsCompatibleTheme-lRDO5kA2.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DQXgAxZP.js";import"./index-BRU_7ROE.js";import"./index-rOX-JMdH.js";import"./RechartsWrapper-B-Xj9Vy5.js";import"./axisSelectors-CTjcoI_o.js";import"./throttle-h3rYfSBM.js";import"./d3-scale-kKJuS5hm.js";import"./index-Ctb1uOPb.js";import"./index-Cd4gA8VB.js";import"./renderedTicksSlice-9uvUqonz.js";import"./index-BiJeeMkw.js";import"./CartesianAxis-CuhpEa5Q.js";import"./Layer-BETohxRY.js";import"./types-CwctOhA4.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-ALqDRU4y.js";import"./chartDataContext-D2tEsWQI.js";import"./CategoricalChart-CU8xgSqQ.js";import"./activeStyles-pw12H8S5.js";import"./useAnimationId-CvgGu5_L.js";import"./dataEntryStyles-M6AZ3Vkx.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-uRJgPy0Q.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Ba7sfaWC.js";import"./tooltipContext-C1vSZW3p.js";import"./ErrorBarContext-hA9ACwOL.js";import"./GraphicalItemClipPath-CJpx4uWZ.js";import"./SetGraphicalItem-BNR-CUWR.js";import"./getZIndexFromUnknown-C-fRQ95f.js";import"./useGraphicalItemIdentity-D7aL1WKh.js";import"./Curve-Bi87Df9h.js";import"./step-DbGei3uZ.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CbXUnkX6.js";import"./Dot-CwvTlVWs.js";import"./getRadiusAndStrokeWidthFromDot-BXg1EUK6.js";import"./useElementOffset-CXh5WHLo.js";import"./uniqBy-BaadcAvx.js";import"./iteratee-B_XLmPV3.js";import"./Cross-DKdj81XQ.js";import"./Sector-BRxC4KNY.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
