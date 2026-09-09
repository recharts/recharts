import{R as t}from"./iframe-DOP-jAxw.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-Db4GFYrx.js";import{R as l}from"./zIndexSlice-iZLT4mgM.js";import{C as x}from"./ComposedChart-Cja5a53J.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-NplYj0H8.js";import{L as a}from"./Line-PilCUCgO.js";import{X as c}from"./XAxis-DUVFq7Gr.js";import{T as g}from"./Tooltip-QnPg_YT4.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BQxh1muY.js";import"./Text-BM4OLvWb.js";import"./resolveDefaultProps-C42OrRbv.js";import"./DOMUtils-hJnM7D4i.js";import"./isWellBehavedNumber-aeEmpyhq.js";import"./useId-DriqVEjQ.js";import"./useBackwardsCompatibleTheme-lpZr1fce.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CERsRXD7.js";import"./index-CCuF4-CL.js";import"./index-zAmCVOdn.js";import"./RechartsWrapper-Q1Jm5bKD.js";import"./axisSelectors-B_fxjvJU.js";import"./throttle-D7DQi97E.js";import"./d3-scale-DzSw552P.js";import"./index-bWqnTni2.js";import"./index-DtoMVaOV.js";import"./renderedTicksSlice-CNec-Jhj.js";import"./index-D_24CIxZ.js";import"./CartesianAxis-B-kSgpVr.js";import"./Layer-CsLYPkNS.js";import"./types-Bd_t3tQp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-PeHZ3LWB.js";import"./chartDataContext-CuKpjHMI.js";import"./CategoricalChart-CByA_zEa.js";import"./AnimatedItems-D09OLiJi.js";import"./useAnimationId-DvdWCYQm.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-wYU6J8iP.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DE-7R1j_.js";import"./tooltipContext-DiVLQMla.js";import"./RegisterGraphicalItemId-a8qjrkCj.js";import"./ErrorBarContext-3aBgegVQ.js";import"./GraphicalItemClipPath-BIJRZhz8.js";import"./SetGraphicalItem-BdxyruZp.js";import"./getZIndexFromUnknown-0PwpdMZF.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-B60cO35L.js";import"./Curve-_tgXMq7w.js";import"./step-DlXDgVUU.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BBWJLt59.js";import"./Dot-4jCuUfJZ.js";import"./getRadiusAndStrokeWidthFromDot-1Y9AsD59.js";import"./useElementOffset-xs82StaJ.js";import"./uniqBy-BH46jqOd.js";import"./iteratee-B8SE9EXK.js";import"./Cross-R415-PMR.js";import"./Sector-SOWdtCxs.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
