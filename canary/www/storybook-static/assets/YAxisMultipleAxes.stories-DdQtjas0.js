import{R as t}from"./iframe-CUSfJVGy.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-cM-Or_OG.js";import{R as l}from"./zIndexSlice-DHvlitAO.js";import{C as x}from"./ComposedChart-hQ25gI1G.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DdYeBNOx.js";import{L as a}from"./Line-BkUDmjMa.js";import{X as c}from"./XAxis-93B4Nx5D.js";import{T as g}from"./Tooltip-CNt3xiQz.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CA5pDLh0.js";import"./Text-D1HNj6gm.js";import"./resolveDefaultProps-eB2rdyhX.js";import"./pageBackground-Cedpup01.js";import"./isWellBehavedNumber-BlhXGToZ.js";import"./useId-KB6j76rh.js";import"./useBackwardsCompatibleTheme-C4dzzNKp.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DS-kTeIC.js";import"./index-DM8acuEY.js";import"./index-BjrjF_sl.js";import"./dataEntryStyles-DaqIqY42.js";import"./axisSelectors-Ba-uagI8.js";import"./throttle-Dw_3NXl9.js";import"./d3-scale-B5gueGek.js";import"./CartesianAxis-DdmQm0Mb.js";import"./Layer-D3Rs15Eb.js";import"./types-CPjFjIqL.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DTIkQgMV.js";import"./index-cWSuCV9A.js";import"./index-aMAZnXxU.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DAlfJkzI.js";import"./index-BHb_Ppqj.js";import"./CartesianChart-CYmwXWF8.js";import"./chartDataContext-C8S7uA6r.js";import"./CategoricalChart-CCLAUHt0.js";import"./activeStyles-D0GvvJcq.js";import"./useAnimationId-5nMvsn6t.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-vSbPEONY.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-JeO-QszI.js";import"./tooltipContext-3r-229e7.js";import"./RegisterGraphicalItemId-Brr1oXEa.js";import"./ErrorBarContext-B4ne9aHr.js";import"./SetGraphicalItem-C-ccX4yH.js";import"./getZIndexFromUnknown-CLa-F4JY.js";import"./useEffectiveDataKey-CoJRTSM6.js";import"./omit-DzhfUKzn.js";import"./isArguments-yB-y1yaH.js";import"./Curve-CVDIysdN.js";import"./step-DHG-DUf8.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DGPkFg2Z.js";import"./Dot-CuTOnkdw.js";import"./getRadiusAndStrokeWidthFromDot-D3hEZZtv.js";import"./useElementOffset-DG-NqV_R.js";import"./uniqBy-_sTXg2vc.js";import"./iteratee-BWlFYs6V.js";import"./Cross-BlnG8QnV.js";import"./Sector-C18YqcZp.js";const Lt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
