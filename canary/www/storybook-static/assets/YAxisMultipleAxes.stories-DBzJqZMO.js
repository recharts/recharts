import{R as t}from"./iframe-NSpsGxr3.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-s1ngqAL7.js";import{R as l}from"./zIndexSlice-CegrvH4P.js";import{C as x}from"./ComposedChart-BSbO4QCj.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BgATints.js";import{L as a}from"./Line-Di8fBUgO.js";import{X as c}from"./XAxis-DNhoou9P.js";import{T as g}from"./Tooltip-B-RcSTZK.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BIdOyJIr.js";import"./Text-BtwC4msG.js";import"./resolveDefaultProps-BlFb5h3I.js";import"./DOMUtils-CWTrI1E5.js";import"./isWellBehavedNumber-pwlbiGoO.js";import"./useId-BVXNnfLZ.js";import"./useBackwardsCompatibleTheme-C2Bmbb6o.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-C4urMDBy.js";import"./index-4AzzKt7j.js";import"./index-0HEoT-e5.js";import"./RechartsWrapper-DtJCjJYR.js";import"./axisSelectors-BkwFONEa.js";import"./throttle-oOh5DhdY.js";import"./d3-scale-C3gnRv6y.js";import"./index-BsIlyQNm.js";import"./index-DWO3hHqn.js";import"./renderedTicksSlice-DYxvbfog.js";import"./index-CYtbOF9C.js";import"./CartesianAxis-BwBDYPDu.js";import"./Layer-BnG363as.js";import"./types-Co_GWDov.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CvLKYupN.js";import"./chartDataContext-DJ-2f6vo.js";import"./CategoricalChart-Dg01q-nM.js";import"./AnimatedItems-BkT2_sP2.js";import"./useAnimationId-N_fuM4i0.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CmsXYr1b.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-pIseDvg-.js";import"./tooltipContext-B_PEljFz.js";import"./RegisterGraphicalItemId-wt0KspV9.js";import"./ErrorBarContext-CEiAdeUz.js";import"./GraphicalItemClipPath-CcSo6wES.js";import"./SetGraphicalItem-C1qAtScX.js";import"./getZIndexFromUnknown-BYBItVqo.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-MpFTBnWD.js";import"./Curve-CaqAetYK.js";import"./step-Drtb2meU.js";import"./path-DyVhHtw_.js";import"./ActivePoints-KPsJbcKk.js";import"./Dot-DjaeVWdC.js";import"./getRadiusAndStrokeWidthFromDot-DkEHurz6.js";import"./useElementOffset-DnaqijmP.js";import"./uniqBy-BO5ZjA6J.js";import"./iteratee-C2lnqyuZ.js";import"./Cross-CWXjWWCm.js";import"./Sector-DVA6c6ux.js";const Rt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
