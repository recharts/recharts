import{R as t}from"./iframe-8C24Tydd.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-jbouJBfL.js";import{R as l}from"./zIndexSlice-Dw4Oq4dL.js";import{C as x}from"./ComposedChart-B4z2qb51.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DVGMb1fc.js";import{L as a}from"./Line-CdXXfIAJ.js";import{X as c}from"./XAxis-CI8sx2Rv.js";import{T as g}from"./Tooltip-K9ArSWWb.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-D_2s_KcH.js";import"./Text-CBQ4JzNL.js";import"./resolveDefaultProps-jF8yDnYL.js";import"./ZIndexLayer-DlPMEPXU.js";import"./index-BZrrsPsq.js";import"./index-B9s4wujy.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-OkcN41hW.js";import"./throttle-BnR0knX4.js";import"./axisSelectors-wolYJBqC.js";import"./d3-scale-DhysOGqs.js";import"./CartesianAxis-CNwz3srm.js";import"./Layer-D45TlyFk.js";import"./types-BD1-xaIs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-pib7h8IS.js";import"./index-C0a8p3x4.js";import"./index-DTGVc3OM.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CN9elUVX.js";import"./index-DqK9E7FS.js";import"./fillDefinitions-DW2cY3tE.js";import"./CartesianChart-CGDUobj1.js";import"./chartDataContext-31zmIAvn.js";import"./CategoricalChart-Bwnqw4e-.js";import"./dataEntryStyles-XtYPtKfF.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DEd6ta5Q.js";import"./useAnimationId-CvLS5yyi.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CytN3lSp.js";import"./tooltipContext-DlcS1gLa.js";import"./ErrorBarContext-CfhLJDta.js";import"./activeStyles-D92_uiFB.js";import"./SetGraphicalItem-BzYY5Na5.js";import"./getZIndexFromUnknown-BAROIWne.js";import"./useEffectiveDataKey-DR3UcTsu.js";import"./omit-BSR9Vs8s.js";import"./isArguments-yB-y1yaH.js";import"./Curve-BP7tIwQM.js";import"./step-lTKWXilO.js";import"./path-DyVhHtw_.js";import"./ActivePoints-Dhsdw6YW.js";import"./Dot-BqqZJubD.js";import"./Symbols-CsqovMSS.js";import"./symbol-C5k6tAwY.js";import"./getRadiusAndStrokeWidthFromDot-B9BUEQWm.js";import"./useElementOffset-BHUchDOx.js";import"./uniqBy-ChjuKGB9.js";import"./iteratee-23TXNM0i.js";import"./Cross-D9n7s5p8.js";import"./Sector-CgvhDJu2.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
