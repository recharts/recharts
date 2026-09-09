import{R as t}from"./iframe-DsVopAcH.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-HRdYePVo.js";import{R as l}from"./zIndexSlice-CGOHGuEy.js";import{C as x}from"./ComposedChart-BQuW28P0.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CfcIxZIx.js";import{L as a}from"./Line-BldwsFH2.js";import{X as c}from"./XAxis-BseTd926.js";import{T as g}from"./Tooltip-Kzk8AT7a.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-yfckENu2.js";import"./Text-nN9fGOPh.js";import"./resolveDefaultProps-BHrKsPc_.js";import"./DOMUtils-DoArDhDK.js";import"./isWellBehavedNumber-Br_jDsOR.js";import"./useId-B3ZiYYeF.js";import"./useBackwardsCompatibleTheme-CGfGQXHh.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D4yIu8AC.js";import"./index-BVvb2y__.js";import"./index-CFv1WTge.js";import"./RechartsWrapper-BRE0A59j.js";import"./axisSelectors-Dgut4uty.js";import"./throttle-BobbsZsr.js";import"./d3-scale-Eru_6FDY.js";import"./index-Ds1bCQEW.js";import"./index-B91uvtzr.js";import"./renderedTicksSlice-C8E6fsP2.js";import"./index-C4MX6gyH.js";import"./CartesianAxis-DUwX43Tg.js";import"./Layer-BiKMlTZw.js";import"./types-BimouhM4.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-B1PZqYEM.js";import"./chartDataContext-C5PzVTiP.js";import"./CategoricalChart-Cry5pYjh.js";import"./AnimatedItems-Brc7OfV1.js";import"./useAnimationId-C2i6ANfU.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CEek0_It.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BltEi4et.js";import"./tooltipContext-BsDKMEJx.js";import"./RegisterGraphicalItemId-BpLRWLUo.js";import"./ErrorBarContext-BW9eyXTq.js";import"./GraphicalItemClipPath-5LNoh5eI.js";import"./SetGraphicalItem-DoTInfhC.js";import"./getZIndexFromUnknown-BGKgQaLh.js";import"./useGraphicalItemIdentity---g9lV2H.js";import"./Curve-wbgCoDzv.js";import"./step-B5nwCRak.js";import"./path-DyVhHtw_.js";import"./ActivePoints-D3ORl2JH.js";import"./Dot-kLE6mRv4.js";import"./getRadiusAndStrokeWidthFromDot-BIVN16ui.js";import"./useElementOffset-DrtLAhWV.js";import"./uniqBy-CsD-mN15.js";import"./iteratee-B1hggmL5.js";import"./Cross-CvLBu0bo.js";import"./Sector-sT_8yuZO.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
