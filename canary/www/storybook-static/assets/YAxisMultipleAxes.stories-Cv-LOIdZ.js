import{R as t}from"./iframe-Cy0y2ns8.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CsAJfuiU.js";import{R as l}from"./zIndexSlice-DIpYS2pc.js";import{C as x}from"./ComposedChart-CZFSAvco.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DTdmGkz3.js";import{L as a}from"./Line-CTCpze3L.js";import{X as c}from"./XAxis-I6ByZryQ.js";import{T as g}from"./Tooltip-EYcLPG4A.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-VahG2YbD.js";import"./Text-CR6ssGu_.js";import"./resolveDefaultProps-W2SA8EIl.js";import"./pageBackground-C3xeFLUy.js";import"./isWellBehavedNumber-BHC-xMw7.js";import"./useId-DoEOHgvO.js";import"./useBackwardsCompatibleTheme-DoDvRsUd.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DfeIwWxW.js";import"./index-Cannfx1n.js";import"./index-MdLyaQUy.js";import"./axisSelectors-B794UmHN.js";import"./throttle-GHjNdOLX.js";import"./d3-scale-Bptb5_HU.js";import"./CartesianAxis-DZCowAwb.js";import"./Layer-Dt1c85pW.js";import"./types-es-lSoS7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CcSlQNqm.js";import"./index-ed9S2gc_.js";import"./index-DMDvJQSi.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-tnntysZI.js";import"./index-z8Y8cGgG.js";import"./CartesianChart-CkZRPVAF.js";import"./chartDataContext-_Lx0KL5V.js";import"./CategoricalChart-C4X2uKz7.js";import"./activeStyles-Cnxc9Yt_.js";import"./useAnimationId-DaE5gtmK.js";import"./dataEntryStyles-D42MsVUE.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BAcsN_iB.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-XGy6Fbre.js";import"./tooltipContext-GJ6dETi4.js";import"./ErrorBarContext-Cwi5XQfL.js";import"./GraphicalItemClipPath-ANLjpQPo.js";import"./SetGraphicalItem-jtlbfoJE.js";import"./getZIndexFromUnknown-DrdS4TKg.js";import"./useEffectiveDataKey-BEJg52qX.js";import"./Curve-5eCLnpsK.js";import"./step-aUPxj0fJ.js";import"./path-DyVhHtw_.js";import"./ActivePoints-B8MUv4SH.js";import"./Dot-BhegBlK5.js";import"./getRadiusAndStrokeWidthFromDot-BVS64Mww.js";import"./useElementOffset-sgSlwsLC.js";import"./uniqBy-9BG5xD31.js";import"./iteratee-D9gJLSIg.js";import"./Cross-c7XLk4es.js";import"./Sector-CnsMqGLC.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
