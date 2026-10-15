import{R as t}from"./iframe-Bcbj5Yvj.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-D0HGn8m-.js";import{R as l}from"./zIndexSlice-BbtTmnct.js";import{C as x}from"./ComposedChart-DVpq_Un2.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-B8fFH8Lf.js";import{L as a}from"./Line-Ba2WmDpW.js";import{X as c}from"./XAxis-BGoibDnX.js";import{T as g}from"./Tooltip-DImzhYnu.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-K9FSTyve.js";import"./Text-DXJV-9ud.js";import"./resolveDefaultProps-C9cavZl8.js";import"./pageBackground-BH8UHhL6.js";import"./isWellBehavedNumber-Blk-fUEv.js";import"./useId-B-rxwJkk.js";import"./useBackwardsCompatibleTheme-5iZeYqfO.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CyylKyYl.js";import"./index-DsYIiLvH.js";import"./index-G8y4OPnu.js";import"./axisSelectors-Bf3Ac7bJ.js";import"./throttle-1wXsTVJX.js";import"./d3-scale-CzxKj8Wi.js";import"./CartesianAxis-D8X_N5Aa.js";import"./Layer-DpGUUMWf.js";import"./types-CJ1XacmQ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BgIJtUaM.js";import"./index-8ad9jMOO.js";import"./index-Dr8QNULI.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-JEGbB27w.js";import"./index-D1z8RJDy.js";import"./CartesianChart-63QBJCK9.js";import"./chartDataContext-C1nJ8SNU.js";import"./CategoricalChart-8MHh-in3.js";import"./activeStyles-MDW24FXq.js";import"./useAnimationId-Bk7rAd-H.js";import"./dataEntryStyles-BUYkc4Iu.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C1N2Ym6v.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-C7GChdzB.js";import"./tooltipContext-BkwGkHZl.js";import"./ErrorBarContext-DDwPy9nt.js";import"./GraphicalItemClipPath-Ch9DqqLY.js";import"./SetGraphicalItem-a6aphxRl.js";import"./getZIndexFromUnknown-BtVWBbXg.js";import"./useEffectiveDataKey-D3HkyWZy.js";import"./Curve-DQG70g8F.js";import"./step-BVuNFWjf.js";import"./path-DyVhHtw_.js";import"./ActivePoints-Byjchu2B.js";import"./Dot-4JIe_qSe.js";import"./getRadiusAndStrokeWidthFromDot-r0umV2Vo.js";import"./useElementOffset-bqrOzjTl.js";import"./uniqBy-DWa61rJJ.js";import"./iteratee-BELjj_Tc.js";import"./Cross-Bcp7i6Mp.js";import"./Sector-D8HfX_lG.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
