import{R as t}from"./iframe-D6azDvqV.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-ltpxfQ5a.js";import{R as l}from"./zIndexSlice-CJI37Eji.js";import{C as x}from"./ComposedChart-CmwmgTBj.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-ur1LcZV2.js";import{L as a}from"./Line-DXVG3ibe.js";import{X as c}from"./XAxis-Cf0m1xXe.js";import{T as g}from"./Tooltip-DlLeUOLM.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-Bq-FSxS9.js";import"./Text-7Emw6cxV.js";import"./resolveDefaultProps-MMJ4Hspi.js";import"./DOMUtils-ChR8PpsJ.js";import"./isWellBehavedNumber-zgmweQfq.js";import"./useId-D_J3zHys.js";import"./useBackwardsCompatibleTheme-Btt6Zxb8.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BMP0BbGV.js";import"./index-De2T6Rdx.js";import"./index-CHbhJf8u.js";import"./RechartsWrapper-CvaooULl.js";import"./index-8WeBRwf8.js";import"./index-CdRGzAoJ.js";import"./throttle-9sEg-owe.js";import"./axisSelectors-Cuma3wLU.js";import"./d3-scale-BukzO1yu.js";import"./renderedTicksSlice-CP9ELeUi.js";import"./CartesianAxis-CnIKHaJW.js";import"./Layer-Dd-QkUnw.js";import"./types-ArXcJt3v.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DKfnJK9b.js";import"./chartDataContext-E0nEwP5U.js";import"./CategoricalChart-BwNlWuS2.js";import"./AnimatedItems-CFHSF17T.js";import"./useAnimationId-B0HxjIs3.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D0LhkaJ7.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-nknSwnl4.js";import"./tooltipContext-BWhq59KA.js";import"./RegisterGraphicalItemId-utzXF_HC.js";import"./ErrorBarContext-CS85xpKd.js";import"./GraphicalItemClipPath-CEHJTCek.js";import"./SetGraphicalItem-CIh432wm.js";import"./getZIndexFromUnknown-CE3b063y.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-T55zgDEk.js";import"./Curve-BtvAXlb-.js";import"./step-BjTVn7hc.js";import"./path-DyVhHtw_.js";import"./ActivePoints-D_5kSOug.js";import"./Dot-DipyiptT.js";import"./getRadiusAndStrokeWidthFromDot-D9uGtCD-.js";import"./useElementOffset-rfYS5NLv.js";import"./uniqBy-Bxq63F-T.js";import"./iteratee-CnoSjSAp.js";import"./Cross-CIiy--iG.js";import"./Sector-Ck0QgXZH.js";const Mt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(n)};var m,s,p;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(s=e.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const Rt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Rt as __namedExportsOrder,Mt as default};
