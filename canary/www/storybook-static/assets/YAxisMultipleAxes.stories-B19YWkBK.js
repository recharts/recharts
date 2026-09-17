import{R as t}from"./iframe-tVU98U3S.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-Cz8LA1zT.js";import{R as l}from"./zIndexSlice-CyBuhAxg.js";import{C as x}from"./ComposedChart-DMW4n_nS.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CCIVP38p.js";import{L as a}from"./Line-DB7R10NU.js";import{X as c}from"./XAxis-B6lV3McA.js";import{T as g}from"./Tooltip-DG72CCZo.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BiGv8_RF.js";import"./Text-BIcirXpx.js";import"./resolveDefaultProps-yCAU9vb4.js";import"./DOMUtils-ZXubKPMD.js";import"./isWellBehavedNumber-Cm_Hybde.js";import"./useId-Bhu2YHP8.js";import"./useBackwardsCompatibleTheme-BKS2Kex1.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-uxtsIBVq.js";import"./index-BHaD7xdN.js";import"./index-Dkxefu6-.js";import"./RechartsWrapper-B6c-k2Ww.js";import"./axisSelectors-Dk0RXaf-.js";import"./throttle-7FDSZAP-.js";import"./d3-scale-DsWe6xo3.js";import"./index-D5U9ICSu.js";import"./index-CelAevGI.js";import"./renderedTicksSlice-B6OJ4cSv.js";import"./index-Dkiks_wh.js";import"./CartesianAxis-BOF0DDEi.js";import"./Layer-BI456J7x.js";import"./types-B3--bUgQ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-cRl5-qnH.js";import"./chartDataContext-gF0asL1b.js";import"./CategoricalChart-ZVxjTQBd.js";import"./AnimatedItems-CqlhlM_R.js";import"./useAnimationId-3DY0RP1D.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DmTy6SeT.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-D132qIUj.js";import"./tooltipContext-BvoYRQ7S.js";import"./RegisterGraphicalItemId-BUrw94Fl.js";import"./ErrorBarContext-D5CP1D9F.js";import"./GraphicalItemClipPath-DLKqhYTd.js";import"./SetGraphicalItem-BAgFstOS.js";import"./getZIndexFromUnknown-C14KKimr.js";import"./useGraphicalItemIdentity-BYgYeKaf.js";import"./Curve-Ba9QZAHb.js";import"./step-BPWa_HmE.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DterfL9t.js";import"./Dot-B9zwDON4.js";import"./getRadiusAndStrokeWidthFromDot-Cld96GCx.js";import"./useElementOffset-Bhj0sPEh.js";import"./uniqBy-C2Zh7Teh.js";import"./iteratee-BRu2ejZj.js";import"./Cross-BmhU8c99.js";import"./Sector-B8MOhbqA.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
