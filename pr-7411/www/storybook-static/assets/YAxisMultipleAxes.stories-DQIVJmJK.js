import{R as t}from"./iframe-BGobxEKW.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-DeGZa5pQ.js";import{R as l}from"./zIndexSlice-Eu6i6ngN.js";import{C as x}from"./ComposedChart-DjHiGhAq.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BVpB16G5.js";import{L as a}from"./Line-KzHLSfQZ.js";import{X as c}from"./XAxis-BN4bg1E5.js";import{T as g}from"./Tooltip-IDbbWrV0.js";import"./preload-helper-Dp1pzeXC.js";import"./get-HFqD6QO2.js";import"./CartesianAxis-DURAvNcs.js";import"./Layer-CV9gulhQ.js";import"./resolveDefaultProps-By8puQcs.js";import"./Text-BJ-a4d_f.js";import"./DOMUtils-DfSC9jQB.js";import"./isWellBehavedNumber-MDkpYIMl.js";import"./Label-DtowT6Ci.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BPvrQw9D.js";import"./index-DrKSi3Lf.js";import"./index-rlB0YW8A.js";import"./types-C3BGlWt6.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Cvi-Ak0I.js";import"./immer-xIHjc1iX.js";import"./RechartsWrapper-BSKC20h7.js";import"./index-DIRQu93S.js";import"./index-BKAHzbDT.js";import"./axisSelectors-DVavIP4x.js";import"./d3-scale-CR1rssfZ.js";import"./string-B6fdYHAA.js";import"./CartesianChart-M1doCtPT.js";import"./chartDataContext-CbiQTE76.js";import"./CategoricalChart-DpAQLfUl.js";import"./tooltipContext-B8ZAl12B.js";import"./AnimatedItems-D2o6LGbd.js";import"./useAnimationId-Q5RNzbJv.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-fEK7HoKB.js";import"./ActiveShapeUtils-CpkaJLOn.js";import"./RegisterGraphicalItemId-DzMyHwfr.js";import"./ErrorBarContext-CDOOklnh.js";import"./GraphicalItemClipPath-CnUHFn7e.js";import"./SetGraphicalItem-DJfCNytO.js";import"./getZIndexFromUnknown-BLKjt2V6.js";import"./graphicalItemSelectors-CWW8cA9B.js";import"./Curve-DlsAp4d1.js";import"./step-DH6ooie3.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BB52StyY.js";import"./Dot-UipfwxJ_.js";import"./getRadiusAndStrokeWidthFromDot-Bt-t8NsX.js";import"./useElementOffset-DNdtPX45.js";import"./uniqBy-BThSMkgd.js";import"./iteratee-DFK6dMUl.js";import"./Cross-C4Ll_PXx.js";import"./Sector-CkilBTnh.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)};var m,s,n;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Yt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Yt as __namedExportsOrder,Ct as default};
