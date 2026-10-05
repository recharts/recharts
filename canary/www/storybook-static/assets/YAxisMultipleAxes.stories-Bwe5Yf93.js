import{R as t}from"./iframe-BO6kNEfQ.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-Bpx19asJ.js";import{R as l}from"./zIndexSlice-CSvwJ_UT.js";import{C as x}from"./ComposedChart-BIhV4Cn8.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BCNHGISt.js";import{L as a}from"./Line-By4A7qsj.js";import{X as c}from"./XAxis-DUMRPyWG.js";import{T as g}from"./Tooltip-BJ6ncSEb.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-ktTcBfs2.js";import"./Text-CvDq8Z5Q.js";import"./resolveDefaultProps-DeeWTLmP.js";import"./DOMUtils-DjzhJzRg.js";import"./isWellBehavedNumber-B-Ulh-Re.js";import"./useId-CAIxAqit.js";import"./useBackwardsCompatibleTheme-DwFWyF9F.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BVG745mx.js";import"./index-C9e-3BIk.js";import"./index-CAnCLEru.js";import"./RechartsWrapper-BjhorxtA.js";import"./axisSelectors-clIGt-1m.js";import"./throttle-CC5fq1IH.js";import"./d3-scale-B89J0uLC.js";import"./index-CTBq7QCd.js";import"./index-BiTwoYeC.js";import"./renderedTicksSlice-CyXD3owy.js";import"./index-DGFWSvO2.js";import"./CartesianAxis-DkQVUKnt.js";import"./Layer-DAnsZuJj.js";import"./types-CrvIZc3a.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DbU3p1bm.js";import"./chartDataContext-C8PMDwYi.js";import"./CategoricalChart-BBSMzdqi.js";import"./AnimatedItems-FM3uBbR2.js";import"./useAnimationId-NFss7X44.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-bQ1U5Rvt.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CRw266nd.js";import"./tooltipContext-C49m0VKq.js";import"./RegisterGraphicalItemId-DXmwJq0A.js";import"./ErrorBarContext-DAb2_Ge3.js";import"./GraphicalItemClipPath-CqCtj_pv.js";import"./SetGraphicalItem-CMnburaU.js";import"./getZIndexFromUnknown-WTg4YCq7.js";import"./useGraphicalItemIdentity-BOcRclg4.js";import"./dataEntryStyles-DKRdmVZc.js";import"./Curve-hgySA8iE.js";import"./step-BjM5lwd1.js";import"./path-DyVhHtw_.js";import"./ActivePoints--BVAgljg.js";import"./Dot-Bps0tpeZ.js";import"./getRadiusAndStrokeWidthFromDot-TV6VUSJm.js";import"./useElementOffset-Bows1p5H.js";import"./uniqBy-QqkFbTHY.js";import"./iteratee-CYMuw_Xv.js";import"./Cross-DDTRSnDt.js";import"./Sector-CsR_fyCv.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Lt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Lt as __namedExportsOrder,Rt as default};
