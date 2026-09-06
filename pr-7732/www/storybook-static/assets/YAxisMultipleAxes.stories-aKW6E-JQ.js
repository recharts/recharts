import{R as t}from"./iframe-DEExurmE.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-jXESqwAs.js";import{R as l}from"./zIndexSlice-BGV3a2M2.js";import{C as x}from"./ComposedChart-CdFnUaqK.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-FdTuVtpl.js";import{L as a}from"./Line-CmBtfFLK.js";import{X as c}from"./XAxis-DlU7zrsS.js";import{T as g}from"./Tooltip-BmufVtsv.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BoesgQTr.js";import"./Text-DlL7Kh0g.js";import"./resolveDefaultProps-BcKMyFDK.js";import"./DOMUtils-DiHJPz-Q.js";import"./isWellBehavedNumber-h6OQjVbf.js";import"./useId-BEPz2e1p.js";import"./useBackwardsCompatibleTheme-DNIYdIZM.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DsOTHSzU.js";import"./index-D05g3ibA.js";import"./index-DSqfHUGS.js";import"./RechartsWrapper-BERQZkXB.js";import"./axisSelectors-B3HyN164.js";import"./throttle-D7dQEHKF.js";import"./d3-scale-Bb2cyBTe.js";import"./index-D4ICS-Fc.js";import"./index-BzthVEqH.js";import"./renderedTicksSlice-By6AytUE.js";import"./index-DRipnBKQ.js";import"./CartesianAxis-BAF_XLat.js";import"./Layer-Bb6nRq1I.js";import"./types-D0GbM314.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-Cucr_Qkz.js";import"./chartDataContext-lhhxrqB4.js";import"./CategoricalChart-DNtGewyR.js";import"./AnimatedItems-BsILchAj.js";import"./useAnimationId-BnI4HmeK.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CVS7WkKL.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CrsX7S50.js";import"./tooltipContext-BEl9WPp6.js";import"./RegisterGraphicalItemId-CZwjt8x7.js";import"./ErrorBarContext-DvbJvmom.js";import"./GraphicalItemClipPath-BG1GR_PS.js";import"./SetGraphicalItem-DexHK8W5.js";import"./getZIndexFromUnknown-Bhd8QCLO.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-Cek_l9p3.js";import"./Curve-CHcEH7zY.js";import"./step-DlHRUAQd.js";import"./path-DyVhHtw_.js";import"./ActivePoints-3uqjFngE.js";import"./Dot-BMqykIFL.js";import"./getRadiusAndStrokeWidthFromDot-Qb57Gwlz.js";import"./useElementOffset-Docjled6.js";import"./uniqBy-DCAZgwHa.js";import"./iteratee-2zI7IteD.js";import"./Cross-B0Tl7X5K.js";import"./Sector-D3xBaB61.js";const Rt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
}`,...(p=(s=e.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const Lt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Lt as __namedExportsOrder,Rt as default};
