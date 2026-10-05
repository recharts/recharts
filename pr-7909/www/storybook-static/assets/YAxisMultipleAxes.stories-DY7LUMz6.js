import{R as t}from"./iframe-BjBEpprL.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CJHLeFgq.js";import{R as l}from"./zIndexSlice-D-PTjDwF.js";import{C as x}from"./ComposedChart-CZvD_f50.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DLPJoNlZ.js";import{L as a}from"./Line-c9VeJUIK.js";import{X as c}from"./XAxis-BDZhGE0-.js";import{T as g}from"./Tooltip-CvizmIaq.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BeKD4wFi.js";import"./Text-CUza6yot.js";import"./resolveDefaultProps-B9MstDaw.js";import"./DOMUtils-Bj0yZBJ3.js";import"./isWellBehavedNumber-BCSUkdc1.js";import"./useId-ChOQ34QW.js";import"./useBackwardsCompatibleTheme-CUuvE6f4.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Dpvj1i9H.js";import"./index-CFgOxFQX.js";import"./index-BBITsrkq.js";import"./RechartsWrapper-CcICmPjO.js";import"./axisSelectors-DfmJjs-d.js";import"./throttle-NXQPRMgU.js";import"./d3-scale-CKCE33MR.js";import"./index-BaAr_1o8.js";import"./index-MYKE-65n.js";import"./renderedTicksSlice-1EW54Ol1.js";import"./index-DMF93B4y.js";import"./CartesianAxis--AnwAjfA.js";import"./Layer-vH_2ZCys.js";import"./types-DeKlgzSD.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-BrSdxCQq.js";import"./chartDataContext-D6HhxZlR.js";import"./CategoricalChart-CI19dNhZ.js";import"./AnimatedItems-BDzZfL3v.js";import"./useAnimationId-a8RjQG0_.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BTYoZZR8.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BcKWPZeO.js";import"./tooltipContext-BBDwv76s.js";import"./RegisterGraphicalItemId-CyOHhqL8.js";import"./ErrorBarContext-CQzClf2u.js";import"./GraphicalItemClipPath-EXC5I5vP.js";import"./SetGraphicalItem-CqlMG-ES.js";import"./getZIndexFromUnknown-BJcQbQ8C.js";import"./useGraphicalItemIdentity-BkQxsk2A.js";import"./dataEntryStyles-BcYkX4aj.js";import"./Curve-C8b-yzs0.js";import"./step-DdKwrL1k.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DYDQlTVO.js";import"./Dot-BYQ0G1Os.js";import"./getRadiusAndStrokeWidthFromDot-C3KEWMVy.js";import"./useElementOffset-vtz1m0Dx.js";import"./uniqBy-CsD2VMx9.js";import"./iteratee-tek0I0sc.js";import"./Cross-CyG2VKzL.js";import"./Sector-D2BbnGaa.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
